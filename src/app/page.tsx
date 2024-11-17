import Hero from "@/markdown/home/hero.mdx";

// Add className="ml-6 list-disc [&>li]:mt-2" to the ul element

export default function Home() {
  return (
    <div className="">
      <div className="prose dark:prose-invert">
        <Hero />
      </div>
    </div>
  );
}