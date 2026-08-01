/**
 * Delivery flow diagram: app code -> CI -> image + GitOps -> ArgoCD -> cluster.
 * Pure themed SVG so it inherits the site palette from CSS variables.
 */

const MONO = "var(--font-geist-mono), monospace";

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  accent?: boolean;
};

function Node({ x, y, w, h, title, lines, accent }: NodeProps) {
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
          y={y + 44 + i * 16}
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

function EdgeLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fontFamily={MONO}
      fontSize={10}
      fill="var(--ink-muted)"
      textAnchor="middle"
    >
      {text}
    </text>
  );
}

export function DeliveryFlow() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 960 340"
        role="img"
        aria-label="Delivery flow: app code goes through the CI pipeline, which publishes a signed image to GHCR and bumps values in the GitOps repo; ArgoCD syncs the chart to the Kubernetes cluster, which pulls the image."
        className="min-w-[880px]"
      >
        <defs>
          <marker
            id="df-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
          </marker>
          <marker
            id="df-arrow-dim"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--line-strong)" />
          </marker>
        </defs>

        {/* app -> pipeline */}
        <path
          d="M150 170 H203"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#df-arrow)"
          className="flow-line"
        />
        <EdgeLabel x={177} y={160} text="git push" />

        {/* pipeline -> image */}
        <path
          d="M385 150 C 415 130, 415 80, 438 66"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#df-arrow)"
          className="flow-line"
        />
        <EdgeLabel x={422} y={102} text="publish" />

        {/* pipeline -> gitops */}
        <path
          d="M385 190 C 415 210, 415 260, 438 274"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#df-arrow)"
          className="flow-line"
        />
        <EdgeLabel x={424} y={244} text="bump values" />

        {/* gitops -> argocd */}
        <path
          d="M620 280 C 650 274, 655 220, 673 200"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#df-arrow)"
          className="flow-line"
        />
        <EdgeLabel x={660} y={250} text="watch" />

        {/* argocd -> cluster */}
        <path
          d="M805 170 H848"
          stroke="var(--accent)"
          strokeWidth={1.4}
          fill="none"
          markerEnd="url(#df-arrow)"
          className="flow-line"
        />
        <EdgeLabel x={826} y={160} text="sync" />

        {/* image -> cluster (pull), secondary */}
        <path
          d="M620 60 C 750 60, 830 80, 893 103"
          stroke="var(--line-strong)"
          strokeWidth={1.2}
          strokeDasharray="4 5"
          fill="none"
          markerEnd="url(#df-arrow-dim)"
        />
        <EdgeLabel x={762} y={52} text="image pull" />

        <Node
          x={0}
          y={130}
          w={150}
          h={80}
          title="YOUR APP"
          lines={["apps repo", "Go · TS · Python"]}
        />
        <Node
          x={205}
          y={130}
          w={180}
          h={80}
          title="PIPELINE"
          lines={["GitHub Actions", "build · test · sign"]}
        />
        <Node
          x={440}
          y={20}
          w={180}
          h={80}
          title="IMAGE"
          lines={["GHCR registry", "scanned + signed"]}
        />
        <Node
          x={440}
          y={240}
          w={180}
          h={80}
          title="GITOPS REPO"
          lines={["app-starter chart", "+ env values"]}
        />
        <Node
          x={675}
          y={130}
          w={130}
          h={80}
          title="ARGOCD"
          lines={["auto-sync", "drift detection"]}
        />

        {/* cluster node with pods */}
        <g>
          <rect
            x={850}
            y={110}
            width={110}
            height={120}
            rx={8}
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth={1.2}
          />
          <text
            x={864}
            y={133}
            fontFamily={MONO}
            fontSize={12}
            letterSpacing={1.5}
            fill="var(--accent)"
          >
            K8S
          </text>
          <text
            x={864}
            y={152}
            fontFamily={MONO}
            fontSize={11}
            fill="var(--ink)"
          >
            DOKS · EKS
          </text>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={864 + i * 28}
              y={172}
              width={20}
              height={20}
              rx={4}
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth={1}
            />
          ))}
          <text
            x={864}
            y={216}
            fontFamily={MONO}
            fontSize={10}
            fill="var(--ink-muted)"
          >
            your pods
          </text>
        </g>
      </svg>
    </div>
  );
}
