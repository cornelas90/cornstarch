import Link from "next/link";

const links = [
    { href: "/music", label: ">_music" },
    { href: "/writing", label: ">_writing" },
    { href: "/garden", label: ">_garden" },
    { href: "/about", label: ">_about" }
];

export default function Nav() {
    return (
        <nav className="flex gap-8 font-mono text-lg text-foreground/70">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="
            opacity-70 hover:opacity-100 transition-opacity duration-300 
            glow-pulse
          "
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
