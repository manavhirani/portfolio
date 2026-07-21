import { briefBullets, links, timeline } from "@/lib/timeline";

export default function Home() {
  return (
    <main>
      <header className="center" style={{ marginBottom: "2rem" }}>
        <h1>Manav Hirani</h1>
        <p className="meta">
          Software Architect · Multi-agent systems · NLP/ML · Production
          infrastructure
        </p>
        <p className="links">
          <a href={links.email}>email</a>
          <a href={links.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href={links.x} target="_blank" rel="noreferrer">
            x
          </a>
          <a href={links.scholar} target="_blank" rel="noreferrer">
            scholar
          </a>
          <a href={links.portfolio} target="_blank" rel="noreferrer">
            this site (source)
          </a>
        </p>
      </header>

      <section>
        <h2>Brief</h2>
        <ul>
          {briefBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Timeline</h2>
        {timeline.map((item) => (
          <article key={item.id} className="entry">
            <div className="entry-head">
              <div>
                <div className="kind">{item.kind}</div>
                <h3>{item.title}</h3>
                <p className="meta">{item.org}</p>
              </div>
              <div className="dates">{item.dates}</div>
            </div>
            {item.stack ? <p className="stack">{item.stack}</p> : null}
            {item.summary ? <p>{item.summary}</p> : null}
            {item.bullets?.length ? (
              <ul>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            {item.links?.length ? (
              <p className="links">
                {item.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </p>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
