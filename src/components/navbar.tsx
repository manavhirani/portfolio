import Link from "next/link";
import { links } from "@/lib/timeline";

export function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="mark" aria-label="Manav Hirani — home">
          MH<span>.</span>
        </Link>
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/blog">Blog</Link>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.email} className="nav-cta">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
