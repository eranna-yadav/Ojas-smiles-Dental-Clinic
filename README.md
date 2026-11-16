# Ojas Smiles Dental Clinic — Website

Bilingual (English + ಕನ್ನಡ) website for **Ojas Smiles Dental Clinic, Hassan**.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion. No backend, no paid APIs.

- **English:** `/en` · **Kannada:** `/kn` (visitors to `/` are sent to their remembered or browser language)
- Appointment requests go to the clinic's **WhatsApp**. Nothing is stored on a server.
- Rule-based **chatbot** that answers from `data/dental-faq.json` and hands off to WhatsApp when it has no answer.
- Mobile Lighthouse scores at handover: Performance 91–96, Accessibility 100, Best Practices 100, SEO 100.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (run before deploying) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run placeholders` | Regenerate the placeholder SVG images |

Requires Node.js 20.9 or newer.

---

## Project structure

```
config/clinic.ts        ← ALL clinic data: name, phone, address, hours, services, doctors, FAQs, offers, links
messages/en.json        ← English UI text
messages/kn.json        ← Kannada UI text (same keys as en.json)
content/services.ts     ← Detailed content for each treatment page
content/blog.ts         ← Smile Tips articles
content/legal.ts        ← Privacy policy & medical disclaimer
data/dental-faq.json    ← Chatbot knowledge base
public/images/          ← Images (currently placeholders)
app/[locale]/…          ← Pages (home, services, blog, legal)
components/             ← UI, sections, layout, widgets
proxy.ts                ← Language redirect + 404s for unknown treatment/article URLs
```

---

## 1. How to edit clinic details

Almost everything lives in **`config/clinic.ts`**. Text that appears in both languages looks like this:

```ts
name: { en: "Dental Implants", kn: "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್" }
```

| To change… | Edit in `config/clinic.ts` |
| --- | --- |
| Phone / WhatsApp number | `phone` (all three fields: `display`, `tel`, `whatsapp`) |
| Address, map pin | `address`, `geo` |
| Opening hours | `hours`: one row per day, 24-hour `"HH:MM"`. Add `closed: true` for a holiday. Update `timeSlots` to match. |
| Top announcement strip | `offers.items`. Set `offers.enabled: false` to hide it. |
| Doctors | `doctors` |
| Treatments list | `services` (detailed page text is in `content/services.ts`, keyed by the same `slug`) |
| Home-page FAQs | `faqs` |
| Gallery & before/after | `gallery`, `beforeAfter` |
| Google reviews | `reviews`. Paste real review text into `text` (both languages) and the reviewer's name into `author`. |
| Review count (for Google star snippets) | `rating.count` |
| Social links | `social`. Empty values are hidden. |
| Footer credit link | `credit.url` |

**Other text:**
- Buttons, headings and labels → `messages/en.json` and `messages/kn.json`. Keep the same keys in both files; the build fails if `kn.json` is missing a key.
- Chatbot answers → `data/dental-faq.json`. Add keywords in English, Kannada and Kannada-in-English (e.g. `"samaya"`). `{phone}`, `{address}` and `{hours}` are filled in from the config.
- New article → add an object to `content/blog.ts`. Its page, sitemap entry and listing are created automatically.

The **"Open now / Closed"** badge is calculated live from `hours` in India time, so it stays correct for visitors in other time zones.

---

## 2. How to replace images

Every placeholder is a labelled SVG in `public/images/`, and each one has a `TODO` comment where it is used.

1. Export the photo as **JPG or WebP**, around 1600px on the long side.
2. Put it in `public/images/` (e.g. `public/images/gallery/reception.jpg`).
3. Update the path in `config/clinic.ts` (or in the component for the hero and about photos), e.g. `"/images/gallery/reception.jpg"`.
4. Delete the old `.svg` if you like.

Next.js automatically resizes and converts real photos to AVIF/WebP.

| Image | File | Shape |
| --- | --- | --- |
| Hero | `components/sections/Hero.tsx` → `/images/hero.svg` | Portrait ~ 960×1120 |
| About | `components/sections/About.tsx` → `/images/about.svg` | 4:3 |
| Doctor | `config/clinic.ts` → `doctors[].image` | Portrait 4:5 |
| Gallery | `config/clinic.ts` → `gallery` | 4:3 |
| Before / after | `config/clinic.ts` → `beforeAfter` | 3:2, both photos framed the same way |
| Treatment pages | `config/clinic.ts` → `services[].image` | 3:2 |
| Article covers | `content/blog.ts` → `cover` | 16:9 |

> ⚠️ Before/after photos need the patient's **written consent**. Don't use stock "results" photos.

The social-share (Open Graph) image is generated automatically from the clinic name in `app/[locale]/opengraph-image.tsx`.

---

## 3. How to deploy to Vercel

1. Push this repository to GitHub (already done if you're reading this there).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository. Vercel detects Next.js; keep the default settings.
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = your final domain, e.g. `https://www.ojassmiles.in` (no trailing slash)
4. Click **Deploy**.
5. To add a custom domain: **Project → Settings → Domains → Add**, then set the DNS records Vercel shows you at your domain registrar.
6. After the domain is live:
   - Redeploy once, so canonical URLs, the sitemap and structured data use the real domain.
   - Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://your-domain/sitemap.xml`.
   - Add the website URL to the clinic's **Google Business Profile**.

