import {
  IconBroker,
  IconCloud,
  IconGitHub,
  IconHermes,
  IconIdentity,
  IconSlack,
  IconWorker,
} from "@/components/agents/agent-icons";
import { DiagramIconBox } from "@/components/agents/diagram-icon-box";
import { DiagramServiceBox } from "@/components/agents/diagram-service-box";
import {
  DIAGRAM_ARROW_ID,
  DIAGRAM_MONO,
  DiagramArrowMarkerDefs,
  DiagramScrollShell,
} from "@/components/diagram/primitives";

const ARIA =
  "Slack to agent pod; worker calls in-cluster GitHub credential broker and agent identity, then GitHub, cloud IAM, and MCP outside the cluster.";

const BOX_W = 176;
const BOX_H = 76;
const POD_W = 188;
const POD_H = 212;
const SERVICE_W = 228;
const SERVICE_H = 76;
const SERVICE_STACK = 26;
/** Gap between in-cluster columns (pod ↔ brokers). */
const COL_INNER = 36;
/** Clear space between the K8s border and Slack / external provider cards. */
const K8S_MARGIN = 28;
const LANE_GAP = 22;
const PAD_X = 20;
const PAD_RIGHT = 28;
const PAD_TOP = 56;
const PAD_BOTTOM = 32;
const K8S_PAD_X = 36;
const K8S_PAD_TOP = 40;
const K8S_PAD_BOTTOM = 32;

function IconMcp({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.5 12v2M16.5 12v2M11 12v2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function AgentPodBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const pad = 14;
  const textX = pad + 38;
  const mid = y + h / 2;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth={1.4}
      />
      <text
        x={x + pad}
        y={y + 22}
        fontFamily={DIAGRAM_MONO}
        fontSize={10}
        letterSpacing={1}
        fill="var(--accent)"
      >
        AGENT POD
      </text>
      <line x1={x + pad} y1={y + 30} x2={x + w - pad} y2={y + 30} stroke="var(--line-strong)" strokeWidth={1} />
      <g transform={`translate(${x + pad}, ${y + 38})`} color="var(--accent-2)">
        <IconHermes size={22} />
      </g>
      <text x={x + textX} y={y + 52} fontFamily={DIAGRAM_MONO} fontSize={10} fill="var(--ink)">
        Hermes gateway
      </text>
      <text x={x + textX} y={y + 66} fontFamily={DIAGRAM_MONO} fontSize={9} fill="var(--ink-muted)">
        channels in
      </text>
      <line x1={x + pad} y1={mid} x2={x + w - pad} y2={mid} stroke="var(--line-strong)" strokeWidth={1} />
      <g transform={`translate(${x + pad}, ${mid + 10})`} color="var(--accent)">
        <IconWorker size={22} />
      </g>
      <text x={x + textX} y={mid + 24} fontFamily={DIAGRAM_MONO} fontSize={10} fill="var(--ink)">
        Agent worker
      </text>
      <text x={x + textX} y={mid + 36} fontFamily={DIAGRAM_MONO} fontSize={9} fill="var(--ink-muted)">
        execution + tools
      </text>
    </g>
  );
}

