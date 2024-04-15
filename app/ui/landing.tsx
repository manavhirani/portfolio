import Github from "@/app/ui/githubicon";
import X from "@/app/ui/xicon";

import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsmono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-4 p-4 divide-y divide-white/10">
      {/* <div className="w-full sm:h-16 md:h-32"></div> */}
      <div className="flex">
        <div className="flex flex-col items-center w-full gap-8 p-8 lg:flex-row">
          <div className="flex items-center justify-center w-full p-4 text-center lg:text-right lg:min-h-64 lg:justify-end">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-transparent sm:text-8xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-jetbrains_mono text-balance">
                {"full stack dev"}
              </h1>
            </div>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-white via-orange-300 to-red-300 lg:bg-gradient-to-b lg:w-2 lg:h-full" />

          <div className="flex items-center justify-center w-full p-4 text-center lg:min-h-64 lg:text-left lg:justify-start">
            <div className="flex flex-col gap-8">
              <a href="https://www.github.com/manavhirani" className="relative inline-block p-4 overflow-hidden group">
                <div className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-t border-rose-500 group-hover:border-gray-400 group-hover:w-full"></div>
                <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-r border-blue-500 group-hover:border-gray-400 group-hover:h-full"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-b border-green-500 group-hover:border-gray-400 group-hover:w-full"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-l border-yellow-500 group-hover:border-gray-400 group-hover:h-full"></div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <Github width={"2em"} height={"2em"} />
                  <p className="text-2xl">/ manavhirani</p>
                </div>
              </a>
              <a href="https://www.x.com/manavhirani" className="relative inline-block p-4 overflow-hidden group">
                <div className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-t border-rose-500 group-hover:border-gray-400 group-hover:w-full"></div>
                <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-r border-blue-500 group-hover:border-gray-400 group-hover:h-full"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 ease-out border-b border-green-500 group-hover:border-gray-400 group-hover:w-full"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-300 ease-out border-l border-yellow-500 group-hover:border-gray-400 group-hover:h-full"></div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <X width={"2em"} height={"2em"} />
                  <p className="text-2xl">/ manavhirani</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
      </div>
    </div >
  );
}