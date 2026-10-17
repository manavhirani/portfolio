import type { CSSProperties } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface BlogPost {
  id: string;
  title: string;
  author: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/manavhirani/blog/contents/articles",
      { next: { revalidate: 300 } }
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const posts = await response.json();
    if (!Array.isArray(posts)) return [];

    return posts
      .filter(
        (post: { type?: string; name?: string }) =>
          post.type === "file" &&
          typeof post.name === "string" &&
          post.name.endsWith(".md")
      )
      .map((post: { sha: string; name: string }) => ({
        id: post.sha,
        title: post.name.replace(/\.md$/, ""),
        author: "Manav Hirani",
      }));
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function Blog() {
  const posts = await fetchBlogPosts();

  return (
    <main className="container narrow page">
      <h1 className="page-title load">
        The <em>Blog</em>
      </h1>
      <p className="post-meta load" style={{ "--d": "0.15s" } as CSSProperties}>
        Notes and essays, published from{" "}
        <a
          href="https://github.com/manavhirani/blog"
          target="_blank"
          rel="noreferrer"
        >
          github.com/manavhirani/blog
        </a>
      </p>

      {posts.length === 0 ? (
        <p className="panel empty">No posts yet. Check back soon.</p>
      ) : (
        <ol className="post-list">
          {posts.map((post, i) => (
            <li
              key={post.id}
              data-reveal
              style={{ "--d": `${Math.min(i, 8) * 0.05}s` } as CSSProperties}
            >
              <Link
                className="panel glow"
                href={`/blog/${encodeURIComponent(post.title)}`}
              >
                <span className="post-title">{post.title}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}

      <Link className="back" href="/">
        ← Home
      </Link>
    </main>
  );
}
