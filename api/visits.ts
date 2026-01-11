import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req: Request) {
  // increment counter
  const count = await redis.incr("site:visits");
  console.log("Visit count:", count);
  return new Response(JSON.stringify({ visits: count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
