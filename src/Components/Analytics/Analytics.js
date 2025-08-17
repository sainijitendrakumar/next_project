"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as gtag from "../../app/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Listen for GA script load
    const timer = setInterval(() => {
      if (typeof window.gtag !== "undefined") {
        setLoaded(true);
        clearInterval(timer);
      }
    }, 300);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loaded || !pathname) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    gtag.pageview(url);
  }, [loaded, pathname, searchParams]);

  return null;
}
