// src/app/components/ClientLogos.tsx
import Image from 'next/image';
import { clients } from '../data/portfolio-data';

export default function ClientLogos() {
  // We duplicate the array to create a seamless loop for the animation
  const extendedClients = [...clients, ...clients];

  return (
    <div className="py-12 md:py-16 bg-neutral-900">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
          Trusted By & Featured In
        </h3>
        <div className="relative mt-8 marquee overflow-hidden">
          <div className="marquee-inner flex min-w-full flex-shrink-0 animate-marquee">
            {extendedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-32">
                <Image
                  src={client.logoSrc}
                  alt={`Logo for ${client.name}`}
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}