// src/app/components/Story.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { Story } from '@/app/data/portfolio-data';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StoryComponent({ story }: { story: Story }) {
  // 1. We create a reference to the main wrapper of this story section.
  const targetRef = useRef<HTMLDivElement>(null);

  // 2. We use the 'useScroll' hook to track the scroll progress within this component.
  // 'target' is our ref, and 'offset' defines when the animation starts and ends.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Combine the cover image and the gallery images into one array for mapping.
  const allImages = [story.cover, ...story.images];

  return (
    <section ref={targetRef} id={story.id} className="relative h-[400vh]">
      {/* 3. This is the main "sticky" container that holds everything. */}
      <div className="sticky top-0 h-screen bg-neutral-900 text-white">
        {/* Main Text Block - Always visible at the top */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10 p-4">
          <motion.h2
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="font-serif text-3xl md:text-5xl"
          >
            {story.title}
          </motion.h2>
          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="text-neutral-400 mt-2"
          >
            {[story.year, story.location].filter(Boolean).join(' • ')}
          </motion.p>
        </div>

        {/* 4. We map over each image to create a "frame" for it. */}
        {allImages.map((img, i) => {
          // Calculate the start and end points for this specific image's animation.
          const start = i / allImages.length;
          const end = (i + 1) / allImages.length;

          // 'useTransform' maps the overall scroll progress to this image's opacity.
          // It will be fully visible only during its specific segment of the scroll.
          const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.8, 1, 1, 0.8]);
          const y = useTransform(scrollYProgress, [start, end], ["0%", "-10%"]);


          return (
            <motion.div
              key={img.src}
              style={{ opacity, scale, y }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-4/5 md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </motion.div>
          );
        })}

        {/* The story description appears after the title fades */}
        <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0]) }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-10 p-4 max-w-2xl"
          >
             <p className="leading-relaxed text-neutral-300">{story.description}</p>
        </motion.div>
      </div>
    </section>
  );
}