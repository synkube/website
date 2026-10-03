import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number, props: IconProps) {
  return { width: size, height: size, viewBox: "0 0 24 24", fill: "none", ...props };
}

export function IconHermes({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        d="M12 3 20 7.5V16.5L12 21 4 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8M12 8v8"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
    </svg>
  );
}

export function IconWorker({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconKubernetes({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        d="M12 2.5 19 6v4.2l-2.5 1.4V9.2L12 7.2 7.5 9.2v2.6L5 10.2V6l7-3.5Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M12 22 5 18v-4.2l2.5-1.4v2.6L12 16.8l4.5-2v-2.6L19 13.8V18l-7 4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function IconGitHub({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .28.18.6.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

/** Slack brand mark (four-color hash). */
export function IconSlack({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        fill="#E01E5A"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#36C5F0"
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#2EB67D"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#ECB22E"
        d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      />
    </svg>
  );
}

export function IconCloud({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        d="M7 18h9.5a3.5 3.5 0 0 0 .4-7A4.5 4.5 0 0 0 8.2 8.5 3.5 3.5 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBroker({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        d="M12 3 19 6.5v5c0 3.5-2.8 6.5-7 8-4.2-1.5-7-4.5-7-8v-5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 11h6M12 9v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconIdentity({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M16 8.5l1.5 1.5L20 7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconShield({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} aria-hidden>
      <path
        d="M12 3 19 6v5c0 4.2-3 7.8-7 9-4-1.2-7-4.8-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type PillarIconId =
  | "context"
  | "knowledge"
  | "skills"
  | "workspace"
  | "tools"
  | "memory"
  | "model"
  | "execution"
  | "trust"
  | "channels"
  | "observability";

export function IconPillar({ id, size = 20 }: { id: PillarIconId; size?: number }) {
  const s = size;
  switch (id) {
    case "context":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 19v-1a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "knowledge":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 5h12v14H5V5Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 5v14M5 9h4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "skills":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3 14 9h6l-5 4 2 7-7-4-7 4 2-7-5-4h6l2-6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );
    case "workspace":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 8h16v11H4V8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 12h16M9 8V5h6v3" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "tools":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M14 4l6 6-8 8H6v-6l8-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "memory":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "model":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.5" />
          <path d="M8 11l3-3M13 8l3 3M15 12l-3 3" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "execution":
      return <IconKubernetes size={s} />;
    case "trust":
      return <IconShield size={s} />;
    case "channels":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 6h16v9H8l-4 3V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "observability":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 18V6M8 18v-6M12 18V9M16 18v-3M20 18v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
