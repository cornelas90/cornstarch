import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
};

const getPostPath = (slug: string) =>
    path.join(process.cwd(), "src/content/writing", `${slug}.md`);

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), "src/content/writing");
    const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

    return files.map((file) => ({
        slug: file.replace(/\.md$/, ""),
    }));
}

export default async function PostPage({ params }: Props) {
    const { slug } = params;
    const postPath = getPostPath(slug);

    if (!fs.existsSync(postPath)) notFound();

    const fileContents = fs.readFileSync(postPath, "utf8");
    const { content, data } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return (
        <main className="font-mono min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-12 gap-12">
            <article className="prose prose-invert max-w-3xl w-auto">
                <h1 className="text-3xl font-sans mb-4">{data.title || slug}</h1>
                {data.date && (
                    <time dateTime={data.date} className="text-sm text-gray-500 block mb-8">
                        {new Date(data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                )}
                <div
                    className="prose prose-invert"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </article>
        </main>
    );
}
