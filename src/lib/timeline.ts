export type TimelineKind = "work" | "project" | "education" | "signal";

export type TimelineItem = {
  id: string;
  kind: TimelineKind;
  title: string;
  org: string;
  dates: string;
  summary?: string;
  stack?: string;
  bullets?: string[];
  children?: {
    title: string;
    scope: string;
    bullets: string[];
  }[];
  href?: string;
};

/** Chronological timeline derived from the capability brief / resume. */
export const timeline: TimelineItem[] = [
  {
    id: "sandisk",
    kind: "work",
    title: "Software Architect",
    org: "Sandisk · Global Supply Chain, AI Platform",
    dates: "Mar 25 - Present",
    summary:
      "Building production multi-agent harnesses and data platforms for global supply chain operations.",
    stack: "LangGraph · LangChain · Databricks · Spark · K8s · Docker · Redis · AWS · Azure",
    bullets: [
      "Owning end-to-end agent orchestration for supply chain: tool loops, session state, pipelines, and deployment.",
      "Shipping multi-agent systems on LangGraph/LangChain with production reliability patterns (fallback, healing, scheduled workloads).",
      "Running data and agent workloads on Databricks/Spark, Kubernetes, Redis, AWS, and Azure.",
    ],
  },
  {
    id: "x-map",
    kind: "project",
    title: "X-Map",
    org: "Independent · Honorable Mention, xAI Hackathon",
    dates: "Dec 25",
    stack: "Grok · X API · Next.js · MapLibre",
    bullets: [
      "Built a real-time geospatial application that structures breaking news from X with Grok and renders stories on an interactive map with live tweet grounding.",
    ],
    href: "https://github.com/manavhirani/x-map",
  },
  {
    id: "syracuse",
    kind: "education",
    title: "M.S. Computer Science",
    org: "Syracuse University · GPA 3.7",
    dates: "Jan 22 - Dec 23",
  },
  {
    id: "can-combat",
    kind: "project",
    title: "CAN Combat",
    org: "Syracuse University · Supervised ML",
    dates: "Sep 22 - Dec 22",
    stack: "Feature engineering · Ensemble classifiers",
    bullets: [
      "Developed a supervised intrusion detection pipeline for automotive CAN bus traffic (DoS, fuzzy, impersonation) with frame-level features and ensemble classification.",
    ],
  },
  {
    id: "publication",
    kind: "signal",
    title: "Publication",
    org: "Springer · Data Analytics & Management",
    dates: "Apr 21",
    bullets: [
      "A. Falor, M. Hirani, et al. Deep learning for SQL injection detection using CNNs. DOI 10.1007/978-981-16-6285-0_24",
    ],
  },
  {
    id: "nmims",
    kind: "education",
    title: "B.Tech. Computer Science",
    org: "NMIMS University",
    dates: "Jul 17 - Sep 21",
  },
];

export const briefBullets = [
  "Building production multi-agent harnesses and data platforms for global supply chain operations.",
  "Owning end-to-end agent orchestration at Sandisk: tool loops, session state, pipelines, and deployment.",
  "Working primarily with LangGraph, Databricks/Spark, Kubernetes, and cloud-native services on AWS and Azure.",
];

export const links = {
  email: "mailto:mxhirani@gmail.com",
  github: "https://github.com/manavhirani",
  linkedin: "https://linkedin.com/in/manav-hirani",
  x: "https://x.com/manavhirani",
  scholar:
    "https://scholar.google.com/citations?hl=en&user=eIF9sJIAAAAJ",
};
