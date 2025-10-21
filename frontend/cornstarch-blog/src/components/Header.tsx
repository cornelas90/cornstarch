"use client";
import Link from "next/link";
import Nav from "./nav";
import GlitchText from "./GlitchText";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-6 px-8 text-lg tracking-wider font-mono">
            {/* Logo + subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <Link href="/" className="hover:opacity-70 text-xl sm:text-2xl font-bold">
                    CORNSTARCH.
                </Link>
                <span className="text-sm sm:text-base text-gray-400">
                    / A Portfolio for <GlitchText text="Christian D. Ornelas" /> /
                </span>
            </div>

            {/* Navigation */}
            <Nav />
        </header>
    );
}
