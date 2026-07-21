"use client";

import * as React from "react";

export type StyleMode = "retro" | "modern";

type StyleModeContextValue = {
  styleMode: StyleMode;
  setStyleMode: (mode: StyleMode) => void;
  toggleStyleMode: () => void;
  mounted: boolean;
};

const StyleModeContext = React.createContext<StyleModeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-style-mode";

export function StyleModeProvider({ children }: { children: React.ReactNode }) {
  const [styleMode, setStyleModeState] = React.useState<StyleMode>("retro");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as StyleMode | null;
    if (stored === "retro" || stored === "modern") {
      setStyleModeState(stored);
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-style", styleMode);
    window.localStorage.setItem(STORAGE_KEY, styleMode);
  }, [styleMode, mounted]);

  const setStyleMode = React.useCallback((mode: StyleMode) => {
    setStyleModeState(mode);
  }, []);

  const toggleStyleMode = React.useCallback(() => {
    setStyleModeState((m) => (m === "retro" ? "modern" : "retro"));
  }, []);

  return (
    <StyleModeContext.Provider
      value={{ styleMode, setStyleMode, toggleStyleMode, mounted }}
    >
      {children}
    </StyleModeContext.Provider>
  );
}

export function useStyleMode() {
  const ctx = React.useContext(StyleModeContext);
  if (!ctx) {
    throw new Error("useStyleMode must be used within StyleModeProvider");
  }
  return ctx;
}
