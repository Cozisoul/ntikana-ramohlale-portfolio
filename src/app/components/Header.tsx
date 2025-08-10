// src/app/components/Header.tsx
'use client'; // This component now uses hooks, so it must be a client component

import Link from 'next/link';
import { useCursor } from '../context/CursorContext'; // <-- Import our custom hook

export default function Header() {
  const { setIsHovering } = useCursor(); // <-- Get the state setter function

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link href="/" className="text-lg font-bold focusable">
            Ntikana Ramohlale
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          {['Stories', 'About', 'Prints', 'Contact'].map((item) => (
            <div
              key={item}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Link href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors focusable">
                {item}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}