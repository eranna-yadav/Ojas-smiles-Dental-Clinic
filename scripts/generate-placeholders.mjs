// Generates branded SVG placeholder images in /public/images.
// Run: node scripts/generate-placeholders.mjs
// Replace any file with a real photo (.jpg/.webp) and update its path in config/clinic.ts.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUT = join(process.cwd(), "public", "images");

const TOOTH =
  "M50 10C30 10 20 20 20 38c0 17 8 24 10 42 2 12 8 15 11 5 3-11 5-19 9-19s6 8 9 19c3 10 9 7 11-5 2-18 10-25 10-42C80 20 70 10 50 10Z";

const palettes = {
  mint: ["#E6FAF5", "#B8EEE0", "#0F766E"],
  teal: ["#D5F5EE", "#8FDCCB", "#115E59"],
  warm: ["#FFF4EC", "#FBD5BC", "#9A3412"],
  dull: ["#EFEDE7", "#D6D0C2", "#57534E"],
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function svg({ w, h, label, sub = "TODO: replace with real photo", palette = "mint", seed = 1 }) {
  const [bg1, bg2, ink] = palettes[palette];
  label = esc(label);
  sub = esc(sub);
  const r = (n) => ((Math.sin(seed * 9301 + n * 49297) + 1) / 2);
  const s = Math.min(w, h);
  const icon = s * 0.22;
  const fs = Math.max(14, Math.round(s * 0.045));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<circle cx="${w * (0.15 + r(1) * 0.2)}" cy="${h * (0.2 + r(2) * 0.2)}" r="${s * 0.32}" fill="#fff" opacity=".35"/>
<circle cx="${w * (0.7 + r(3) * 0.2)}" cy="${h * (0.65 + r(4) * 0.2)}" r="${s * 0.42}" fill="#fff" opacity=".25"/>
<g transform="translate(${w / 2 - icon / 2} ${h / 2 - icon * 0.85}) scale(${icon / 100})"><path d="${TOOTH}" fill="#fff" stroke="${ink}" stroke-opacity=".5" stroke-width="3"/></g>
<text x="50%" y="${h / 2 + icon * 0.55}" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="${fs}" font-weight="700" fill="${ink}">${label}</text>
<text x="50%" y="${h / 2 + icon * 0.55 + fs * 1.5}" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="${Math.round(fs * 0.7)}" fill="${ink}" opacity=".7">${sub}</text>
</svg>`;
}

const files = {
  "hero.svg": { w: 960, h: 1120, label: "Hero photo: smiling patient / doctor", palette: "teal", seed: 2 },
  "about.svg": { w: 1200, h: 900, label: "Clinic interior photo", seed: 3 },
  "doctor-1.svg": { w: 800, h: 1000, label: "Doctor portrait", palette: "teal", seed: 4 },
  "og-default.svg": { w: 1200, h: 630, label: "Ojas Smiles Dental Clinic", sub: "Hassan, Karnataka", seed: 5 },
  "gallery/reception.svg": { w: 1200, h: 900, label: "Reception & waiting area", seed: 6 },
  "gallery/treatment-room.svg": { w: 1200, h: 900, label: "Treatment room", palette: "teal", seed: 7 },
  "gallery/equipment.svg": { w: 1200, h: 900, label: "Dental equipment", seed: 8 },
  "gallery/sterilization.svg": { w: 1200, h: 900, label: "Sterilization area", palette: "teal", seed: 9 },
  "gallery/xray.svg": { w: 1200, h: 900, label: "Digital X-ray", seed: 10 },
  "gallery/kids-corner.svg": { w: 1200, h: 900, label: "Kids' corner", palette: "warm", seed: 11 },
  "before-after/case-1-before.svg": { w: 1200, h: 800, label: "BEFORE — placeholder", sub: "Not a real patient result", palette: "dull", seed: 12 },
  "before-after/case-1-after.svg": { w: 1200, h: 800, label: "AFTER — placeholder", sub: "Not a real patient result", palette: "mint", seed: 12 },
  "before-after/case-2-before.svg": { w: 1200, h: 800, label: "BEFORE — placeholder", sub: "Not a real patient result", palette: "dull", seed: 13 },
  "before-after/case-2-after.svg": { w: 1200, h: 800, label: "AFTER — placeholder", sub: "Not a real patient result", palette: "teal", seed: 13 },
  "blog/brushing.svg": { w: 1200, h: 675, label: "Article cover: brushing", seed: 14 },
  "blog/root-canal.svg": { w: 1200, h: 675, label: "Article cover: root canal", palette: "teal", seed: 15 },
  "blog/kids.svg": { w: 1200, h: 675, label: "Article cover: kids", palette: "warm", seed: 16 },
};

const services = ["checkup", "filling", "rct", "extraction", "implant", "crown", "denture", "whitening", "braces", "smile", "gum", "kids", "emergency"];
services.forEach((s, i) => {
  files[`services/${s}.svg`] = { w: 1200, h: 800, label: `Service photo: ${s}`, palette: i % 3 === 0 ? "teal" : i % 3 === 1 ? "mint" : "warm", seed: 20 + i };
});

for (const [name, opts] of Object.entries(files)) {
  const p = join(OUT, name);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, svg(opts));
}
console.log(`Wrote ${Object.keys(files).length} placeholders to public/images`);
