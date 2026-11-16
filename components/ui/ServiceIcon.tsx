import {
  Baby,
  Crown,
  Gem,
  HeartPulse,
  Layers,
  ScanFace,
  Shield,
  ShieldPlus,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon as IconKey } from "@/config/clinic";

const map: Record<IconKey, LucideIcon> = {
  checkup: Stethoscope,
  filling: Layers,
  rct: ShieldPlus,
  extraction: Syringe,
  implant: Gem,
  crown: Crown,
  denture: ScanFace,
  whitening: Sparkles,
  braces: Shield,
  smile: Smile,
  gum: HeartPulse,
  kids: Baby,
  emergency: Siren,
};

export function ServiceIcon({ icon, className }: { icon: IconKey; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} aria-hidden="true" />;
}
