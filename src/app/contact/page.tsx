import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SynKube.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:py-28">
      <p className="eyebrow">{"// contact"}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Talk to a human who runs Kubernetes.
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        One email is all it takes. Tell us what you&apos;re building, which
        cloud you&apos;re on, and what&apos;s slowing you down. We usually
        reply within two business days.
      </p>

      <div className="mt-10 rounded-lg border border-line bg-surface p-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          Email
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 block font-mono text-2xl text-accent hover:underline"
        >
          {site.email}
        </a>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
              Open source
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-ink hover:text-accent"
            >
              github.com/synkube ↗
            </a>
            <a
              href={site.artifactHub}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 block text-sm text-ink hover:text-accent"
            >
              Artifact Hub ↗
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
              Good first emails
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
              <li>&ldquo;We need production K8s on DigitalOcean.&rdquo;</li>
              <li>&ldquo;Our charts broke when Bitnami went paid.&rdquo;</li>
              <li>&ldquo;Review our platform before we scale it.&rdquo;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
