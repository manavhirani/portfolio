import { BlogList } from "@/components/blog-list";

interface BlogPost {
  id: string;
  title: string;
  author: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/manavhirani/blog/contents/articles",
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const posts = await response.json();

    return await Promise.all(
      posts.map(async (post: { sha: string; name: string }) => {
        return {
          id: post.sha,
          title: post.name.replace(/\.md$/, ""),
          author: "Manav Hirani",
        };
      })
    );
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function Blog() {
  const posts = await fetchBlogPosts();
  return <BlogList posts={posts} />;
}
