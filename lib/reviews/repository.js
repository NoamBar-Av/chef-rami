import "server-only";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createServiceSupabaseClient } from "@/lib/supabase/server";
import { hasSupabaseServerEnv } from "@/lib/env";
import { parseImageUrls, serializeImageUrls } from "@/lib/reviews/imageUrls";

const REVIEW_FIELDS = "id,name,phone,event_type,review_text,rating,image_url,status,created_at";
const LOCAL_REVIEWS_FILE = path.join(process.cwd(), "data", "reviews.local.json");
const LOCAL_UPLOADS_DIR = path.join(process.cwd(), "public", "reviews-uploads");

function normalizeReview(row) {
  const imageUrls = parseImageUrls(row?.image_url);
  return {
    ...row,
    image_urls: imageUrls,
    image_url: row?.image_url ?? null,
  };
}

export async function createReview(reviewData) {
  const payload = {
    name: reviewData.name,
    phone: reviewData.phone ?? "לא צוין",
    event_type: reviewData.event_type,
    review_text: reviewData.review_text,
    rating: Number.isFinite(Number(reviewData.rating)) ? Number(reviewData.rating) : 5,
    status: reviewData.status ?? "pending",
    image_url: serializeImageUrls(reviewData.image_urls ?? (reviewData.image_url ? [reviewData.image_url] : [])),
  };

  if (!hasSupabaseServerEnv()) {
    const localReviews = await readLocalReviews();
    const created = normalizeReview({
      id: `local-${Date.now()}-${cryptoRandomId()}`,
      ...payload,
      created_at: new Date().toISOString(),
    });
    localReviews.unshift(created);
    await writeLocalReviews(localReviews);
    return created;
  }

  const supabase = createServiceSupabaseClient();

  const { data, error } = await supabase
    .from("reviews")
    .insert(payload)
    .select(REVIEW_FIELDS)
    .single();

  if (error) throw error;
  return normalizeReview(data);
}

export async function listReviews({ status, limit = 100, ascending = false } = {}) {
  if (!hasSupabaseServerEnv()) {
    let local = await readLocalReviews();
    if (status) {
      local = local.filter((row) => row.status === status);
    }
    local.sort((a, b) => {
      const aDate = new Date(a.created_at).getTime();
      const bDate = new Date(b.created_at).getTime();
      return ascending ? aDate - bDate : bDate - aDate;
    });
    return local.slice(0, limit).map(normalizeReview);
  }

  const supabase = createServiceSupabaseClient();
  let query = supabase.from("reviews").select(REVIEW_FIELDS).order("created_at", { ascending }).limit(limit);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map(normalizeReview);
}

export async function updateReviewStatus(id, status) {
  if (!hasSupabaseServerEnv()) {
    const localReviews = await readLocalReviews();
    const index = localReviews.findIndex((row) => row.id === id);
    if (index === -1) {
      throw new Error("Review not found");
    }
    localReviews[index] = {
      ...localReviews[index],
      status,
    };
    await writeLocalReviews(localReviews);
    return normalizeReview(localReviews[index]);
  }

  const supabase = createServiceSupabaseClient();

  const { data, error } = await supabase
    .from("reviews")
    .update({ status })
    .eq("id", id)
    .select(REVIEW_FIELDS)
    .single();

  if (error) throw error;
  return normalizeReview(data);
}

export async function uploadReviewImages(files) {
  if (!Array.isArray(files) || files.length === 0) return [];
  if (files.length > 4) {
    throw new Error("אפשר להעלות עד 4 תמונות לביקורת");
  }

  if (!hasSupabaseServerEnv()) {
    await mkdir(LOCAL_UPLOADS_DIR, { recursive: true });
    const uploaded = [];

    for (const file of files) {
      if (!(file instanceof File)) continue;

      const extension = file.name?.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `${Date.now()}-${cryptoRandomId()}.${extension}`;
      const diskPath = path.join(LOCAL_UPLOADS_DIR, fileName);
      const buffer = Buffer.from(await file.arrayBuffer());

      await writeFile(diskPath, buffer);
      uploaded.push(`/reviews-uploads/${fileName}`);
    }

    return uploaded;
  }

  const bucket = process.env.REVIEWS_STORAGE_BUCKET || "reviews";
  const supabase = createServiceSupabaseClient();

  const uploaded = [];
  for (const file of files) {
    if (!(file instanceof File)) continue;

    const extension = file.name?.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}-${cryptoRandomId()}.${extension}`;
    const path = `submissions/${fileName}`;

    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "image/jpeg",
    });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    if (data?.publicUrl) {
      uploaded.push(data.publicUrl);
    }
  }

  return uploaded;
}

function cryptoRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

async function readLocalReviews() {
  try {
    const raw = await readFile(LOCAL_REVIEWS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLocalReviews(reviews) {
  const dir = path.dirname(LOCAL_REVIEWS_FILE);
  await mkdir(dir, { recursive: true });
  await writeFile(LOCAL_REVIEWS_FILE, JSON.stringify(reviews, null, 2), "utf8");
}
