import type { AgentPillar } from "@/lib/content/agents-page";
import { IconPillar, type PillarIconId } from "@/components/agents/agent-icons";

const PILLAR_STYLES: Record<
  PillarIconId,
  { border: string; bg: string; icon: string }
> = {
  context: { border: "#3ce3ff", bg: "rgba(60,227,255,0.14)", icon: "#3ce3ff" },
  knowledge: { border: "#a08bff", bg: "rgba(160,139,255,0.14)", icon: "#c4b5ff" },
  skills: { border: "#52e09b", bg: "rgba(82,224,155,0.12)", icon: "#52e09b" },
  workspace: { border: "#6ee7ff", bg: "rgba(110,231,255,0.1)", icon: "#6ee7ff" },
  tools: { border: "#f0b429", bg: "rgba(240,180,41,0.12)", icon: "#f0d060" },
  memory: { border: "#ff7eb6", bg: "rgba(255,126,182,0.12)", icon: "#ff9ec9" },
  model: { border: "#7dd3fc", bg: "rgba(125,211,252,0.1)", icon: "#7dd3fc" },
  execution: { border: "#326ce5", bg: "rgba(50,108,229,0.18)", icon: "#6b9fff" },
  trust: { border: "#52e09b", bg: "rgba(82,224,155,0.08)", icon: "#52e09b" },
  channels: { border: "#e879f9", bg: "rgba(232,121,249,0.12)", icon: "#e879f9" },
  observability: { border: "#94a0ba", bg: "rgba(148,160,186,0.12)", icon: "#b8c4de" },
};

const COLUMNS: { label: string; ids: PillarIconId[] }[] = [
  { label: "What you provide", ids: ["context", "knowledge", "skills", "workspace"] },
  { label: "How it runs", ids: ["tools", "memory", "model"] },
  { label: "Platform", ids: ["execution", "trust", "channels", "observability"] },
];

type PillarsGraphicProps = {
  items: AgentPillar[];
};

export function PillarsGraphic({ items }: PillarsGraphicProps) {
  const byId = new Map(items.map((p) => [p.id, p]));

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {COLUMNS.map((column) => (
        <div key={column.label} className="flex min-w-0 flex-col gap-4">
          <p className="border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {column.label}
          </p>
          {column.ids.map((id) => {
            const pillar = byId.get(id);
            if (!pillar) return null;
            const style = PILLAR_STYLES[id];
            return (
              <article
                key={id}
                className="rounded-lg border p-4"
                style={{
                  borderColor: style.border,
                  backgroundColor: style.bg,
                }}
              >
                <div className="flex gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-bg/40"
                    style={{ borderColor: style.border, color: style.icon }}
                  >
                    <IconPillar id={id} size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-ink">{pillar.name}</h3>
                    <p className="mt-1 font-mono text-xs leading-snug text-ink-muted">
                      {pillar.summary}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}
