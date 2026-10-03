import type { ReactNode } from "react";
import { DIAGRAM_MONO } from "@/components/diagram/primitives";

const PAD_LEFT = 12;
const ICON_SLOT = 34;
const ICON_SIZE = 24;

type DiagramServiceBoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  icon: ReactNode;
  iconColor?: string;
};

export function DiagramServiceBox({
  x,
  y,
  w,
  h,
  title,
  lines,
  icon,
  iconColor = "var(--accent)",
}: DiagramServiceBoxProps) {
  const lineLead = 12;
  const titleLead = 16;
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
        rx={9}
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth={1.2}
      />
      <g transform={`translate(${x + PAD_LEFT}, ${iconY})`} color={iconColor}>
        {icon}
      </g>
      <text
        x={textX}
        y={titleY}
        fontFamily={DIAGRAM_MONO}
        fontSize={9.5}
        letterSpacing={0.4}
        fill="var(--accent)"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={`${line}-${i}`}
          x={textX}
          y={lineStart + i * lineLead}
          fontFamily={DIAGRAM_MONO}
          fontSize={9}
          fill="var(--ink-muted)"
        >
          {line}
        </text>
      ))}
    </g>
  );
}
