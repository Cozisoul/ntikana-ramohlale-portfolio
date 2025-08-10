// src/app/components/Story.tsx
'use client'; // This component now uses client-side hooks for animation

import Image from 'next/image';
import type { Story } from '@/app/data/portfolio-data';

export default function StoryComponent({ story }: { story: Story }) {
  return (
    <section id={story.id} className="py-12 md:py-20">
      {/* 1. The Full-Bleed Cover Image */}
      <div className="relative w-full aspect-[3/2] md:aspect-[2/1]">
        <Image
          src={story.cover.src}
          alt={story.cover.alt}
          fill
          priority={story.cover.priority} // Preload if set
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* 2. The Text Block with Story Details */}
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
          {story.title}
        </h2>
        {(story.year || story.location) && (
          <p className="mt-2 text-neutral-400">
            {[story.year, story.location].filter(Boolean).join(' • ')}
          </p>
        )}
        <p className="mt-6 leading-relaxed text-neutral-200">
          {story.description}
        </p>
      </div>

      {/* 3. The Image Gallery Grid */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {story.images.map((img) => (
          <figure key={img.src}>
            <div className="relative w-full overflow-hidden rounded bg-neutral-800">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover w-full h-auto"
                loading="lazy" // Lazy load all gallery images
              />
            </div>
            {img.caption && (
              <figcaption className="mt-2 text-sm text-neutral-400 italic">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}