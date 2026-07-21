import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { fetchPostByName } from "@/components/posts";

export const dynamic = "force-dynamic";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function BlogPost(props: {
  params: Promise<{ title: string }>;
}) {
  const params = await props.params;
  const { title } = params;
  const post = await fetchPostByName(title);

  if (!post) {
    notFound();
  }

  const mdx = await MDXRemote({ source: post.content, options });

  return (
    <main>
      <h1>{post.title}</h1>
      <p className="meta">
        Source:{" "}
        <a
          href={`https://github.com/manavhirani/blog/blob/main/articles/${encodeURIComponent(post.title)}.md`}
          target="_blank"
          rel="noreferrer"
        >
          github.com/manavhirani/blog
        </a>
      </p>
      <div className="prose" style={{ marginTop: "1.25rem" }}>
        {mdx}
      </div>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/blog">← Blog</Link>
        {" · "}
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
