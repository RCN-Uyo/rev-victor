"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid, Reveal, fadeUp, staggerContainer, Stagger } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const STATS = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Through global apostolic missions and local outreaches.",
  },
  {
    id: 2,
    value: 1200,
    suffix: "+",
    label: "Sermons Delivered",
    description: "Hours of pure, unadulterated teaching of the word.",
  },
  {
    id: 3,
    value: 50,
    suffix: "+",
    label: "Conferences Hosted",
    description: "Raising altars of righteousness across cities.",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Global Prayer Chain",
    description: "Continuous intercession for the nations.",
  },
];

export function ImpactStats() {
  return (
    <Section className="relative border-y border-border overflow-hidden" surface>
      {/* Subtle ambient glow in the background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-[100%] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(200,165,74,0.15) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <Stagger className="flex flex-col items-center justify-center text-center mb-16">
          <Reveal variants={fadeUp}>
            <span className="eyebrow">The Mandate in Motion</span>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              A Global <span className="text-gold italic pr-2">Impact</span>
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.2}>
            <p className="text-secondary max-w-2xl mt-4">
              We are committed to contending for the faith, raising a generation of men 
              and women deeply rooted in the apostolic and prophetic mandate.
            </p>
          </Reveal>
        </Stagger>

        <Stagger>
          <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap="lg" className="px-4">
            {STATS.map((stat, index) => (
              <Reveal key={stat.id} variants={fadeUp} delay={0.1 * index}>
                <div className="flex flex-col items-center text-center group p-6 rounded-2xl border border-transparent hover:border-gold/20 hover:bg-surface-elevated transition-all duration-500">
                  <div className="relative">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-5xl lg:text-6xl font-bold gradient-text-gold tracking-tighter"
                      style={{ fontFamily: "var(--font-heading)" }}
                    />
                    {/* Subtle gold glow behind the number on hover */}
                    <div className="absolute inset-0 bg-gold blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </Grid>
        </Stagger>
      </Container>
    </Section>
  );
}
