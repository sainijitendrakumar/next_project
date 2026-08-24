// import React from "react";
import { useRef } from "react";

function Banner() {
  const banner = useRef(null);

  const atOptions = {
    key: "56dd0854f272cdb3678b00acf2643df6",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highrevenueformat.com/56dd0854f272cdb3678b00acf2643df6/invoke.js`;

      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);
  return <div ref={banner} style={{ width: "320px", height: "50px" }}></div>;
}

export default Banner;
