import crypto from "node:crypto";
import { getRequiredEnv } from "@/lib/env";

function sign(payload) {
  const secret = getRequiredEnv("ADMIN_PASSWORD");
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export function createApprovalToken(reviewId, action) {
  const payload = `${reviewId}:${action}`;
  return sign(payload);
}

export function verifyApprovalToken(reviewId, action, token) {
  if (!token) return false;

  const expected = createApprovalToken(reviewId, action);
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  } catch {
    return false;
  }
}
