export const site = {
  name: "SynKube",
  domain: "synkube.com",
  url: "https://synkube.com",
  tagline: "Production-ready Kubernetes infrastructure in days, not months.",
  email: "hello@synkube.com",
  github: "https://github.com/synkube",
  artifactHub: "https://artifacthub.io/packages/search?org=synkube",
  helmRepo: "https://synkube.github.io/charts",
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
};

export const products: Product[] = [
  {
    id: "charts",
    name: "Helm Charts",
    tagline: "One chart, all workloads.",
    description:
      "The app-starter chart family covers roughly 90% of Kubernetes workloads (Deployments, StatefulSets, Jobs, and CronJobs) behind a single, documented values interface. Extension charts handle namespace- and cluster-scoped resources so applications stay clean.",
    points: [
      "app-starter: universal workload chart with one values contract",
      "app-extensions: Secrets, ConfigMaps, RBAC, NetworkPolicies",
      "platform-extensions: ClusterRoles, ClusterSecretStores, Certificates",
      "Published open source on Artifact Hub and as OCI on GHCR",
    ],
  },
  {
    id: "starter-kits",
    name: "Platform Starter Kits",
    tagline: "The platform, as repos you own.",
    description:
      "Terraform and ArgoCD configuration that stands up a complete platform: cluster, networking, ingress, TLS, DNS, secrets, observability, and security. Delivered as versioned Git repositories in your org. No black box, no lock-in.",
    points: [
      "DigitalOcean (DOKS): live, running our own production platform",
      "AWS (EKS): multi-account organization and landing zone, in progress",
      "GCP (GKE): planned",
      "GitOps from the first commit: app-of-apps, layered values, sync waves",
    ],
  },
  {
    id: "app-starters",
    name: "App Starter Repos",
    tagline: "From git init to deployed.",
    description:
      "Opinionated application templates for Go, TypeScript, and Python monorepos with CI, container builds, and GitOps delivery already wired to the platform and charts.",
    points: [
      "Go services with Goreleaser multi-arch builds",
      "TypeScript / Next.js monorepos with Turborepo and pnpm",
      "Python services on uv",
      "Images to GHCR, deploys via ArgoCD, no custom scripts",
    ],
  },
  {
    id: "pipelines",
    name: "Deployment Pipelines",
    tagline: "Golden paths, supply chain included.",
    description:
      "Reusable GitHub Actions workflows that encode the whole delivery path: build, test, scan, sign, publish, deploy. Security checks are the default, not an add-on.",
    points: [
      "Pinned, least-privilege reusable workflows",
      "Trivy and CodeQL scanning wired into every build",
      "Cosign image signing with admission enforcement",
      "OIDC-based auth, no long-lived credentials in CI",
    ],
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "platform-setup",
    name: "Platform Setup",
    description:
      "A production Kubernetes platform stood up in your cloud account in weeks, not quarters. Fixed scope, versioned repos you own, and a handover your team can actually operate.",
    points: [
      "Cluster, ingress, TLS, DNS, and secrets management",
      "GitOps bootstrap with ArgoCD",
      "Observability and security baselines included",
      "Documentation and handover session",
    ],
  },
  {
    id: "migrations",
    name: "Migrations",
    description:
      "Moving to Kubernetes, between clouds, or off a chart catalog that just went commercial. We plan the cutover, run it with you, and leave the result maintainable.",
    points: [
      "Workload migrations from VMs, Compose, or other orchestrators",
      "Chart migrations, including off paywalled catalogs",
      "Cloud-to-cloud platform moves",
      "CI validation so nothing lands broken",
    ],
  },
  {
    id: "consulting",
    name: "Consulting & Support",
    description:
      "Ongoing platform engineering for teams that don't want a full-time hire: upgrades, hardening, observability, and honest architecture advice from people who run this stack in production.",
    points: [
      "Cluster and chart upgrades",
      "Security and compliance hardening",
      "Observability and cost visibility",
      "Architecture reviews and roadmaps",
    ],
  },
];

export const journey = [
  {
    step: "01",
    name: "Provision",
    detail: "Terraform stands up cluster, network, and cloud services.",
  },
  {
    step: "02",
    name: "Bootstrap",
    detail: "ArgoCD app-of-apps installs the platform layer from Git.",
  },
  {
    step: "03",
    name: "Deploy",
    detail: "Your apps ship through charts and golden-path pipelines.",
  },
  {
    step: "04",
    name: "Operate",
    detail: "Observability, security, and cost visibility on by default.",
  },
];

export const stack: { group: string; tools: string[] }[] = [
  { group: "Infrastructure", tools: ["Terraform", "Terraform Cloud"] },
  { group: "GitOps", tools: ["ArgoCD", "Helm", "Kubeconform"] },
  { group: "Networking", tools: ["Traefik", "cert-manager", "External DNS", "Cloudflare"] },
  { group: "Secrets", tools: ["External Secrets Operator", "Infisical"] },
  {
    group: "Observability",
    tools: ["Prometheus", "Grafana", "OpenTelemetry", "Beyla", "OpenCost"],
  },
  {
    group: "Security",
    tools: ["Trivy", "Cosign", "Tetragon", "Falco", "Kubescape", "CodeQL"],
  },
  {
    group: "Clouds",
    tools: ["DigitalOcean (live)", "AWS (next)", "GCP (planned)"],
  },
];

export { agentsPage } from "./content/agents-page";
export type { AgentsPageContent } from "./content/agents-page";

export const proofPoints = [
  "GitOps app-of-apps running our own production workloads",
  "Images scanned with Trivy and signed with Cosign on every release",
  "Runtime security via eBPF: Tetragon and Falco in-cluster",
  "Dashboards, alerts, and cost visibility managed as code",
];
