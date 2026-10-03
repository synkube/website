import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="font-mono text-sm font-semibold tracking-[0.22em] text-ink">
            SYNKUBE
          </p>
          <p className="mt-2 text-sm text-ink-muted">{site.tagline}</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="eyebrow">Site</p>
            <Link href="/products" className="text-ink-muted hover:text-accent">
              Products
            </Link>
            <Link href="/agents" className="text-ink-muted hover:text-accent">
              Agents
            </Link>
            <Link href="/services" className="text-ink-muted hover:text-accent">
              Services
            </Link>
            <Link href="/contact" className="text-ink-muted hover:text-accent">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="eyebrow">Elsewhere</p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={site.artifactHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent"
            >
              Artifact Hub
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-ink-muted hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-4">
          <p className="font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} SynKube. Built on the stack we sell.
          </p>
        </div>
      </div>
    </footer>
  );
}
