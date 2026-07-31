"use client";

import Image from "next/image";
import { 
  Section, 
  Container, 
  Reveal, 
  Stagger,
  fadeUp,
  slideInRight,
  Eyebrow,
  Button
} from "@/components/ui";

const RFS_PILLARS = [
  {
    title: "Leadership Training",
    description: "Equipping believers with the character and competence to lead in ministry and the marketplace.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Discipleship",
    description: "Fostering deep, transformative relationships that ground believers in the fundamental truths of the faith.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Sound Teaching",
    description: "Systematic impartation of sound biblical doctrine to build spiritual stamina and robust theology.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Transformation",
    description: "Experiencing the raw demonstration of the Spirit's power that brings lasting change to lives and communities.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export function RfsSection() {
  return (
    <Section id="rfs" className="py-24 md:py-32 relative bg-surface border-y border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Content & Pillars */}
          <div className="flex flex-col gap-10">
            <Reveal variants={fadeUp}>
              <Eyebrow>Remnant Foundation School</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                An Intensive Hub for <br className="hidden md:block" />
                <span className="text-gold italic pr-2">Spiritual Stamina</span>
              </h2>
              <p className="text-secondary mt-6 text-base md:text-lg font-light leading-relaxed max-w-lg">
                Spearheaded by Rev. Victor, the Remnant Foundation School (RFS) is a rigorous training ground designed to equip believers with unshakeable biblical knowledge and ignite genuine revival.
              </p>
            </Reveal>

            {/* Pillars Grid */}
            <Stagger className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '24px', marginTop: '24px' }}>
              {RFS_PILLARS.map((pillar, index) => (
                <Reveal key={index} variants={fadeUp} delay={0.1 * index}>
                  <div 
                    className="group flex flex-col rounded-[2rem] bg-black/40 border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-gold-sm"
                    style={{ padding: '32px', gap: '16px' }}
                  >
                    <div 
                      className="rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:-translate-y-1"
                      style={{ width: '48px', height: '48px', flexShrink: 0 }}
                    >
                      {pillar.icon}
                    </div>
                    <h3 
                      className="text-3xl font-serif text-white tracking-tight leading-tight group-hover:text-gold transition-colors duration-500 break-words hyphens-auto" 
                      style={{ marginTop: '8px', wordBreak: 'break-word' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] font-light text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
            
            <Reveal variants={fadeUp} delay={0.4}>
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="https://www.rfsuyo.com"
                  external
                >
                  Enroll in RFS
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Dual Image Collage */}
          <Reveal variants={slideInRight} className="relative w-full aspect-square lg:aspect-auto lg:h-[700px]">
            
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group z-0">
              <Image
                src="/images/RFS-2.png"
                alt="Remnant Foundation School Training"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            </div>

            {/* Accent Overlapping Image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden border-[6px] border-background shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10 hover:-translate-y-2 transition-transform duration-500">
              <Image
                src="/images/RFS.png"
                alt="RFS Students"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              {/* Elegant overlay on accent image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-base md:text-lg font-bold leading-snug drop-shadow-lg italic">
                  &quot;Raising an army of discipled believers.&quot;
                </p>
                <div className="w-12 h-[2px] bg-gold mt-4" />
              </div>
            </div>

          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
