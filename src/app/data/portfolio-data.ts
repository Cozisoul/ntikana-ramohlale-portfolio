export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Story {
  id: string;
  title: string;
  location: string;
  period: string;
  description: string;
  images: ProjectImage[];
}

export const stories: Story[] = [
  {
    id: 'everyday-resilience',
    title: 'Everyday Resilience',
    location: 'Makhanda, Eastern Cape',
    period: '2020-2023',
    description: 'A visual exploration of the daily struggles and quiet triumphs within the township of Makhanda, capturing the enduring human spirit amidst adversity.',
    images: [
      { src: '/images/projects/placeholder-1.jpg', alt: 'A resident of Makhanda looking out of a window.' },
      { src: '/images/projects/placeholder-2.jpg', alt: 'Children playing in the street with a makeshift soccer ball.' },
    ],
  },
  {
    id: 'moletsi-stories',
    title: 'Moletši: A Homecoming',
    location: 'Moletši, Limpopo',
    period: '2019-2022',
    description: 'Returning to his home village, this series documents the intricate social fabric and cultural preservation of the community in Moletši.',
    images: [
      { src: '/images/projects/placeholder-3.jpg', alt: 'An elder woman in traditional attire.' },
      { src: '/images/projects/placeholder-4.jpg', alt: 'A landscape view of the village at dusk.' },
    ],
  },
  // Add more placeholder stories based on other known projects
];