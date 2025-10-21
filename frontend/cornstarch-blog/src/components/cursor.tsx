"use client";

export default function BlinkingCursor() {
    return (
        <>
            <span className="blinking-cursor"></span>
            <style jsx>{`
        .blinking-cursor::after {
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
        </>
    );
}
