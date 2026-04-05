import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#0F1A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2F5F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="14" height="14" rx="3" opacity="0.4" />
          <rect x="2" y="8" width="14" height="14" rx="3" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
