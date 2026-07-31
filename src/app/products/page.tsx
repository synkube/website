import type { Metadata } from "next";
import { products, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Helm charts, platform starter kits, app starter repos, and deployment pipelines: the SynKube product line.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
      <p className="eyebrow">{"// products"}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Four products, one platform.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        Each product works standalone. Together they form a complete path from
        cloud account to production workload, with every layer delivered as
        code you own.
      </p>

      <div className="mt-14 space-y-14">
        {products.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className="scroll-mt-20 border-t border-line pt-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="font-mono text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(products.length).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{p.name}</h2>
                <p className="mt-1 font-mono text-sm text-accent">
                  {p.tagline}
                </p>
              </div>
              <div>
                <p className="leading-relaxed text-ink-muted">
                  {p.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 font-mono text-accent">▸</span>
                      <span className="text-ink">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-line bg-surface p-8">
        <h2 className="text-xl font-semibold">Try the charts right now</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The chart family is open source. No signup, no sales call.
        </p>
        <div className="mt-5 overflow-x-auto rounded border border-line bg-bg-elevated px-4 py-4 font-mono text-[13px] leading-relaxed">
          <p className="text-ink-muted">
            <span className="text-accent">$</span> helm repo add synkube{" "}
            {site.helmRepo}
          </p>
          <p className="text-ink-muted">
            <span className="text-accent">$</span> helm install myapp
            synkube/app-starter
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href={site.artifactHub}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-line-strong px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Browse on Artifact Hub ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-line-strong px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Source on GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
