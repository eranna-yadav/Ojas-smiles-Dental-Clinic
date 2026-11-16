/**
 * ============================================================================
 *  CLINIC CONFIG — the single source of truth for this website.
 * ============================================================================
 *  Edit this file to change the clinic name, phone, hours, services, doctors,
 *  FAQs, offers and links. To reuse this site for another clinic, copy the
 *  project and rewrite this file (plus /messages/*.json for UI wording).
 *
 *  Text that appears in both languages uses `{ en: "...", kn: "..." }`.
 *  Anything marked TODO must be confirmed with the client before launch.
 * ============================================================================
 */

export type Locale = "en" | "kn";
export type L = Record<Locale, string>;

export type DayHours = {
  /** 0 = Sunday … 6 = Saturday */
  day: number;
  /** 24h "HH:MM". Leave both empty and set closed: true for a holiday. */
  open: string;
  close: string;
  closed?: boolean;
};

export type Doctor = {
  id: string;
  name: L;
  qualifications: string;
  /** Leave null until confirmed — never invent numbers. */
  experienceYears: number | null;
  role: L;
  specialties: L[];
  bio: L;
  image: string;
  imageAlt: L;
};

export type ServiceSummary = {
  slug: string;
  icon: ServiceIcon;
  name: L;
  short: L;
  image: string;
};

export type ServiceIcon =
  | "checkup"
  | "filling"
  | "rct"
  | "extraction"
  | "implant"
  | "crown"
  | "denture"
  | "whitening"
  | "braces"
  | "smile"
  | "gum"
  | "kids"
  | "emergency";

export type Faq = { q: L; a: L };

// ---------------------------------------------------------------------------

