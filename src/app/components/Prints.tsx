// src/app/components/Prints.tsx
import Image from 'next/image';

export default function Prints() {
  return (
    <section id="prints" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
          Fine Art Prints
        </h2>
        <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
          Selected works from Ntikana's portfolio are available for purchase as gallery-quality, archival prints. Each is produced with the highest quality materials to ensure longevity and fidelity.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="p-6 bg-neutral-900 rounded-lg">
            <h3 className="font-bold text-lg text-neutral-100">Signed Editions</h3>
            <p className="mt-2 text-neutral-400">Limited edition prints are signed and numbered by the artist, making them a unique addition to any collection.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-lg">
            <h3 className="font-bold text-lg text-neutral-100">Archival Quality</h3>
            <p className="mt-2 text-neutral-400">All prints are made on Hahnemühle Photo Rag paper using pigment-based inks for exceptional detail and permanence.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-lg">
            <h3 className="font-bold text-lg text-neutral-100">Worldwide Shipping</h3>
            <p className="mt-2 text-neutral-400">Prints are carefully packaged and shipped globally to ensure they arrive in perfect condition.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl text-neutral-100">How to Inquire</h3>
          <p className="mt-2 text-neutral-400">
            To purchase a print, please send an email with the title or a screenshot of the desired photograph.
          </p>
          <a
            href="mailto:prints@example.com" // <-- IMPORTANT: Replace with a dedicated prints email
            className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors"
          >
            Inquire About a Print
          </a>
        </div>
      </div>
    </section>
  );
}