import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { fetchPostByName } from "@/components/posts";
import { BlogPostView } from "@/components/blog-post-view";

import "@/styles/github-dark.css";

// Post content is fetched from GitHub at request time
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

  return <BlogPostView title={post.title}>{mdx}</BlogPostView>;
}
