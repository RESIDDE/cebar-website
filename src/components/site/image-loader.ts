import type { ImageLoaderProps } from "next/image";

/**
 * Wix and Unsplash are image CDNs that resize on request, so ask them directly for each
 * srcset width instead of routing remote images through Next's optimizer.
 * Local images should keep the default loader.
 */
export function cdnLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith("https://static.wixstatic.com/media/")) {
    // Already transformed (e.g. a deliberate face crop): keep it and rescale the final size.
    const sized = /w_(\d+),h_(\d+)(?!.*w_\d+,h_\d+)/;
    const m = src.match(sized);
    if (src.includes("/v1/") && m) {
      const height = Math.round((width * Number(m[2])) / Number(m[1]));
      return src.replace(sized, `w_${width},h_${height}`);
    }
    const file = src.split("/").pop();
    return `${src}/v1/fit/w_${width},h_${width * 2},q_${quality ?? 80},enc_auto/${file}`;
  }

  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    return url.toString();
  }

  return src;
}
