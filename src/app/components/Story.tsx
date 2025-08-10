// src/app/components/Story.tsx
'use client';

// Step 1: Import necessary hooks and components
import { useState } from 'react';
import Image from 'next/image';
import type { Story } from '@/app/data/portfolio-data';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';

// (Optional but Recommended) Import plugins for a better experience
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StoryComponent({ story }: { story: Story }) {
  // Step 2: Add state to manage the lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Prepare the 'slides' for the lightbox from your story data
  const slides = story.images.map((img) => ({
    src: img.src,
    width: img.width,
    height: img.height,
    title: img.alt, // Use alt text as the title
    description: img.caption, // Use the caption for the description
  }));

  return (
    <motion.section
      id={story.id}
      className="py-12 md:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ... (The cover image and text block code remains the same) ... */}
      <motion.div variants={fadeIn} className="relative w-full aspect-[3/2] md:aspect-[2/1]">
        {/* ... */}
      </motion.div>
      <motion.div variants={fadeIn} className="container ...">
        {/* ... */}
      </motion.div>

      {/* Step 3: Modify the gallery grid to be clickable */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {story.images.map((img, i) => (
          <motion.figure
            key={img.src}
            variants={fadeIn}
            transition={{ delay: i * 0.1 }}
            // Add an onClick handler here
            onClick={() => {
              setIndex(i); // Set the index of the clicked image
              setOpen(true); // Open the lightbox
            }}
            className="cursor-pointer" // Change cursor to indicate it's clickable
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

      {/* Step 4: Add the Lightbox component itself */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        // Enable plugins for a premium experience
        plugins={[Captions, Thumbnails, Zoom]}
      />
    </motion.section>
  );
}