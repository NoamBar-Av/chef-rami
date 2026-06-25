export function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function hasEnv(name) {
  return Boolean(process.env[name]);
}

export function hasSupabaseServerEnv() {
  return hasEnv("NEXT_PUBLIC_SUPABASE_URL") && hasEnv("SUPABASE_SERVICE_ROLE_KEY");
}

export function isAdminPasswordValid(candidate) {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && candidate === expected;
}
