/**
 * Platform map diagram: the cluster at the center, with infrastructure,
 * pipelines, security, and monitoring around it. Pure themed SVG.
 */

const MONO = "var(--font-geist-mono), monospace";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  accent?: boolean;
};

function Box({ x, y, w, h, title, lines, accent }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill="var(--surface)"
        stroke={accent ? "var(--accent)" : "var(--line-strong)"}
        strokeWidth={1.2}
      />
      <text
        x={x + 14}
        y={y + 23}
        fontFamily={MONO}
        fontSize={12}
        letterSpacing={1.5}
        fill="var(--accent)"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 14}
          y={y + 43 + i * 15}
          fontFamily={MONO}
          fontSize={11}
          fill={i === 0 ? "var(--ink)" : "var(--ink-muted)"}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Label({
  x,
  y,
  text,
  anchor = "middle",
}: {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontFamily={MONO}
      fontSize={10}
      fill="var(--ink-muted)"
      textAnchor={anchor}
    >
      {text}
    </text>
  );
}

export function PlatformMap() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 960 430"
        role="img"
        aria-label="Platform map: Terraform provisions the Kubernetes cluster; pipelines deploy into it via GitOps; security tooling scans and enforces; metrics, logs, and traces flow out to monitoring."
        className="min-w-[880px]"
      >
        <defs>
          <marker
            id="pm-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* pipelines -> cluster */}
        <path
          d="M190 185 H256"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />
        <Label x={223} y={175} text="GitOps" />

        {/* cluster -> monitoring */}
        <path
          d="M700 115 H766"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />
        <Label x={733} y={105} text="telemetry" />

        {/* security <-> cluster */}
        <path
          d="M766 285 H704"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerStart="url(#pm-arrow)"
          markerEnd="url(#pm-arrow)"
        />
        <Label x={735} y={275} text="scan · enforce" />

        {/* infra -> cluster */}
        <path
          d="M480 368 V346"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />
        <Label x={498} y={362} text="provisions" anchor="start" />

        {/* cluster shell */}
        <rect
          x={260}
          y={30}
          width={440}
          height={310}
          rx={10}
          fill="var(--bg)"
          stroke="var(--line-strong)"
          strokeWidth={1.2}
        />
        <text
          x={285}
          y={62}
          fontFamily={MONO}
          fontSize={12}
          letterSpacing={2}
          fill="var(--ink)"
        >
          KUBERNETES CLUSTER
        </text>
        <text x={285} y={79} fontFamily={MONO} fontSize={10} fill="var(--ink-muted)">
          DOKS · EKS
        </text>

        {/* inside the cluster */}
        <Box x={285} y={95} w={190} h={62} title="ARGOCD" lines={["gitops engine"]} />
        <Box x={485} y={95} w={190} h={62} title="TRAEFIK" lines={["ingress + TLS + DNS"]} />
        <Box
          x={285}
          y={172}
          w={190}
          h={62}
          title="EXT-SECRETS"
          lines={["Infisical sync"]}
        />
        <Box
          x={485}
          y={172}
          w={190}
          h={62}
          title="YOUR APPS"
          lines={["via app-starter"]}
          accent
        />
        <text
          x={285}
          y={276}
          fontFamily={MONO}
          fontSize={10}
          fill="var(--ink-muted)"
        >
          + cert-manager · external-dns · reloader · trivy-operator
        </text>
        <text
          x={285}
          y={294}
          fontFamily={MONO}
          fontSize={10}
          fill="var(--ink-muted)"
        >
          + prometheus · alloy · beyla · opencost · tetragon
        </text>

        {/* satellites */}
        <Box
          x={0}
          y={130}
          w={190}
          h={110}
          title="PIPELINES"
          lines={["GitHub Actions", "build · scan · sign", "OIDC, no static keys"]}
        />
        <Box
          x={770}
          y={60}
          w={190}
          h={110}
          title="MONITORING"
          lines={["Grafana Cloud", "metrics · logs · traces", "dashboards as code"]}
        />
        <Box
          x={770}
          y={230}
          w={190}
          h={110}
          title="SECURITY"
          lines={["Trivy · Kubescape", "Tetragon · Falco", "Cosign admission"]}
        />
        <Box
          x={260}
          y={370}
          w={440}
          h={58}
          title="INFRASTRUCTURE"
          lines={["Terraform · Terraform Cloud"]}
        />
      </svg>
    </div>
  );
}
