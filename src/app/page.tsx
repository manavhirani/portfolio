import Hero from "@/markdown/home/hero.mdx";

export default function Home() {
  return (
    <div className="p-6">
      <div className="prose dark:prose-invert dark:prose-purple">
        <Hero />
      </div>
    </div>
  );
}