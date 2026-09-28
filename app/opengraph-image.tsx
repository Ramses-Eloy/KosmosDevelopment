import { ImageResponse } from "next/og";
import { es } from "@/content/es";
import { site } from "@/content/site";
import { isotipo, wordmark } from "@/components/ui/logo-paths";

export const alt = `${site.name}: ${es.tagline}`;
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
          background: "linear-gradient(135deg, #020817 0%, #051527 60%, #0a2a5c 100%)",
          color: "white",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={320}
          height={196}
          alt=""
          src={`data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${isotipo.viewBox}" color="#ffffff">${isotipo.svg}</svg>`,
          )}`}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={560}
            height={104}
            alt="KOSMOS"
            src={`data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${wordmark.viewBox}" color="#ffffff">${wordmark.svg}</svg>`,
            )}`}
          />
          <div style={{ fontSize: 34, color: "#93c5fd", marginTop: 8 }}>{es.tagline}</div>
          <div style={{ fontSize: 28, color: "#00aafc", marginTop: 32 }}>{site.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
