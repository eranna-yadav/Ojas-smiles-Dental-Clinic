/**
 * Detailed content for each service page (/[locale]/services/[slug]).
 * The service list itself (name, icon, image) lives in /config/clinic.ts.
 *
 * This is general patient-education content. TODO: have the dentist review it,
 * and have a native Kannada speaker proofread the `kn` text before launch.
 */
import type { Faq, L } from "@/config/clinic";

const t = (en: string, kn: string): L => ({ en, kn });

export type ServiceDetail = {
  metaDescription: L;
  what: L;
  who: L[];
  steps: { title: L; text: L }[];
  recovery: L[];
  faqs: Faq[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "dental-checkup-cleaning": {
    metaDescription: t(
      "Dental check-up and professional teeth cleaning (scaling & polishing) in Hassan. Prevent cavities and gum disease at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ದಂತ ತಪಾಸಣೆ ಮತ್ತು ವೃತ್ತಿಪರ ಹಲ್ಲು ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ (ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ಪಾಲಿಶಿಂಗ್). ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ಹುಳುಕು ಮತ್ತು ವಸಡು ರೋಗ ತಡೆಯಿರಿ."
    ),
    what: t(
      "A complete examination of your teeth, gums and mouth, followed by professional cleaning (scaling and polishing) to remove plaque and hard tartar that brushing alone cannot.",
      "ನಿಮ್ಮ ಹಲ್ಲು, ವಸಡು ಮತ್ತು ಬಾಯಿಯ ಸಂಪೂರ್ಣ ತಪಾಸಣೆ, ನಂತರ ಹಲ್ಲುಜ್ಜುವುದರಿಂದ ಮಾತ್ರ ತೆಗೆಯಲಾಗದ ಪ್ಲಾಕ್ ಮತ್ತು ಗಟ್ಟಿ ಕಲೆಗಳನ್ನು ತೆಗೆಯುವ ವೃತ್ತಿಪರ ಸ್ವಚ್ಛತೆ (ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ಪಾಲಿಶಿಂಗ್)."
    ),
    who: [
      t("Everyone, ideally every six months", "ಪ್ರತಿಯೊಬ್ಬರೂ, ಆದರ್ಶವಾಗಿ ಪ್ರತಿ ಆರು ತಿಂಗಳಿಗೊಮ್ಮೆ"),
      t("People with bad breath, stains or bleeding gums", "ಬಾಯಿ ದುರ್ವಾಸನೆ, ಕಲೆಗಳು ಅಥವಾ ವಸಡಿನಿಂದ ರಕ್ತ ಬರುವವರು"),
      t("Smokers, tea/coffee drinkers and tobacco users", "ಧೂಮಪಾನಿಗಳು, ಚಹಾ/ಕಾಫಿ ಕುಡಿಯುವವರು ಮತ್ತು ತಂಬಾಕು ಬಳಸುವವರು"),
      t("Anyone with diabetes or who is pregnant", "ಮಧುಮೇಹ ಇರುವವರು ಅಥವಾ ಗರ್ಭಿಣಿಯರು"),
    ],
    steps: [
      { title: t("Consultation", "ಸಮಾಲೋಚನೆ"), text: t("We discuss your concerns and medical history.", "ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಇತಿಹಾಸವನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ.") },
      { title: t("Examination", "ತಪಾಸಣೆ"), text: t("Teeth, gums and soft tissues are checked; X-rays if needed.", "ಹಲ್ಲು, ವಸಡು ಮತ್ತು ಬಾಯಿಯ ಒಳಭಾಗ ಪರೀಕ್ಷೆ; ಅಗತ್ಯವಿದ್ದರೆ ಎಕ್ಸ್-ರೇ.") },
      { title: t("Scaling", "ಸ್ಕೇಲಿಂಗ್"), text: t("An ultrasonic scaler gently removes tartar above and below the gum line.", "ಅಲ್ಟ್ರಾಸಾನಿಕ್ ಸ್ಕೇಲರ್ ವಸಡಿನ ಮೇಲೆ ಮತ್ತು ಕೆಳಗಿನ ಕಲೆಗಳನ್ನು ಸೌಮ್ಯವಾಗಿ ತೆಗೆಯುತ್ತದೆ.") },
      { title: t("Polishing & advice", "ಪಾಲಿಶ್ ಮತ್ತು ಸಲಹೆ"), text: t("Teeth are polished and you get a personalised home-care plan.", "ಹಲ್ಲುಗಳನ್ನು ಪಾಲಿಶ್ ಮಾಡಿ, ನಿಮಗೆ ತಕ್ಕ ಮನೆ ಆರೈಕೆ ಸಲಹೆ ನೀಡುತ್ತೇವೆ.") },
    ],
    recovery: [
      t("Mild sensitivity for a day or two is normal.", "ಒಂದೆರಡು ದಿನ ಸ್ವಲ್ಪ ಸೂಕ್ಷ್ಮತೆ ಸಾಮಾನ್ಯ."),
      t("Avoid very hot or cold food for 24 hours if sensitive.", "ಸೂಕ್ಷ್ಮತೆ ಇದ್ದರೆ 24 ಗಂಟೆ ತುಂಬಾ ಬಿಸಿ ಅಥವಾ ತಣ್ಣನೆಯ ಆಹಾರ ತಪ್ಪಿಸಿ."),
      t("Brush twice daily with a soft brush and fluoride toothpaste.", "ಮೃದು ಬ್ರಷ್ ಮತ್ತು ಫ್ಲೋರೈಡ್ ಪೇಸ್ಟ್‌ನಿಂದ ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ಹಲ್ಲುಜ್ಜಿ."),
      t("Book your next check-up in six months.", "ಮುಂದಿನ ತಪಾಸಣೆಯನ್ನು ಆರು ತಿಂಗಳಲ್ಲಿ ಬುಕ್ ಮಾಡಿ."),
    ],
    faqs: [
      {
        q: t("Does scaling make teeth loose or weak?", "ಸ್ಕೇಲಿಂಗ್‌ನಿಂದ ಹಲ್ಲುಗಳು ಸಡಿಲ ಅಥವಾ ದುರ್ಬಲವಾಗುತ್ತವೆಯೇ?"),
        a: t(
          "No. Scaling only removes deposits. Teeth may feel different because tartar that was filling gaps is gone — your gums then heal and tighten.",
          "ಇಲ್ಲ. ಸ್ಕೇಲಿಂಗ್ ಕೇವಲ ಕಲೆಗಳನ್ನು ತೆಗೆಯುತ್ತದೆ. ಅಂತರ ತುಂಬಿದ್ದ ಕಲೆ ಹೋದ ಕಾರಣ ವ್ಯತ್ಯಾಸ ಅನಿಸಬಹುದು — ನಂತರ ವಸಡು ಗುಣವಾಗಿ ಬಿಗಿಯಾಗುತ್ತದೆ."
        ),
      },
      {
        q: t("How long does a check-up take?", "ತಪಾಸಣೆಗೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು?"),
        a: t("Usually 30–45 minutes including cleaning.", "ಸ್ವಚ್ಛತೆ ಸೇರಿ ಸಾಮಾನ್ಯವಾಗಿ 30–45 ನಿಮಿಷ."),
      },
    ],
  },

  "tooth-fillings": {
    metaDescription: t(
      "Tooth-coloured composite fillings for cavities in Hassan. Quick, painless cavity treatment at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಹುಳುಕಿಗೆ ಹಲ್ಲಿನ ಬಣ್ಣದ ಕಾಂಪೋಸಿಟ್ ಫಿಲ್ಲಿಂಗ್. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ತ್ವರಿತ, ನೋವುರಹಿತ ಚಿಕಿತ್ಸೆ."
    ),
    what: t(
      "A filling repairs a tooth damaged by decay. The decayed part is removed and the space is filled with a strong, tooth-coloured material that restores shape and function.",
      "ಫಿಲ್ಲಿಂಗ್ ಹುಳುಕಿನಿಂದ ಹಾಳಾದ ಹಲ್ಲನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ. ಹುಳುಕು ಭಾಗವನ್ನು ತೆಗೆದು, ಆ ಜಾಗವನ್ನು ಗಟ್ಟಿಯಾದ ಹಲ್ಲಿನ ಬಣ್ಣದ ವಸ್ತುವಿನಿಂದ ತುಂಬಿಸಲಾಗುತ್ತದೆ."
    ),
    who: [
      t("People with cavities or black spots on teeth", "ಹಲ್ಲಿನಲ್ಲಿ ಹುಳುಕು ಅಥವಾ ಕಪ್ಪು ಕಲೆ ಇರುವವರು"),
      t("Sensitivity to sweets, hot or cold", "ಸಿಹಿ, ಬಿಸಿ ಅಥವಾ ತಣ್ಣನೆಯದಕ್ಕೆ ಸೂಕ್ಷ್ಮತೆ ಇರುವವರು"),
      t("Food getting stuck between teeth", "ಹಲ್ಲುಗಳ ನಡುವೆ ಆಹಾರ ಸಿಲುಕುವವರು"),
      t("Small chips or worn edges", "ಸಣ್ಣ ಚಿಪ್ ಅಥವಾ ಸವೆದ ಅಂಚುಗಳು"),
    ],
    steps: [
      { title: t("Diagnosis", "ರೋಗನಿರ್ಣಯ"), text: t("We check the cavity's depth, with an X-ray if needed.", "ಹುಳುಕಿನ ಆಳವನ್ನು ಪರೀಕ್ಷಿಸುತ್ತೇವೆ, ಅಗತ್ಯವಿದ್ದರೆ ಎಕ್ಸ್-ರೇ.") },
      { title: t("Numbing", "ಅರಿವಳಿಕೆ"), text: t("Local anaesthesia keeps you comfortable if needed.", "ಅಗತ್ಯವಿದ್ದರೆ ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆ ನೀಡಲಾಗುತ್ತದೆ.") },
      { title: t("Cleaning the cavity", "ಹುಳುಕು ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ"), text: t("Decay is gently removed and the tooth is prepared.", "ಹುಳುಕನ್ನು ಸೌಮ್ಯವಾಗಿ ತೆಗೆದು ಹಲ್ಲನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.") },
      { title: t("Filling & polishing", "ತುಂಬುವುದು ಮತ್ತು ಪಾಲಿಶ್"), text: t("Material is placed in layers, hardened with a light, shaped and polished.", "ವಸ್ತುವನ್ನು ಪದರಗಳಲ್ಲಿ ತುಂಬಿ, ಬೆಳಕಿನಿಂದ ಗಟ್ಟಿಗೊಳಿಸಿ, ಆಕಾರ ನೀಡಿ ಪಾಲಿಶ್ ಮಾಡಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("You can eat once the numbness wears off.", "ಮರಗಟ್ಟುವಿಕೆ ಕಡಿಮೆಯಾದ ನಂತರ ತಿನ್ನಬಹುದು."),
      t("Mild sensitivity for a few days is normal.", "ಕೆಲವು ದಿನ ಸ್ವಲ್ಪ ಸೂಕ್ಷ್ಮತೆ ಸಾಮಾನ್ಯ."),
      t("Tell us if your bite feels high — a quick adjustment fixes it.", "ಕಚ್ಚುವಾಗ ಎತ್ತರ ಅನಿಸಿದರೆ ತಿಳಿಸಿ — ಸಣ್ಣ ಹೊಂದಾಣಿಕೆಯಿಂದ ಸರಿಯಾಗುತ್ತದೆ."),
      t("Cut down on sugary snacks between meals.", "ಊಟದ ನಡುವೆ ಸಿಹಿ ತಿಂಡಿ ಕಡಿಮೆ ಮಾಡಿ."),
    ],
    faqs: [
      {
        q: t("How long do fillings last?", "ಫಿಲ್ಲಿಂಗ್ ಎಷ್ಟು ಕಾಲ ಉಳಿಯುತ್ತದೆ?"),
        a: t("With good care, many years. Regular check-ups help us spot wear early.", "ಉತ್ತಮ ಆರೈಕೆಯಿಂದ ಹಲವು ವರ್ಷಗಳು. ನಿಯಮಿತ ತಪಾಸಣೆಯಿಂದ ಸವೆತವನ್ನು ಬೇಗ ಗುರುತಿಸಬಹುದು."),
      },
      {
        q: t("Will people notice my filling?", "ನನ್ನ ಫಿಲ್ಲಿಂಗ್ ಬೇರೆಯವರಿಗೆ ಕಾಣಿಸುತ್ತದೆಯೇ?"),
        a: t("Tooth-coloured fillings are matched to your tooth shade, so they blend in.", "ಹಲ್ಲಿನ ಬಣ್ಣಕ್ಕೆ ಹೊಂದುವಂತೆ ಮಾಡಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಸುಲಭವಾಗಿ ಕಾಣಿಸುವುದಿಲ್ಲ."),
      },
    ],
  },

  "root-canal-treatment": {
    metaDescription: t(
      "Painless root canal treatment (RCT) in Hassan. Save your natural tooth and relieve tooth pain at Ojas Smiles Dental Clinic, open till 9 PM.",
      "ಹಾಸನದಲ್ಲಿ ನೋವುರಹಿತ ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ (RCT). ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸಿ, ನೋವಿನಿಂದ ಮುಕ್ತಿ ಪಡೆಯಿರಿ."
    ),
    what: t(
      "Root canal treatment removes infected or inflamed pulp (the nerve) from inside a tooth, cleans and disinfects the canals, and seals them. It relieves pain and lets you keep your natural tooth instead of extracting it.",
      "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಹಲ್ಲಿನ ಒಳಗಿನ ಸೋಂಕಿತ ನರವನ್ನು (ಪಲ್ಪ್) ತೆಗೆದು, ಕಾಲುವೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಮುಚ್ಚಲಾಗುತ್ತದೆ. ಇದು ನೋವನ್ನು ನಿವಾರಿಸಿ, ಹಲ್ಲು ತೆಗೆಯುವ ಬದಲು ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸುತ್ತದೆ."
    ),
    who: [
      t("Severe or throbbing toothache, especially at night", "ತೀವ್ರ ಅಥವಾ ಮಿಡಿಯುವ ಹಲ್ಲುನೋವು, ವಿಶೇಷವಾಗಿ ರಾತ್ರಿ"),
      t("Lingering sensitivity to hot or cold", "ಬಿಸಿ ಅಥವಾ ತಣ್ಣನೆಯದಕ್ಕೆ ದೀರ್ಘ ಸೂಕ್ಷ್ಮತೆ"),
      t("Swelling or a pimple on the gum", "ವಸಡಿನಲ್ಲಿ ಊತ ಅಥವಾ ಗುಳ್ಳೆ"),
      t("Deep cavity or a cracked tooth reaching the nerve", "ನರ ತಲುಪಿದ ಆಳವಾದ ಹುಳುಕು ಅಥವಾ ಬಿರುಕು"),
    ],
    steps: [
      { title: t("X-ray & diagnosis", "ಎಕ್ಸ್-ರೇ ಮತ್ತು ರೋಗನಿರ್ಣಯ"), text: t("We confirm the infection and plan treatment.", "ಸೋಂಕನ್ನು ದೃಢೀಕರಿಸಿ ಚಿಕಿತ್ಸೆಯನ್ನು ಯೋಜಿಸುತ್ತೇವೆ.") },
      { title: t("Numbing", "ಅರಿವಳಿಕೆ"), text: t("Local anaesthesia makes the procedure comfortable.", "ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆಯಿಂದ ಚಿಕಿತ್ಸೆ ಆರಾಮದಾಯಕವಾಗುತ್ತದೆ.") },
      { title: t("Cleaning the canals", "ಕಾಲುವೆಗಳ ಸ್ವಚ್ಛತೆ"), text: t("Infected pulp is removed; canals are shaped and disinfected.", "ಸೋಂಕಿತ ಪಲ್ಪ್ ತೆಗೆದು, ಕಾಲುವೆಗಳನ್ನು ಆಕಾರಗೊಳಿಸಿ ಸೋಂಕುರಹಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.") },
      { title: t("Sealing", "ಮುಚ್ಚುವುದು"), text: t("Canals are filled and sealed to prevent re-infection.", "ಮತ್ತೆ ಸೋಂಕು ತಗುಲದಂತೆ ಕಾಲುವೆಗಳನ್ನು ತುಂಬಿ ಮುಚ್ಚಲಾಗುತ್ತದೆ.") },
      { title: t("Crown", "ಕ್ರೌನ್"), text: t("A crown is usually advised to protect the treated tooth.", "ಚಿಕಿತ್ಸೆ ಪಡೆದ ಹಲ್ಲಿನ ರಕ್ಷಣೆಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಕ್ರೌನ್ ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Mild soreness for 2–3 days is normal; take medicines as prescribed.", "2–3 ದಿನ ಸ್ವಲ್ಪ ನೋವು ಸಾಮಾನ್ಯ; ಸೂಚಿಸಿದ ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳಿ."),
      t("Avoid chewing hard food on that side until the crown is placed.", "ಕ್ರೌನ್ ಹಾಕುವವರೆಗೆ ಆ ಬದಿಯಲ್ಲಿ ಗಟ್ಟಿ ಆಹಾರ ಅಗಿಯಬೇಡಿ."),
      t("Keep brushing and flossing normally.", "ಎಂದಿನಂತೆ ಹಲ್ಲುಜ್ಜುವುದು ಮತ್ತು ಫ್ಲಾಸ್ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸಿ."),
      t("Call us if swelling increases or pain gets worse.", "ಊತ ಹೆಚ್ಚಾದರೆ ಅಥವಾ ನೋವು ಹೆಚ್ಚಾದರೆ ಕರೆ ಮಾಡಿ."),
    ],
    faqs: [
      {
        q: t("Is root canal treatment painful?", "ರೂಟ್ ಕೆನಾಲ್ ನೋವಿನಿಂದ ಕೂಡಿದೆಯೇ?"),
        a: t("With modern anaesthesia it feels similar to getting a filling. RCT actually relieves the pain caused by infection.", "ಆಧುನಿಕ ಅರಿವಳಿಕೆಯಿಂದ ಇದು ಫಿಲ್ಲಿಂಗ್‌ನಂತೆಯೇ ಅನಿಸುತ್ತದೆ. RCT ಸೋಂಕಿನಿಂದಾದ ನೋವನ್ನು ನಿವಾರಿಸುತ್ತದೆ."),
      },
      {
        q: t("How many visits does RCT need?", "RCT ಗೆ ಎಷ್ಟು ಭೇಟಿ ಬೇಕು?"),
        a: t("Usually one to three visits, depending on the tooth and infection.", "ಹಲ್ಲು ಮತ್ತು ಸೋಂಕಿನ ಆಧಾರದ ಮೇಲೆ ಸಾಮಾನ್ಯವಾಗಿ 1 ರಿಂದ 3 ಭೇಟಿಗಳು."),
      },
      {
        q: t("Is extraction better than RCT?", "RCT ಗಿಂತ ಹಲ್ಲು ತೆಗೆಯುವುದು ಉತ್ತಮವೇ?"),
        a: t("Keeping your natural tooth is almost always better for chewing and for the teeth around it. We'll discuss both options honestly.", "ಅಗಿಯಲು ಮತ್ತು ಪಕ್ಕದ ಹಲ್ಲುಗಳಿಗೆ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸುವುದೇ ಹೆಚ್ಚಾಗಿ ಉತ್ತಮ. ಎರಡೂ ಆಯ್ಕೆಗಳನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಚರ್ಚಿಸುತ್ತೇವೆ."),
      },
    ],
  },

  "tooth-extraction": {
    metaDescription: t(
      "Gentle tooth extraction and wisdom tooth removal in Hassan. Comfortable care and clear aftercare at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಸೌಮ್ಯ ಹಲ್ಲು ತೆಗೆಯುವಿಕೆ ಮತ್ತು ಬುದ್ಧಿ ಹಲ್ಲು ತೆಗೆಯುವಿಕೆ. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ಆರಾಮದಾಯಕ ಆರೈಕೆ."
    ),
    what: t(
      "Extraction is the removal of a tooth that cannot be saved — for example, one that is badly broken, very loose or infected. Wisdom teeth that are stuck (impacted) or causing pain may also need removal.",
      "ಉಳಿಸಲಾಗದ ಹಲ್ಲನ್ನು ತೆಗೆಯುವುದು — ಉದಾಹರಣೆಗೆ ತೀವ್ರವಾಗಿ ಮುರಿದ, ಸಡಿಲವಾದ ಅಥವಾ ಸೋಂಕಿತ ಹಲ್ಲು. ಸಿಲುಕಿರುವ ಅಥವಾ ನೋವು ಕೊಡುವ ಬುದ್ಧಿ ಹಲ್ಲುಗಳನ್ನೂ ತೆಗೆಯಬೇಕಾಗಬಹುದು."
    ),
    who: [
      t("Teeth too damaged or decayed to repair", "ಸರಿಪಡಿಸಲಾಗದಷ್ಟು ಹಾಳಾದ ಹಲ್ಲುಗಳು"),
      t("Painful, swollen or impacted wisdom teeth", "ನೋವು, ಊತ ಅಥವಾ ಸಿಲುಕಿರುವ ಬುದ್ಧಿ ಹಲ್ಲುಗಳು"),
      t("Very loose teeth due to gum disease", "ವಸಡು ರೋಗದಿಂದ ತುಂಬಾ ಸಡಿಲವಾದ ಹಲ್ಲುಗಳು"),
      t("Crowding before braces, when advised", "ಸಲಹೆ ನೀಡಿದಾಗ, ಬ್ರೇಸಸ್‌ಗೆ ಮೊದಲು ಜಾಗದ ಕೊರತೆ"),
    ],
    steps: [
      { title: t("Assessment & X-ray", "ಪರೀಕ್ಷೆ ಮತ್ತು ಎಕ್ಸ್-ರೇ"), text: t("We check the tooth's roots and your medical history.", "ಹಲ್ಲಿನ ಬೇರುಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಇತಿಹಾಸ ಪರಿಶೀಲನೆ.") },
      { title: t("Numbing", "ಅರಿವಳಿಕೆ"), text: t("The area is fully numbed — you feel pressure, not pain.", "ಆ ಭಾಗ ಸಂಪೂರ್ಣ ಮರಗಟ್ಟುತ್ತದೆ — ಒತ್ತಡ ಅನಿಸುತ್ತದೆ, ನೋವಲ್ಲ.") },
      { title: t("Removal", "ತೆಗೆಯುವಿಕೆ"), text: t("The tooth is gently loosened and removed; wisdom teeth may need a minor surgical step.", "ಹಲ್ಲನ್ನು ಸೌಮ್ಯವಾಗಿ ಸಡಿಲಗೊಳಿಸಿ ತೆಗೆಯಲಾಗುತ್ತದೆ; ಬುದ್ಧಿ ಹಲ್ಲಿಗೆ ಸಣ್ಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬೇಕಾಗಬಹುದು.") },
      { title: t("Aftercare", "ನಂತರದ ಆರೈಕೆ"), text: t("You bite on gauze and get written aftercare instructions.", "ಗಾಜ್ ಕಚ್ಚಿಕೊಳ್ಳಲು ಹೇಳಿ, ಲಿಖಿತ ಆರೈಕೆ ಸೂಚನೆಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Bite on the gauze for 30–45 minutes.", "30–45 ನಿಮಿಷ ಗಾಜ್ ಕಚ್ಚಿಕೊಂಡಿರಿ."),
      t("No spitting, straws or smoking for 24 hours.", "24 ಗಂಟೆ ಉಗುಳುವುದು, ಸ್ಟ್ರಾ ಬಳಕೆ ಅಥವಾ ಧೂಮಪಾನ ಬೇಡ."),
      t("Eat soft, cool food on the first day.", "ಮೊದಲ ದಿನ ಮೃದು, ತಣ್ಣನೆಯ ಆಹಾರ ಸೇವಿಸಿ."),
      t("From day two, rinse gently with warm salt water.", "ಎರಡನೇ ದಿನದಿಂದ ಬೆಚ್ಚಗಿನ ಉಪ್ಪುನೀರಿನಿಂದ ಮೆಲ್ಲಗೆ ಬಾಯಿ ಮುಕ್ಕಳಿಸಿ."),
    ],
    faqs: [
      {
        q: t("Should I replace an extracted tooth?", "ತೆಗೆದ ಹಲ್ಲನ್ನು ಬದಲಿಸಬೇಕೇ?"),
        a: t("Usually yes (except wisdom teeth). Gaps can make nearby teeth shift. Implants, bridges or dentures are options.", "ಸಾಮಾನ್ಯವಾಗಿ ಹೌದು (ಬುದ್ಧಿ ಹಲ್ಲು ಹೊರತುಪಡಿಸಿ). ಖಾಲಿ ಜಾಗದಿಂದ ಪಕ್ಕದ ಹಲ್ಲುಗಳು ಸರಿಯಬಹುದು. ಇಂಪ್ಲಾಂಟ್, ಬ್ರಿಡ್ಜ್ ಅಥವಾ ದಂತಪಂಕ್ತಿ ಆಯ್ಕೆಗಳಿವೆ."),
      },
      {
        q: t("Do all wisdom teeth need removal?", "ಎಲ್ಲಾ ಬುದ್ಧಿ ಹಲ್ಲುಗಳನ್ನು ತೆಗೆಯಬೇಕೇ?"),
        a: t("No. Only those causing pain, infection, decay or damage to neighbouring teeth.", "ಇಲ್ಲ. ನೋವು, ಸೋಂಕು, ಹುಳುಕು ಅಥವಾ ಪಕ್ಕದ ಹಲ್ಲಿಗೆ ಹಾನಿ ಮಾಡುವವುಗಳನ್ನು ಮಾತ್ರ."),
      },
    ],
  },

  "dental-implants": {
    metaDescription: t(
      "Dental implants in Hassan — permanent, natural-looking replacement for missing teeth. Consult Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ — ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳಿಗೆ ಶಾಶ್ವತ, ನೈಸರ್ಗಿಕ ಬದಲಿ. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್ ಸಂಪರ್ಕಿಸಿ."
    ),
    what: t(
      "A dental implant is a small titanium post placed in the jaw bone to act as an artificial root. Once it bonds with the bone, a crown is fixed on top — giving you a tooth that looks, feels and works like your own.",
      "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ ದವಡೆ ಮೂಳೆಯಲ್ಲಿ ಇರಿಸುವ ಸಣ್ಣ ಟೈಟಾನಿಯಂ ಕಂಬ, ಇದು ಕೃತಕ ಬೇರಿನಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಮೂಳೆಯೊಂದಿಗೆ ಬೆಸೆದ ನಂತರ ಅದರ ಮೇಲೆ ಕ್ರೌನ್ ಜೋಡಿಸಲಾಗುತ್ತದೆ — ನಿಮ್ಮದೇ ಹಲ್ಲಿನಂತೆ ಕಾಣುತ್ತದೆ ಮತ್ತು ಕೆಲಸ ಮಾಡುತ್ತದೆ."
    ),
    who: [
      t("Adults with one or more missing teeth", "ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಹಲ್ಲು ಕಳೆದುಕೊಂಡ ವಯಸ್ಕರು"),
      t("People with loose or uncomfortable dentures", "ಸಡಿಲ ಅಥವಾ ಅನಾನುಕೂಲ ದಂತಪಂಕ್ತಿ ಇರುವವರು"),
      t("Those with healthy gums and enough jaw bone", "ಆರೋಗ್ಯಕರ ವಸಡು ಮತ್ತು ಸಾಕಷ್ಟು ದವಡೆ ಮೂಳೆ ಇರುವವರು"),
    ],
    steps: [
      { title: t("Consultation & scan", "ಸಮಾಲೋಚನೆ ಮತ್ತು ಸ್ಕ್ಯಾನ್"), text: t("We assess bone and plan the implant position.", "ಮೂಳೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ ಇಂಪ್ಲಾಂಟ್ ಸ್ಥಾನವನ್ನು ಯೋಜಿಸುತ್ತೇವೆ.") },
      { title: t("Implant placement", "ಇಂಪ್ಲಾಂಟ್ ಅಳವಡಿಕೆ"), text: t("The post is placed under local anaesthesia.", "ಸ್ಥಳೀಯ ಅರಿವಳಿಕೆಯಡಿ ಕಂಬವನ್ನು ಇರಿಸಲಾಗುತ್ತದೆ.") },
      { title: t("Healing", "ಗುಣಮುಖ"), text: t("Over a few months, the implant bonds with the bone.", "ಕೆಲವು ತಿಂಗಳಲ್ಲಿ ಇಂಪ್ಲಾಂಟ್ ಮೂಳೆಯೊಂದಿಗೆ ಬೆಸೆಯುತ್ತದೆ.") },
      { title: t("Crown fitting", "ಕ್ರೌನ್ ಜೋಡಣೆ"), text: t("A custom crown is fixed on top, matched to your teeth.", "ನಿಮ್ಮ ಹಲ್ಲಿಗೆ ಹೊಂದುವ ಕ್ರೌನ್ ಅನ್ನು ಮೇಲೆ ಜೋಡಿಸಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Some swelling for 2–3 days; use cold packs.", "2–3 ದಿನ ಸ್ವಲ್ಪ ಊತ; ತಣ್ಣನೆಯ ಪ್ಯಾಕ್ ಬಳಸಿ."),
      t("Soft diet for the first week.", "ಮೊದಲ ವಾರ ಮೃದು ಆಹಾರ."),
      t("Avoid smoking — it affects healing.", "ಧೂಮಪಾನ ತಪ್ಪಿಸಿ — ಇದು ಗುಣವಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ."),
      t("Clean around the implant daily and attend reviews.", "ಇಂಪ್ಲಾಂಟ್ ಸುತ್ತ ಪ್ರತಿದಿನ ಸ್ವಚ್ಛಗೊಳಿಸಿ, ತಪಾಸಣೆಗೆ ಬನ್ನಿ."),
    ],
    faqs: [
      {
        q: t("How long do implants last?", "ಇಂಪ್ಲಾಂಟ್ ಎಷ್ಟು ಕಾಲ ಉಳಿಯುತ್ತದೆ?"),
        a: t("With good hygiene and regular check-ups, implants can last for many years — often decades.", "ಉತ್ತಮ ಸ್ವಚ್ಛತೆ ಮತ್ತು ನಿಯಮಿತ ತಪಾಸಣೆಯಿಂದ ಹಲವು ವರ್ಷಗಳು — ಅನೇಕ ಬಾರಿ ದಶಕಗಳು."),
      },
      {
        q: t("Can diabetics get implants?", "ಮಧುಮೇಹಿಗಳು ಇಂಪ್ಲಾಂಟ್ ಪಡೆಯಬಹುದೇ?"),
        a: t("Often yes, if sugar levels are well controlled. We'll review your reports first.", "ಸಕ್ಕರೆ ಮಟ್ಟ ನಿಯಂತ್ರಣದಲ್ಲಿದ್ದರೆ ಹೆಚ್ಚಾಗಿ ಹೌದು. ಮೊದಲು ನಿಮ್ಮ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತೇವೆ."),
      },
    ],
  },

  "crowns-bridges": {
    metaDescription: t(
      "Dental crowns and bridges in Hassan — restore broken teeth and replace missing ones. Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಡೆಂಟಲ್ ಕ್ರೌನ್ ಮತ್ತು ಬ್ರಿಡ್ಜ್ — ಮುರಿದ ಹಲ್ಲು ಸರಿಪಡಿಸಿ, ಕಳೆದ ಹಲ್ಲು ಬದಲಿಸಿ. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್."
    ),
    what: t(
      "A crown is a cap that covers a weak, broken or root-canal-treated tooth to protect it. A bridge replaces one or more missing teeth by anchoring false teeth to the natural teeth on either side.",
      "ಕ್ರೌನ್ ದುರ್ಬಲ, ಮುರಿದ ಅಥವಾ RCT ಆದ ಹಲ್ಲನ್ನು ರಕ್ಷಿಸುವ ಟೊಪ್ಪಿ. ಬ್ರಿಡ್ಜ್ ಎರಡೂ ಬದಿಯ ಹಲ್ಲುಗಳ ಆಧಾರದಲ್ಲಿ ಕೃತಕ ಹಲ್ಲನ್ನು ಜೋಡಿಸಿ ಕಳೆದುಹೋದ ಹಲ್ಲನ್ನು ಬದಲಿಸುತ್ತದೆ."
    ),
    who: [
      t("After root canal treatment", "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆಯ ನಂತರ"),
      t("Cracked, broken or heavily filled teeth", "ಬಿರುಕು, ಮುರಿದ ಅಥವಾ ದೊಡ್ಡ ಫಿಲ್ಲಿಂಗ್ ಇರುವ ಹಲ್ಲುಗಳು"),
      t("One or two missing teeth (bridge)", "ಒಂದು ಅಥವಾ ಎರಡು ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳು (ಬ್ರಿಡ್ಜ್)"),
      t("Badly shaped or discoloured teeth", "ಅಸಮ ಆಕಾರ ಅಥವಾ ಬಣ್ಣಗೆಟ್ಟ ಹಲ್ಲುಗಳು"),
    ],
    steps: [
      { title: t("Preparation", "ಸಿದ್ಧತೆ"), text: t("The tooth is shaped to make room for the crown.", "ಕ್ರೌನ್‌ಗೆ ಜಾಗ ಮಾಡಲು ಹಲ್ಲಿಗೆ ಆಕಾರ ನೀಡಲಾಗುತ್ತದೆ.") },
      { title: t("Impression", "ಅಳತೆ"), text: t("We take a precise impression and choose the shade.", "ನಿಖರ ಅಳತೆ ತೆಗೆದು ಬಣ್ಣ ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ.") },
      { title: t("Temporary crown", "ತಾತ್ಕಾಲಿಕ ಕ್ರೌನ್"), text: t("A temporary cap protects the tooth while the lab makes yours.", "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ತಯಾರಾಗುವವರೆಗೆ ತಾತ್ಕಾಲಿಕ ಕ್ರೌನ್ ರಕ್ಷಿಸುತ್ತದೆ.") },
      { title: t("Fitting", "ಜೋಡಣೆ"), text: t("The final crown or bridge is checked and cemented.", "ಅಂತಿಮ ಕ್ರೌನ್ ಅಥವಾ ಬ್ರಿಡ್ಜ್ ಪರಿಶೀಲಿಸಿ ಅಂಟಿಸಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Avoid sticky or very hard food on the temporary crown.", "ತಾತ್ಕಾಲಿಕ ಕ್ರೌನ್ ಮೇಲೆ ಅಂಟು ಅಥವಾ ಗಟ್ಟಿ ಆಹಾರ ಬೇಡ."),
      t("Clean under bridges with floss threaders or interdental brushes.", "ಬ್ರಿಡ್ಜ್ ಕೆಳಗೆ ಫ್ಲಾಸ್ ಥ್ರೆಡರ್ ಅಥವಾ ಇಂಟರ್‌ಡೆಂಟಲ್ ಬ್ರಷ್‌ನಿಂದ ಸ್ವಚ್ಛಗೊಳಿಸಿ."),
      t("Don't use your teeth to open bottles or packets.", "ಬಾಟಲಿ ಅಥವಾ ಪ್ಯಾಕೆಟ್ ತೆರೆಯಲು ಹಲ್ಲು ಬಳಸಬೇಡಿ."),
    ],
    faqs: [
      {
        q: t("Which crown material is best?", "ಯಾವ ಕ್ರೌನ್ ವಸ್ತು ಉತ್ತಮ?"),
        a: t("It depends on the tooth's position, your bite and budget. Options include metal-ceramic and all-ceramic (e.g. zirconia). We'll explain the pros and cons.", "ಹಲ್ಲಿನ ಸ್ಥಾನ, ಕಚ್ಚುವಿಕೆ ಮತ್ತು ಬಜೆಟ್ ಮೇಲೆ ಅವಲಂಬಿತ. ಮೆಟಲ್-ಸೆರಾಮಿಕ್ ಮತ್ತು ಆಲ್-ಸೆರಾಮಿಕ್ (ಉದಾ: ಜಿರ್ಕೋನಿಯಾ) ಆಯ್ಕೆಗಳಿವೆ."),
      },
    ],
  },

  dentures: {
    metaDescription: t(
      "Complete and partial dentures in Hassan. Comfortable, natural-looking false teeth at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಪೂರ್ಣ ಮತ್ತು ಭಾಗಶಃ ದಂತಪಂಕ್ತಿ. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ಆರಾಮದಾಯಕ, ನೈಸರ್ಗಿಕವಾಗಿ ಕಾಣುವ ಕೃತಕ ಹಲ್ಲುಗಳು."
    ),
    what: t(
      "Dentures are removable replacements for missing teeth. Complete dentures replace all teeth in a jaw; partial dentures fill gaps when some natural teeth remain.",
      "ದಂತಪಂಕ್ತಿ ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳಿಗೆ ತೆಗೆದು-ಹಾಕಬಹುದಾದ ಬದಲಿ. ಪೂರ್ಣ ದಂತಪಂಕ್ತಿ ದವಡೆಯ ಎಲ್ಲಾ ಹಲ್ಲುಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ; ಭಾಗಶಃ ದಂತಪಂಕ್ತಿ ಕೆಲವು ಹಲ್ಲುಗಳಿರುವಾಗ ಖಾಲಿ ಜಾಗ ತುಂಬುತ್ತದೆ."
    ),
    who: [
      t("People who have lost most or all teeth", "ಹೆಚ್ಚಿನ ಅಥವಾ ಎಲ್ಲಾ ಹಲ್ಲು ಕಳೆದುಕೊಂಡವರು"),
      t("Those needing an affordable tooth replacement", "ಕಡಿಮೆ ವೆಚ್ಚದ ಹಲ್ಲು ಬದಲಿ ಬೇಕಾದವರು"),
      t("Anyone with old, loose or painful dentures", "ಹಳೆಯ, ಸಡಿಲ ಅಥವಾ ನೋವು ಕೊಡುವ ದಂತಪಂಕ್ತಿ ಇರುವವರು"),
    ],
    steps: [
      { title: t("Examination", "ತಪಾಸಣೆ"), text: t("We check gums and remaining teeth.", "ವಸಡು ಮತ್ತು ಉಳಿದ ಹಲ್ಲುಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತೇವೆ.") },
      { title: t("Impressions & bite", "ಅಳತೆ ಮತ್ತು ಕಚ್ಚುವಿಕೆ"), text: t("Accurate moulds and bite records are taken.", "ನಿಖರ ಅಚ್ಚು ಮತ್ತು ಕಚ್ಚುವಿಕೆಯ ದಾಖಲೆ ತೆಗೆಯಲಾಗುತ್ತದೆ.") },
      { title: t("Trial", "ಪ್ರಯೋಗ"), text: t("You try a wax version to check fit, look and speech.", "ಹೊಂದಾಣಿಕೆ, ನೋಟ ಮತ್ತು ಮಾತು ಪರೀಕ್ಷಿಸಲು ಮೇಣದ ಮಾದರಿ ಪ್ರಯೋಗ.") },
      { title: t("Delivery & adjustments", "ವಿತರಣೆ ಮತ್ತು ಹೊಂದಾಣಿಕೆ"), text: t("Final dentures are fitted and fine-tuned at follow-ups.", "ಅಂತಿಮ ದಂತಪಂಕ್ತಿ ಜೋಡಿಸಿ, ಮುಂದಿನ ಭೇಟಿಗಳಲ್ಲಿ ಸರಿಹೊಂದಿಸಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Start with soft food cut into small pieces.", "ಸಣ್ಣ ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದ ಮೃದು ಆಹಾರದಿಂದ ಆರಂಭಿಸಿ."),
      t("Remove dentures at night and clean them daily.", "ರಾತ್ರಿ ದಂತಪಂಕ್ತಿ ತೆಗೆದು, ಪ್ರತಿದಿನ ಸ್ವಚ್ಛಗೊಳಿಸಿ."),
      t("Sore spots are common at first — we'll adjust them.", "ಆರಂಭದಲ್ಲಿ ನೋವಿನ ಜಾಗಗಳು ಸಾಮಾನ್ಯ — ನಾವು ಸರಿಪಡಿಸುತ್ತೇವೆ."),
      t("Reading aloud helps you get used to speaking.", "ಗಟ್ಟಿಯಾಗಿ ಓದುವುದರಿಂದ ಮಾತನಾಡಲು ಬೇಗ ಅಭ್ಯಾಸವಾಗುತ್ತದೆ."),
    ],
    faqs: [
      {
        q: t("How long until dentures feel normal?", "ದಂತಪಂಕ್ತಿ ಅಭ್ಯಾಸವಾಗಲು ಎಷ್ಟು ಸಮಯ?"),
        a: t("Most people adjust within a few weeks.", "ಹೆಚ್ಚಿನವರಿಗೆ ಕೆಲವು ವಾರಗಳಲ್ಲಿ ಅಭ್ಯಾಸವಾಗುತ್ತದೆ."),
      },
      {
        q: t("Can dentures be fixed instead of removable?", "ತೆಗೆದು-ಹಾಕುವ ಬದಲು ಸ್ಥಿರ ದಂತಪಂಕ್ತಿ ಸಾಧ್ಯವೇ?"),
        a: t("Yes — implant-supported dentures snap firmly in place. Ask us if you're suitable.", "ಹೌದು — ಇಂಪ್ಲಾಂಟ್ ಆಧಾರಿತ ದಂತಪಂಕ್ತಿ ದೃಢವಾಗಿ ಕೂರುತ್ತದೆ. ನಿಮಗೆ ಸೂಕ್ತವೇ ಎಂದು ಕೇಳಿ."),
      },
    ],
  },

  "teeth-whitening": {
    metaDescription: t(
      "Professional teeth whitening in Hassan. Safe, dentist-supervised whitening for a brighter smile at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ವೃತ್ತಿಪರ ಹಲ್ಲು ಬಿಳುಪು. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ದಂತ ವೈದ್ಯರ ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿ ಸುರಕ್ಷಿತ ಚಿಕಿತ್ಸೆ."
    ),
    what: t(
      "Teeth whitening lightens stains and discolouration using professional-grade gels applied safely by the dentist, protecting your gums throughout.",
      "ವೃತ್ತಿಪರ ಜೆಲ್ ಬಳಸಿ, ವಸಡುಗಳನ್ನು ರಕ್ಷಿಸುತ್ತಾ, ದಂತ ವೈದ್ಯರು ಸುರಕ್ಷಿತವಾಗಿ ಹಲ್ಲಿನ ಕಲೆ ಮತ್ತು ಬಣ್ಣಗೆಡುವಿಕೆಯನ್ನು ತಿಳಿಗೊಳಿಸುತ್ತಾರೆ."
    ),
    who: [
      t("Yellowing from tea, coffee or age", "ಚಹಾ, ಕಾಫಿ ಅಥವಾ ವಯಸ್ಸಿನಿಂದ ಹಳದಿಯಾದ ಹಲ್ಲು"),
      t("Before a wedding or special event", "ಮದುವೆ ಅಥವಾ ವಿಶೇಷ ಸಮಾರಂಭದ ಮೊದಲು"),
      t("People with healthy teeth and gums", "ಆರೋಗ್ಯಕರ ಹಲ್ಲು ಮತ್ತು ವಸಡು ಇರುವವರು"),
    ],
    steps: [
      { title: t("Check-up & cleaning", "ತಪಾಸಣೆ ಮತ್ತು ಸ್ವಚ್ಛತೆ"), text: t("Cavities and tartar are treated first.", "ಮೊದಲು ಹುಳುಕು ಮತ್ತು ಕಲೆಗಳಿಗೆ ಚಿಕಿತ್ಸೆ.") },
      { title: t("Shade record", "ಬಣ್ಣ ದಾಖಲೆ"), text: t("We note your starting shade.", "ಆರಂಭಿಕ ಬಣ್ಣವನ್ನು ದಾಖಲಿಸುತ್ತೇವೆ.") },
      { title: t("Gum protection", "ವಸಡು ರಕ್ಷಣೆ"), text: t("A protective barrier covers the gums.", "ವಸಡುಗಳ ಮೇಲೆ ರಕ್ಷಣಾ ಪದರ ಹಾಕಲಾಗುತ್ತದೆ.") },
      { title: t("Whitening", "ಬಿಳುಪು"), text: t("Whitening gel is applied in short cycles.", "ಬಿಳುಪು ಜೆಲ್ ಅನ್ನು ಸಣ್ಣ ಅವಧಿಗಳಲ್ಲಿ ಹಚ್ಚಲಾಗುತ್ತದೆ.") },
    ],
    recovery: [
      t("Avoid tea, coffee, turmeric-heavy and coloured food for 48 hours.", "48 ಗಂಟೆ ಚಹಾ, ಕಾಫಿ, ಅರಿಶಿನ ಹೆಚ್ಚಿರುವ ಮತ್ತು ಬಣ್ಣದ ಆಹಾರ ತಪ್ಪಿಸಿ."),
      t("Temporary sensitivity is normal and fades quickly.", "ತಾತ್ಕಾಲಿಕ ಸೂಕ್ಷ್ಮತೆ ಸಾಮಾನ್ಯ, ಬೇಗ ಕಡಿಮೆಯಾಗುತ್ತದೆ."),
      t("Use a sensitivity toothpaste if needed.", "ಅಗತ್ಯವಿದ್ದರೆ ಸೂಕ್ಷ್ಮತೆ ಟೂತ್‌ಪೇಸ್ಟ್ ಬಳಸಿ."),
    ],
    faqs: [
      {
        q: t("Will whitening damage my enamel?", "ಬಿಳುಪು ಚಿಕಿತ್ಸೆ ಎನಾಮೆಲ್ ಹಾಳುಮಾಡುತ್ತದೆಯೇ?"),
        a: t("Dentist-supervised whitening is safe for enamel when done correctly.", "ಸರಿಯಾಗಿ ಮಾಡಿದರೆ ದಂತ ವೈದ್ಯರ ಮೇಲ್ವಿಚಾರಣೆಯ ಬಿಳುಪು ಎನಾಮೆಲ್‌ಗೆ ಸುರಕ್ಷಿತ."),
      },
      {
        q: t("Does whitening work on crowns or fillings?", "ಕ್ರೌನ್ ಅಥವಾ ಫಿಲ್ಲಿಂಗ್ ಮೇಲೆ ಬಿಳುಪು ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ?"),
        a: t("No — only natural teeth lighten. We'll plan around existing work.", "ಇಲ್ಲ — ನೈಸರ್ಗಿಕ ಹಲ್ಲುಗಳು ಮಾತ್ರ ಬಿಳುಪಾಗುತ್ತವೆ. ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಯೋಜಿಸುತ್ತೇವೆ."),
      },
    ],
  },

  "braces-aligners": {
    metaDescription: t(
      "Braces and clear aligners in Hassan for kids and adults. Straighten teeth at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಮಕ್ಕಳು ಮತ್ತು ವಯಸ್ಕರಿಗೆ ಬ್ರೇಸಸ್ ಮತ್ತು ಕ್ಲಿಯರ್ ಅಲೈನರ್. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ಹಲ್ಲುಗಳನ್ನು ನೇರಗೊಳಿಸಿ."
    ),
    what: t(
      "Orthodontic treatment gently moves teeth into better positions. Braces use brackets and wires; clear aligners are a series of nearly invisible, removable trays.",
      "ಆರ್ಥೊಡಾಂಟಿಕ್ ಚಿಕಿತ್ಸೆ ಹಲ್ಲುಗಳನ್ನು ಸೌಮ್ಯವಾಗಿ ಸರಿಯಾದ ಸ್ಥಾನಕ್ಕೆ ತರುತ್ತದೆ. ಬ್ರೇಸಸ್ ಬ್ರ್ಯಾಕೆಟ್ ಮತ್ತು ತಂತಿ ಬಳಸುತ್ತದೆ; ಕ್ಲಿಯರ್ ಅಲೈನರ್ ಬಹುತೇಕ ಕಾಣಿಸದ, ತೆಗೆಯಬಹುದಾದ ಟ್ರೇಗಳು."
    ),
    who: [
      t("Crooked, crowded or gapped teeth", "ವಕ್ರ, ಒತ್ತೊತ್ತಾದ ಅಥವಾ ಅಂತರವಿರುವ ಹಲ್ಲುಗಳು"),
      t("Protruding front teeth", "ಮುಂದೆ ಚಾಚಿದ ಮುಂಭಾಗದ ಹಲ್ಲುಗಳು"),
      t("Bite problems (overbite, underbite, crossbite)", "ಕಚ್ಚುವಿಕೆ ಸಮಸ್ಯೆಗಳು (ಓವರ್‌ಬೈಟ್, ಅಂಡರ್‌ಬೈಟ್, ಕ್ರಾಸ್‌ಬೈಟ್)"),
      t("Children from about age 7 for an early check", "ಸುಮಾರು 7 ವರ್ಷದಿಂದ ಮಕ್ಕಳಿಗೆ ಆರಂಭಿಕ ತಪಾಸಣೆ"),
    ],
    steps: [
      { title: t("Orthodontic assessment", "ಆರ್ಥೊಡಾಂಟಿಕ್ ಪರೀಕ್ಷೆ"), text: t("Photos, X-rays and impressions or scans.", "ಫೋಟೋ, ಎಕ್ಸ್-ರೇ ಮತ್ತು ಅಳತೆ ಅಥವಾ ಸ್ಕ್ಯಾನ್.") },
      { title: t("Treatment plan", "ಚಿಕಿತ್ಸಾ ಯೋಜನೆ"), text: t("We explain options, duration and cost.", "ಆಯ್ಕೆಗಳು, ಅವಧಿ ಮತ್ತು ವೆಚ್ಚ ವಿವರಿಸುತ್ತೇವೆ.") },
      { title: t("Fitting", "ಜೋಡಣೆ"), text: t("Braces are bonded, or your first aligners are fitted.", "ಬ್ರೇಸಸ್ ಅಂಟಿಸಲಾಗುತ್ತದೆ ಅಥವಾ ಮೊದಲ ಅಲೈನರ್ ನೀಡಲಾಗುತ್ತದೆ.") },
      { title: t("Regular reviews", "ನಿಯಮಿತ ಭೇಟಿ"), text: t("Adjustments every few weeks until teeth are aligned.", "ಹಲ್ಲುಗಳು ನೇರವಾಗುವವರೆಗೆ ಕೆಲವು ವಾರಗಳಿಗೊಮ್ಮೆ ಹೊಂದಾಣಿಕೆ.") },
      { title: t("Retainers", "ರಿಟೈನರ್"), text: t("Retainers keep your new smile in place.", "ರಿಟೈನರ್ ಹೊಸ ನಗುವನ್ನು ಸ್ಥಿರವಾಗಿಡುತ್ತದೆ.") },
    ],
    recovery: [
      t("Mild soreness after adjustments is normal for 2–3 days.", "ಹೊಂದಾಣಿಕೆಯ ನಂತರ 2–3 ದಿನ ಸ್ವಲ್ಪ ನೋವು ಸಾಮಾನ್ಯ."),
      t("Avoid hard and sticky food with braces.", "ಬ್ರೇಸಸ್ ಇರುವಾಗ ಗಟ್ಟಿ ಮತ್ತು ಅಂಟು ಆಹಾರ ತಪ್ಪಿಸಿ."),
      t("Wear aligners 20–22 hours a day.", "ಅಲೈನರ್ ದಿನಕ್ಕೆ 20–22 ಗಂಟೆ ಧರಿಸಿ."),
      t("Brush carefully around brackets after every meal.", "ಪ್ರತಿ ಊಟದ ನಂತರ ಬ್ರ್ಯಾಕೆಟ್ ಸುತ್ತ ಎಚ್ಚರಿಕೆಯಿಂದ ಹಲ್ಲುಜ್ಜಿ."),
    ],
    faqs: [
      {
        q: t("How long does treatment take?", "ಚಿಕಿತ್ಸೆಗೆ ಎಷ್ಟು ಸಮಯ?"),
        a: t("Typically 12–24 months, depending on the case.", "ಪ್ರಕರಣದ ಆಧಾರದ ಮೇಲೆ ಸಾಮಾನ್ಯವಾಗಿ 12–24 ತಿಂಗಳು."),
      },
      {
        q: t("Am I too old for braces?", "ಬ್ರೇಸಸ್‌ಗೆ ನನಗೆ ವಯಸ್ಸು ಹೆಚ್ಚಾಗಿದೆಯೇ?"),
        a: t("No. Adults with healthy gums can straighten their teeth at any age.", "ಇಲ್ಲ. ಆರೋಗ್ಯಕರ ವಸಡು ಇರುವ ವಯಸ್ಕರು ಯಾವ ವಯಸ್ಸಿನಲ್ಲೂ ಹಲ್ಲು ನೇರಗೊಳಿಸಬಹುದು."),
      },
    ],
  },

  "smile-makeover": {
    metaDescription: t(
      "Smile makeover and cosmetic dentistry in Hassan — veneers, bonding, contouring and whitening at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಸ್ಮೈಲ್ ಮೇಕ್‌ಓವರ್ ಮತ್ತು ಸೌಂದರ್ಯ ದಂತ ಚಿಕಿತ್ಸೆ — ವಿನೀರ್, ಬಾಂಡಿಂಗ್, ಆಕಾರ ಸುಧಾರಣೆ ಮತ್ತು ಬಿಳುಪು."
    ),
    what: t(
      "A smile makeover combines cosmetic treatments — such as whitening, bonding, veneers, crowns and gum contouring — into one plan designed around your face, lips and goals.",
      "ಸ್ಮೈಲ್ ಮೇಕ್‌ಓವರ್ ಬಿಳುಪು, ಬಾಂಡಿಂಗ್, ವಿನೀರ್, ಕ್ರೌನ್ ಮತ್ತು ವಸಡು ಆಕಾರ ಸುಧಾರಣೆಯಂತಹ ಸೌಂದರ್ಯ ಚಿಕಿತ್ಸೆಗಳನ್ನು ನಿಮ್ಮ ಮುಖ ಮತ್ತು ಗುರಿಗೆ ತಕ್ಕಂತೆ ಒಂದೇ ಯೋಜನೆಯಲ್ಲಿ ಸೇರಿಸುತ್ತದೆ."
    ),
    who: [
      t("Chipped, uneven or worn teeth", "ಚಿಪ್ ಆದ, ಅಸಮ ಅಥವಾ ಸವೆದ ಹಲ್ಲುಗಳು"),
      t("Gaps or discolouration", "ಅಂತರ ಅಥವಾ ಬಣ್ಣಗೆಡುವಿಕೆ"),
      t("A 'gummy' smile", "ಹೆಚ್ಚು ವಸಡು ಕಾಣುವ ನಗು"),
      t("Anyone wanting more confidence when they smile", "ನಗುವಾಗ ಹೆಚ್ಚು ಆತ್ಮವಿಶ್ವಾಸ ಬಯಸುವವರು"),
    ],
    steps: [
      { title: t("Smile consultation", "ಸ್ಮೈಲ್ ಸಮಾಲೋಚನೆ"), text: t("We discuss what you'd like to change.", "ನೀವು ಏನು ಬದಲಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ಚರ್ಚಿಸುತ್ತೇವೆ.") },
      { title: t("Design", "ವಿನ್ಯಾಸ"), text: t("Photos and models help plan your new smile.", "ಫೋಟೋ ಮತ್ತು ಮಾದರಿಗಳಿಂದ ಹೊಸ ನಗುವನ್ನು ಯೋಜಿಸಲಾಗುತ್ತದೆ.") },
      { title: t("Treatment", "ಚಿಕಿತ್ಸೆ"), text: t("Procedures are done in a planned sequence.", "ಯೋಜಿತ ಕ್ರಮದಲ್ಲಿ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.") },
      { title: t("Review", "ಪರಿಶೀಲನೆ"), text: t("Final polish and maintenance advice.", "ಅಂತಿಮ ಪಾಲಿಶ್ ಮತ್ತು ನಿರ್ವಹಣಾ ಸಲಹೆ.") },
    ],
    recovery: [
      t("Recovery depends on the treatments chosen — most are quick.", "ಚೇತರಿಕೆ ಆಯ್ಕೆಮಾಡಿದ ಚಿಕಿತ್ಸೆಗಳ ಮೇಲೆ ಅವಲಂಬಿತ — ಹೆಚ್ಚಿನವು ತ್ವರಿತ."),
      t("Avoid biting nails, pens or ice.", "ಉಗುರು, ಪೆನ್ ಅಥವಾ ಐಸ್ ಕಚ್ಚಬೇಡಿ."),
      t("Regular cleanings keep cosmetic work looking fresh.", "ನಿಯಮಿತ ಸ್ವಚ್ಛತೆ ಸೌಂದರ್ಯ ಚಿಕಿತ್ಸೆಯನ್ನು ಹೊಸದಾಗಿ ಕಾಣುವಂತೆ ಇಡುತ್ತದೆ."),
    ],
    faqs: [
      {
        q: t("Will my smile look natural?", "ನನ್ನ ನಗು ನೈಸರ್ಗಿಕವಾಗಿ ಕಾಣುತ್ತದೆಯೇ?"),
        a: t("Yes — the aim is a smile that suits your face, not a one-size-fits-all look.", "ಹೌದು — ಎಲ್ಲರಿಗೂ ಒಂದೇ ರೀತಿಯಲ್ಲ, ನಿಮ್ಮ ಮುಖಕ್ಕೆ ಹೊಂದುವ ನಗು ನಮ್ಮ ಗುರಿ."),
      },
    ],
  },

  "gum-treatment": {
    metaDescription: t(
      "Gum disease treatment in Hassan for bleeding, swollen or receding gums. Deep cleaning and periodontal care at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ರಕ್ತಸ್ರಾವ, ಊದಿಕೊಂಡ ಅಥವಾ ಹಿಂಜರಿದ ವಸಡಿಗೆ ಚಿಕಿತ್ಸೆ. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ನಲ್ಲಿ ಆಳವಾದ ಸ್ವಚ್ಛತೆ ಮತ್ತು ವಸಡು ಆರೈಕೆ."
    ),
    what: t(
      "Gum treatment controls gum disease (gingivitis and periodontitis) — an infection that causes bleeding, bad breath and, if ignored, loose teeth. Treatment ranges from deep cleaning to minor gum procedures.",
      "ವಸಡು ಚಿಕಿತ್ಸೆ ವಸಡು ರೋಗವನ್ನು (ಜಿಂಜಿವೈಟಿಸ್ ಮತ್ತು ಪೆರಿಯೊಡಾಂಟೈಟಿಸ್) ನಿಯಂತ್ರಿಸುತ್ತದೆ — ಇದು ರಕ್ತಸ್ರಾವ, ದುರ್ವಾಸನೆ ಮತ್ತು ನಿರ್ಲಕ್ಷಿಸಿದರೆ ಸಡಿಲ ಹಲ್ಲುಗಳಿಗೆ ಕಾರಣವಾಗುವ ಸೋಂಕು."
    ),
    who: [
      t("Gums that bleed while brushing", "ಹಲ್ಲುಜ್ಜುವಾಗ ರಕ್ತ ಬರುವ ವಸಡು"),
      t("Red, swollen or tender gums", "ಕೆಂಪು, ಊದಿಕೊಂಡ ಅಥವಾ ನೋವಿನ ವಸಡು"),
      t("Persistent bad breath", "ನಿರಂತರ ಬಾಯಿ ದುರ್ವಾಸನೆ"),
      t("Receding gums or loose teeth", "ಹಿಂಜರಿದ ವಸಡು ಅಥವಾ ಸಡಿಲ ಹಲ್ಲುಗಳು"),
    ],
    steps: [
      { title: t("Gum assessment", "ವಸಡು ಪರೀಕ್ಷೆ"), text: t("We measure gum pockets and take X-rays.", "ವಸಡಿನ ಆಳ ಅಳೆದು ಎಕ್ಸ್-ರೇ ತೆಗೆಯುತ್ತೇವೆ.") },
      { title: t("Deep cleaning", "ಆಳವಾದ ಸ್ವಚ್ಛತೆ"), text: t("Scaling and root planing remove deposits below the gum.", "ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ರೂಟ್ ಪ್ಲೇನಿಂಗ್ ವಸಡಿನ ಕೆಳಗಿನ ಕಲೆ ತೆಗೆಯುತ್ತದೆ.") },
      { title: t("Medication if needed", "ಅಗತ್ಯವಿದ್ದರೆ ಔಷಧಿ"), text: t("Antiseptic rinses or local medicines.", "ಆಂಟಿಸೆಪ್ಟಿಕ್ ಮೌತ್‌ವಾಶ್ ಅಥವಾ ಸ್ಥಳೀಯ ಔಷಧಿ.") },
      { title: t("Maintenance", "ನಿರ್ವಹಣೆ"), text: t("Regular follow-ups keep gum disease under control.", "ನಿಯಮಿತ ತಪಾಸಣೆ ವಸಡು ರೋಗವನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಡುತ್ತದೆ.") },
    ],
    recovery: [
      t("Gums may feel tender for a few days.", "ಕೆಲವು ದಿನ ವಸಡು ಸೂಕ್ಷ್ಮವಾಗಿರಬಹುದು."),
      t("Use a soft brush and floss daily.", "ಮೃದು ಬ್ರಷ್ ಬಳಸಿ, ಪ್ರತಿದಿನ ಫ್ಲಾಸ್ ಮಾಡಿ."),
      t("Control blood sugar if you are diabetic.", "ಮಧುಮೇಹಿಗಳಾದರೆ ಸಕ್ಕರೆ ಮಟ್ಟ ನಿಯಂತ್ರಿಸಿ."),
      t("Stopping tobacco greatly improves gum health.", "ತಂಬಾಕು ನಿಲ್ಲಿಸುವುದರಿಂದ ವಸಡಿನ ಆರೋಗ್ಯ ಬಹಳ ಸುಧಾರಿಸುತ್ತದೆ."),
    ],
    faqs: [
      {
        q: t("Is bleeding gums serious?", "ವಸಡಿನಿಂದ ರಕ್ತ ಬರುವುದು ಗಂಭೀರವೇ?"),
        a: t("It's an early warning sign of gum disease. Treated early, it is usually reversible.", "ಇದು ವಸಡು ರೋಗದ ಆರಂಭಿಕ ಎಚ್ಚರಿಕೆ. ಬೇಗ ಚಿಕಿತ್ಸೆ ಪಡೆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಸರಿಯಾಗುತ್ತದೆ."),
      },
    ],
  },

  "kids-dentistry": {
    metaDescription: t(
      "Kids' dentist in Hassan — gentle, friendly dental care for children. Check-ups, fillings, fluoride and sealants at Ojas Smiles Dental Clinic.",
      "ಹಾಸನದಲ್ಲಿ ಮಕ್ಕಳ ದಂತ ವೈದ್ಯರು — ಮಕ್ಕಳಿಗೆ ಸೌಮ್ಯ, ಸ್ನೇಹಪರ ಆರೈಕೆ. ತಪಾಸಣೆ, ಫಿಲ್ಲಿಂಗ್, ಫ್ಲೋರೈಡ್ ಮತ್ತು ಸೀಲಂಟ್."
    ),
    what: t(
      "Dental care designed for children — from the first check-up to fluoride, pit-and-fissure sealants, fillings and habit counselling — delivered patiently so kids feel safe.",
      "ಮಕ್ಕಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ದಂತ ಆರೈಕೆ — ಮೊದಲ ತಪಾಸಣೆಯಿಂದ ಫ್ಲೋರೈಡ್, ಸೀಲಂಟ್, ಫಿಲ್ಲಿಂಗ್ ಮತ್ತು ಅಭ್ಯಾಸ ಸಲಹೆಯವರೆಗೆ — ಮಕ್ಕಳು ಸುರಕ್ಷಿತವೆನಿಸುವಂತೆ ತಾಳ್ಮೆಯಿಂದ."
    ),
    who: [
      t("Babies by their first birthday", "ಮೊದಲ ಹುಟ್ಟುಹಬ್ಬದೊಳಗಿನ ಶಿಶುಗಳು"),
      t("Children with cavities or tooth pain", "ಹುಳುಕು ಅಥವಾ ಹಲ್ಲುನೋವು ಇರುವ ಮಕ್ಕಳು"),
      t("Thumb-sucking or mouth-breathing habits", "ಹೆಬ್ಬೆರಳು ಚೀಪುವ ಅಥವಾ ಬಾಯಿಯಿಂದ ಉಸಿರಾಡುವ ಅಭ್ಯಾಸ"),
      t("Every child, every six months", "ಪ್ರತಿ ಮಗುವಿಗೆ, ಪ್ರತಿ ಆರು ತಿಂಗಳಿಗೊಮ್ಮೆ"),
    ],
    steps: [
      { title: t("Friendly introduction", "ಸ್ನೇಹಪರ ಪರಿಚಯ"), text: t("We show the chair and tools so children feel at ease.", "ಮಕ್ಕಳು ನಿರಾಳವಾಗಲು ಕುರ್ಚಿ ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ತೋರಿಸುತ್ತೇವೆ.") },
      { title: t("Gentle check-up", "ಸೌಮ್ಯ ತಪಾಸಣೆ"), text: t("Teeth, jaw growth and habits are checked.", "ಹಲ್ಲು, ದವಡೆ ಬೆಳವಣಿಗೆ ಮತ್ತು ಅಭ್ಯಾಸಗಳ ಪರೀಕ್ಷೆ.") },
      { title: t("Prevention", "ತಡೆಗಟ್ಟುವಿಕೆ"), text: t("Fluoride and sealants protect against cavities.", "ಫ್ಲೋರೈಡ್ ಮತ್ತು ಸೀಲಂಟ್ ಹುಳುಕಿನಿಂದ ರಕ್ಷಿಸುತ್ತವೆ.") },
      { title: t("Parent guidance", "ಪೋಷಕರಿಗೆ ಮಾರ್ಗದರ್ಶನ"), text: t("Brushing, diet and habit tips for home.", "ಮನೆಯಲ್ಲಿ ಹಲ್ಲುಜ್ಜುವಿಕೆ, ಆಹಾರ ಮತ್ತು ಅಭ್ಯಾಸ ಸಲಹೆ.") },
    ],
    recovery: [
      t("Supervise brushing until about age 8.", "ಸುಮಾರು 8 ವರ್ಷದವರೆಗೆ ಹಲ್ಲುಜ್ಜುವುದನ್ನು ಗಮನಿಸಿ."),
      t("Use a rice-grain smear of fluoride toothpaste under 3, pea-sized from 3–6.", "3 ವರ್ಷದೊಳಗೆ ಅಕ್ಕಿ ಕಾಳಿನಷ್ಟು, 3–6 ವರ್ಷಕ್ಕೆ ಬಟಾಣಿ ಕಾಳಿನಷ್ಟು ಫ್ಲೋರೈಡ್ ಪೇಸ್ಟ್."),
      t("Avoid bottles of milk or juice at bedtime.", "ಮಲಗುವಾಗ ಹಾಲು ಅಥವಾ ಜ್ಯೂಸ್ ಬಾಟಲಿ ತಪ್ಪಿಸಿ."),
      t("Praise and reward visits — never use the dentist as a threat.", "ಭೇಟಿಗಳನ್ನು ಹೊಗಳಿ — ದಂತ ವೈದ್ಯರ ಹೆಸರಿನಲ್ಲಿ ಹೆದರಿಸಬೇಡಿ."),
    ],
    faqs: [
      {
        q: t("Do milk teeth really need treatment?", "ಹಾಲು ಹಲ್ಲುಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನಿಜವಾಗಿಯೂ ಬೇಕೇ?"),
        a: t("Yes. They hold space for adult teeth and help with eating and speech. Untreated decay can cause pain and infection.", "ಹೌದು. ಅವು ಶಾಶ್ವತ ಹಲ್ಲುಗಳಿಗೆ ಜಾಗ ಕಾಯ್ದಿರಿಸುತ್ತವೆ ಮತ್ತು ತಿನ್ನಲು, ಮಾತನಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಚಿಕಿತ್ಸೆ ಇಲ್ಲದ ಹುಳುಕು ನೋವು ಮತ್ತು ಸೋಂಕು ಉಂಟುಮಾಡಬಹುದು."),
      },
      {
        q: t("My child is scared. What can I do?", "ನನ್ನ ಮಗು ಹೆದರುತ್ತದೆ. ಏನು ಮಾಡಲಿ?"),
        a: t("Bring them for a simple check-up first. We go slowly and use child-friendly language.", "ಮೊದಲು ಸರಳ ತಪಾಸಣೆಗೆ ಕರೆತನ್ನಿ. ನಾವು ನಿಧಾನವಾಗಿ, ಮಕ್ಕಳ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತೇವೆ."),
      },
    ],
  },

  "emergency-dental-care": {
    metaDescription: t(
      "Emergency dentist in Hassan — severe toothache, swelling, broken or knocked-out tooth. Call Ojas Smiles Dental Clinic, open daily till 9 PM.",
      "ಹಾಸನದಲ್ಲಿ ತುರ್ತು ದಂತ ವೈದ್ಯರು — ತೀವ್ರ ಹಲ್ಲುನೋವು, ಊತ, ಮುರಿದ ಅಥವಾ ಬಿದ್ದ ಹಲ್ಲು. ಓಜಸ್ ಸ್ಮೈಲ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ."
    ),
    what: t(
      "Urgent care for dental problems that can't wait — severe pain, facial swelling, broken teeth, knocked-out teeth, lost fillings or crowns, and injuries to the mouth.",
      "ಕಾಯಲಾಗದ ದಂತ ಸಮಸ್ಯೆಗಳಿಗೆ ತುರ್ತು ಆರೈಕೆ — ತೀವ್ರ ನೋವು, ಮುಖದ ಊತ, ಮುರಿದ ಅಥವಾ ಬಿದ್ದ ಹಲ್ಲು, ಬಿದ್ದ ಫಿಲ್ಲಿಂಗ್ ಅಥವಾ ಕ್ರೌನ್ ಮತ್ತು ಬಾಯಿಯ ಗಾಯಗಳು."
    ),
    who: [
      t("Severe toothache that stops you sleeping", "ನಿದ್ದೆ ಮಾಡಲು ಬಿಡದ ತೀವ್ರ ಹಲ್ಲುನೋವು"),
      t("Swelling of the face or gums", "ಮುಖ ಅಥವಾ ವಸಡಿನ ಊತ"),
      t("A broken, cracked or knocked-out tooth", "ಮುರಿದ, ಬಿರುಕುಬಿಟ್ಟ ಅಥವಾ ಬಿದ್ದ ಹಲ್ಲು"),
      t("Bleeding that won't stop after an extraction", "ಹಲ್ಲು ತೆಗೆದ ನಂತರ ನಿಲ್ಲದ ರಕ್ತಸ್ರಾವ"),
    ],
    steps: [
      { title: t("Call us", "ಕರೆ ಮಾಡಿ"), text: t("Tell us what happened — we'll advise you right away.", "ಏನಾಯಿತು ಎಂದು ತಿಳಿಸಿ — ತಕ್ಷಣ ಸಲಹೆ ನೀಡುತ್ತೇವೆ.") },
      { title: t("Priority visit", "ಆದ್ಯತೆಯ ಭೇಟಿ"), text: t("We fit you in as soon as possible.", "ಸಾಧ್ಯವಾದಷ್ಟು ಬೇಗ ನಿಮ್ಮನ್ನು ನೋಡುತ್ತೇವೆ.") },
      { title: t("Pain relief", "ನೋವು ನಿವಾರಣೆ"), text: t("We diagnose the cause and relieve pain first.", "ಕಾರಣ ಪತ್ತೆಹಚ್ಚಿ ಮೊದಲು ನೋವು ನಿವಾರಿಸುತ್ತೇವೆ.") },
      { title: t("Treatment plan", "ಚಿಕಿತ್ಸಾ ಯೋಜನೆ"), text: t("We plan any further treatment needed.", "ಮುಂದಿನ ಅಗತ್ಯ ಚಿಕಿತ್ಸೆಯನ್ನು ಯೋಜಿಸುತ್ತೇವೆ.") },
    ],
    recovery: [
      t("Knocked-out tooth: hold it by the crown, keep it in milk and come in within an hour.", "ಬಿದ್ದ ಹಲ್ಲು: ಮೇಲ್ಭಾಗದಿಂದ ಹಿಡಿದು, ಹಾಲಿನಲ್ಲಿ ಇಟ್ಟು, ಒಂದು ಗಂಟೆಯೊಳಗೆ ಬನ್ನಿ."),
      t("Swelling: use a cold compress outside the cheek.", "ಊತ: ಕೆನ್ನೆಯ ಹೊರಭಾಗದಲ್ಲಿ ತಣ್ಣನೆಯ ಪಟ್ಟಿ ಇಡಿ."),
      t("Don't put painkillers directly on the gum.", "ನೋವು ನಿವಾರಕ ಮಾತ್ರೆಯನ್ನು ವಸಡಿನ ಮೇಲೆ ನೇರವಾಗಿ ಇಡಬೇಡಿ."),
      t("Severe swelling with fever or difficulty breathing or swallowing: go to the nearest hospital emergency immediately.", "ಜ್ವರದೊಂದಿಗೆ ತೀವ್ರ ಊತ, ಉಸಿರಾಟ ಅಥವಾ ನುಂಗಲು ತೊಂದರೆ: ತಕ್ಷಣ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ."),
    ],
    faqs: [
      {
        // TODO: confirm walk-in emergency policy with the client.
        q: t("Do you see emergencies without an appointment?", "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಇಲ್ಲದೆ ತುರ್ತು ಪ್ರಕರಣ ನೋಡುತ್ತೀರಾ?"),
        a: t("Yes, during clinic hours. Please call first so we can prepare for you.", "ಹೌದು, ಕ್ಲಿನಿಕ್ ಸಮಯದಲ್ಲಿ. ನಿಮಗಾಗಿ ಸಿದ್ಧರಾಗಲು ದಯವಿಟ್ಟು ಮೊದಲು ಕರೆ ಮಾಡಿ."),
      },
    ],
  },
};
