import { getAccessToken } from "@/api/apiClient";

type JwtPayload = {
  userId?: string;
  sub?: string;
};

function decodeBase64Url(value: string): string {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = normalized.length % 4;
  const padded = padding ? normalized + "=".repeat(4 - padding) : normalized;
  return atob(padded);
}

export function getCurrentUserId(): string | null {
  const token = getAccessToken();
  if (!token) {
    return null;
  }

  const parts = token.split(".");
  if (parts.length < 2) {
    return null;
  }

  try {
    const payload = JSON.parse(decodeBase64Url(parts[1])) as JwtPayload;
    return payload.userId || payload.sub || null;
  } catch {
    return null;
  }
}
