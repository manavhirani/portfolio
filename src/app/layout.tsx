import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/navbar";
import { links } from "@/lib/timeline";

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
    <html lang="en">
      <body>
        <div className="wrap">
          <NavBar />
          {children}
          <footer className="center">
            <p>
              <a href={links.email}>email</a>
              {" · "}
              <a href={links.github}>github</a>
              {" · "}
              <a href={links.linkedin}>linkedin</a>
              {" · "}
              <a href={links.x}>x</a>
              {" · "}
              <a href={links.scholar}>scholar</a>
              {" · "}
              <a href={links.portfolio}>source</a>
            </p>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
