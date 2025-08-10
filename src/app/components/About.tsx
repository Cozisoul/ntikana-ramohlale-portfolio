// src/app/components/About.tsx
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-950">
      <div className="container mx-auto px-4 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Portrait Image */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-800">
            {/* Replace with a real portrait of Ntikana */}
            {/*
              <Image
                src="/images/ntikana-portrait.jpg"
                alt="Portrait of Ntikana Ramohlale"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            */}
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-7">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
            About the Artist
          </h2>
          <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed">
            <p>
              Ntikana Ramohlale is a self-taught freelance photographer from Moletši, Limpopo. His work delves into the intricacies of township and village life as experienced in post-apartheid South Africa.
            </p>
            <p>
              Holding a degree in Political and International Studies from Rhodes University, Ntikana uses photography as a form of visual activism—a way to articulate the nuanced realities that academic language often fails to capture. His work creates conversations around identity, poverty, and resilience, always seeking the profound humanity within his subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}