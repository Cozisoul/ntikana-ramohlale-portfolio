import { Story } from '../data/portfolio-data';
import Image from 'next/image';

interface StoryProps {
  story: Story;
}

export default function StoryComponent({ story }: StoryProps) {
  return (
    <section id={story.id} className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{story.title}</h2>
        <p className="text-neutral-400">{story.location} | {story.period}</p>
        <p className="max-w-2xl mx-auto mt-4">{story.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {story.images.map((image, index) => (
          <div key={index} className="bg-neutral-800">
            {/* Replace with <Image /> component once images are added */}
            <div className="aspect-video flex items-center justify-center">
              <p className="text-neutral-500">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}