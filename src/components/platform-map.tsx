/**
 * Platform map diagram: cluster at the center, pipelines / security / monitoring
 * around it, cloud + Terraform strip below. Brand icons from /public/brand/png/.
 */

const MONO = "var(--font-geist-mono), monospace";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  icon?: string;
  icons?: string[];
  accent?: boolean;
};

function BrandIcon({
  slug,
  x,
  y,
  size = 24,
}: {
  slug: string;
  x: number;
  y: number;
  size?: number;
}) {
  return (
    <image
      href={`/brand/png/${slug}.png?v=2`}
      x={x}
      y={y}
      width={size}
      height={size}
      aria-hidden
    />
  );
}

function IconBox({ x, y, w, h, title, lines, icon, icons, accent }: BoxProps) {
  const slugs = icons ?? (icon ? [icon] : []);
  const pad = 14;
  const iconSize = 22;
  const iconGap = 14;
  const iconRowY = y + 12;
  const titleY =
    slugs.length > 0 ? iconRowY + iconSize + 22 : y + 28;
  const textX = x + pad;

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
      {slugs.map((slug, i) => (
        <BrandIcon
          key={slug}
          slug={slug}
          x={x + pad + i * (iconSize + iconGap)}
          y={iconRowY}
          size={iconSize}
        />
      ))}
      <text
        x={textX}
        y={titleY}
        fontFamily={MONO}
        fontSize={12}
        letterSpacing={1.2}
        fill="var(--accent)"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={textX}
          y={titleY + 16 + i * 14}
          fontFamily={MONO}
          fontSize={10}
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
  const clusterX = 260;
  const clusterY = 30;
  const clusterW = 440;
  const clusterPad = 25;
  const innerColGap = 20;
  const innerRowGap = 18;
  const innerH = 80;
  const innerW = (clusterW - clusterPad * 2 - innerColGap) / 2;
  const innerCol1X = clusterX + clusterPad;
  const innerCol2X = innerCol1X + innerW + innerColGap;
  const innerRow1Y = clusterY + 72;
  const innerRow2Y = innerRow1Y + innerH + innerRowGap;
  const clusterFooterY1 = innerRow2Y + innerH + 22;
  const clusterFooterY2 = clusterFooterY1 + 18;
  const clusterH = clusterFooterY2 + 24 - clusterY;
  const clusterBottom = clusterY + clusterH;
  const clusterK8sIconSize = 28;

  const infraGap = 36;
  const infraY = clusterBottom + infraGap;
  const infraH = 96;
  const infraX = clusterX;
  const infraW = clusterW;
  const svgH = infraY + infraH + 20;

  const cloudSlugs = ["terraform", "aws", "googlecloud", "cloudflare", "digitalocean"];
  const iconSize = 30;
  const iconGap = 24;
  const rowWidth = cloudSlugs.length * iconSize + (cloudSlugs.length - 1) * iconGap;
  const rowStartX = infraX + (infraW - rowWidth) / 2;
  const iconRowY = infraY + 54;

  const clusterMidY = clusterY + clusterH / 2;

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 960 ${svgH}`}
        role="img"
        aria-label="Platform map: Terraform and cloud providers provision Kubernetes; GitHub Actions deploy via GitOps; Grafana, Trivy, and Falco observe and secure production."
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

        <path
          d={`M190 ${clusterMidY} H${clusterX}`}
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />
        <Label x={223} y={clusterMidY - 10} text="GitOps" />

        <path
          d={`M${clusterX + clusterW} ${clusterY + 88} H770`}
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />
        <Label x={733} y={clusterY + 78} text="telemetry" />

        <path
          d={`M770 ${clusterMidY + 42} H${clusterX + clusterW}`}
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerStart="url(#pm-arrow)"
          markerEnd="url(#pm-arrow)"
        />

        <path
          d={`M${clusterX + clusterW / 2} ${infraY} V${clusterBottom + 12}`}
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#pm-arrow)"
          className="flow-line"
        />

        <rect
          x={clusterX}
          y={clusterY}
          width={clusterW}
          height={clusterH}
          rx={10}
          fill="var(--bg)"
          stroke="var(--line-strong)"
          strokeWidth={1.2}
        />
        <text
          x={innerCol1X}
          y={clusterY + 28}
          fontFamily={MONO}
          fontSize={12}
          letterSpacing={2}
          fill="var(--ink)"
        >
          KUBERNETES CLUSTER
        </text>
        <BrandIcon
          slug="kubernetes"
          x={clusterX + clusterW - clusterK8sIconSize - clusterPad}
          y={clusterY + 8}
          size={clusterK8sIconSize}
        />

        <IconBox
          x={innerCol1X}
          y={innerRow1Y}
          w={innerW}
          h={innerH}
          title="ARGO CD"
          lines={["gitops engine"]}
          icon="argo"
        />
        <IconBox
          x={innerCol2X}
          y={innerRow1Y}
          w={innerW}
          h={innerH}
          title="TRAEFIK"
          lines={["ingress + TLS + DNS"]}
          icon="traefikproxy"
        />
        <IconBox
          x={innerCol1X}
          y={innerRow2Y}
          w={innerW}
          h={innerH}
          title="EXT-SECRETS"
          lines={["Infisical sync"]}
          icon="vault"
        />
        <IconBox
          x={innerCol2X}
          y={innerRow2Y}
          w={innerW}
          h={innerH}
          title="YOUR APPS"
          lines={["via app-starter"]}
          icon="helm"
          accent
        />
        <text
          x={innerCol1X}
          y={clusterFooterY1}
          fontFamily={MONO}
          fontSize={10}
          fill="var(--ink-muted)"
        >
          + cert-manager · external-dns · cosign · policy-controller
        </text>
        <text
          x={innerCol1X}
          y={clusterFooterY2}
          fontFamily={MONO}
          fontSize={10}
          fill="var(--ink-muted)"
        >
          + prometheus · alloy · opentelemetry · tetragon
        </text>

        <IconBox
          x={0}
          y={clusterMidY - 55}
          w={190}
          h={110}
          title="PIPELINES"
          lines={["GitHub Actions", "build · scan · sign", "OIDC"]}
          icon="github"
        />
        <IconBox
          x={770}
          y={clusterY + 48}
          w={190}
          h={110}
          title="MONITORING"
          lines={["Grafana Cloud", "metrics · logs · traces", "dashboards as code"]}
          icon="grafana"
        />
        <IconBox
          x={770}
          y={clusterMidY + 8}
          w={190}
          h={110}
          title="SECURITY"
          lines={["Trivy · Kubescape", "Falco · Cosign admission"]}
          icons={["trivy", "falco"]}
        />

        <g>
          <rect
            x={infraX}
            y={infraY}
            width={infraW}
            height={infraH}
            rx={8}
            fill="var(--surface)"
            stroke="var(--line-strong)"
            strokeWidth={1.2}
          />
          <text
            x={infraX + 16}
            y={infraY + 24}
            fontFamily={MONO}
            fontSize={12}
            letterSpacing={1.2}
            fill="var(--accent)"
          >
            INFRASTRUCTURE
          </text>
          <text
            x={infraX + 16}
            y={infraY + 40}
            fontFamily={MONO}
            fontSize={10}
            fill="var(--ink-muted)"
          >
            Terraform Cloud · multi-cloud
          </text>
          {cloudSlugs.map((slug, i) => (
            <BrandIcon
              key={slug}
              slug={slug}
              x={rowStartX + i * (iconSize + iconGap)}
              y={iconRowY}
              size={iconSize}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
