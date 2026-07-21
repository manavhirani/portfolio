import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { StyleModeProvider } from "@/components/style-mode-provider";
import { NavBar } from "@/components/navbar";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Manav Hirani",
  description:
    "Software Architect · Multi-agent systems, applied NLP/ML, production infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-style="retro">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StyleModeProvider>
            <SiteShell>
              <NavBar />
              {children}
            </SiteShell>
          </StyleModeProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
