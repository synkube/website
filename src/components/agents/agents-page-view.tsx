import Link from "next/link";
import type { AgentsPageContent } from "@/lib/content/agents-page";
import { AgentPlatformMap } from "@/components/agents/agent-platform-map";
import { PillarsGraphic } from "@/components/agents/pillars-graphic";
import { TrustBoundaryMap } from "@/components/agents/trust-boundary-map";
import { PageSection } from "@/components/agents/page-section";

type AgentsPageViewProps = {
  content: AgentsPageContent;
};

export function AgentsPageView({ content }: AgentsPageViewProps) {
  const { hero, layers, pillars, pillarsClosing, trustBoundary } = content;

  return (
    <>
      <section className="border-b border-line bg-bg-elevated">
        <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-14 sm:pb-12 sm:pt-16">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {hero.title}{" "}
            <span className="text-accent">{hero.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{hero.lede}</p>
          <p className="mt-5">
            <Link
              href={hero.contactHref}
              className="font-mono text-sm text-accent transition-opacity hover:opacity-85"
            >
              {hero.contactLabel}
            </Link>
          </p>
          <p className="eyebrow mt-12">{hero.architectureEyebrow}</p>
          <div className="mt-6 -mx-1 overflow-x-auto px-1 pb-1 sm:mt-8">
            <AgentPlatformMap />
          </div>
        </div>
      </section>

      <PageSection
        eyebrow={layers.eyebrow}
        title={layers.title}
        intro={layers.lede}
      >
        <ol className="flex list-none flex-col gap-5 p-0 sm:flex-row sm:items-stretch sm:gap-3">
          {layers.items.map((layer, index) => {
            const step = String(index + 1).padStart(2, "0");
            return (
              <li key={layer.id} className="contents sm:flex sm:flex-1 sm:items-stretch">
                <article className="flex min-w-0 flex-1 flex-col rounded-lg border border-line bg-surface p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold">{layer.name}</h3>
                    <span className="font-mono text-xs text-ink-muted">{step}</span>
                  </div>
                  <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 shrink-0 font-mono text-accent">▸</span>
                        <span className="text-ink-muted leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                {index < layers.items.length - 1 ? (
                  <span
                    className="hidden shrink-0 self-center px-0.5 font-mono text-lg text-accent/70 sm:inline"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </PageSection>

      <PageSection
        eyebrow={trustBoundary.eyebrow}
        title={trustBoundary.title}
        variant="elevated"
      >
        <TrustBoundaryMap />
      </PageSection>

      <PageSection
        eyebrow={pillars.eyebrow}
        title={pillars.title}
      >
        <PillarsGraphic items={pillars.items} />
        <div className="mt-10 max-w-2xl border-t border-line pt-8">
          <h3 className="text-xl font-semibold tracking-tight">
            {pillarsClosing.title}
          </h3>
          <p className="mt-3 text-ink-muted leading-relaxed">
            {pillarsClosing.body}
          </p>
        </div>
      </PageSection>
    </>
  );
}
