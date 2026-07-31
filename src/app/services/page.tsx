import type { Metadata } from "next";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Platform setup, migrations, and ongoing consulting, delivered by the team that runs this stack in production.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
      <p className="eyebrow">{"// services"}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Done with you, not to you.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        Every engagement ends with your team operating the result. We deliver
        into repositories you own, document as we go, and hand over properly.
        Engagements are scoped and quoted individually.
      </p>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {services.map((s) => (
          <section
            key={s.id}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {s.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {s.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 font-mono text-accent">▸</span>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-14 rounded-lg border border-line bg-bg-elevated p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Straight answers, fast scoping.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">
          Email us what you&apos;re running and where it hurts. If SynKube
          isn&apos;t the right fit, we&apos;ll say so and point you somewhere
          better.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
        >
          {site.email}
        </a>
      </section>
    </div>
  );
}
