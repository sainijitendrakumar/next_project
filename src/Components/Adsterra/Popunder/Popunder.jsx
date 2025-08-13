"use client";
import React, { useEffect } from "react";

function Popunder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl27312544.profitableratecpm.com/0e/9b/9b/0e9b9b14fff92f3a1445a9a3608c3af5.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Popunder;
