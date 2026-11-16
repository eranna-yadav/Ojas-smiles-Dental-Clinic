import Image, { type ImageProps } from "next/image";

/**
 * next/image wrapper. SVG placeholders are served as-is (no optimisation needed);
 * real photos (.jpg/.png/.webp) get full Next.js optimisation automatically.
 */
export function SmartImage({ alt, ...props }: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  return <Image alt={alt} {...props} unoptimized={props.unoptimized ?? src.endsWith(".svg")} />;
}
