import "@/styles/github-dark.css";
import type { CSSProperties } from "react";
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
    <main className="container narrow page">
      <h1 className="page-title load">{post.title}</h1>
      <p className="post-meta load" style={{ "--d": "0.15s" } as CSSProperties}>
        By Manav Hirani · Source on{" "}
        <a
          href={`https://github.com/manavhirani/blog/blob/main/articles/${encodeURIComponent(post.title)}.md`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <article className="prose load" style={{ "--d": "0.3s" } as CSSProperties}>
        {mdx}
      </article>
      <Link className="back" href="/blog">
        ← Blog
      </Link>
      <Link className="back" href="/">
        Home
      </Link>
    </main>
  );
}
