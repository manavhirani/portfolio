"use client";

import Link from "next/link";
import { useStyleMode } from "@/components/style-mode-provider";

export function BlogPostView({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { styleMode, mounted } = useStyleMode();

  if (!mounted) {
    return <div className="min-h-[40vh]" aria-hidden />;
  }

  if (styleMode === "retro") {
    return (
      <center>
        <table className="retro-blog-table" cellPadding={12} cellSpacing={0}>
          <tbody>
            <tr>
              <th>
                <font size="4">{title}</font>
              </th>
            </tr>
            <tr>
              <td>
                <div className="prose max-w-none prose-sm retro-prose">
                  {children}
                </div>
                <hr className="retro-hr" />
                <font size="2">
                  <Link href="/blog">← Back to blog index</Link>
                  {" · "}
                  <Link href="/">Home</Link>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-start">
      <article className="w-full">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">{title}</h1>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
        <div className="mt-10 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            ← Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
