"use client";

import Link from "next/link";
import { useStyleMode } from "@/components/style-mode-provider";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type BlogPostMeta = {
  id: string;
  title: string;
  author: string;
};

export function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const { styleMode, mounted } = useStyleMode();

  if (!mounted) {
    return <div className="min-h-[20vh]" aria-hidden />;
  }

  if (styleMode === "retro") {
    return (
      <center>
        <table className="retro-blog-table" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <th colSpan={2}>
                <font size="4">📓 Blog Index</font>
              </th>
            </tr>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={2}>
                  <font size="2">No posts found. Check back soon!</font>
                </td>
              </tr>
            ) : (
              posts.map((post, i) => (
                <tr key={post.id}>
                  <td width="40" valign="top">
                    <font size="2">{i + 1}.</font>
                  </td>
                  <td>
                    <font size="2">
                      <b>
                        <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                          {post.title}
                        </Link>
                      </b>
                      <br />
                      <i>by {post.author}</i>
                    </font>
                  </td>
                </tr>
              ))
            )}
            <tr>
              <td colSpan={2} align="center">
                <font size="1">
                  <hr className="retro-hr" />
                  <Link href="/">← Back to homepage</Link>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Notes and writing
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${encodeURIComponent(post.title)}`}>
            <Card className="h-full transition-colors hover:bg-muted/40">
              <CardHeader>
                <CardTitle className="text-base leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.author}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No posts found.</p>
      ) : null}
    </div>
  );
}
