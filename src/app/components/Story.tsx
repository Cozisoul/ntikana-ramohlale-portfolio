// src/app/components/Story.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { Story } from '@/app/data/portfolio-data';
import { motion, useScroll, useTransform } from 'framer-motion';

// This is the total number of images (cover + gallery) we'll show in the scrollytelling sequence.
const IMAGES_TO_SHOW_IN_STORY = 4;

export default function StoryComponent({ story }: { story: Story }) {
  // 1. Create a reference to the main wrapper of this story section.
  const targetRef = useRef<HTMLDivElement>(null);

  // 2. Track scroll progress within this component. 'offset' defines the start/end points.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Combine the cover and gallery images, and take only the first few for the sequence.
  const allImages = [story.cover, ...story.images].slice(0, IMAGES_TO_SHOW_IN_STORY);
  const hasMoreImages = story.images.length > (IMAGES_TO_SHOW_IN_STORY - 1);


  // 3. Create a transform to control the width of the progress bar.
  const progressWidth = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%']);

  return (
    // The height is proportional to the number of images, giving each one "scroll space".
    <section ref={targetRef} id={story.id} className="relative" style={{ height: `${allImages.length * 125}vh` }}>
      {/* 4. This is the main "sticky" container that holds the entire viewport. */}
      <div className="sticky top-0 h-screen bg-[var(--color-base)] text-white overflow-hidden">
        
        {/* The images will animate within this container */}
        {allImages.map((img, i) => {
          // Calculate start and end scroll progress points for this specific image's animation.
          const start = i / allImages.length;
          const end = (i + 1) / allImages.length;

          // Map the scroll progress to this image's opacity and scale for a cross-dissolve effect.
          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);
          
          return (
            <motion.div
              key={img.src}
              style={{ opacity, scale }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-4/5 md:w-1/2 lg:w-2/5 aspect-[4/3] rounded-lg overflow-hidden">
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

        {/* 5. The Text and Progress Bar container */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <motion.div 
              className="max-w-3xl mx-auto"
              style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
            >
                <h2 className="font-serif text-3xl md:text-5xl">{story.title}</h2>
                <p className="text-[var(--color-text-muted)] mt-2">
                    {[story.year, story.location].filter(Boolean).join(' • ')}
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-text)]">
                    {story.description}
                </p>
                {hasMoreImages && <p className='mt-4 text-sm text-[var(--color-text-muted)]'>More images available in the project gallery.</p>}
            </motion.div>

            {/* The Progress Bar */}
            <div className="max-w-3xl mx-auto mt-8">
                <div className="h-0.5 w-full bg-white/20">
                    <motion.div style={{ width: progressWidth }} className="h-full bg-[var(--color-accent)]" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}