import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function WritingPage() {
    const postsDir = path.join(process.cwd(), "src/content/writing");
    const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf8");
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title || slug,
            date: data.date || null,
        };
    });

    posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    return (
        <main className="font-mono min-h-screen flex flex-col items-center sm:items-start p-6 gap-12">
            <section className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold mb-2">Writing</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug} className="mb-2">
                            <Link href={`/writing/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                            {post.date && (
                                <span className="text-sm text-gray-500 ml-2">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