export const clinic = {
  name: "Ojas Smiles Dental Clinic",
  shortName: "Ojas Smiles",
  nameKn: "ಓಜಸ್ ಸ್ಮೈಲ್ಸ್ ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
  tagline: {
    en: "Healthy, confident smiles for every family in Hassan",
    kn: "ಹಾಸನದ ಪ್ರತಿಯೊಂದು ಕುಟುಂಬಕ್ಕೂ ಆರೋಗ್ಯಕರ, ಆತ್ಮವಿಶ್ವಾಸದ ನಗು",
  } satisfies L,

  /** TODO: set to the real domain once bought (also set NEXT_PUBLIC_SITE_URL on Vercel). */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://ojas-smiles.vercel.app").replace(/\/$/, ""),

  // ---- Contact --------------------------------------------------------------
  // TODO: confirm the phone number with the client. Change it ONLY here.
  phone: {
    display: "090934 01506",
    /** E.164 format, used for click-to-call */
    tel: "+919093401506",
    /** Country code + number, digits only, used for wa.me links */
    whatsapp: "919093401506",
  },
  email: "", // TODO: add clinic email if they have one (leave "" to hide)

  address: {
    street: "MG Rd, beside Neha's Saloon and Academy",
    locality: "Ravindra Nagar, Vidhya Nagar",
    city: "Hassan",
    region: "Karnataka",
    postalCode: "573201",
    country: "IN",
    full: {
      en: "MG Rd, beside Neha's Saloon and Academy, Ravindra Nagar, Vidhya Nagar, Hassan, Karnataka 573201",
      kn: "ಎಂ.ಜಿ. ರಸ್ತೆ, ನೇಹಾಸ್ ಸಲೂನ್ ಮತ್ತು ಅಕಾಡೆಮಿ ಪಕ್ಕ, ರವೀಂದ್ರ ನಗರ, ವಿದ್ಯಾ ನಗರ, ಹಾಸನ, ಕರ್ನಾಟಕ 573201",
    } satisfies L,
    plusCode: "2464+FF Hassan, Karnataka",
  },

  /** Decoded from Plus Code 7J5R2464+FF. TODO: verify by dropping a pin on Google Maps. */
  geo: { lat: 13.01119, lng: 76.10619 },

  links: {
    googleMaps: "https://maps.app.goo.gl/wubPa54CfEjj34jA8",
    /** Where "See all reviews on Google" goes. */
    googleReviews: "https://maps.app.goo.gl/wubPa54CfEjj34jA8",
    /**
     * TODO: replace with the direct "write a review" link from the Google
     * Business Profile (Share review form → looks like https://g.page/r/XXXX/review).
     */
    writeReview: "https://maps.app.goo.gl/wubPa54CfEjj34jA8",
    /** Directions deep-link (opens Google Maps navigation on phones). */
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Ojas+Smiles+Dental+Clinic+MG+Rd+Hassan+Karnataka+573201",
    /** No API key needed. */
    mapEmbed:
      "https://www.google.com/maps?q=Ojas+Smiles+Dental+Clinic,+MG+Rd,+Vidhya+Nagar,+Hassan,+Karnataka+573201&z=16&output=embed",
  },

  /** TODO: add the clinic's social profiles. Empty strings are hidden. */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  // ---- Trust signals --------------------------------------------------------
  rating: {
    value: 5.0,
    /** TODO: number of Google reviews. Needed for star-rating structured data; null hides it. */
    count: null as number | null,
  },
  womenOwned: true,

  // ---- Hours (Asia/Kolkata) -------------------------------------------------
  timezone: "Asia/Kolkata",
  // TODO: confirm opening time. Client confirmed: open daily, closes 9:00 PM.
  hours: [
    { day: 1, open: "10:00", close: "21:00" },
    { day: 2, open: "10:00", close: "21:00" },
    { day: 3, open: "10:00", close: "21:00" },
    { day: 4, open: "10:00", close: "21:00" },
    { day: 5, open: "10:00", close: "21:00" },
    { day: 6, open: "10:00", close: "21:00" },
    { day: 0, open: "10:00", close: "21:00" },
  ] satisfies DayHours[] as DayHours[],
  /** Shown in the booking form dropdown. Keep in sync with hours above. */
  timeSlots: [
    { value: "10-12", label: { en: "Morning (10 AM – 12 PM)", kn: "ಬೆಳಿಗ್ಗೆ (10 – 12)" } },
    { value: "12-15", label: { en: "Afternoon (12 – 3 PM)", kn: "ಮಧ್ಯಾಹ್ನ (12 – 3)" } },
    { value: "15-18", label: { en: "Evening (3 – 6 PM)", kn: "ಸಂಜೆ (3 – 6)" } },
    { value: "18-21", label: { en: "Late evening (6 – 9 PM)", kn: "ರಾತ್ರಿ (6 – 9)" } },
  ] satisfies { value: string; label: L }[],

  // ---- Announcement strip (top of every page) -------------------------------
  // TODO: replace with real offers from the client. Set enabled:false to hide.
  offers: {
    enabled: true,
    items: [
      {
        en: "Now booking family check-ups — evening slots till 9 PM, every day",
        kn: "ಕುಟುಂಬ ತಪಾಸಣೆಗೆ ಬುಕಿಂಗ್ ಆರಂಭ — ಪ್ರತಿದಿನ ರಾತ್ರಿ 9 ರವರೆಗೆ ಸಂಜೆ ಸಮಯ ಲಭ್ಯ",
      },
    ] satisfies L[],
  },

  // ---- Doctors --------------------------------------------------------------
  // TODO: replace every field below with real details from the client.
  doctors: [
    {
      id: "doctor-1",
      name: { en: "Dr. [Doctor Name]", kn: "ಡಾ. [ವೈದ್ಯರ ಹೆಸರು]" },
      qualifications: "BDS, MDS — TODO",
      experienceYears: null,
      role: { en: "Founder & Lead Dentist", kn: "ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಪ್ರಧಾನ ದಂತ ವೈದ್ಯರು" },
      specialties: [
        { en: "TODO: Specialty 1", kn: "TODO: ಪರಿಣತಿ 1" },
        { en: "TODO: Specialty 2", kn: "TODO: ಪರಿಣತಿ 2" },
      ],
      bio: {
        en: "TODO: Two or three lines about the doctor — training, approach to patient care, and what they enjoy most about dentistry.",
        kn: "TODO: ವೈದ್ಯರ ಬಗ್ಗೆ ಎರಡು-ಮೂರು ಸಾಲುಗಳು — ತರಬೇತಿ, ರೋಗಿಗಳ ಆರೈಕೆಯ ವಿಧಾನ.",
      },
      image: "/images/doctor-1.svg", // TODO: replace with real photo (portrait, 4:5)
      imageAlt: { en: "Portrait of the lead dentist", kn: "ಪ್ರಧಾನ ದಂತ ವೈದ್ಯರ ಭಾವಚಿತ್ರ" },
    },
  ] satisfies Doctor[] as Doctor[],

  // ---- Services (detailed page content lives in /content/services.ts) -------
  services: [
    {
      slug: "dental-checkup-cleaning",
      icon: "checkup",
      name: { en: "General Check-up & Cleaning", kn: "ಸಾಮಾನ್ಯ ತಪಾಸಣೆ ಮತ್ತು ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ" },
      short: {
        en: "Thorough exams and professional scaling to keep teeth and gums healthy.",
        kn: "ಹಲ್ಲು ಮತ್ತು ವಸಡುಗಳ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಸಂಪೂರ್ಣ ತಪಾಸಣೆ ಮತ್ತು ಸ್ಕೇಲಿಂಗ್.",
      },
      image: "/images/services/checkup.svg",
    },
    {
      slug: "tooth-fillings",
      icon: "filling",
      name: { en: "Tooth Fillings", kn: "ಹಲ್ಲು ತುಂಬಿಸುವಿಕೆ (ಫಿಲ್ಲಿಂಗ್)" },
      short: {
        en: "Tooth-coloured fillings that repair cavities and blend in naturally.",
        kn: "ಹುಳುಕು ಸರಿಪಡಿಸುವ, ಹಲ್ಲಿನ ಬಣ್ಣದ ನೈಸರ್ಗಿಕ ಫಿಲ್ಲಿಂಗ್.",
      },
      image: "/images/services/filling.svg",
    },
    {
      slug: "root-canal-treatment",
      icon: "rct",
      name: { en: "Root Canal Treatment (RCT)", kn: "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ (RCT)" },
      short: {
        en: "Save an infected tooth and stop the pain with gentle, modern RCT.",
        kn: "ಸೋಂಕಿತ ಹಲ್ಲನ್ನು ಉಳಿಸಿ, ನೋವನ್ನು ನಿಲ್ಲಿಸುವ ಆಧುನಿಕ RCT.",
      },
      image: "/images/services/rct.svg",
    },
    {
      slug: "tooth-extraction",
      icon: "extraction",
      name: { en: "Tooth Extraction & Wisdom Tooth Removal", kn: "ಹಲ್ಲು ತೆಗೆಯುವಿಕೆ ಮತ್ತು ಬುದ್ಧಿ ಹಲ್ಲು ತೆಗೆಯುವಿಕೆ" },
      short: {
        en: "Careful, comfortable removal of damaged or impacted teeth.",
        kn: "ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ಸಿಲುಕಿರುವ ಹಲ್ಲುಗಳನ್ನು ಆರಾಮವಾಗಿ ತೆಗೆಯುವುದು.",
      },
      image: "/images/services/extraction.svg",
    },
    {
      slug: "dental-implants",
      icon: "implant",
      name: { en: "Dental Implants", kn: "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್" },
      short: {
        en: "A permanent, natural-looking replacement for missing teeth.",
        kn: "ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳಿಗೆ ಶಾಶ್ವತ, ನೈಸರ್ಗಿಕವಾಗಿ ಕಾಣುವ ಬದಲಿ.",
      },
      image: "/images/services/implant.svg",
    },
    {
      slug: "crowns-bridges",
      icon: "crown",
      name: { en: "Crowns & Bridges", kn: "ಕ್ರೌನ್ ಮತ್ತು ಬ್ರಿಡ್ಜ್" },
      short: {
        en: "Restore broken teeth and fill gaps with strong, natural crowns.",
        kn: "ಮುರಿದ ಹಲ್ಲುಗಳನ್ನು ಸರಿಪಡಿಸಿ, ಖಾಲಿ ಜಾಗವನ್ನು ತುಂಬುವ ಕ್ರೌನ್.",
      },
      image: "/images/services/crown.svg",
    },
    {
      slug: "dentures",
      icon: "denture",
      name: { en: "Dentures (Complete & Partial)", kn: "ದಂತಪಂಕ್ತಿ (ಪೂರ್ಣ ಮತ್ತು ಭಾಗಶಃ)" },
      short: {
        en: "Comfortable, well-fitting dentures to help you eat and smile again.",
        kn: "ಮತ್ತೆ ಆರಾಮವಾಗಿ ತಿನ್ನಲು ಮತ್ತು ನಗಲು ಸರಿಯಾಗಿ ಹೊಂದುವ ದಂತಪಂಕ್ತಿ.",
      },
      image: "/images/services/denture.svg",
    },
    {
      slug: "teeth-whitening",
      icon: "whitening",
      name: { en: "Teeth Whitening", kn: "ಹಲ್ಲು ಬಿಳುಪುಗೊಳಿಸುವಿಕೆ" },
      short: {
        en: "Safe, professional whitening for a brighter smile.",
        kn: "ಹೊಳೆಯುವ ನಗುವಿಗಾಗಿ ಸುರಕ್ಷಿತ, ವೃತ್ತಿಪರ ಬಿಳುಪು ಚಿಕಿತ್ಸೆ.",
      },
      image: "/images/services/whitening.svg",
    },
    {
      slug: "braces-aligners",
      icon: "braces",
      name: { en: "Braces & Clear Aligners", kn: "ಬ್ರೇಸಸ್ ಮತ್ತು ಕ್ಲಿಯರ್ ಅಲೈನರ್" },
      short: {
        en: "Straighten crooked or gapped teeth with braces or invisible aligners.",
        kn: "ವಕ್ರ ಅಥವಾ ಅಂತರವಿರುವ ಹಲ್ಲುಗಳನ್ನು ಬ್ರೇಸಸ್ ಅಥವಾ ಅಲೈನರ್‌ಗಳಿಂದ ನೇರಗೊಳಿಸಿ.",
      },
      image: "/images/services/braces.svg",
    },
    {
      slug: "smile-makeover",
      icon: "smile",
      name: { en: "Smile Makeover / Cosmetic Dentistry", kn: "ಸ್ಮೈಲ್ ಮೇಕ್‌ಓವರ್ / ಸೌಂದರ್ಯ ದಂತ ಚಿಕಿತ್ಸೆ" },
      short: {
        en: "Veneers, bonding and contouring planned around your face and smile.",
        kn: "ನಿಮ್ಮ ಮುಖ ಮತ್ತು ನಗುವಿಗೆ ತಕ್ಕಂತೆ ವಿನೀರ್, ಬಾಂಡಿಂಗ್ ಮತ್ತು ಆಕಾರ ಸುಧಾರಣೆ.",
      },
      image: "/images/services/smile.svg",
    },
    {
      slug: "gum-treatment",
      icon: "gum",
      name: { en: "Gum Treatment", kn: "ವಸಡು ಚಿಕಿತ್ಸೆ" },
      short: {
        en: "Treat bleeding, swollen gums and gum disease before it spreads.",
        kn: "ರಕ್ತಸ್ರಾವ, ಊದಿಕೊಂಡ ವಸಡು ಮತ್ತು ವಸಡು ರೋಗಕ್ಕೆ ಸಮಯಕ್ಕೆ ಚಿಕಿತ್ಸೆ.",
      },
      image: "/images/services/gum.svg",
    },
    {
      slug: "kids-dentistry",
      icon: "kids",
      name: { en: "Kids' Dentistry", kn: "ಮಕ್ಕಳ ದಂತ ಚಿಕಿತ್ಸೆ" },
      short: {
        en: "Gentle, friendly care that helps children love visiting the dentist.",
        kn: "ಮಕ್ಕಳು ದಂತ ವೈದ್ಯರ ಭೇಟಿಯನ್ನು ಇಷ್ಟಪಡುವಂತೆ ಸೌಮ್ಯ, ಸ್ನೇಹಪರ ಆರೈಕೆ.",
      },
      image: "/images/services/kids.svg",
    },
    {
      slug: "emergency-dental-care",
      icon: "emergency",
      name: { en: "Emergency Dental Care", kn: "ತುರ್ತು ದಂತ ಚಿಕಿತ್ಸೆ" },
      short: {
        en: "Severe tooth pain, swelling or a broken tooth? Call us right away.",
        kn: "ತೀವ್ರ ಹಲ್ಲುನೋವು, ಊತ ಅಥವಾ ಮುರಿದ ಹಲ್ಲು? ತಕ್ಷಣ ಕರೆ ಮಾಡಿ.",
      },
      image: "/images/services/emergency.svg",
    },
  ] satisfies ServiceSummary[] as ServiceSummary[],

  // ---- Galleries --------------------------------------------------------------
  // TODO: replace with real clinic photos (landscape 4:3 works best).
  gallery: [
    { src: "/images/gallery/reception.svg", alt: { en: "Clinic reception and waiting area", kn: "ಕ್ಲಿನಿಕ್ ಸ್ವಾಗತ ಮತ್ತು ಕಾಯುವ ಕೊಠಡಿ" } },
    { src: "/images/gallery/treatment-room.svg", alt: { en: "Treatment room with dental chair", kn: "ದಂತ ಕುರ್ಚಿಯಿರುವ ಚಿಕಿತ್ಸಾ ಕೊಠಡಿ" } },
    { src: "/images/gallery/equipment.svg", alt: { en: "Modern dental equipment", kn: "ಆಧುನಿಕ ದಂತ ಉಪಕರಣಗಳು" } },
    { src: "/images/gallery/sterilization.svg", alt: { en: "Sterilization area", kn: "ಸ್ಟೆರಿಲೈಸೇಶನ್ ವಿಭಾಗ" } },
    { src: "/images/gallery/xray.svg", alt: { en: "Digital X-ray unit", kn: "ಡಿಜಿಟಲ್ ಎಕ್ಸ್-ರೇ ಘಟಕ" } },
    { src: "/images/gallery/kids-corner.svg", alt: { en: "Kids' corner", kn: "ಮಕ್ಕಳ ಮೂಲೆ" } },
  ] satisfies { src: string; alt: L }[],

  // TODO: real before/after photos — ONLY with written patient consent.
  beforeAfter: [
    {
      title: { en: "Smile makeover (placeholder)", kn: "ಸ್ಮೈಲ್ ಮೇಕ್‌ಓವರ್ (ಮಾದರಿ)" },
      before: "/images/before-after/case-1-before.svg",
      after: "/images/before-after/case-1-after.svg",
    },
    {
      title: { en: "Teeth whitening (placeholder)", kn: "ಹಲ್ಲು ಬಿಳುಪು (ಮಾದರಿ)" },
      before: "/images/before-after/case-2-before.svg",
      after: "/images/before-after/case-2-after.svg",
    },
  ] satisfies { title: L; before: string; after: string }[],

  /**
   * Patient reviews. Do NOT write these yourself — copy real Google reviews
   * (with the reviewer's first name) only after the client approves.
   * Entries with `text: null` render as clearly-marked placeholders.
   */
  reviews: [
    { author: "TODO: Reviewer name", text: null, rating: 5 },
    { author: "TODO: Reviewer name", text: null, rating: 5 },
    { author: "TODO: Reviewer name", text: null, rating: 5 },
  ] satisfies { author: string; text: L | null; rating: number }[] as { author: string; text: L | null; rating: number }[],

  // ---- FAQs (home page accordion) ---------------------------------------------
  faqs: [
    {
      q: { en: "How much does dental treatment cost?", kn: "ದಂತ ಚಿಕಿತ್ಸೆಗೆ ಎಷ್ಟು ಖರ್ಚಾಗುತ್ತದೆ?" },
      a: {
        // TODO: add consultation fee if the client wants it shown.
        en: "Cost depends on your diagnosis and the treatment you choose. After your check-up, the doctor explains every option with a clear estimate before anything starts — no hidden charges.",
        kn: "ಖರ್ಚು ನಿಮ್ಮ ತಪಾಸಣೆ ಮತ್ತು ಆಯ್ಕೆ ಮಾಡುವ ಚಿಕಿತ್ಸೆಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ತಪಾಸಣೆಯ ನಂತರ, ಚಿಕಿತ್ಸೆ ಆರಂಭಿಸುವ ಮೊದಲೇ ವೈದ್ಯರು ಎಲ್ಲಾ ಆಯ್ಕೆಗಳನ್ನು ಸ್ಪಷ್ಟ ಅಂದಾಜಿನೊಂದಿಗೆ ವಿವರಿಸುತ್ತಾರೆ — ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕವಿಲ್ಲ.",
      },
    },
    {
      q: { en: "Will the treatment be painful?", kn: "ಚಿಕಿತ್ಸೆ ನೋವಿನಿಂದ ಕೂಡಿರುತ್ತದೆಯೇ?" },
      a: {
        en: "Most treatments are done under local anaesthesia, so you feel little to no pain. We work gently, explain each step and pause whenever you need.",
        kn: "ಹೆಚ್ಚಿನ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆಯೊಂದಿಗೆ ಮಾಡಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ನೋವು ತುಂಬಾ ಕಡಿಮೆ ಅಥವಾ ಇರುವುದೇ ಇಲ್ಲ. ನಾವು ಸೌಮ್ಯವಾಗಿ, ಪ್ರತಿ ಹಂತವನ್ನು ವಿವರಿಸುತ್ತಾ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.",
      },
    },
    {
      q: { en: "Is root canal treatment really necessary?", kn: "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ ನಿಜವಾಗಿಯೂ ಅಗತ್ಯವೇ?" },
      a: {
        en: "When the nerve inside a tooth is infected, RCT is usually the only way to save the natural tooth. Modern RCT is comfortable and is often completed in one to three visits.",
        kn: "ಹಲ್ಲಿನ ಒಳಗಿನ ನರಕ್ಕೆ ಸೋಂಕು ತಗುಲಿದಾಗ, ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸಲು RCT ಸಾಮಾನ್ಯವಾಗಿ ಏಕೈಕ ಮಾರ್ಗ. ಆಧುನಿಕ RCT ಆರಾಮದಾಯಕವಾಗಿದ್ದು, 1 ರಿಂದ 3 ಭೇಟಿಗಳಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ.",
      },
    },
    {
      q: { en: "Am I a good candidate for dental implants?", kn: "ನನಗೆ ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ ಸೂಕ್ತವೇ?" },
      a: {
        en: "Most healthy adults with enough jaw bone can get implants. We check your bone with an X-ray or scan and review your medical history before recommending them.",
        kn: "ಸಾಕಷ್ಟು ದವಡೆ ಮೂಳೆ ಇರುವ ಹೆಚ್ಚಿನ ಆರೋಗ್ಯವಂತ ವಯಸ್ಕರು ಇಂಪ್ಲಾಂಟ್ ಪಡೆಯಬಹುದು. ಶಿಫಾರಸು ಮಾಡುವ ಮೊದಲು ಎಕ್ಸ್-ರೇ ಅಥವಾ ಸ್ಕ್ಯಾನ್ ಮೂಲಕ ಮೂಳೆಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.",
      },
    },
    {
      q: { en: "When should my child first see a dentist?", kn: "ಮಗುವನ್ನು ಮೊದಲ ಬಾರಿಗೆ ಯಾವಾಗ ದಂತ ವೈದ್ಯರ ಬಳಿ ಕರೆತರಬೇಕು?" },
      a: {
        en: "By their first birthday, or within six months of the first tooth appearing. Early, friendly visits prevent cavities and fear of the dentist.",
        kn: "ಮೊದಲ ಹುಟ್ಟುಹಬ್ಬದೊಳಗೆ ಅಥವಾ ಮೊದಲ ಹಲ್ಲು ಬಂದ ಆರು ತಿಂಗಳೊಳಗೆ. ಬೇಗನೆ ಭೇಟಿ ನೀಡುವುದರಿಂದ ಹುಳುಕು ಮತ್ತು ಭಯ ಎರಡೂ ತಪ್ಪುತ್ತವೆ.",
      },
    },
    {
      q: { en: "What are your clinic timings?", kn: "ಕ್ಲಿನಿಕ್ ಸಮಯ ಯಾವುದು?" },
      a: {
        en: "We are open every day until 9:00 PM. Evening slots make it easy for working professionals and school-going children.",
        kn: "ನಾವು ಪ್ರತಿದಿನ ರಾತ್ರಿ 9:00 ರವರೆಗೆ ತೆರೆದಿರುತ್ತೇವೆ. ಸಂಜೆಯ ಸಮಯ ಉದ್ಯೋಗಿಗಳಿಗೆ ಮತ್ತು ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ಅನುಕೂಲ.",
      },
    },
    {
      q: { en: "What payment options do you accept?", kn: "ಯಾವ ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ?" },
      a: {
        // TODO: confirm accepted payment methods and EMI availability with client.
        en: "We accept cash, UPI and cards. For larger treatments, ask us about paying in stages.",
        kn: "ನಗದು, UPI ಮತ್ತು ಕಾರ್ಡ್ ಸ್ವೀಕರಿಸುತ್ತೇವೆ. ದೊಡ್ಡ ಚಿಕಿತ್ಸೆಗಳಿಗೆ ಹಂತ ಹಂತವಾಗಿ ಪಾವತಿಸುವ ಬಗ್ಗೆ ಕೇಳಿ.",
      },
    },
    {
      q: { en: "Do you accept dental insurance?", kn: "ದಂತ ವಿಮೆ ಸ್ವೀಕರಿಸುತ್ತೀರಾ?" },
      a: {
        // TODO: confirm insurance policy with client.
        en: "Many health policies in India do not cover routine dental care. We provide detailed bills and treatment notes so you can claim reimbursement where your policy allows.",
        kn: "ಭಾರತದ ಹಲವು ಆರೋಗ್ಯ ವಿಮೆಗಳು ಸಾಮಾನ್ಯ ದಂತ ಚಿಕಿತ್ಸೆಯನ್ನು ಒಳಗೊಳ್ಳುವುದಿಲ್ಲ. ನಿಮ್ಮ ಪಾಲಿಸಿ ಅನುಮತಿಸಿದಲ್ಲಿ ಮರುಪಾವತಿ ಪಡೆಯಲು ವಿವರವಾದ ಬಿಲ್ ಮತ್ತು ಚಿಕಿತ್ಸಾ ವಿವರ ನೀಡುತ್ತೇವೆ.",
      },
    },
  ] satisfies Faq[] as Faq[],

  /** Credit line in the footer. */
  credit: { label: "Moti Media", url: "" }, // TODO: add Moti Media website URL
} as const;

export type Clinic = typeof clinic;
