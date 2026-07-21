"use client";

import { useStyleMode } from "@/components/style-mode-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { styleMode, mounted } = useStyleMode();

  return (
    <div
      className={
        mounted && styleMode === "modern"
          ? "site-shell min-h-screen"
          : "site-shell"
      }
    >
      {children}
    </div>
  );
}