Every push to the main branch redeploys automatically. Pull requests get preview URLs.

---

## 4. TODO checklist — content to collect from the client

**Must have before launch**
- [ ] Confirm phone / WhatsApp number (`090934 01506`), and that WhatsApp is active on it
- [ ] Confirm opening time (currently assumed **10:00 AM**; closing 9:00 PM confirmed) and any weekly holiday
- [ ] Doctor details: full name, qualifications (BDS/MDS, college), registration no. (optional), years of experience, special interests, short bio
- [ ] Doctor portrait photo
- [ ] Clinic photos: exterior/signboard, reception, treatment room, equipment, sterilization area, kids' corner
- [ ] Hero photo (doctor with patient, or a smiling patient, with consent)
- [ ] Domain name (and set `NEXT_PUBLIC_SITE_URL`)
- [ ] Native Kannada speaker to proofread `messages/kn.json`, `content/*.ts` and `data/dental-faq.json`
- [ ] Dentist to review treatment pages (`content/services.ts`) and articles (`content/blog.ts`)
- [ ] Accepted payment methods (cash/UPI/cards?) and whether staged payments or EMI are offered
- [ ] Insurance / reimbursement policy
- [ ] Whether walk-in emergencies are accepted (emergency page says "Yes, during clinic hours; please call first")

**Nice to have**
- [ ] 3–6 Google reviews the clinic is happy to feature (with reviewer first names)
- [ ] Number of Google reviews (`rating.count`, which enables star-rating structured data)
- [ ] Direct "write a review" link from Google Business Profile (`links.writeReview`)
- [ ] Before/after photos with written patient consent
- [ ] Instagram / Facebook / YouTube links
- [ ] Clinic email address
- [ ] Real offers or announcements for the top strip
- [ ] Logo file (currently a tooth mark in `components/ui/ToothLogo.tsx` and `app/icon.svg`)
- [ ] Verify the map pin (`geo` in config, decoded from Plus Code 2464+FF)
- [ ] Moti Media website URL for the footer credit
- [ ] Have the privacy policy and medical disclaimer (`content/legal.ts`) reviewed

Search the code for `TODO` to find every placeholder:

```bash
grep -rn "TODO" config content components app --include=*.ts --include=*.tsx
```

---

## Reusing this as a template for another clinic

1. Copy the repository.
2. Rewrite `config/clinic.ts`.
3. Adjust wording in `messages/*.json` (the clinic name appears in some meta titles and greetings).
4. Update `data/dental-faq.json` answers that mention a landmark.
5. Change the colours in `app/globals.css` (`--color-brand-*` and `--color-accent-*`) if needed.
6. Replace the images and deploy.
