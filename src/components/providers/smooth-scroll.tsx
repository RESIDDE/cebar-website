"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.12, // Higher = snappier, less drag (default is ~0.1)
        duration: 1.0,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
