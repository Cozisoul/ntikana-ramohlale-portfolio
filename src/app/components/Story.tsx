// src/app/components/Story.tsx
'use client';

import Image from 'next/image';
import type { Story } from '@/app/data/portfolio-data';
import { motion } from 'framer-motion'; // Import framer-motion

// Define a simple animation variant
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StoryComponent({ story }: { story: Story }) {
  return (
    <motion.section
      id={story.id}
      className="py-12 md:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% of it is in view
    >
      {/* 1. The Cover Image */}
      <motion.div variants={fadeIn} className="relative w-full aspect-[3/2] md:aspect-[2/1]">
        <Image
          src={story.cover.src}
          alt={story.cover.alt}
          fill
          priority={story.cover.priority}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* 2. The Text Block */}
      <motion.div variants={fadeIn} className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{story.title}</h2>
        {(story.year || story.location) && (
          <p className="mt-2 text-neutral-400">{[story.year, story.location].filter(Boolean).join(' • ')}</p>
        )}
        <p className="mt-6 leading-relaxed text-neutral-200">{story.description}</p>
      </motion.div>

      {/* 3. The Gallery Grid */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {story.images.map((img, i) => (
          <motion.figure
            key={img.src}
            variants={fadeIn}
            // Stagger the animation of each image for a nice effect
            transition={{ delay: i * 0.1 }}
          >
            <motion.div
              className="relative w-full overflow-hidden rounded bg-neutral-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            {img.caption && (
              <figcaption className="mt-2 text-sm text-neutral-400 italic">{img.caption}</figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}