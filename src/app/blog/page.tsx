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
    <main>
      <h1>Blog</h1>
      <p className="meta">
        Posts from{" "}
        <a
          href="https://github.com/manavhirani/blog"
          target="_blank"
          rel="noreferrer"
        >
          github.com/manavhirani/blog
        </a>
      </p>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ol>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "0.6rem" }}>
              <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                {post.title}
              </Link>
              <div className="meta">{post.author}</div>
            </li>
          ))}
        </ol>
      )}

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/">← Home</Link>
      </p>
    </main>
  );
}
