"use client";

import React from "react";
import BlinkingCursor from "./cursor";

export default function Footer() {
  return (
    <footer className="w-full mt-2 text-center font-mono text-xs text-neutral-500 pb-6 select-none">
      <div className="flex flex-col items-center gap-2">
        <p className="footer-cursor">CORNSTARCH. :: The Plot Thickener</p>
        <p className="text-neutral-600">
          © 1994-infinity
        </p>
      </div>

    </footer>
  );
}
