import { ImageResponse } from "next/og";
import { clinic } from "@/config/clinic";
import { formatTime } from "@/lib/hours";

export const alt = `${clinic.name} — Dentist in Hassan`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// English-only text: the OG renderer has no Kannada font bundled.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 55%, #ffeadb 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 84, height: 84, borderRadius: 24, background: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="56" height="56" viewBox="0 0 48 48">
              <path
                d="M24 9.5c-7.6 0-11.5 4.3-11.5 10.6 0 6.4 3 9 3.8 15.6.5 4 2.9 5 4-.1.9-4.2 1.7-6.5 3.7-6.5s2.8 2.3 3.7 6.5c1.1 5.1 3.5 4.1 4 .1.8-6.6 3.8-9.2 3.8-15.6C35.5 13.8 31.6 9.5 24 9.5Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#115e59" }}>{clinic.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Healthy smiles.</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#0f766e" }}>Confident you.</div>
          <div style={{ fontSize: 32, marginTop: 24, color: "#334155" }}>Trusted dental care in Hassan, Karnataka</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, fontWeight: 600 }}>
          <div style={{ background: "#fff", padding: "10px 22px", borderRadius: 999 }}>{`${clinic.rating.value.toFixed(1)} rated on Google`}</div>
          {clinic.womenOwned ? <div style={{ background: "#fff", padding: "10px 22px", borderRadius: 999 }}>Women-owned</div> : null}
          <div style={{ background: "#fff", padding: "10px 22px", borderRadius: 999 }}>{`Open daily till ${formatTime(clinic.hours[0].close)}`}</div>
        </div>
      </div>
    ),
    size
  );
}
