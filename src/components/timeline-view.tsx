"use client";

import { useStyleMode } from "@/components/style-mode-provider";
import {
  timeline,
  briefBullets,
  links,
  type TimelineItem,
} from "@/lib/timeline";
import { Badge } from "@/components/ui/badge-lite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function kindLabel(kind: TimelineItem["kind"]) {
  switch (kind) {
    case "work":
      return "Work";
    case "project":
      return "Project";
    case "education":
      return "Education";
    case "signal":
      return "Signal";
  }
}

function RetroTimeline() {
  return (
    <center>
      <table
        className="retro-shell"
        width="780"
        cellPadding={0}
        cellSpacing={0}
        border={0}
      >
        <tbody>
          <tr>
            <td className="retro-hero" align="center">
              <font size="6" face="Verdana, Geneva, sans-serif">
                <b>Manav Hirani</b>
              </font>
              <br />
              <font size="3" face="Verdana, Geneva, sans-serif">
                Software Architect · Multi-agent systems · NLP/ML · Production infra
              </font>
              <br />
              <br />
              <font size="2">
                <a href={links.email}>Email</a>
                {" | "}
                <a href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {" | "}
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                {" | "}
                <a href={links.x} target="_blank" rel="noreferrer">
                  X
                </a>
                {" | "}
                <a href={links.scholar} target="_blank" rel="noreferrer">
                  Scholar
                </a>
              </font>
              <br />
              <marquee
                className="retro-marquee"
                scrollAmount={4}
                behavior="scroll"
              >
                ★ Welcome to my homepage ★ Building agents in production ★
                Honorable Mention @ xAI Hackathon ★ Best viewed in any browser ★
              </marquee>
            </td>
          </tr>

          <tr>
            <td className="retro-section">
              <table width="100%" cellPadding={6} cellSpacing={0} border={1} className="retro-panel">
                <tbody>
                  <tr>
                    <th className="retro-th" align="left">
                      <font size="3">◆ Brief</font>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <ul className="retro-ul">
                        {briefBullets.map((b) => (
                          <li key={b}>
                            <font size="2">{b}</font>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="retro-section">
              <table width="100%" cellPadding={6} cellSpacing={0} border={1} className="retro-panel">
                <tbody>
                  <tr>
                    <th className="retro-th" align="left">
                      <font size="3">◆ Timeline</font>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" cellPadding={4} cellSpacing={0} border={0}>
                        <tbody>
                          {timeline.map((item) => (
                            <tr key={item.id} className="retro-timeline-row">
                              <td
                                width="110"
                                valign="top"
                                className="retro-date"
                              >
                                <font size="2">
                                  <b>{item.dates}</b>
                                </font>
                              </td>
                              <td valign="top">
                                <font size="2">
                                  <b>
                                    [{kindLabel(item.kind)}] {item.title}
                                  </b>
                                  <br />
                                  <i>{item.org}</i>
                                  {item.stack ? (
                                    <>
                                      <br />
                                      <font size="1" className="retro-stack">
                                        {item.stack}
                                      </font>
                                    </>
                                  ) : null}
                                  {item.summary ? (
                                    <>
                                      <br />
                                      {item.summary}
                                    </>
                                  ) : null}
                                  {item.bullets?.length ? (
                                    <ul className="retro-ul compact">
                                      {item.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                      ))}
                                    </ul>
                                  ) : null}
                                  {item.children?.map((child) => (
                                    <div key={child.title} className="retro-child">
                                      <b>→ {child.title}</b>
                                      <br />
                                      <font size="1">{child.scope}</font>
                                      <ul className="retro-ul compact">
                                        {child.bullets.map((b) => (
                                          <li key={b}>{b}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  {item.href ? (
                                    <>
                                      <br />
                                      <a href={item.href} target="_blank" rel="noreferrer">
                                        → {item.href.replace("https://", "")}
                                      </a>
                                    </>
                                  ) : null}
                                </font>
                                <hr className="retro-row-hr" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" className="retro-footer">
              <font size="1">
                <hr className="retro-hr" />
                Copyright © {new Date().getFullYear()} Manav Hirani · Made with
                tables,{" "}
                <font face="Courier New, monospace">&lt;font&gt;</font>, and
                good intentions
                <br />
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='15'%3E%3Crect width='80' height='15' fill='%23000'/%3E%3Ctext x='4' y='11' fill='%230f0' font-family='monospace' font-size='10'%3Evisitors: ∞%3C/text%3E%3C/svg%3E"
                  alt="visitor counter"
                  width={80}
                  height={15}
                />
              </font>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

function ModernTimeline() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 px-1 pb-16">
      <header className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Software Architect
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Manav Hirani
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Multi-agent systems, applied NLP/ML, and production infrastructure
            for global supply chain.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <a className="text-primary underline-offset-4 hover:underline" href={links.email}>
            Email
          </a>
          <span className="text-muted-foreground">·</span>
          <a className="text-primary underline-offset-4 hover:underline" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="text-muted-foreground">·</span>
          <a className="text-primary underline-offset-4 hover:underline" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="text-muted-foreground">·</span>
          <a className="text-primary underline-offset-4 hover:underline" href={links.x} target="_blank" rel="noreferrer">
            X
          </a>
          <span className="text-muted-foreground">·</span>
          <a className="text-primary underline-offset-4 hover:underline" href={links.scholar} target="_blank" rel="noreferrer">
            Scholar
          </a>
        </div>
      </header>

      <Card className="border-border/80 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Brief</CardTitle>
          <CardDescription>What I am focused on right now</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
            {briefBullets.map((b) => (
              <li key={b} className="text-foreground/90">
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Timeline</h2>
            <p className="text-sm text-muted-foreground">
              Work, projects, education, and signals
            </p>
          </div>
        </div>

        <div className="relative space-y-0">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
            aria-hidden
          />
          {timeline.map((item, i) => (
            <div key={item.id} className="relative pl-8 pb-10 last:pb-0">
              <div
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-sm"
                aria-hidden
              />
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{kindLabel(item.kind)}</Badge>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <time className="text-sm font-medium tabular-nums text-muted-foreground whitespace-nowrap">
                    {item.dates}
                  </time>
                </div>
                {item.stack ? (
                  <p className="text-xs font-mono text-muted-foreground">
                    {item.stack}
                  </p>
                ) : null}
                {item.summary ? (
                  <p className="text-sm leading-relaxed">{item.summary}</p>
                ) : null}
                {item.bullets?.length ? (
                  <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                    {item.bullets.map((b) => (
                      <li key={b} className="text-foreground/85">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.children?.map((child) => (
                  <Card key={child.title} className="bg-muted/30 border-border/60">
                    <CardHeader className="py-3 px-4 pb-1">
                      <CardTitle className="text-sm font-semibold">
                        {child.title}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {child.scope}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-3 pt-1">
                      <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-4">
                        {child.bullets.map((b) => (
                          <li key={b} className="text-foreground/85">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {item.href.replace("https://", "")}
                  </a>
                ) : null}
                {i < timeline.length - 1 ? (
                  <Separator className="mt-6 opacity-0" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function TimelineView() {
  const { styleMode, mounted } = useStyleMode();

  if (!mounted) {
    return <div className="min-h-[40vh]" aria-hidden />;
  }

  return styleMode === "retro" ? <RetroTimeline /> : <ModernTimeline />;
}
