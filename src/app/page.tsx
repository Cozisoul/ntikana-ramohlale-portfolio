// src/app/page.tsx
import { stories } from './data/portfolio-data';
import Hero from './components/Hero';
import StoryComponent from './components/Story'; // Using the new name
import About from './components/About';
import Contact from './components/Contact';

import Prints from './components/Prints'; // <-- Import the new component

export default function Home() {
  return (
    <>
      <Hero />
      {stories.map((story) => (
        <StoryComponent key={story.id} story={story} />
      ))}
      <About />
      <Prints /> {/* <-- Add it here */}
      <Contact />
    </>
  );
}