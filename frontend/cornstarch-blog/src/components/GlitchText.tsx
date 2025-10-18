"use client";
import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    symbols?: string[];
    interval?: number;       // Time between glitch waves (ms)
    glitchDuration?: number; // How long a glitch lasts per character (ms)
    maxGlitchChars?: number; // How many characters can glitch at once
    className?: string;
}

export default function GlitchText({
    text,
    symbols = ["0", "1", "%", "#", "@", "_", "&", "$"],
    interval = 4000,
    glitchDuration = 300,
    maxGlitchChars = 4,
    className = "",
}: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        const glitch = () => {
            // pick how many characters will glitch this round
            const numGlitches = Math.floor(Math.random() * maxGlitchChars) + 1;
            const glitchIndexes = new Set<number>();

            while (glitchIndexes.size < numGlitches) {
                glitchIndexes.add(Math.floor(Math.random() * text.length));
            }

            let frame = 0;
            const frameInterval = 40; // how quickly the glitching symbols change
            const totalFrames = Math.floor(glitchDuration / frameInterval);

            const intervalId = setInterval(() => {
                setDisplayText((prev) =>
                    prev
                        .split("")
                        .map((char, i) =>
                            glitchIndexes.has(i)
                                ? symbols[Math.floor(Math.random() * symbols.length)]
                                : char
                        )
                        .join("")
                );

                frame++;
                if (frame > totalFrames) {
                    clearInterval(intervalId);
                    setDisplayText(text); // restore original
                }
            }, frameInterval);
        };

        const id = setInterval(glitch, interval);
        return () => clearInterval(id);
    }, [text, symbols, interval, glitchDuration, maxGlitchChars]);

    return <span className={className}>{displayText}</span>;
}
