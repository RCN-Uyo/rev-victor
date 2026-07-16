"use client";

import Image from "next/image";
import { 
  Section, 
  Container, 
  Reveal, 
  Stagger,
  fadeUp,
  Eyebrow,
  Button
} from "@/components/ui";


const PARTNERSHIP_TIERS = [
  {
    name: "Covenant Partner",
    description: "Commit to monthly recurring support to sustain the ongoing apostolic work.",
    amount: "Monthly",
    featured: true
  },
  {
    name: "Seed Sower",
    description: "A one-time strategic seed into a specific project or outreach campaign.",
    amount: "One-Time",
    featured: false
  }
];

export function PartnershipSection() {
  return (
    <Section id="partnership" className="py-24 md:py-32 relative bg-surface overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold/10 to-transparent opacity-30" />
      </div>

      <Container className="relative z-10">
        

        {/* PARTNERSHIP OPTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Why Partner? */}
          <div className="flex flex-col gap-6">
            <Reveal variants={fadeUp}>
              <Eyebrow>Join the Movement</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white leading-tight">
                Why Partner With <br />
                <span className="text-gold italic pr-2">Rev. Victor Anaele?</span>
              </h2>
            </Reveal>
            
            <Reveal variants={fadeUp} delay={0.1}>
              <p className="text-secondary leading-relaxed">
                Partnership is not just about financial support; it is a spiritual covenant. When you partner with this ministry, you connect your destiny to the grace and apostolic mandate upon Rev. Victor Anaele. 
              </p>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.2}>
              <ul className="space-y-4 mt-2">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-sm md:text-base text-white/80"><strong>Advance the Kingdom:</strong> Your support directly funds crusades, RFS training, and mass media broadcasts.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-sm md:text-base text-white/80"><strong>Partake in the Grace:</strong> Philippians 1:7 declares that partners become partakers of the grace resting upon the ministry.</p>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Partnership Cards */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
            
            {PARTNERSHIP_TIERS.map((tier, index) => (
              <Reveal key={index} variants={fadeUp} delay={0.2 + (index * 0.1)}>
                <div className={`p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col ${tier.featured ? 'bg-surface-elevated border-gold shadow-gold-lg scale-105 z-10' : 'bg-background border-white/10 hover:border-white/30 mt-0 sm:mt-4'}`}>
                  {tier.featured && (
                    <span className="inline-block px-3 py-1 bg-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-fit">
                      Recommended
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-gold' : 'text-white'}`}>{tier.name}</h3>
                  <p className="text-sm text-secondary mb-8 flex-grow">{tier.description}</p>
                  
                  <div className="pt-6 border-t border-white/10">
                    <Button variant={tier.featured ? 'primary' : 'outline'} className="w-full justify-center">
                      Give {tier.amount}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>

        </div>

      </Container>
    </Section>
  );
}
