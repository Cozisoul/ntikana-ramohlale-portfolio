// src/app/components/CustomCursor.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovering } = useCursor(); // Get the hovering state from our context

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 h-8 w-8 rounded-full bg-[var(--color-accent)] pointer-events-none z-50"
      animate={{
        x: position.x - 16, // Center the cursor
        y: position.y - 16,
        scale: isHovering ? 2.5 : 1, // Scale up when hovering
        opacity: isHovering ? 0.4 : 1, // Become semi-transparent when hovering
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
}