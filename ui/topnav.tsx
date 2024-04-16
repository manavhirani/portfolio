import Link from "next/link";
import { Poiret_One } from "next/font/google"
import Github from "@/ui/githubicon";

const poiret_one = Poiret_One({
  weight: "400",
  subsets: ["latin"],
});

export default function TopNav() {

  return (
    <div className="border rounded-full border-zinc-800 backdrop-blur-sm bg-black/50">
      <div className="flex px-8 py-4 ">
        <Link href="/">
          <div className={`${poiret_one.className} text-4xl mb-1`}>
            manavhirani
          </div>
        </Link>
        <span className="grow" />
        <div className="items-center justify-center hidden space-x-8 md:flex">
          <Link href="/projects" className="border-b-2 border-transparent hover:border-white">projects</Link>
          <Link href="/resume" className="border-b-2 border-transparent hover:border-white">resume</Link>
          <Link href="/blog" className="border-b-2 border-transparent hover:border-white">blog</Link>
          <Link href="/contact" className="border-b-2 border-transparent hover:border-white">contact</Link>
          <a href="https://www.github.com/manavhirani">
            <Github width={"2rem"} height={"2rem"} />
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:hidden">
          <button style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48" }} className="flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>

          </button>
        </div>
      </div>
    </div >
  );
}