export function AgentPlatformMap() {
  const arrow = `url(#${DIAGRAM_ARROW_ID})`;

  const laneTop = PAD_TOP + 14;
  const servicesH = SERVICE_H * 2 + SERVICE_STACK;
  const yGhSvc = laneTop;
  const yIdSvc = yGhSvc + SERVICE_H + SERVICE_STACK;

  const cyGhSvc = yGhSvc + SERVICE_H / 2;
  const cyIdSvc = yIdSvc + SERVICE_H / 2;

  const yMcp = yIdSvc + SERVICE_H + LANE_GAP;
  const cyMcp = yMcp + BOX_H / 2;

  const podY = laneTop + (servicesH - POD_H) / 2;
  const podH = POD_H;

  const xSlack = PAD_X;
  const xPod = xSlack + BOX_W + K8S_MARGIN + K8S_PAD_X;
  const xCluster = xPod + POD_W + COL_INNER;
  const xExt = xCluster + SERVICE_W + K8S_PAD_X + K8S_MARGIN;

  const hermesInY = podY + 52;
  const workerOutX = xPod + POD_W;
  const workerLaneY = podY + podH * 0.62;

  const innerTop = Math.min(podY, yGhSvc);
  const innerBottom = Math.max(podY + podH, yIdSvc + SERVICE_H);
  const innerLeft = xPod;
  const innerRight = xCluster + SERVICE_W;

  const k8sX = innerLeft - K8S_PAD_X;
  const k8sY = innerTop - K8S_PAD_TOP;
  const k8sW = innerRight - innerLeft + K8S_PAD_X * 2;
  const k8sH = innerBottom - innerTop + K8S_PAD_TOP + K8S_PAD_BOTTOM;

  const yGitHub = yGhSvc + (SERVICE_H - BOX_H) / 2;
  const yCloud = yIdSvc + (SERVICE_H - BOX_H) / 2;

  const svgW = xExt + BOX_W + PAD_RIGHT;
  const svgH = yMcp + BOX_H + PAD_BOTTOM;

  const gutterX = workerOutX + COL_INNER / 2;

  /** Orthogonal route: worker → lane Y → target column (aligned horizontals per row). */
  const fromWorkerToLane = (laneY: number, destX: number) => {
    if (Math.abs(workerLaneY - laneY) < 3) {
      return `M${workerOutX} ${laneY} H${destX}`;
    }
    return `M${workerOutX} ${workerLaneY} H${gutterX} V${laneY} H${destX}`;
  };

  return (
    <DiagramScrollShell ariaLabel={ARIA} viewBox={`0 0 ${svgW} ${svgH}`}>
      <defs>
        <DiagramArrowMarkerDefs />
      </defs>

      <rect
        x={k8sX}
        y={k8sY}
        width={k8sW}
        height={k8sH}
        rx={10}
        fill="var(--bg)"
        stroke="var(--line-strong)"
        strokeWidth={1.2}
      />
      <text
        x={k8sX + 16}
        y={k8sY + 18}
        fontFamily={DIAGRAM_MONO}
        fontSize={9}
        letterSpacing={1.5}
        fill="var(--ink-muted)"
      >
        KUBERNETES
      </text>
      <DiagramIconBox
        x={xSlack}
        y={hermesInY - BOX_H / 2}
        w={BOX_W}
        h={BOX_H}
        title="SLACK"
        lines={["workspace channel"]}
        icon={<IconSlack size={24} />}
      />

      <AgentPodBox x={xPod} y={podY} w={POD_W} h={podH} />

      <DiagramServiceBox
        x={xCluster}
        y={yGhSvc}
        w={SERVICE_W}
        h={SERVICE_H}
        title="GITHUB CREDENTIAL BROKER"
        lines={["mint repo credentials"]}
        icon={<IconBroker size={24} />}
      />

      <DiagramServiceBox
        x={xCluster}
        y={yIdSvc}
        w={SERVICE_W}
        h={SERVICE_H}
        title="AGENT IDENTITY"
        lines={["OIDC · cloud API tokens"]}
        icon={<IconIdentity size={24} />}
        iconColor="var(--accent-2)"
      />

      <DiagramIconBox
        x={xExt}
        y={yGitHub}
        w={BOX_W}
        h={BOX_H}
        title="GITHUB"
        lines={["git repos · REST API"]}
        icon={<IconGitHub size={24} />}
      />

      <DiagramIconBox
        x={xExt}
        y={yCloud}
        w={BOX_W}
        h={BOX_H}
        title="CLOUD IAM"
        lines={["AWS · GCP · Azure"]}
        icon={<IconCloud size={24} />}
      />

      <DiagramIconBox
        x={xExt}
        y={yMcp}
        w={BOX_W}
        h={BOX_H}
        title="MCP"
        lines={["external tool servers"]}
        icon={<IconMcp />}
        iconColor="var(--ok)"
      />

      <path
        d={`M${xSlack + BOX_W} ${hermesInY} H${xPod}`}
        stroke="var(--accent)"
        strokeWidth={1.4}
        markerEnd={arrow}
        className="flow-line"
      />
      <path
        d={fromWorkerToLane(cyGhSvc, xCluster)}
        stroke="var(--accent)"
        strokeWidth={1.4}
        fill="none"
        markerEnd={arrow}
        className="flow-line"
      />
      <path
        d={`M${xCluster + SERVICE_W} ${cyGhSvc} H${xExt}`}
        stroke="var(--accent)"
        strokeWidth={1.4}
        markerEnd={arrow}
        className="flow-line"
      />

      <path
        d={fromWorkerToLane(cyIdSvc, xCluster)}
        stroke="var(--accent)"
        strokeWidth={1.4}
        fill="none"
        markerEnd={arrow}
        className="flow-line"
      />
      <path
        d={`M${xCluster + SERVICE_W} ${cyIdSvc} H${xExt}`}
        stroke="var(--accent)"
        strokeWidth={1.4}
        markerEnd={arrow}
        className="flow-line"
      />

      <path
        d={fromWorkerToLane(cyMcp, xExt)}
        stroke="var(--ok)"
        strokeWidth={1.2}
        strokeDasharray="5 5"
        fill="none"
        markerEnd={arrow}
      />
    </DiagramScrollShell>
  );
}
