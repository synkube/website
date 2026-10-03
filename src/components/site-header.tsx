import Link from "next/link";
import { site } from "@/lib/content";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/agents", label: "Agents" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-mono text-sm font-semibold tracking-[0.22em] text-ink">
            SYNKUBE
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-2.5 py-1.5 text-sm text-ink-muted transition-colors hover:text-accent sm:px-3"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded border border-line px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent sm:block"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12m0 0L3 7m9 5 9-5"
        stroke="var(--accent)"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}
