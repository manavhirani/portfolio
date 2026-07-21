import { HomePage } from "@/components/home-page";

// Avoid static prerender issues with dual-mode client UI
export const dynamic = "force-dynamic";

export default function Home() {
  return <HomePage />;
}
