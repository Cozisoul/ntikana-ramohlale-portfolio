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

export interface Client {
  name: string;
  logoSrc: string;
}

export const clients: Client[] = [
  { name: 'EFF', logoSrc: '/images/logos/eff-logo.svg' },
  { name: 'Msaki', logoSrc: '/images/logos/msaki-logo.svg' },
  { name: 'Amos', logoSrc: '/images/logos/amos-logo.svg' },
  { name: 'Thato Saul', logoSrc: '/images/logos/thato-saul-logo.svg' },
  { name: 'SABC News', logoSrc: '/images/logos/sabc-logo.svg' },
  { name: 'Rhodes University', logoSrc: '/images/logos/rhodes-university-logo.svg' },
];

// --- Your Complete Portfolio Content (6 Projects) ---

export const stories: Story[] = [
  // --- Project 1: Original ---
  {
    id: 'everyday-resilience',
    title: 'Everyday Resilience',
    year: '2020-2023',
    location: 'Makhanda, Eastern Cape',
    description:
      'A visual exploration of the daily struggles and quiet triumphs within the township of Makhanda, capturing the enduring human spirit amidst adversity.',
    cover: {
      src: '/images/projects/placeholder-1.jpg', // Replace with a real path
      alt: 'A resident of Makhanda looking thoughtfully out of a window.',
      width: 2400,
      height: 1600,
      priority: true, // Loads the very first image on the site quickly
    },
    images: [
      {
        src: '/images/projects/placeholder-2.jpg', // Replace
        alt: 'Children playing soccer in the street with a makeshift ball.',
        width: 1800,
        height: 1200,
        caption: 'Play finds a way in the afternoon sun.',
      },
      {
        src: '/images/projects/placeholder-5.jpg', // Replace
        alt: 'A woman hangs laundry on a line between two homes.',
        width: 1800,
        height: 1200,
      },
    ],
  },
  // --- Project 2: New ---
  {
    id: 'city-veins',
    title: 'City Veins',
    year: '2021-2024',
    location: 'Johannesburg, Gauteng',
    description:
      "An intimate look at the daily commute in Johannesburg, tracing the arteries of the city's taxi and train networks. The series explores the shared moments of fatigue, hope, and humanity in transit.",
    cover: {
      src: '/images/projects/placeholder-6.jpg', // Replace
      alt: 'A wide shot of a bustling taxi rank at dawn.',
      width: 2600,
      height: 1463,
    },
    images: [
      {
        src: '/images/projects/placeholder-7.jpg', // Replace
        alt: 'A passenger looking out the rain-streaked window of a taxi.',
        width: 1800,
        height: 2200,
        caption: 'Morning light on the way to the CBD.',
      },
      {
        src: '/images/projects/placeholder-8.jpg', // Replace
        alt: 'The blurred lights of the city seen from a moving train at night.',
        width: 2400,
        height: 1600,
      },
    ],
  },
  // --- Project 3: New ---
  {
    id: 'karoo-dust',
    title: 'Karoo Dust',
    year: '2019-2023',
    location: 'The Great Karoo, Northern Cape',
    description:
      'This series documents the enduring relationship between the people of the Karoo and their stark, beautiful land. It is a meditation on resilience, faith, and making a life in a place of immense space and silence.',
    cover: {
      src: '/images/projects/placeholder-9.jpg', // Replace
      alt: 'A vast, empty Karoo landscape under a massive sky, with a single dirt road stretching to the horizon.',
      width: 2800,
      height: 1575,
    },
    images: [
      {
        src: '/images/projects/placeholder-10.jpg', // Replace
        alt: 'A close-up portrait of a farmer, his face weathered by the sun and dust.',
        width: 2000,
        height: 2500,
        caption: 'Lines on a face, lines on the land.',
      },
      {
        src: '/images/projects/placeholder-11.jpg', // Replace
        alt: 'An abandoned farmhouse stands against the elements.',
        width: 2400,
        height: 1600,
      },
      {
        src: '/images/projects/placeholder-12.jpg', // Replace
        alt: 'A sheep stands alone in a dusty field.',
        width: 1800,
        height: 1200,
      },
    ],
  },
  // --- Project 4: Original ---
  {
    id: 'moletsi-a-homecoming',
    title: 'Moletši: A Homecoming',
    year: '2019-2022',
    location: 'Moletši, Limpopo',
    description:
      'Returning to his home village, this series documents the intricate social fabric and cultural preservation of the community in Moletši.',
    cover: {
      src: '/images/projects/placeholder-3.jpg', // Replace
      alt: 'An elder woman in traditional attire, her face telling a thousand stories.',
      width: 2000,
      height: 3000,
    },
    images: [
      {
        src: '/images/projects/placeholder-4.jpg', // Replace
        alt: 'A sweeping landscape view of the village at dusk.',
        width: 2400,
        height: 1600,
      },
    ],
  },
  // --- Project 5: New ---
  {
    id: 'where-the-land-ends',
    title: 'Where the Land Ends',
    year: '2020-2023',
    location: 'West Coast, Western Cape',
    description:
      "A study of the small-scale fishing communities along South Africa's rugged West Coast. It documents their daily rituals, their dependence on a changing ocean, and the quiet dignity of their labour.",
    cover: {
      src: '/images/projects/placeholder-13.jpg', // Replace
      alt: 'A small, colorful fishing boat returning to shore in the morning mist.',
      width: 2400,
      height: 1600,
    },
    images: [
      {
        src: '/images/projects/placeholder-14.jpg', // Replace
        alt: 'The detailed texture of fishing nets piled on a dock.',
        width: 1800,
        height: 1200,
        caption: 'Generations of know-how.',
      },
      {
        src: '/images/projects/placeholder-15.jpg', // Replace
        alt: 'A fisherman looks out towards the horizon, his silhouette against the bright sea.',
        width: 2000,
        height: 2500,
      },
    ],
  },
  // --- Project 6: New ---
  {
    id: 'soweto-rising',
    title: 'Soweto Rising',
    year: '2022-2024',
    location: 'Soweto, Gauteng',
    description:
      'A vibrant portrait of the post-apartheid generation carving out new identities through fashion, music, and entrepreneurship. The project captures the dynamic energy and creative spirit of modern Soweto.',
    cover: {
      src: '/images/projects/placeholder-16.jpg', // Replace
      alt: 'A stylish young person poses against a colorful mural in Soweto.',
      width: 2000,
      height: 2500,
    },
    images: [
      {
        src: '/images/projects/placeholder-17.jpg', // Replace
        alt: 'A group of friends laughing on a street corner.',
        width: 2400,
        height: 1600,
      },
      {
        src: '/images/projects/placeholder-18.jpg', // Replace
        alt: 'A close-up of custom sneakers on the pavement.',
        width: 1800,
        height: 1200,
        caption: 'Style from the ground up.',
      },
    ],
  },
];