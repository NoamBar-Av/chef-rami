import { NextResponse } from "next/server";
import { isAdminPasswordValid } from "@/lib/env";
import { validateStatusPayload } from "@/lib/reviews/validation";
import { updateReviewStatus } from "@/lib/reviews/repository";
import { verifyApprovalToken } from "@/lib/reviews/approvalToken";

export async function PATCH(request, { params }) {
  try {
    const adminPassword = request.headers.get("x-admin-password") ?? "";
    if (!isAdminPasswordValid(adminPassword)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await request.json();
    const validation = validateStatusPayload(payload);
    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const updated = await updateReviewStatus(params.id, validation.data.status);
    return NextResponse.json({ review: updated }, { status: 200 });
  } catch (error) {
    console.error("PATCH /api/reviews/[id] failed", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");
    const token = searchParams.get("token");

    if (action !== "approved" && action !== "rejected") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const valid = verifyApprovalToken(params.id, action, token);
    if (!valid) {
      return NextResponse.json({ error: "Invalid approval token" }, { status: 401 });
    }

    await updateReviewStatus(params.id, action);

    const statusText = action === "approved" ? "אושרה" : "נדחתה";
    const html = `
      <!doctype html>
      <html lang="he" dir="rtl">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>עדכון ביקורת</title>
          <style>
            body { font-family: Arial, sans-serif; background:#f8f3ea; color:#111; display:grid; place-items:center; min-height:100vh; margin:0; }
            .card { background:#fff; border:1px solid #e6dbc9; border-radius:16px; padding:24px; width:min(92vw,560px); box-shadow:0 10px 30px rgba(0,0,0,.08); text-align:center; }
            .btn { display:inline-block; margin-top:14px; background:#111; color:#f8f3ea; text-decoration:none; padding:10px 16px; border-radius:999px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>הביקורת ${statusText} בהצלחה</h1>
            <p>האתר יעודכן בהתאם לסטטוס החדש.</p>
            <a class="btn" href="/admin/reviews">לעמוד ניהול ביקורות</a>
          </div>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    console.error("GET /api/reviews/[id] approval failed", error);
    return NextResponse.json({ error: "Failed to process approval action" }, { status: 500 });
  }
}
