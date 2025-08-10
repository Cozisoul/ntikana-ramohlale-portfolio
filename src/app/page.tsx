import Hero from './components/Hero';
import Story from './components/Story';
import About from './components/About';
import Contact from './components/Contact';
import { stories } from './data/portfolio-data';

export default function Home() {
  return (
    // There should be NO <main> tag here.
    // The <> is a "Fragment" that doesn't add extra elements to the page.
    <>
      <Hero />
      <div id="stories" className="space-y-24 my-24">
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
      <About />
      <Contact />
    </>
  );
}