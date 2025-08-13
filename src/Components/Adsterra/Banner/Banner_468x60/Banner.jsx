import React from "react";
import { useEffect, useRef } from "react";

function Banner() {
  const banner = useRef(null);

  const atOptions = {
    key: "6e8e81bc18ac4e0aa2ba72bc7a84addf",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/6e8e81bc18ac4e0aa2ba72bc7a84addf/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);
  return <div ref={banner} style={{ width: "468px", height: "60px" }}></div>;
}

export default Banner;
