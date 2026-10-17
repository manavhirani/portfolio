import type { CSSProperties } from "react";
import { Shader } from "@/components/shader";
import {
  briefBullets,
  highlights,
  links,
  stack,
  timeline,
  type TimelineKind,
} from "@/lib/timeline";

const roles = ["multi-agent harnesses", "agent orchestration", "data platforms"];

const kindLabel: Record<TimelineKind, string> = {
  work: "Work",
  project: "Project",
  education: "Education",
  signal: "Research",
};

/** Letters blur in one after another; `from` continues the stagger across words. */
function Split({ text, from = 0 }: { text: string; from?: number }) {
  return (
    <span className="split" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ "--i": from + i } as CSSProperties}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <header className="section-head" data-reveal>
      <span className="num">{num}</span>
      <h2>{title}</h2>
      <span className="rule" />
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-art">
          <Shader name="flow" scale={0.5} className="canvas" />
        </div>
        <div className="hero-veil" />
        <div className="container hero-inner">
          <p className="eyebrow load" style={{ "--d": "0.1s" } as CSSProperties}>
            <span className="pulse" /> Software Architect at Sandisk
          </p>
          <h1 className="display">
            <Split text="Manav" />{" "}
            <em>
              <Split text="Hirani" from={5} />
            </em>
          </h1>
          <p className="lede load" style={{ "--d": "0.9s" } as CSSProperties}>
            Building{" "}
            <span className="rotator">
              <span className="rotator-track">
                {[...roles, roles[0]].map((r, i) => (
                  <em key={i}>{r}</em>
                ))}
              </span>
            </span>
            <br />
            for global supply chain operations, with roots in applied NLP and
            machine learning.
          </p>
          <div className="actions load" style={{ "--d": "1.1s" } as CSSProperties}>
            <a className="btn btn-solid magnetic" href={links.email}>
              Get in touch <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-glass magnetic" href="#work">
              See the work
            </a>
          </div>
        </div>
        <div className="container hero-foot load" style={{ "--d": "1.3s" } as CSSProperties}>
          <span>Agents · NLP/ML · Infrastructure</span>
          <span className="scroll-cue" aria-hidden="true" />
          <span>Portfolio · {new Date().getFullYear()}</span>
        </div>
      </section>

      <div className="marquee" aria-label={`Stack: ${stack.join(", ")}`}>
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((n) => (
            <span key={n}>
              {stack.map((s) => (
                <span key={s} className="marquee-item">
                  {s}
                  <i>✦</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="container section">
        <SectionHead num="01" title="Brief" />
        <div className="brief">
          <div className="panel brief-text glow" data-reveal>
            <p className="dropcap">{briefBullets.join(" ")}</p>
          </div>
          <ul className="highlights">
            {highlights.map((h, i) => (
              <li
                key={h.label}
                className="panel highlight glow"
                data-reveal
                style={{ "--d": `${i * 0.08}s` } as CSSProperties}
              >
                <span className="label">{h.label}</span>
                <strong>{h.title}</strong>
                <span className="detail">{h.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section" id="work">
        <SectionHead num="02" title="Timeline" />
        <div className="timeline">
          <div className="rail" aria-hidden="true">
            <div className="rail-fill" />
          </div>
          {timeline.map((item, i) => (
            <article key={item.id} className="entry" data-reveal>
              <span className="entry-dot" aria-hidden="true" />
              <div className="panel entry-card glow">
                <div className="entry-art">
                  <Shader name={item.art} seed={i + 1} className="canvas" />
                  <span className="kind">{kindLabel[item.kind]}</span>
                </div>
                <div className="entry-body">
                  <div className="entry-head">
                    <h3>{item.title}</h3>
                    <span className="dates">{item.dates}</span>
                  </div>
                  <p className="org">{item.org}</p>
                  {item.summary ? (
                    <p className="summary">{item.summary}</p>
                  ) : null}
                  {item.bullets?.length ? (
                    <ul className="bullets">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.stack ? (
                    <ul className="chips">
                      {item.stack.split(" · ").map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.links?.length ? (
                    <p className="entry-links">
                      {item.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section" id="contact">
        <SectionHead num="03" title="Contact" />
        <div className="contact panel" data-reveal>
          <div className="contact-art">
            <Shader name="flow" seed={7} scale={0.5} className="canvas" />
          </div>
          <div className="contact-inner">
            <h2 className="contact-title">
              Let&rsquo;s build something <em>worth shipping.</em>
            </h2>
            <p>
              Open to conversations about agent systems, ML platforms, and hard
              infrastructure problems.
            </p>
            <div className="actions">
              <a className="btn btn-solid magnetic" href={links.email}>
                {links.email.replace("mailto:", "")}
              </a>
              <a
                className="btn btn-glass magnetic"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
