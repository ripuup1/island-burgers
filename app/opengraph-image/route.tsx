// Island Burgers & Bites — OG Image (dynamic generation)
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A1A18 0%, #2a2a28 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(245, 200, 66, 0.15)",
            border: "1px solid rgba(245, 200, 66, 0.4)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#F5C842" }}>
            🏆 NC&apos;s #1 Cheeseburger — Yelp 2022
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: "72px", fontWeight: 900 }}>
            <span style={{ color: "#E8272A" }}>ISLAND BURGERS</span>
            <span style={{ color: "#F5C842", marginLeft: "12px" }}>
              &amp;BITES
            </span>
          </div>
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255, 248, 238, 0.6)",
              letterSpacing: "6px",
              marginTop: "8px",
            }}
          >
            CAROLINA BEACH, NC
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            color: "rgba(255, 248, 238, 0.8)",
            marginTop: "32px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Hand-pattied smash burgers. Philly cheesesteaks. Crinkle fries. Made
          fresh since 2017.
        </p>

        {/* CTA strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E8272A",
              color: "#FFF8EE",
              padding: "12px 32px",
              borderRadius: "100px",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            ORDER ONLINE
          </div>
          <span style={{ color: "rgba(255, 248, 238, 0.5)", fontSize: "18px" }}>
            islandburgerscb.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
