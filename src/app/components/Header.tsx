// src/app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold focusable">
          Ntikana Ramohlale
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#stories" className="hover:text-neutral-300 focusable">Stories</Link>
          <Link href="#about" className="hover:text-neutral-300 focusable">About</Link>
          <Link href="#prints" className="hover:text-neutral-300 focusable">Prints</Link> {/* <-- Add this link */}
          <Link href="#contact" className="hover:text-neutral-300 focusable">Contact</Link>
        </nav>
      </div>
    </header>
  );
}