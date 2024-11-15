import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import Hero from "@/markdown/hero.mdx";

// Add className="ml-6 list-disc [&>li]:mt-2" to the ul element

export default function Home() {
  return (
    <div className="p-12">
      <div className="flex justify-between items-center max-w-full">
        <h1 className="text-3xl">Manav Hirani</h1>
        <ModeToggle />
      </div>
      {/* <div>
        <p>AI Engineer & Researcher</p>
        <p>Scaling LLMs at Syracuse University</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <a href="https://github.com/manavhirani">GitHub</a>
          </li>
          <li>
            <a href="https://github.com/manavhirani">𝕏</a>
          </li>
          <li>
            <a href="https://scholar.google.com/citations?hl=en&user=eIF9sJIAAAAJ&view_op=list_works&gmla=AL3_zihHc7tdP22APjSCfz0o7J7ospE4DbLrq1mjrxvnbT-4Zr27cE-slSvUta6JBM30Z78R6htPEQ_09ZTs3mq61gPCp7hmponZ1w">Scholar</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/manav-hirani/">LinkedIn</a>
          </li>
        </ul>
        <p>Tech Stack</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>Programming Languages and Frameworks
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Python</li>
              <li>Rust</li>
              <li>C++</li>
            </ul>
          </li>
          <li>APIs and Protocols
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>gRPC</li>
              <li>REST API</li>
              <li>OAuth 2.0</li>
              <li>Auth0</li>
            </ul>
          </li>
          <li>Machine Learning and AI
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>JAX</li>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>LangChain</li>
              <li>LLaMa Index</li>
              <li>CUDA</li>
            </ul>
          </li>
          <li>Databases and Data Management
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Postgres</li>
              <li>Supabase</li>
              <li>Pinecone</li>
              <li>FAISS</li>
            </ul>
          </li>
          <li>Cloud and Infrastructure
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Grafana</li>
              <li>Prometheus</li>
            </ul>
          </li>
          <li>Documentation and Collaboration Tools
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Markdown</li>
              <li>Git</li>
              <li>GitHub Actions</li>
              <li>Jupyter Notebooks</li>
            </ul>
          </li>
        </ul>
        <p>Email: <a href="mailto:mxhirani@gmail.com">mxhirani@gmail.com</a></p>
      </div> */}
      <Separator className="my-6"/>
      <div className="prose dark:prose-invert">
        <Hero />
      </div>
    </div>
  );
}