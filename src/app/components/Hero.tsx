// src/app/components/Hero.tsx
import { stories } from '../data/portfolio-data';
import Link from 'next/link';

export default function Hero() {
  // Dynamically get the ID of the first story for the link
  const firstStoryId = stories[0]?.id || 'stories';

  return (
    <section className="h-screen min-h-[600px] flex items-center justify-center relative text-center text-white p-4">
      {/* Background Image - Replace with a powerful, high-res photo */}
      <div className="absolute inset-0 bg-neutral-900 z-0">
        {/*
          <Image
            src="/images/your-hero-image.jpg"
            alt="A compelling, atmospheric photograph by Ntikana Ramohlale"
            fill
            priority
            className="object-cover opacity-30"
          />
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
      </div>

      <div className="relative z-10">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
          Visual Storyteller
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Ntikana Ramohlale’s documentary work explores the intricacies of life in post-apartheid South Africa.
        </p>
        <Link
          href={`#${firstStoryId}`}
          className="mt-8 inline-block bg-neutral-100 text-neutral-900 font-bold py-3 px-8 rounded-full hover:bg-neutral-300 transition-colors"
        >
          View Selected Work
        </Link>
      </div>
    </section>
  );
}