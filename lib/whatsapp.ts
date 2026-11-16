import { clinic } from "@/config/clinic";

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${clinic.phone.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const telUrl = `tel:${clinic.phone.tel}`;
