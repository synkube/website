import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04070f",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            color: "#3ce3ff",
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              border: "2px solid #3ce3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            S
          </div>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#e8eefb",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Production-ready Kubernetes platforms
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              color: "#94a0ba",
              lineHeight: 1.4,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#a08bff" }}>{site.domain}</div>
      </div>
    ),
    { ...size },
  );
}
