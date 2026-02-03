import { Redis } from "@upstash/redis";

// Create Redis client - returns null if env vars are missing
function createRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    // Return null if not configured (works for dev, build, and unconfigured production)
    if (process.env.NODE_ENV !== "production" || !url || !token) {
      console.warn(
        "Upstash Redis not configured. View counter will show 0. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in .env.local"
      );
      return null;
    }
  }

  return new Redis({ url, token });
}

export const redis = createRedisClient();

// Key for storing page views
export const VIEW_COUNT_KEY = "portfolio:views";
