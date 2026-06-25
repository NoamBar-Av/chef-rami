import { NextResponse } from "next/server";
import { createReview, uploadReviewImages } from "@/lib/reviews/repository";
import { validateCreateReviewPayload } from "@/lib/reviews/validation";

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const files = formData
        .getAll("images")
        .filter((value) => value instanceof File && value.size > 0)
        .slice(0, 4);

      const uploadedImageUrls = await uploadReviewImages(files);

      payload = {
        name: formData.get("name"),
        event_type: formData.get("event_type"),
        review_text: formData.get("review_text"),
        image_urls: uploadedImageUrls,
      };
    } else {
      payload = await request.json();
    }

    const validation = validateCreateReviewPayload(payload);
    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const created = await createReview(validation.data);
    return NextResponse.json({ review: created }, { status: 201 });
  } catch (error) {
    console.error("POST /api/reviews/submit failed", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}
