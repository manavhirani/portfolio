import Link from "next/link";
import { Poiret_One } from "next/font/google"
import Github from "@/app/ui/githubicon";

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
        <div className="flex flex-row items-center justify-center gap-4 md:hidden">
          <a href="https://www.github.com/manavhirani">
            <Github width={"2rem"} height={"2rem"} />
          </a>
          {/* <div style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48" }} className="flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </div> */}
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="p-0 drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="px-4 drawer-div btn btn-ghost">
                <div style={{ fontVariationSettings: "'FILL' 2, 'wght' 700, 'GRAD' 0, 'opsz' 48" }} className="flex items-center justify-center scale-150">
                  <span className="material-symbols-outlined">menu</span>
                </div>

              </label>
            </div>
            <div className=" drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="min-h-full gap-2 p-4 text-xl menu w-80 bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li className=""> <Link href="/projects" className="border-b-2 border-transparent">projects</Link></li>
                <li> <Link href="/resume" className="border-b-2 border-transparent ">resume</Link></li>
                <li> <Link href="/blog" className="border-b-2 border-transparent">blog</Link></li>
                <li> <Link href="/contact" className="border-b-2 border-transparent">contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}