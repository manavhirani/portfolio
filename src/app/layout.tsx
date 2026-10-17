import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/navbar";
import { Effects } from "@/components/effects";
import { links } from "@/lib/timeline";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Manav Hirani",
  description:
    "Software Architect · Multi-agent systems, applied NLP/ML, production infrastructure",
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
};

// Runs before paint so reveal targets start hidden only when JS is available.
const jsFlag = `document.documentElement.classList.add("js")`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <div className="backdrop" aria-hidden="true">
          <div className="gradient" />
          <div className="grid" />
          <div className="spotlight" />
        </div>
        <div className="grain" aria-hidden="true" />
        <div className="progress" aria-hidden="true" />
        <NavBar />
        {children}
        <footer className="container footer">
          <span>© {new Date().getFullYear()} Manav Hirani</span>
          <span className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.x} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={links.scholar} target="_blank" rel="noreferrer">
              Scholar
            </a>
            <a href={links.portfolio} target="_blank" rel="noreferrer">
              Source
            </a>
          </span>
        </footer>
        <Effects />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
