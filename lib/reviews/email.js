import "server-only";
import { Resend } from "resend";
import { getRequiredEnv } from "@/lib/env";
import { createApprovalToken } from "@/lib/reviews/approvalToken";

export async function sendNewReviewNotification(review) {
  const resendApiKey = getRequiredEnv("RESEND_API_KEY");
  const ownerEmail = process.env.OWNER_EMAIL || "NOAMSHORE@GMAIL.COM";
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chef-rami.netlify.app";
  const approveToken = createApprovalToken(review.id, "approved");
  const rejectToken = createApprovalToken(review.id, "rejected");
  const approveUrl = `${siteBaseUrl}/api/reviews/${review.id}?action=approved&token=${approveToken}`;
  const rejectUrl = `${siteBaseUrl}/api/reviews/${review.id}?action=rejected&token=${rejectToken}`;

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: "Chef Rami Reviews <onboarding@resend.dev>",
    to: ownerEmail,
    subject: "ביקורת חדשה ממתינה לאישור באתר שף רמי",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.7; direction: rtl; text-align: right;">
        <h2>התקבלה ביקורת חדשה (ממתינה לאישור)</h2>
        <p><strong>שם:</strong> ${review.name}</p>
        <p><strong>סוג אירוע:</strong> ${review.event_type}</p>
        <p><strong>תוכן ביקורת:</strong></p>
        <blockquote style="background:#f8f3ea;padding:12px;border-right:4px solid #c9a96e;">${review.review_text}</blockquote>
        <div style="display:flex;gap:10px;align-items:center;margin-top:16px;">
          <a href="${approveUrl}" style="background:#c9a96e;color:#111;padding:10px 14px;border-radius:999px;text-decoration:none;font-weight:700;">אשר ביקורת</a>
          <a href="${rejectUrl}" style="background:#222;color:#f8f3ea;padding:10px 14px;border-radius:999px;text-decoration:none;font-weight:700;">דחה ביקורת</a>
        </div>
        <p style="margin-top:14px;">או בניהול ידני: <a href="${siteBaseUrl}/admin/reviews">${siteBaseUrl}/admin/reviews</a></p>
      </div>
    `,
  });
}
