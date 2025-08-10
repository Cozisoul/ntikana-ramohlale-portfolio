import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Ntikana Ramohlale
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#stories" className="hover:text-neutral-300">Stories</Link>
          <Link href="#about" className="hover:text-neutral-300">About</Link>
          <Link href="#contact" className="hover:text-neutral-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}