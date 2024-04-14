import { } from "next/font/google";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-screen gap-4 p-4">
      <div className="flex">
        <div className="flex flex-col items-center w-full gap-8 p-8 md:flex-row">
          <div className="flex items-center justify-center w-full text-center md:text-right md:min-h-64 md:justify-end">
            <div>
              <h1 className="text-4xl font-bold">
                who am i?
              </h1>
              <p className="">
                tagline
              </p>
              <p className="">
                put some more random introductory text here
              </p>
              <h2></h2>
            </div>
          </div>
          <div className="w-full h-0 border md:w-0 md:h-full" />
          <div className="flex items-center justify-center w-full text-center md:min-h-64 md:text-left md:justify-start">
            <div>
              <h1>GitHub Link 1</h1>
              <h1>Social Link 2</h1>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen p-8 text-center bg-zinc-900">
        other sample content
      </div>
    </div>
  );
}