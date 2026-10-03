import type { ReactNode } from "react";

/**
 * Shared themed SVG shell for marketing diagrams.
 * Uses CSS variables from globals.css — safe for static export.
 */

export const DIAGRAM_MONO = "var(--font-geist-mono), monospace";

export const DIAGRAM_ARROW_ID = "diagram-arrow";

export function DiagramArrowMarkerDefs({ id = DIAGRAM_ARROW_ID }: { id?: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX={9}
      refY={5}
      markerWidth={7}
      markerHeight={7}
      orient="auto-start-reverse"
    >
      <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
    </marker>
  );
}

function viewBoxSize(viewBox: string): { w: number; h: number } {
  const parts = viewBox.trim().split(/\s+/).map(Number);
  const w = parts[2] ?? 960;
  const h = parts[3] ?? 480;
  return { w, h };
}

export function DiagramScrollShell({
  children,
  minWidth,
  viewBox = "0 0 960 480",
  ariaLabel,
}: {
  children: ReactNode;
  minWidth?: number;
  viewBox?: string;
  ariaLabel: string;
}) {
  const { w: vbW, h: vbH } = viewBoxSize(viewBox);

  return (
    <div
      className="w-full overflow-x-auto"
      style={minWidth ? { minWidth } : undefined}
    >
      <div className="w-full min-w-0" style={{ aspectRatio: `${vbW} / ${vbH}` }}>
        <svg
          viewBox={viewBox}
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin meet"
          role="img"
          aria-label={ariaLabel}
          className="block"
        >
          {children}
        </svg>
      </div>
    </div>
  );
}
