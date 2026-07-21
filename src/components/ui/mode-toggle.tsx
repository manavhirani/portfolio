"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { useStyleMode } from "@/components/style-mode-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { styleMode, mounted: styleMounted } = useStyleMode();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  if (!mounted || !styleMounted) {
    return <span className="mode-toggle-placeholder" aria-hidden>&nbsp;</span>;
  }

  const label =
    theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  if (styleMode === "retro") {
    return (
      <button
        type="button"
        className="retro-btn"
        onClick={toggleTheme}
        title={`Theme: ${label}. Click to cycle light / dark / system.`}
      >
        [ {label} ]
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Toggle theme, current theme is ${theme}`}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute"
        }`}
      />
      <Laptop
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "system" ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
