// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");

  if (!target) {
    return NextResponse.json({ error: "Missing ?url=" }, { status: 400 });
  }

  try {
    const res = await fetch(target, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json(
        { error: `External fetch failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.text();

    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/javascript",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
