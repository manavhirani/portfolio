import Image from "next/image";
import Link from "next/link";
import { Poiret_One } from "next/font/google"
import Github from "@/app/ui/githubicon";

const poiret_one = Poiret_One({
  weight: "400",
  subsets: ["latin"],
});

export default function TopNav() {

  return (
    <div className="flex px-8 py-4 border rounded-full border-zinc-800 backdrop-blur-sm">
      <Link href="/">
        <div className={`${poiret_one.className} text-4xl mb-1`}>
          manavhirani
        </div>
      </Link>
      <span className="grow" />
      <div className="items-center justify-center hidden space-x-4 md:flex">
        <Link href="/projects">projects</Link>
        <Link href="/resume">resume</Link>
        <Link href="/blog">blog</Link>
        <Link href="/contact">contact</Link>
        <a href="https://www.github.com/manavhirani">
          <Github />
        </a>
      </div>
      <button style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48" }} className="flex items-center justify-center md:hidden">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
}