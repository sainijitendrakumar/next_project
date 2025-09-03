// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url =
      "https://creative-sb1.com/sb/notifications/utility/default/us/blog/Progamerage/message_redcircle2/9/js/script.js";

    // Explicitly disable caching (sometimes Next.js caches SSR fetches)
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Next.js Server)",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `External fetch failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const script = await res.text();

    return new NextResponse(script, {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Proxy fetch failed", details: err.message },
      { status: 500 }
    );
  }
}
