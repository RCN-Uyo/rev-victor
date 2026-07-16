"use client";

import Image from "next/image";
import { 
  Section, 
  Container, 
  Reveal, 
  fadeUp, 
  slideInLeft, 
  Eyebrow,
  Button
} from "@/components/ui";

export function AboutSection() {
  return (
    <Section id="about" className="overflow-hidden py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* =========================================
              LEFT COLUMN: Editorial Image
              ========================================= */}
          <div className="md:col-span-5 relative w-full max-w-md mx-auto md:max-w-none">
            <Reveal variants={slideInLeft}>
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border/50 group">
                {/* Decorative Gold Elements */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full z-0 pointer-events-none" />
                
                {/* Image */}
                <Image
                  src="/images/about-bw.jpg"
                  alt="Rev. Victor Ifeanyi Anaele"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center grayscale-[0.2] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 relative z-0"
                />

                {/* Aesthetic Border Glow */}
                <div className="absolute inset-0 border border-gold/20 rounded-2xl z-20 pointer-events-none group-hover:border-gold/50 transition-colors duration-700" />
              </div>
            </Reveal>
          </div>

          {/* =========================================
              RIGHT COLUMN: Biography Content
              ========================================= */}
          <div className="md:col-span-7 flex flex-col gap-8">
            
            {/* Header */}
            <Reveal variants={fadeUp}>
              <Eyebrow>About Rev&apos;d Victor</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                A Vibrant <span className="text-gold italic pr-2">Apostolic Voice</span> <br className="hidden md:block" />
                Emerging in Nigeria
              </h2>
            </Reveal>

            {/* Biography Text - Emphasizing ministry impact */}
            <div className="flex flex-col gap-6 text-secondary text-base md:text-lg font-light leading-relaxed">
              
              <Reveal variants={fadeUp} delay={0.1}>
                <p>
                  <strong className="text-foreground font-medium">Rev. Victor Ifeanyi Anaele </strong> stands as one of the vibrant apostolic voices emerging in Nigeria. He is the Resident Pastor of Remnant Christian Network (RCN), Uyo, a city to which the Lord divinely directed him to after fruitful years of ministry service. Before his assignment in Uyo, he faithfully served as RCN&apos;s point man in Aba, having joined the network in 2017 under the apostolic leadership of Apostle Arome Osayi.
                </p>
              </Reveal>

              <Reveal variants={fadeUp} delay={0.2}>
                <p>
                  His deep burden for raising altars of righteousness and restoring priesthood led him to pioneer and establish six RCN apostolic centers in strategic cities across the nation, including Aba, Owerri, Port Harcourt, Bayelsa, Umuahia, and now Uyo. He is the convener of major intercessory gatherings such as <em className="text-foreground">The Eastern Watchmen Convergence</em> and <em className="text-foreground">The Prophetic and Intercessors Convergence</em>.
                </p>
              </Reveal>

              <Reveal variants={fadeUp} delay={0.3}>
                <p>
                  A passionate educator and missionary, Rev. Victor spearheads the Remnant Foundation School (RFS)—an intensive training hub designed to equip believers with biblical knowledge and spiritual stamina. His ministry extends actively into rural missions, organizing critical school and community interventions across the South–South and South–East regions.
                </p>
              </Reveal>

              {/* Subtle Family Details */}
              <Reveal variants={fadeUp} delay={0.4}>
                <p className="text-sm text-muted italic border-l-2 border-gold/30 pl-4 mt-2">
                  Rev. Victor Anaele is happily married to Mrs. Comfort Anaele, and together they are blessed with children.
                </p>
              </Reveal>
            </div>

            {/* CTA */}
            <Reveal variants={fadeUp} delay={0.5}>
              <div className="pt-4">
                <Button variant="outline" size="lg" href="/about" className="group border-gold text-gold hover:bg-gold hover:text-black">
                  Read Full Biography
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </Reveal>
            
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
