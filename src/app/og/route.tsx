import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET() {
  // TODO: Replace with real domain if different from siteConfig.url
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#93c5fd",
            letterSpacing: "0.1em",
            marginBottom: 24,
          }}
        >
          FIELD SERVICE & AUTOMATION
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "90%",
          }}
        >
          Field Service Apps & n8n Automation
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          Purpose-built tools for operations teams
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: 16,
            color: "#64748b",
          }}
        >
          {domain}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
