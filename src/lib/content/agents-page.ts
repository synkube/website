/**
 * Copy and structured data for /agents. Edit here to change marketing text;
 * page and section components only compose this module.
 */

export type AgentLayer = {
  id: string;
  name: string;
  points: string[];
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
    lede: string;
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
    lede:
      "Channels hit the gateway. The worker runs your config and tools. For GitHub or cloud APIs it calls in-cluster Go services that mint short-lived credentials—nothing long-lived in the pod.",
    items: [
      {
        id: "gateway",
        name: "Hermes gateway",
        points: [
          "Routes Slack, webhooks, and channels to the right worker",
          "Channel auth stays out of the execution pod",
          "One gateway can front many workers",
        ],
      },
      {
        id: "worker",
        name: "Agent worker",
        points: [
          "StatefulSet pod: context, KB, skills, and workspace you configure",
          "Model routing and MCP at runtime",
          "Calls broker and identity with Kubernetes service-account identity",
        ],
      },
      {
        id: "trust",
        name: "Trust services",
        points: [
          "GitHub credential broker: short-lived git and gh tokens",
          "Agent identity: OIDC for cloud provider APIs",
          "Signing keys and OAuth stay in trust services, not the worker",
        ],
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
