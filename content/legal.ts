/**
 * Privacy policy & medical disclaimer.
 * TODO: have the client (or their advisor) review before launch. This is a
 * plain-language starting point, not legal advice.
 */
import type { L } from "@/config/clinic";
import type { Block } from "./blog";

const t = (en: string, kn: string): L => ({ en, kn });

export const legalUpdated = "2026-11-16";

export const privacyPolicy: { title: L; body: Block[] } = {
  title: t("Privacy Policy", "ಗೌಪ್ಯತಾ ನೀತಿ"),
  body: [
    {
      type: "p",
      text: t(
        "Ojas Smiles Dental Clinic (“we”, “us”) respects your privacy. This policy explains what information this website handles and how.",
        "ಓಜಸ್ ಸ್ಮೈಲ್ಸ್ ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ಗೌರವಿಸುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್ ಯಾವ ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಈ ನೀತಿ ವಿವರಿಸುತ್ತದೆ."
      ),
    },
    { type: "h2", text: t("Information you share", "ನೀವು ಹಂಚಿಕೊಳ್ಳುವ ಮಾಹಿತಿ") },
    {
      type: "p",
      text: t(
        "When you use the appointment form, your name, phone number, preferred date and time, treatment and message are placed into a WhatsApp message on your own device. Nothing is sent until you press send in WhatsApp. This website does not store form details on any server or database.",
        "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಫಾರ್ಮ್ ಬಳಸಿದಾಗ, ನಿಮ್ಮ ಹೆಸರು, ಫೋನ್ ಸಂಖ್ಯೆ, ದಿನಾಂಕ, ಸಮಯ, ಚಿಕಿತ್ಸೆ ಮತ್ತು ಸಂದೇಶವನ್ನು ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ವಾಟ್ಸಾಪ್ ಸಂದೇಶವಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ. ನೀವು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸು ಒತ್ತುವವರೆಗೆ ಏನೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ. ಈ ವೆಬ್‌ಸೈಟ್ ಯಾವುದೇ ಸರ್ವರ್ ಅಥವಾ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಫಾರ್ಮ್ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ."
      ),
    },
    { type: "h2", text: t("How we use it", "ನಾವು ಅದನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ") },
    {
      type: "p",
      text: t(
        "Messages you send us on WhatsApp or by phone are used only to arrange your appointment and provide care. We do not sell or share your information for marketing.",
        "ವಾಟ್ಸಾಪ್ ಅಥವಾ ಫೋನ್ ಮೂಲಕ ನೀವು ಕಳುಹಿಸುವ ಸಂದೇಶಗಳನ್ನು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮತ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ಮಾತ್ರ ಬಳಸುತ್ತೇವೆ. ಮಾರ್ಕೆಟಿಂಗ್‌ಗಾಗಿ ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಮಾರಾಟ ಅಥವಾ ಹಂಚಿಕೆ ಮಾಡುವುದಿಲ್ಲ."
      ),
    },
    { type: "h2", text: t("Third-party services", "ಮೂರನೇ ವ್ಯಕ್ತಿ ಸೇವೆಗಳು") },
    {
      type: "ul",
      items: [
        t("WhatsApp (Meta) — when you choose to message us.", "ವಾಟ್ಸಾಪ್ (ಮೆಟಾ) — ನೀವು ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಲು ಆರಿಸಿದಾಗ."),
        t("Google Maps — the embedded map on the contact section.", "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ — ಸಂಪರ್ಕ ವಿಭಾಗದ ನಕ್ಷೆ."),
        t("Our hosting provider, which may keep standard technical logs.", "ನಮ್ಮ ಹೋಸ್ಟಿಂಗ್ ಸೇವೆ, ಇದು ಸಾಮಾನ್ಯ ತಾಂತ್ರಿಕ ಲಾಗ್‌ಗಳನ್ನು ಇಡಬಹುದು."),
      ],
    },
    {
      type: "p",
      text: t(
        "These services have their own privacy policies. This site only remembers your language choice in a small cookie.",
        "ಈ ಸೇವೆಗಳಿಗೆ ತಮ್ಮದೇ ಗೌಪ್ಯತಾ ನೀತಿಗಳಿವೆ. ಈ ಸೈಟ್ ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಯನ್ನು ಮಾತ್ರ ಸಣ್ಣ ಕುಕೀಯಲ್ಲಿ ನೆನಪಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ."
      ),
    },
    { type: "h2", text: t("Contact", "ಸಂಪರ್ಕ") },
    {
      type: "p",
      text: t(
        "For any privacy question, call or WhatsApp the clinic using the number on this website.",
        "ಗೌಪ್ಯತೆಯ ಯಾವುದೇ ಪ್ರಶ್ನೆಗೆ, ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ ಸಂಖ್ಯೆಗೆ ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ."
      ),
    },
  ],
};

