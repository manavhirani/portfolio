import Github from "@/app/ui/githubicon";
import X from "@/app/ui/xicon";
import GameOfLife from "./widgets/gameoflife";

const SocialLink = ({ href, Icon, text }: { href: string, Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string }) => (
  <a href={href} className="relative inline-block w-full p-4 overflow-hidden group">
    <div className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-t-2 border-rose-500 group-hover:border-gray-400 group-hover:w-full"></div>
    <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-r-2 border-blue-500 group-hover:border-gray-400 group-hover:h-full"></div>
    <div className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-b-2 border-green-500 group-hover:border-gray-400 group-hover:w-full"></div>
    <div className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-l-2 border-yellow-500 group-hover:border-gray-400 group-hover:h-full"></div>
    <div className="flex flex-row items-center justify-center gap-2">
      <Icon width="2em" height="2em" />
      <p className="text-2xl">{text}</p>
    </div>
  </a>
);

const HeroText = () => (
  <div className="p-4 space-y-2">
    <div className="text-6xl font-bold text-transparent sm:text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-balance">
      <h1>{"computer"}</h1>
      <h1>{"scientist"}</h1>
    </div>
    <p className="text-2xl bg-gradient-to-r from-white to-green-400 bg-clip-text">
      building <span><a href="https://manavhirani.github.io/kigumigroupdemo/" className="font-black text-transparent font-jetbrains_mono">@kigumigroup</a></span>
    </p>
    <p className="text-2xl">open source enthusiast</p>
    <p className="text-2xl">ai engineer & researcher</p>
    <p className="text-2xl">freelance web developer</p>
  </div>
);

const Hero = () => (
  <div className="flex">
    <div className="flex flex-col items-center w-full gap-2 p-8 md:flex-row">
      <div className="flex items-center justify-center w-full p-4 text-center md:text-right md:min-h-64 md:justify-end">
        <HeroText />
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-white via-orange-300 to-red-300 md:bg-gradient-to-b md:w-1 md:h-full" />

      <div className="flex items-center justify-center w-full p-4 text-center md:min-h-64 md:text-left md:justify-start">
        <div className="flex flex-col gap-4 w-fit">
          <SocialLink href="https://www.github.com/manavhirani" Icon={Github} text="/ manavhirani" />
          <SocialLink href="https://www.x.com/manavhirani" Icon={X} text="@manavhirani" />
        </div>
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-4 p-4 antialiased divide-y divide-white/10">
      <Hero />
      <GameOfLife />
    </div>
  );
}