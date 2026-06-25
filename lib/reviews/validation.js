const REQUIRED_FIELDS = ["name", "event_type", "review_text"];

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeImageUrlValue(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch {
    return null;
  }

  return null;
}

export function validateCreateReviewPayload(payload) {
  const safePayload = payload && typeof payload === "object" ? payload : {};

  const name = normalizeText(safePayload.name);
  const eventType = normalizeText(safePayload.event_type);
  const reviewText = normalizeText(safePayload.review_text);
  const imageUrlRaw = normalizeText(safePayload.image_url);
  const imageUrls = Array.isArray(safePayload.image_urls)
    ? safePayload.image_urls.filter((url) => typeof url === "string" && url.trim().length > 0)
    : [];

  const missing = REQUIRED_FIELDS.filter((field) => {
    if (field === "event_type") return !eventType;
    if (field === "review_text") return !reviewText;
    return !normalizeText(safePayload[field]);
  });

  if (missing.length > 0) {
    return {
      ok: false,
      error: `Missing required fields: ${missing.join(", ")}`,
    };
  }

  const normalizedImageUrls = [];
  if (imageUrls.length > 4) {
    return { ok: false, error: "אפשר לצרף עד 4 תמונות" };
  }

  for (const url of imageUrls) {
    const normalized = normalizeImageUrlValue(url);
    if (!normalized) {
      return { ok: false, error: "All image_urls must be valid URLs" };
    }
    normalizedImageUrls.push(normalized);
  }

  let imageUrl = null;
  if (imageUrlRaw) {
    const normalizedPrimary = normalizeImageUrlValue(imageUrlRaw);
    if (!normalizedPrimary) {
      return { ok: false, error: "image_url must be a valid URL" };
    }
    imageUrl = normalizedPrimary;
  }

  if (!imageUrl && normalizedImageUrls.length > 0) {
    imageUrl = normalizedImageUrls[0];
  }

  return {
    ok: true,
    data: {
      name,
      event_type: eventType,
      review_text: reviewText,
      image_url: imageUrl,
      image_urls: normalizedImageUrls,
      status: "approved",
    },
  };
}

export function validateStatusPayload(payload) {
  const safePayload = payload && typeof payload === "object" ? payload : {};
  const status = normalizeText(safePayload.status);

  if (status !== "approved" && status !== "rejected") {
    return {
      ok: false,
      error: "status must be either 'approved' or 'rejected'",
    };
  }

  return {
    ok: true,
    data: { status },
  };
}
