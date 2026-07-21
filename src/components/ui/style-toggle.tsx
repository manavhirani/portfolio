"use client";

import * as React from "react";
import { MonitorSmartphone, LayoutTemplate } from "lucide-react";
import { useStyleMode } from "@/components/style-mode-provider";
import { Button } from "@/components/ui/button";

export function StyleToggle() {
  const { styleMode, toggleStyleMode, mounted } = useStyleMode();

  if (!mounted) {
    return (
      <span className="style-toggle-placeholder" aria-hidden>
        &nbsp;
      </span>
    );
  }

  // Retro-native control (classic HTML button look)
  if (styleMode === "retro") {
    return (
      // eslint-disable-next-line @next/next/no-html-link-for-pages
      <button
        type="button"
        className="retro-btn"
        onClick={toggleStyleMode}
        title="Switch to modern Tailwind / shadcn UI"
      >
        [ Modern UI ]
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleStyleMode}
      aria-label="Switch to retro 2000s HTML style"
      title="Switch to retro 2000s HTML style"
    >
      <LayoutTemplate className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle layout style</span>
      <MonitorSmartphone className="sr-only" />
    </Button>
  );
}
