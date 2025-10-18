"use client";

import { useState } from "react";

interface BinaryTextProps {
  text: string;               // normal text
  prefix?: string;            // optional prefix, e.g. ">_"
  className?: string;         // styling
}

// helper to convert text to binary
function toBinary(str: string) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

export default function BinaryText({ text, prefix = "", className = "" }: BinaryTextProps) {
  const [showBinary, setShowBinary] = useState(false);

  const handleClick = () => setShowBinary(!showBinary);

  return (
    <span
      onClick={handleClick}
      className={`${className} cursor-pointer select-none`}
    >
      {prefix}{showBinary ? toBinary(text) : text}
    </span>
  );
}
