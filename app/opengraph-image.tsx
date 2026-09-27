import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { isotipo } from "@/components/ui/logo-paths";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 96,
          background: "linear-gradient(135deg, #060814 0%, #1e1b4b 60%, #312e81 100%)",
          color: "white",
        }}
      >
        <svg viewBox={isotipo.viewBox} width={300} height={220} fill="#c7d2fe">
          {isotipo.paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: 12 }}>KOSMOS</div>
          <div style={{ fontSize: 34, color: "#a5b4fc", marginTop: 8 }}>{site.tagline}</div>
          <div style={{ fontSize: 28, color: "#22d3ee", marginTop: 32 }}>{site.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
