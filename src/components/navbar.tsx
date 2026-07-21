import Link from "next/link";
import { links } from "@/lib/timeline";

export function NavBar() {
  return (
    <nav className="center">
      <div>
        <Link href="/">
          <strong>Manav Hirani</strong>
        </Link>
      </div>
      <div style={{ marginTop: "0.4rem" }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
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
        <a href={links.email}>Email</a>
      </div>
    </nav>
  );
}
