import Link from "next/link";
import { journey, products, proofPoints, site, stack } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Journey />
      <Proof />
      <StackMap />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-grid border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">{"// platform engineering, packaged"}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Production Kubernetes.{" "}
            <span className="text-accent">Hours, not weeks.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">
            SynKube ships the platform your team was going to spend a quarter
            building: Terraform, GitOps, Helm charts, observability, and
            security. Wired together, versioned, and already running in
            production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
            >
              Explore the products
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded border border-line-strong px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-bg-elevated">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-xs text-ink-muted">
          deploy — zsh
        </span>
      </div>
      <div className="space-y-2 px-4 py-5 font-mono text-[13px] leading-relaxed">
        <p className="text-ink-muted">
          <span className="text-accent">$</span> helm repo add synkube{" "}
          {site.helmRepo}
        </p>
        <p className="text-ink-muted">
          <span className="text-accent">$</span> helm install api
          synkube/app-starter -f values.yaml
        </p>
        <p className="text-ink">
          <span className="text-ok">●</span> deployment/api rolled out (2/2
          healthy)
        </p>
        <p className="text-ink">
          <span className="text-ok">●</span> ingress + TLS + DNS configured
          automatically
        </p>
        <p className="text-ink-muted">
          <span className="text-accent">$</span>{" "}
          <span className="animate-pulse">▌</span>
        </p>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <p className="eyebrow">{"// products"}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        Everything between your cloud account and your app.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products#${p.id}`}
            className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent"
          >
            <p className="font-mono text-xs text-accent">{p.tagline}</p>
            <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {p.description}
            </p>
            <p className="mt-4 font-mono text-xs text-ink-muted transition-colors group-hover:text-accent">
              details →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="border-y border-line bg-bg-elevated">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <p className="eyebrow">{"// how it fits together"}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          One path from empty cloud account to operated platform.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((j) => (
            <div key={j.step} className="rounded-lg border border-line p-5">
              <p className="font-mono text-2xl font-semibold text-accent">
                {j.step}
              </p>
              <h3 className="mt-3 font-semibold">{j.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{j.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow">{"// not a demo"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            We run our own production on this exact stack.
          </h2>
          <p className="mt-4 text-ink-muted">
            Every chart, module, and pipeline we ship is the same one operating
            SynKube&apos;s own platform. If it breaks, it pages us first.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-line-strong px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
            >
              github.com/synkube ↗
            </a>
            <a
              href={site.artifactHub}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-line-strong px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Artifact Hub ↗
            </a>
          </div>
        </div>
        <ul className="space-y-3">
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-lg border border-line bg-surface px-5 py-4 text-sm"
            >
              <span className="mt-0.5 font-mono text-ok">✓</span>
              <span className="text-ink">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StackMap() {
  return (
    <section className="border-y border-line bg-bg-elevated">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <p className="eyebrow">{"// the stack"}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Boring, proven tools. Modern patterns.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          No proprietary runtime, no agent to license. The platform is
          composed from the CNCF ecosystem you would have picked anyway,
          integrated so you don&apos;t have to.
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                {group.group}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 text-center">
      <p className="eyebrow">{"// get started"}</p>
      <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
        Shipping on Kubernetes in 2026 shouldn&apos;t feel like assembling it
        from scratch in 2019.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-ink-muted">
        Tell us what you&apos;re building and which cloud you&apos;re on.
        We&apos;ll tell you honestly whether SynKube fits.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
        >
          {site.email}
        </a>
        <Link
          href="/services"
          className="rounded border border-line-strong px-6 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
        >
          See services
        </Link>
      </div>
    </section>
  );
}
