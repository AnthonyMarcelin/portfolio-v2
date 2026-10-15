import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getLang } from "@/lib/i18n";

export const alt = "Anthony Marcelin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const roles = {
  fr: "Développeur fullstack",
  en: "Full-stack developer",
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await getLang(params);
  const photo = await readFile(join(process.cwd(), "public/photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 96px",
        background:
          "radial-gradient(circle at 85% 110%, #E85D04 0%, rgba(232,93,4,0.35) 30%, #f4f4f5 62%)",
        color: "#1c1c1c",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img */}
      <img
        src={photoSrc}
        alt=""
        width={300}
        height={300}
        style={{ borderRadius: 9999, border: "10px solid #E85D04" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 80, letterSpacing: -2 }}>Anthony Marcelin</div>
        <div style={{ fontSize: 46, color: "#C2410C" }}>{roles[lang]}</div>
        <div style={{ fontSize: 28, color: "#555", marginTop: 24 }}>
          anthonymarcelin.com
        </div>
      </div>
    </div>,
    size,
  );
}
