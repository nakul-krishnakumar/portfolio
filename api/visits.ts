import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req: Request) {
  // increment counter
  const count = await redis.incr("site:visits");
  return new Response(JSON.stringify({ visits: count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
