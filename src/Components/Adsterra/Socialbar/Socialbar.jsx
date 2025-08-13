"use client";
import React, { useEffect } from "react";

function Socialbar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl27312553.profitableratecpm.com/b0/8b/40/b08b40ee3f8cdadaadcf1f931068038b.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Socialbar;
