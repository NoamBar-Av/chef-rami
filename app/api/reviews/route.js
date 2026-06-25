import { NextResponse } from "next/server";
import { listReviews } from "@/lib/reviews/repository";
import { isAdminPasswordValid } from "@/lib/env";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedStatus = searchParams.get("status")?.trim();

    if (!requestedStatus || requestedStatus === "approved") {
      const approved = await listReviews({ status: "approved", limit: 100, ascending: false });
      return NextResponse.json({ reviews: approved }, { status: 200 });
    }

    const adminPassword = request.headers.get("x-admin-password") ?? "";
    if (!isAdminPasswordValid(adminPassword)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const reviews = await listReviews({ status: requestedStatus, limit: 200, ascending: false });
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error("GET /api/reviews failed", error);
    return NextResponse.json({ error: "Failed to load reviews" }, { status: 500 });
  }
}
