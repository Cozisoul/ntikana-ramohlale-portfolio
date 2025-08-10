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
      {/* 1. Hero Section */}
      {/* The full-screen landing view with the main headline. */}
      <Hero />

      {/* 2. Stories Sections */}
      {/* This maps over your projects array and creates a section for each story. */}
      {stories.map((story) => (
        <StoryComponent key={story.id} story={story} />
      ))}

      {/* 3. About Section */}
      {/* The two-column layout with the artist's portrait and biography. */}
      <About />

      {/* 4. Client Logos Section */}
      {/* The infinitely scrolling marquee of client and press logos. */}
      <ClientLogos />

      {/* 5. Prints Section */}
      {/* The section detailing how to inquire about fine art prints. */}
      <Prints />

      {/* 6. Contact Section */}
      {/* The final call-to-action with an email link. */}
      <Contact />
    </>
  );
}