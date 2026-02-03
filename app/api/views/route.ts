import { NextResponse } from "next/server";
import { redis, VIEW_COUNT_KEY } from "@/lib/redis";

export const runtime = "edge";

export async function GET() {
  try {
    // If Redis is not configured, return a mock count
    if (!redis) {
      return NextResponse.json({ count: 0, mock: true });
    }

    const count = (await redis.get<number>(VIEW_COUNT_KEY)) || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching view count:", error);
    return NextResponse.json({ count: 0, error: true });
  }
}

export async function POST() {
  try {
    // If Redis is not configured, return a mock count
    if (!redis) {
      return NextResponse.json({ count: 1, mock: true });
    }

    const count = await redis.incr(VIEW_COUNT_KEY);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json({ count: 0, error: true }, { status: 500 });
  }
}
