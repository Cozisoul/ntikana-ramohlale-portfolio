// src/app/data/portfolio-data.ts

// The new, more detailed structure for an image asset
export type StoryImage = {
  src: string; // The path to the image in the /public folder
  alt: string;
  width: number;
  height: number;
  priority?: boolean; // Optional: for preloading the most important images
  caption?: string; // Optional: for a text caption below the image
};

// The new structure for a story, including a cover image
export type Story = {
  id: string; // This will be used for URL anchors (e.g., #the-story-title)
  title: string;
  year?: string;
  location?: string;
  description: string;
  cover: StoryImage; // The main, full-bleed image for the story
  images: StoryImage[];
};

// --- Your Portfolio Content Goes Here ---

export const stories: Story[] = [
  {
    id: 'everyday-resilience',
    title: 'Everyday Resilience',
    year: '2020-2023',
    location: 'Makhanda, Eastern Cape',
    description:
      'A visual exploration of the daily struggles and quiet triumphs within the township of Makhanda, capturing the enduring human spirit amidst adversity.',
    cover: {
      src: '/images/projects/placeholder-1.jpg',
      alt: 'A resident of Makhanda looking thoughtfully out of a window.',
      width: 2400, // Replace with your image's actual width
      height: 1600, // Replace with your image's actual height
      priority: true, // This tells Next.js to load the first cover image quickly
    },
    images: [
      {
        src: '/images/projects/placeholder-2.jpg',
        alt: 'Children playing soccer in the street with a makeshift ball.',
        width: 1800,
        height: 1200,
        caption: 'Play finds a way in the afternoon sun.',
      },
      // Add more images for this story here
    ],
  },
  {
    id: 'moletsi-a-homecoming',
    title: 'Moletši: A Homecoming',
    year: '2019-2022',
    location: 'Moletši, Limpopo',
    description:
      'Returning to his home village, this series documents the intricate social fabric and cultural preservation of the community in Moletši.',
    cover: {
      src: '/images/projects/placeholder-3.jpg',
      alt: 'An elder woman in traditional attire, her face telling a thousand stories.',
      width: 2000,
      height: 3000,
    },
    images: [
      {
        src: '/images/projects/placeholder-4.jpg',
        alt: 'A sweeping landscape view of the village at dusk.',
        width: 2400,
        height: 1600,
      },
      // Add more images for this story here
    ],
  },
];