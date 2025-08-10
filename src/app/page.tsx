// src/app/page.tsx
import { stories } from './data/portfolio-data';
import Hero from './components/Hero';
import StoryComponent from './components/Story';
import About from './components/About';
import ClientLogos from './components/ClientLogos';
import Prints from './components/Prints';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      {/* The div wrapper is removed to allow seamless story-to-story transitions */}
      {stories.map((story) => (
        <StoryComponent key={story.id} story={story} />
      ))}

      <About />
      <ClientLogos />
      <Prints />
      <Contact />
    </>
  );
}