// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // External script URL
    const url =
      "https://creative-sb1.com/sb/notifications/utility/default/us/blog/Progamerage/message_redcircle2/9/js/script.js";

    // Fetch script from external server
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch external script");
    }

    const script = await res.text(); // since it's JS file

    // Return it with proper headers
    return new NextResponse(script, {
      headers: {
        "Content-Type": "application/javascript",
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
