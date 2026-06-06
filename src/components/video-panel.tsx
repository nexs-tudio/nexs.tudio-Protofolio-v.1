"use client";

import Image from "next/image";
import { useState } from "react";

type VideoPanelProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

export function VideoPanel({ src, poster, label, className = "" }: VideoPanelProps) {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-panel ${className}`}>
      {hasVideoError ? (
        <div className="relative min-h-72 w-full">
          <Image
            src={poster}
            alt={label}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover opacity-80"
          />
        </div>
      ) : (
        <video
          aria-label={label}
          autoPlay
          className="h-full min-h-72 w-full object-cover opacity-80"
          loop
          muted
          onError={() => setHasVideoError(true)}
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
