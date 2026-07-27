"use client";

import Image from "next/image";
import { 
  Section, 
  Container, 
  Reveal, 
  Stagger,
  fadeUp, 
  Eyebrow
} from "@/components/ui";

const JOURNEY_IMAGES = [
  {
    id: 1,
    src: "/images/journey-1.jpg",
    alt: "Rev. Victor preaching at the podium",
    className: "col-span-2 md:col-span-2 md:row-span-2 h-[300px] md:h-[600px]",
  },
  {
    id: 2,
    src: "/images/journey-2.jpg",
    alt: "Rev. Victor laying hands and praying",
    className: "col-span-1 md:col-span-1 md:row-span-1 h-[150px] md:h-[288px]",
  },
  {
    id: 3,
    src: "/images/journey-3.jpg",
    alt: "Rev. Victor ministering to the congregation",
    className: "col-span-1 md:col-span-1 md:row-span-1 h-[150px] md:h-[288px]",
  },
  {
    id: 4,
    src: "/images/journey-4.jpg",
    alt: "Rev. Victor leading worship",
    className: "col-span-2 md:col-span-2 md:row-span-1 h-[200px] md:h-[288px]",
  },
  {
    id: 5,
    src: "/images/IMG-103.jpg",
    alt: "Rev Victor Ministering",
    className: "col-span-1 md:col-span-2 md:row-span-1 h-[250px] md:h-[400px]",
  },
  {
    id: 6,
    src: "/images/IMG-110.jpg",
    alt: "A moment of faith and encounters",
    className: "col-span-1 md:col-span-2 md:row-span-1 h-[250px] md:h-[400px]",
  }
];

export function MinistryJourney() {
  return (
    <Section id="journey" className="py-24 md:py-32 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-transparent pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header Section */}
        <Stagger className="flex flex-col items-center justify-center text-center mb-16">
          <Reveal variants={fadeUp}>
            <span className="eyebrow">Impact Stories</span>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Captured moments of <span className="text-gold italic pr-2">Faith, Ministry,</span> and Divine encounters
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.2}>
            <p className="text-secondary max-w-2xl mt-4">
              From the humble beginnings to a global apostolic mandate, the journey has been marked by 
              undeniable testimonies, relentless intercession, and the raw demonstration of God&apos;s Spirit. 
              Witness the ongoing move of God.
            </p>
          </Reveal>
        </Stagger>

        {/* Masonry / Bento Grid Gallery */}
        <Reveal variants={fadeUp} delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(0,_auto)]">
            {JOURNEY_IMAGES.map((img) => (
              <div 
                key={img.id} 
                className={`relative rounded-2xl overflow-hidden group ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                {/* Subtle border */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </Reveal>

      </Container>
    </Section>
  );
}
