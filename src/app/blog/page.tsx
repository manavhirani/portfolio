import { BlogList } from "@/components/blog-list";

// GitHub-backed listing must render on the server at request time
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
      {
        // ISR-friendly cache; force-dynamic still ensures route is not static-prerendered
        next: { revalidate: 300 },
      }
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const posts = await response.json();
    if (!Array.isArray(posts)) {
      console.error("Unexpected GitHub response for blog articles", posts);
      return [];
    }

    return posts
      .filter(
        (post: { type?: string; name?: string }) =>
          post.type === "file" && typeof post.name === "string" && post.name.endsWith(".md")
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
  return <BlogList posts={posts} />;
}
