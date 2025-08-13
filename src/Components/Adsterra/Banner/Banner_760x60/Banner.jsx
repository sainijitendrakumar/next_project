import React from "react";
import { useEffect, useRef } from "react";

function Banner() {
  const banner = useRef(null);

  const atOptions = {
    key: "e9c8f00273c1c9fe3e558a72d12ce749",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/e9c8f00273c1c9fe3e558a72d12ce749/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);
  return <div ref={banner} style={{ width: "728px", height: "90px" }}></div>;
}

export default Banner;
