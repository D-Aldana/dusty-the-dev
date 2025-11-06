import { NextResponse } from "next/server"

const rateLimitMap = new Map()
const MAX_REQUESTS = 1
const WINDOW = 60 * 60 * 1000

export function middleware(req) {
  if (req.nextUrl.pathname === "/api/contact") {
    const ip = req.ip || "unknown"
    const now = Date.now()

    const entry = rateLimitMap.get(ip) || { count: 0, lastRequest: now }

    if (now - entry.lastRequest > WINDOW) {
      entry.count = 0
      entry.lastRequest = now
    }

    entry.count += 1
    entry.lastRequest = now
    rateLimitMap.set(ip, entry)

    if (entry.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({ error: "Too many requests, try again later." }),
        { status: 429, headers: { "Content-Type": "application/json" } },
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/contact"],
}
