"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cdnLoader } from "./image-loader";

/**
 * next/image that routes remote sources through the CDN loader and, if the source
 * fails (e.g. a deleted stock photo), renders nothing so the tile's own background shows.
 */
export default function FallbackImage({ src, alt, ...rest }: ImageProps & { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <Image
      loader={src.startsWith("http") ? cdnLoader : undefined}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
