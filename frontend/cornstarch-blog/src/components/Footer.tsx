"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-2 text-center font-mono text-xs text-neutral-500 pb-6 select-none">
      <div className="flex flex-col items-center gap-2">
        <p className="footer-cursor">CORNSTARCH. :: The Plot Thickener</p>
        <p className="text-neutral-600">
          © {new Date().getFullYear()} Christian D. Ornelas
        </p>
      </div>
      <style jsx>{`
        .footer-cursor::after {
          content: "_";
          display: inline-block;
          margin-left: 2px;
          animation: blink 1.1s steps(1, end) infinite;
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
