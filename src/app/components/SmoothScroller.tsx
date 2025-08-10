// src/app/components/SmoothScroller.tsx
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up the effect when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render any visible HTML
}