import { JetBrains_Mono } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter var", "system-ui"],
        serif: ["Georgia", "Cambria"],
        mono: ["Menlo", "Monaco", "Courier New", "monospace"],
        jetbrains_mono: ["JetBrains Mono", "monospace"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ffffff",
          "secondary": "#9ca3af",
          "accent": "#7dd3fc",
          "neutral": "#1f2937",
          "base-100": "#050505",
          "info": "#86efac",
          "success": "#bef264",
          "warning": "#fb923c",
          "error": "#f87171",
        },
      },
    ],
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require('flowbite/plugin'),
  ],
};
export default config;
