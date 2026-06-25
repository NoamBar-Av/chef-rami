function isValidHttpUrl(value) {
  if (typeof value !== "string" || !value.trim()) return false;
  const trimmed = value.trim();

  if (trimmed.startsWith("/")) {
    return true;
  }

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function parseImageUrls(storedImageUrl) {
  if (!storedImageUrl || typeof storedImageUrl !== "string") {
    return [];
  }

  const trimmed = storedImageUrl.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.filter(isValidHttpUrl).slice(0, 4);
      }
    } catch {
      return [];
    }
  }

  return isValidHttpUrl(trimmed) ? [trimmed] : [];
}

export function serializeImageUrls(imageUrls) {
  if (!Array.isArray(imageUrls)) return null;

  const normalized = imageUrls.filter(isValidHttpUrl).slice(0, 4);
  if (normalized.length === 0) return null;
  if (normalized.length === 1) return normalized[0];
  return JSON.stringify(normalized);
}
