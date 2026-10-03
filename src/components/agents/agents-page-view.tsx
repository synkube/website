import Link from "next/link";
import type { AgentsPageContent } from "@/lib/content/agents-page";
import { LAYER_ICONS } from "@/components/agents/agent-icons";
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

      <PageSection eyebrow={layers.eyebrow} title={layers.title}>
        <div className="grid gap-5 sm:grid-cols-3">
          {layers.items.map((layer) => {
            const Icon = LAYER_ICONS[layer.id as keyof typeof LAYER_ICONS];
            return (
              <article
                key={layer.id}
                className="rounded-lg border border-line bg-surface p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong bg-bg-elevated text-accent">
                  <Icon size={24} />
                </div>
                <p className="font-mono text-xs text-accent">{layer.tagline}</p>
                <h3 className="mt-2 text-xl font-semibold">{layer.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {layer.description}
                </p>
              </article>
            );
          })}
        </div>
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