export const medicalDisclaimer: { title: L; body: Block[] } = {
  title: t("Medical Disclaimer", "ವೈದ್ಯಕೀಯ ಹಕ್ಕು ನಿರಾಕರಣೆ"),
  body: [
    {
      type: "p",
      text: t(
        "The information on this website — including treatment descriptions, articles and chatbot answers — is for general education only. It is not a diagnosis and does not replace an examination by a qualified dentist.",
        "ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಮಾಹಿತಿ — ಚಿಕಿತ್ಸಾ ವಿವರಣೆಗಳು, ಲೇಖನಗಳು ಮತ್ತು ಚಾಟ್‌ಬಾಟ್ ಉತ್ತರಗಳು ಸೇರಿ — ಸಾಮಾನ್ಯ ತಿಳುವಳಿಕೆಗಾಗಿ ಮಾತ್ರ. ಇದು ರೋಗನಿರ್ಣಯವಲ್ಲ ಮತ್ತು ಅರ್ಹ ದಂತ ವೈದ್ಯರ ತಪಾಸಣೆಗೆ ಪರ್ಯಾಯವಲ್ಲ."
      ),
    },
    {
      type: "p",
      text: t(
        "Every patient is different. Treatment options, number of visits, recovery and results vary from person to person and will be explained after your consultation.",
        "ಪ್ರತಿ ರೋಗಿಯೂ ವಿಭಿನ್ನ. ಚಿಕಿತ್ಸಾ ಆಯ್ಕೆಗಳು, ಭೇಟಿಗಳ ಸಂಖ್ಯೆ, ಚೇತರಿಕೆ ಮತ್ತು ಫಲಿತಾಂಶಗಳು ವ್ಯಕ್ತಿಯಿಂದ ವ್ಯಕ್ತಿಗೆ ಬದಲಾಗುತ್ತವೆ ಮತ್ತು ಸಮಾಲೋಚನೆಯ ನಂತರ ವಿವರಿಸಲಾಗುತ್ತದೆ."
      ),
    },
    {
      type: "p",
      text: t(
        "Images marked as placeholders are illustrations, not real patient results.",
        "ಮಾದರಿ ಎಂದು ಗುರುತಿಸಿದ ಚಿತ್ರಗಳು ಕೇವಲ ಚಿತ್ರಣಗಳು, ನಿಜವಾದ ರೋಗಿಗಳ ಫಲಿತಾಂಶಗಳಲ್ಲ."
      ),
    },
    { type: "h2", text: t("In an emergency", "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ") },
    {
      type: "p",
      text: t(
        "If you have severe facial swelling, fever, difficulty breathing or swallowing, or heavy bleeding, go to the nearest hospital emergency department or call 112 immediately.",
        "ತೀವ್ರ ಮುಖದ ಊತ, ಜ್ವರ, ಉಸಿರಾಟ ಅಥವಾ ನುಂಗಲು ತೊಂದರೆ, ಅಥವಾ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ ಇದ್ದರೆ, ತಕ್ಷಣ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ ಅಥವಾ 112 ಗೆ ಕರೆ ಮಾಡಿ."
      ),
    },
  ],
};
