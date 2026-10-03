/**
 * Copy and structured data for /agents. Edit here to change marketing text;
 * page and section components only compose this module.
 */

export type AgentLayer = {
  id: string;
  name: string;
  tagline: string;
  description: string;
};

export type AgentPillar = {
  id: string;
  name: string;
  summary: string;
};

export type AgentsPageContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    architectureEyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
    contactHref: string;
    contactLabel: string;
  };
  layers: {
    eyebrow: string;
    title: string;
    items: AgentLayer[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: AgentPillar[];
  };
  pillarsClosing: {
    title: string;
    body: string;
  };
  trustBoundary: {
    eyebrow: string;
    title: string;
  };
};

export const agentsPage: AgentsPageContent = {
  meta: {
    title: "Agents",
    description:
      "Kubernetes agent template with Hermes gateway, isolated workers, GitHub credential broker, and agent identity for cloud credential trust.",
  },
  hero: {
    eyebrow: "// agents",
    architectureEyebrow: "// architecture",
    title: "Agent platform on",
    titleAccent: "Kubernetes.",
    lede:
      "A reproducible template we run in production—spin up new agents for your org without long-lived secrets in the execution environment.",
    contactHref: "/contact",
    contactLabel: "Talk to us about agents →",
  },
  layers: {
    eyebrow: "// how it runs",
    title: "Gateway, worker, trust services.",
    items: [
      {
        id: "gateway",
        name: "Hermes gateway",
        tagline: "ingress to your agents",
        description:
          "Routes Slack and other channels to the right worker. Channel plumbing stays out of the execution pod.",
      },
      {
        id: "worker",
        name: "Agent worker",
        tagline: "workspace + execution",
        description:
          "StatefulSet pod with the context, knowledge base, skills, and workspace you configure; model routing and tools (MCP).",
      },
      {
        id: "trust",
        name: "Cluster trust services",
        tagline: "Go services in-cluster",
        description:
          "GitHub credential broker and agent identity mint short-lived credentials—workers use Kubernetes service-account identity to call them.",
      },
    ],
  },
  pillars: {
    eyebrow: "// pillars",
    title: "What every production agent needs.",
    items: [
      { id: "context", name: "Context", summary: "Identity, rules, scope" },
      { id: "knowledge", name: "Knowledge base", summary: "Static reference docs" },
      { id: "skills", name: "Skills", summary: "Callable procedures" },
      { id: "workspace", name: "Workspace", summary: "Repos, files, volume" },
      { id: "tools", name: "Tools", summary: "MCP, external APIs" },
      { id: "memory", name: "Memory", summary: "Preferences, entities, corrections" },
      { id: "model", name: "Model", summary: "Provider, routing" },
      {
        id: "execution",
        name: "Execution environment",
        summary: "Kubernetes pod, gateway",
      },
      {
        id: "trust",
        name: "Trust & permissions",
        summary: "Broker, identity, policy",
      },
      { id: "channels", name: "Channels", summary: "Slack, webhooks, gateway" },
      {
        id: "observability",
        name: "Observability",
        summary: "Logs, metrics, traces",
      },
    ],
  },
  pillarsClosing: {
    title: "You supply the agent; durable work stays in your GitHub org.",
    body:
      "You configure context, knowledge, skills, and workspace. The agent opens branches, commits, and PRs in repositories you own—state lives in your GitHub account, not in a disposable chat session.",
  },
  trustBoundary: {
    eyebrow: "// trust boundary",
    title: "What stays in the pod vs what does not.",
  },
};
