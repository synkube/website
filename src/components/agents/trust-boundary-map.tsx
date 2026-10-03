import { DIAGRAM_MONO, DiagramScrollShell } from "@/components/diagram/primitives";

const ARIA =
  "Trust boundary: agent worker pod holds your setup and runtime state. Two cluster services hold GitHub and OIDC secrets.";

const CLUSTER_SERVICES = [
  {
    title: "GitHub credential broker",
    line: "App credentials · OAuth · signing keys",
  },
  {
    title: "Agent identity",
    line: "OIDC mint · cloud API access",
  },
] as const;

export function TrustBoundaryMap() {
  const panelY = 40;
  const boxX = 476;
  const boxW = 360;
  const boxH = 64;
  const boxGap = 12;
  const firstY = 96;

  const clusterContentH = CLUSTER_SERVICES.length * boxH + (CLUSTER_SERVICES.length - 1) * boxGap;
  const clusterBottom = firstY + clusterContentH;
  const podListBottom = 122 + 4 * 32;
  const contentBottom = Math.max(clusterBottom, podListBottom) + 12;
  const panelH = contentBottom - panelY;

  const svgH = contentBottom + 4;

  return (
    <DiagramScrollShell ariaLabel={ARIA} minWidth={720} viewBox={`0 0 880 ${svgH}`}>
      <defs>
        <linearGradient id="pod-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--ok)" stopOpacity={0.12} />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.06} />
        </linearGradient>
        <linearGradient id="svc-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.14} />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity={0.1} />
        </linearGradient>
      </defs>

      <rect
        x={24}
        y={panelY}
        width={400}
        height={panelH}
        rx={12}
        fill="url(#pod-fill)"
        stroke="var(--ok)"
        strokeWidth={1.5}
      />
      <text x={48} y={72} fontFamily={DIAGRAM_MONO} fontSize={13} letterSpacing={2} fill="var(--ok)">
        AGENT WORKER POD
      </text>
      <text x={48} y={88} fontFamily={DIAGRAM_MONO} fontSize={10} fill="var(--ink-muted)">
        your setup + runtime state
      </text>

      {[
        "Context, identity, rules",
        "Knowledge base (read-only)",
        "Skills & workspace layout",
        "Memory (preferences, corrections)",
        "Model config · MCP tools",
      ].map((label, i) => (
        <g key={label}>
          <circle cx={56} cy={110 + i * 32} r={4} fill="var(--ok)" />
          <text x={72} y={114 + i * 32} fontFamily={DIAGRAM_MONO} fontSize={11} fill="var(--ink)">
            {label}
          </text>
        </g>
      ))}

      <rect
        x={456}
        y={panelY}
        width={400}
        height={panelH}
        rx={12}
        fill="url(#svc-fill)"
        stroke="var(--accent)"
        strokeWidth={1.5}
      />
      <text x={480} y={72} fontFamily={DIAGRAM_MONO} fontSize={13} letterSpacing={2} fill="var(--accent)">
        CLUSTER SERVICES
      </text>

      {CLUSTER_SERVICES.map((svc, i) => {
        const y = firstY + i * (boxH + boxGap);
        return (
          <g key={svc.title}>
            <rect
              x={boxX}
              y={y}
              width={boxW}
              height={boxH}
              rx={8}
              fill="var(--surface)"
              stroke="var(--line-strong)"
              strokeWidth={1.2}
            />
            <text x={boxX + 16} y={y + 26} fontFamily={DIAGRAM_MONO} fontSize={11} fill="var(--accent)">
              {svc.title}
            </text>
            <text x={boxX + 16} y={y + 44} fontFamily={DIAGRAM_MONO} fontSize={9.5} fill="var(--ink-muted)">
              {svc.line}
            </text>
          </g>
        );
      })}
    </DiagramScrollShell>
  );
}
