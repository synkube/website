import type { ReactNode } from "react";
import { DIAGRAM_MONO } from "@/components/diagram/primitives";

const PAD_LEFT = 12;
const ICON_SLOT = 34;
const ICON_SIZE = 24;

type DiagramIconBoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  icon: ReactNode;
  accent?: boolean;
  iconColor?: string;
};

/** Icon left; title and lines to the right; content vertically centered in the card. */
export function DiagramIconBox({
  x,
  y,
  w,
  h,
  title,
  lines,
  icon,
  accent,
  iconColor = "var(--accent)",
}: DiagramIconBoxProps) {
  const titleSize = 10;
  const lineSize = 9;
  const lineLead = 13;
  const titleLead = 17;

  const textBlockH = 12 + titleLead + lines.length * lineLead;
  const innerH = Math.max(ICON_SIZE, textBlockH);
  const top = y + (h - innerH) / 2;

  const textX = x + PAD_LEFT + ICON_SLOT;
  const titleY = top + 12;
  const lineStart = titleY + titleLead;
  const iconY = top + (innerH - ICON_SIZE) / 2;

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
      <g transform={`translate(${x + PAD_LEFT}, ${iconY})`} color={iconColor}>
        {icon}
      </g>
      <text
        x={textX}
        y={titleY}
        fontFamily={DIAGRAM_MONO}
        fontSize={titleSize}
        letterSpacing={0.5}
        fill="var(--accent)"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={textX}
          y={lineStart + i * lineLead}
          fontFamily={DIAGRAM_MONO}
          fontSize={lineSize}
          fill="var(--ink-muted)"
        >
          {line}
        </text>
      ))}
    </g>
  );
}
