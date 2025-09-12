// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// export const runtime = "edge"; // optional

export default async function OG() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const logo = `${siteUrl}/glimvia-logo-dark.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0b1220 0%, #0e7490 55%, #14b8a6 100%)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 28,
            padding: 48,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.08)"
          }}
        >
          {/* logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={120} height={120} />

          {/* text */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 68,
                fontWeight: 800,
                color: "white",
                letterSpacing: -1
              }}
            >
              Glimvia
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 34,
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)"
              }}
            >
              Apache Superset on Mobile
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
