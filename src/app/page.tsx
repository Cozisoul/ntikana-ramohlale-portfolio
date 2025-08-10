// src/app/page.tsx
import { stories } from './data/portfolio-data';
import Hero from './components/Hero';
import StoryComponent from './components/Story'; // Using the new name
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      {/* We are now mapping over the stories and passing each one to the component */}
      {stories.map((story) => (
        <StoryComponent key={story.id} story={story} />
      ))}

      <About />
      <Contact />
    </>
  );
}