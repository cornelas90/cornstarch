"use client";
import { useState, useRef, useEffect } from "react";

interface AberrationImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AberrationImage({ src, alt, className }: AberrationImageProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

  const animate = () => {
    setOffset((prev) => {
      const newX = lerp(prev.x, target.current.x, 0.3); // Adjust factor for smoothness
      const newY = lerp(prev.y, target.current.y, 0.2);
      return { x: newX, y: newY };
    });
    raf.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
    target.current = { x, y };
  };

  const handleMouseLeave = () => {
    target.current = { x: 0, y: 0 };
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base grayscale image */}
      <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />

      {/* Red overlay */}
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          filter: "sepia(100%) hue-rotate(-30deg) saturate(350%)",
          opacity: 0.2,
        }}
      />

      {/* Green overlay */}
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
        style={{
          transform: `translate(${-offset.x}px, ${offset.y}px)`,
          filter: "sepia(100%) hue-rotate(80deg) saturate(350%)",
          opacity: 0.2,
        }}
      />

      {/* Blue overlay */}
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
        style={{
          transform: `translate(${offset.x / 2}px, ${-offset.y / 2}px)`,
          filter: "sepia(100%) hue-rotate(240deg) saturate(300%)",
          opacity: 0.2,
        }}
      />
    </div>
  );
}
