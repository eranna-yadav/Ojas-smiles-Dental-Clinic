import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f766e" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path
            d="M24 9.5c-7.6 0-11.5 4.3-11.5 10.6 0 6.4 3 9 3.8 15.6.5 4 2.9 5 4-.1.9-4.2 1.7-6.5 3.7-6.5s2.8 2.3 3.7 6.5c1.1 5.1 3.5 4.1 4 .1.8-6.6 3.8-9.2 3.8-15.6C35.5 13.8 31.6 9.5 24 9.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    ),
    size
  );
}
