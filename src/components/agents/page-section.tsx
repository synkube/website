import type { ReactNode } from "react";

type PageSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
};

export function PageSection({
  eyebrow,
  title,
  intro,
  children,
  variant = "default",
  className = "",
}: PageSectionProps) {
  const shell =
    variant === "elevated"
      ? "border-y border-line bg-bg-elevated"
      : "";

  return (
    <section className={shell}>
      <div
        className={`mx-auto w-full max-w-6xl px-5 py-12 sm:py-14 ${className}`}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
        {intro ? (
          <p className="mt-4 max-w-2xl text-ink-muted">{intro}</p>
        ) : null}
        <div className={intro ? "mt-10" : "mt-10"}>{children}</div>
      </div>
    </section>
  );
}
