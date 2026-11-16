/**
 * Smile Tips articles. Add a new object to `posts` to publish an article —
 * it automatically gets its own page, appears in the sitemap and the blog list.
 *
 * Body blocks: { type: "p" } paragraph, { type: "h2" } heading, { type: "ul" } bullet list.
 * TODO: dentist to review; native Kannada speaker to proofread.
 */
import type { L } from "@/config/clinic";

export type Block =
  | { type: "p"; text: L }
  | { type: "h2"; text: L }
  | { type: "ul"; items: L[] };

export type Post = {
  slug: string;
  date: string; // ISO
  readMinutes: number;
  cover: string;
  title: L;
  excerpt: L;
  body: Block[];
};

const t = (en: string, kn: string): L => ({ en, kn });

export const posts: Post[] = [
  {
    slug: "how-to-brush-your-teeth-properly",
    date: "2026-11-01",
    readMinutes: 3,
    cover: "/images/blog/brushing.svg",
    title: t("How to brush your teeth the right way", "ಹಲ್ಲುಗಳನ್ನು ಸರಿಯಾಗಿ ಉಜ್ಜುವುದು ಹೇಗೆ"),
    excerpt: t(
      "Most of us brush every day, but small mistakes leave plaque behind. Here's a simple routine that works.",
      "ನಾವೆಲ್ಲರೂ ಪ್ರತಿದಿನ ಹಲ್ಲುಜ್ಜುತ್ತೇವೆ, ಆದರೆ ಸಣ್ಣ ತಪ್ಪುಗಳಿಂದ ಪ್ಲಾಕ್ ಉಳಿಯುತ್ತದೆ. ಇಲ್ಲಿದೆ ಸರಳ ವಿಧಾನ."
    ),
    body: [
      {
        type: "p",
        text: t(
          "Brushing is the single most important thing you can do for your teeth at home. But brushing harder or longer isn't the answer — brushing correctly is.",
          "ಮನೆಯಲ್ಲಿ ಹಲ್ಲುಗಳಿಗಾಗಿ ನೀವು ಮಾಡಬಹುದಾದ ಅತ್ಯಂತ ಮುಖ್ಯ ಕೆಲಸ ಹಲ್ಲುಜ್ಜುವುದು. ಆದರೆ ಜೋರಾಗಿ ಅಥವಾ ಹೆಚ್ಚು ಹೊತ್ತು ಉಜ್ಜುವುದು ಉತ್ತರವಲ್ಲ — ಸರಿಯಾಗಿ ಉಜ್ಜುವುದು ಮುಖ್ಯ."
        ),
      },
      { type: "h2", text: t("The 2-minute routine", "2 ನಿಮಿಷಗಳ ವಿಧಾನ") },
      {
        type: "ul",
        items: [
          t("Use a soft-bristled brush and a pea-sized amount of fluoride toothpaste.", "ಮೃದು ಬ್ರಷ್ ಮತ್ತು ಬಟಾಣಿ ಕಾಳಿನಷ್ಟು ಫ್ಲೋರೈಡ್ ಟೂತ್‌ಪೇಸ್ಟ್ ಬಳಸಿ."),
          t("Hold the brush at a 45° angle to the gum line.", "ಬ್ರಷ್ ಅನ್ನು ವಸಡಿನ ಅಂಚಿಗೆ 45° ಕೋನದಲ್ಲಿ ಹಿಡಿಯಿರಿ."),
          t("Use small, gentle circles — not hard back-and-forth scrubbing.", "ಸಣ್ಣ, ಸೌಮ್ಯ ವೃತ್ತಾಕಾರದಲ್ಲಿ ಉಜ್ಜಿ — ಜೋರಾಗಿ ಹಿಂದೆ-ಮುಂದೆ ಉಜ್ಜಬೇಡಿ."),
          t("Clean the outer, inner and chewing surfaces of every tooth.", "ಪ್ರತಿ ಹಲ್ಲಿನ ಹೊರ, ಒಳ ಮತ್ತು ಅಗಿಯುವ ಮೇಲ್ಮೈ ಸ್ವಚ್ಛಗೊಳಿಸಿ."),
          t("Finish by gently brushing your tongue.", "ಕೊನೆಯಲ್ಲಿ ನಾಲಿಗೆಯನ್ನು ಮೆಲ್ಲಗೆ ಸ್ವಚ್ಛಗೊಳಿಸಿ."),
        ],
      },
      { type: "h2", text: t("Common mistakes", "ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು") },
      {
        type: "p",
        text: t(
          "Rinsing with water straight after brushing washes away the fluoride — just spit out the extra paste. Hard brushes and heavy pressure can wear down enamel and push gums back. And replace your brush every three months, or sooner if the bristles splay.",
          "ಹಲ್ಲುಜ್ಜಿದ ತಕ್ಷಣ ನೀರಿನಿಂದ ಮುಕ್ಕಳಿಸಿದರೆ ಫ್ಲೋರೈಡ್ ತೊಳೆದುಹೋಗುತ್ತದೆ — ಹೆಚ್ಚಿನ ಪೇಸ್ಟ್ ಅನ್ನು ಉಗುಳಿದರೆ ಸಾಕು. ಗಟ್ಟಿ ಬ್ರಷ್ ಮತ್ತು ಹೆಚ್ಚು ಒತ್ತಡ ಎನಾಮೆಲ್ ಸವೆಸಿ ವಸಡನ್ನು ಹಿಂದಕ್ಕೆ ತಳ್ಳಬಹುದು. ಮೂರು ತಿಂಗಳಿಗೊಮ್ಮೆ ಅಥವಾ ಬಿರುಗೂದಲು ಹರಡಿದಾಗ ಬ್ರಷ್ ಬದಲಿಸಿ."
        ),
      },
      { type: "h2", text: t("Don't forget between the teeth", "ಹಲ್ಲುಗಳ ನಡುವೆ ಮರೆಯಬೇಡಿ") },
      {
        type: "p",
        text: t(
          "A toothbrush can't reach between teeth, where many cavities and gum problems begin. Floss or use interdental brushes once a day — your gums may bleed a little at first, which usually settles within a week or two.",
          "ಬ್ರಷ್ ಹಲ್ಲುಗಳ ನಡುವೆ ತಲುಪುವುದಿಲ್ಲ, ಅಲ್ಲಿಯೇ ಹೆಚ್ಚಿನ ಹುಳುಕು ಮತ್ತು ವಸಡು ಸಮಸ್ಯೆ ಆರಂಭವಾಗುತ್ತದೆ. ದಿನಕ್ಕೊಮ್ಮೆ ಫ್ಲಾಸ್ ಅಥವಾ ಇಂಟರ್‌ಡೆಂಟಲ್ ಬ್ರಷ್ ಬಳಸಿ — ಆರಂಭದಲ್ಲಿ ಸ್ವಲ್ಪ ರಕ್ತ ಬರಬಹುದು, ಅದು ಒಂದೆರಡು ವಾರಗಳಲ್ಲಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ."
        ),
      },
    ],
  },
  {
    slug: "root-canal-myths-and-facts",
    date: "2026-11-05",
    readMinutes: 4,
    cover: "/images/blog/root-canal.svg",
    title: t("Root canal treatment: myths vs facts", "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ: ತಪ್ಪು ಕಲ್ಪನೆಗಳು ಮತ್ತು ಸತ್ಯಗಳು"),
    excerpt: t(
      "Worried about RCT? Most fears come from old stories. Let's separate myth from fact.",
      "RCT ಬಗ್ಗೆ ಚಿಂತೆಯೇ? ಹೆಚ್ಚಿನ ಭಯಗಳು ಹಳೆಯ ಕಥೆಗಳಿಂದ ಬಂದಿವೆ. ಸತ್ಯ ಏನೆಂದು ನೋಡೋಣ."
    ),
    body: [
      {
        type: "p",
        text: t(
          "Few dental treatments have a reputation as scary as the root canal. Yet for most patients, the treatment itself is far easier than the toothache that led to it.",
          "ರೂಟ್ ಕೆನಾಲ್‌ನಷ್ಟು ಭಯದ ಹೆಸರು ಬೇರೆ ಯಾವ ಚಿಕಿತ್ಸೆಗೂ ಇಲ್ಲ. ಆದರೆ ಹೆಚ್ಚಿನ ರೋಗಿಗಳಿಗೆ, ಚಿಕಿತ್ಸೆಗಿಂತ ಅದಕ್ಕೆ ಕಾರಣವಾದ ಹಲ್ಲುನೋವೇ ಹೆಚ್ಚು ಕಷ್ಟ."
        ),
      },
      { type: "h2", text: t("Myth: “Root canals are very painful”", "ತಪ್ಪು ಕಲ್ಪನೆ: “ರೂಟ್ ಕೆನಾಲ್ ತುಂಬಾ ನೋವು”") },
      {
        type: "p",
        text: t(
          "Fact: With local anaesthesia, most people say it feels similar to getting a filling. The pain people remember is usually from the infection before treatment — RCT is what relieves it.",
          "ಸತ್ಯ: ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆಯಿಂದ, ಇದು ಫಿಲ್ಲಿಂಗ್‌ನಂತೆಯೇ ಅನಿಸುತ್ತದೆ ಎಂದು ಹೆಚ್ಚಿನವರು ಹೇಳುತ್ತಾರೆ. ಜನರು ನೆನಪಿಡುವ ನೋವು ಸಾಮಾನ್ಯವಾಗಿ ಚಿಕಿತ್ಸೆಗೆ ಮೊದಲಿನ ಸೋಂಕಿನದು — RCT ಅದನ್ನು ನಿವಾರಿಸುತ್ತದೆ."
        ),
      },
      { type: "h2", text: t("Myth: “It's better to just pull the tooth”", "ತಪ್ಪು ಕಲ್ಪನೆ: “ಹಲ್ಲು ತೆಗೆಸಿಬಿಡುವುದೇ ಉತ್ತಮ”") },
      {
        type: "p",
        text: t(
          "Fact: Your natural tooth is almost always the best option. A missing tooth can cause neighbouring teeth to drift and affect chewing, and replacing it later usually costs more.",
          "ಸತ್ಯ: ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಹಲ್ಲೇ ಬಹುತೇಕ ಯಾವಾಗಲೂ ಉತ್ತಮ ಆಯ್ಕೆ. ಹಲ್ಲು ಇಲ್ಲದಿದ್ದರೆ ಪಕ್ಕದ ಹಲ್ಲುಗಳು ಸರಿಯಬಹುದು, ಅಗಿಯುವಿಕೆ ಕಷ್ಟವಾಗಬಹುದು, ಮತ್ತು ನಂತರ ಬದಲಿಸುವುದು ಹೆಚ್ಚು ದುಬಾರಿ."
        ),
      },
      { type: "h2", text: t("Myth: “If the pain stops, I don't need treatment”", "ತಪ್ಪು ಕಲ್ಪನೆ: “ನೋವು ನಿಂತರೆ ಚಿಕಿತ್ಸೆ ಬೇಡ”") },
      {
        type: "p",
        text: t(
          "Fact: Pain can stop because the nerve has died — but the infection remains and can spread into the bone, causing swelling later. Get it checked even if it feels better.",
          "ಸತ್ಯ: ನರ ಸತ್ತ ಕಾರಣ ನೋವು ನಿಲ್ಲಬಹುದು — ಆದರೆ ಸೋಂಕು ಉಳಿದು ಮೂಳೆಗೆ ಹರಡಿ ನಂತರ ಊತ ಉಂಟುಮಾಡಬಹುದು. ಸರಿಯಾದಂತೆ ಅನಿಸಿದರೂ ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ."
        ),
      },
      { type: "h2", text: t("Signs you may need a root canal", "ರೂಟ್ ಕೆನಾಲ್ ಬೇಕಾಗಬಹುದಾದ ಲಕ್ಷಣಗಳು") },
      {
        type: "ul",
        items: [
          t("Throbbing pain, especially at night", "ಮಿಡಿಯುವ ನೋವು, ವಿಶೇಷವಾಗಿ ರಾತ್ರಿ"),
          t("Sensitivity to hot or cold that lingers", "ಬಿಸಿ ಅಥವಾ ತಣ್ಣನೆಯದಕ್ಕೆ ದೀರ್ಘ ಸೂಕ್ಷ್ಮತೆ"),
          t("Pain when biting", "ಕಚ್ಚುವಾಗ ನೋವು"),
          t("A darkened tooth or a pimple on the gum", "ಕಪ್ಪಾದ ಹಲ್ಲು ಅಥವಾ ವಸಡಿನ ಮೇಲೆ ಗುಳ್ಳೆ"),
        ],
      },
    ],
  },
  {
    slug: "your-childs-first-dental-visit",
    date: "2026-11-10",
    readMinutes: 3,
    cover: "/images/blog/kids.svg",
    title: t("Your child's first dental visit: a parent's guide", "ಮಗುವಿನ ಮೊದಲ ದಂತ ಭೇಟಿ: ಪೋಷಕರಿಗೆ ಮಾರ್ಗದರ್ಶಿ"),
    excerpt: t(
      "When to go, what happens, and how to make it a happy experience for your little one.",
      "ಯಾವಾಗ ಹೋಗಬೇಕು, ಏನಾಗುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಮಗುವಿಗೆ ಇದನ್ನು ಸಂತೋಷದ ಅನುಭವವಾಗಿಸುವುದು ಹೇಗೆ."
    ),
    body: [
      {
        type: "p",
        text: t(
          "Dentists recommend a first visit by your child's first birthday, or within six months of the first tooth. It may sound early, but these visits are short, gentle and mostly about prevention.",
          "ಮಗುವಿನ ಮೊದಲ ಹುಟ್ಟುಹಬ್ಬದೊಳಗೆ ಅಥವಾ ಮೊದಲ ಹಲ್ಲು ಬಂದ ಆರು ತಿಂಗಳೊಳಗೆ ಮೊದಲ ಭೇಟಿ ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ. ಬೇಗ ಅನಿಸಬಹುದು, ಆದರೆ ಈ ಭೇಟಿಗಳು ಚಿಕ್ಕ, ಸೌಮ್ಯ ಮತ್ತು ಮುಖ್ಯವಾಗಿ ತಡೆಗಟ್ಟುವಿಕೆಗಾಗಿ."
        ),
      },
      { type: "h2", text: t("What happens at the visit", "ಭೇಟಿಯಲ್ಲಿ ಏನಾಗುತ್ತದೆ") },
      {
        type: "ul",
        items: [
          t("A quick, gentle look at teeth and gums — often on your lap.", "ಹಲ್ಲು ಮತ್ತು ವಸಡಿನ ತ್ವರಿತ, ಸೌಮ್ಯ ಪರೀಕ್ಷೆ — ಅನೇಕ ಬಾರಿ ನಿಮ್ಮ ಮಡಿಲಲ್ಲೇ."),
          t("Advice on brushing, toothpaste amount and feeding habits.", "ಹಲ್ಲುಜ್ಜುವಿಕೆ, ಪೇಸ್ಟ್ ಪ್ರಮಾಣ ಮತ್ತು ಆಹಾರ ಅಭ್ಯಾಸಗಳ ಬಗ್ಗೆ ಸಲಹೆ."),
          t("A chance for your child to get comfortable with the clinic.", "ಮಗು ಕ್ಲಿನಿಕ್‌ಗೆ ಹೊಂದಿಕೊಳ್ಳಲು ಒಂದು ಅವಕಾಶ."),
        ],
      },
      { type: "h2", text: t("How to prepare your child", "ಮಗುವನ್ನು ಹೇಗೆ ಸಿದ್ಧಪಡಿಸುವುದು") },
      {
        type: "p",
        text: t(
          "Keep it positive and simple: “The dentist will count your teeth and check they're strong.” Avoid words like “hurt” or “injection”, and never use the dentist as a threat. Choose a time when your child is usually rested — evening slots after school work well for many families.",
          "ಸಕಾರಾತ್ಮಕವಾಗಿ ಮತ್ತು ಸರಳವಾಗಿ ಹೇಳಿ: “ಡಾಕ್ಟರ್ ನಿನ್ನ ಹಲ್ಲುಗಳನ್ನು ಎಣಿಸಿ, ಗಟ್ಟಿಯಾಗಿವೆಯೇ ಎಂದು ನೋಡುತ್ತಾರೆ.” “ನೋವು” ಅಥವಾ “ಇಂಜೆಕ್ಷನ್” ಪದಗಳನ್ನು ತಪ್ಪಿಸಿ, ದಂತ ವೈದ್ಯರ ಹೆಸರಿನಲ್ಲಿ ಹೆದರಿಸಬೇಡಿ. ಮಗು ವಿಶ್ರಾಂತವಾಗಿರುವ ಸಮಯ ಆರಿಸಿ — ಶಾಲೆಯ ನಂತರದ ಸಂಜೆಯ ಸಮಯ ಹಲವು ಕುಟುಂಬಗಳಿಗೆ ಅನುಕೂಲ."
        ),
      },
      { type: "h2", text: t("Habits that protect little teeth", "ಪುಟ್ಟ ಹಲ್ಲುಗಳನ್ನು ರಕ್ಷಿಸುವ ಅಭ್ಯಾಸಗಳು") },
      {
        type: "ul",
        items: [
          t("Wipe gums with a clean cloth even before teeth appear.", "ಹಲ್ಲು ಬರುವ ಮೊದಲೇ ಸ್ವಚ್ಛ ಬಟ್ಟೆಯಿಂದ ವಸಡು ಒರೆಸಿ."),
          t("No bottle of milk or juice in bed.", "ಹಾಸಿಗೆಯಲ್ಲಿ ಹಾಲು ಅಥವಾ ಜ್ಯೂಸ್ ಬಾಟಲಿ ಬೇಡ."),
          t("Limit sweets and sticky snacks to mealtimes.", "ಸಿಹಿ ಮತ್ತು ಅಂಟು ತಿಂಡಿಗಳನ್ನು ಊಟದ ಸಮಯಕ್ಕೆ ಮಿತಿಗೊಳಿಸಿ."),
          t("Brush twice a day and help until about age 8.", "ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ಹಲ್ಲುಜ್ಜಿಸಿ, ಸುಮಾರು 8 ವರ್ಷದವರೆಗೆ ಸಹಾಯ ಮಾಡಿ."),
        ],
      },
    ],
  },
];
