"use client";

import Image from "next/image";
import { Section, Container, Reveal, fadeUp, Eyebrow } from "@/components/ui";

export function MediaCentre() {
  return (
    <Section id="media" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10" size="xl">
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <Reveal variants={fadeUp}>
            <Eyebrow className="justify-center">Media Centre</Eyebrow>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              A Symphony of <span className="text-gold italic pr-2">Sight & Sound</span>
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.2}>
            <p className="text-secondary max-w-2xl mt-4 mx-auto">
              Immerse yourself in our extensive archive of prophetic teachings, leadership summits, and atmospheric worship experiences.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid layout with minimal empty space */}
        <Reveal variants={fadeUp} delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
            
            {/* Spotify Player (Spans 4 columns on desktop) */}
            <div className="md:col-span-12 lg:col-span-4 rounded-3xl overflow-hidden bg-surface-elevated border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-lg flex flex-col">
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-white mb-2">Apostolic Voice Podcast</h3>
                <p className="text-sm text-secondary mb-4">Stream the latest messages on the go.</p>
              </div>
              <div className="p-4 flex-grow flex items-end">
                {/* Embedded Spotify Player Mock */}
                <iframe 
                  data-testid="embed-iframe"
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/show/6QIPH4mdOqeCOgtPI419SG?utm_source=generator&theme=0&si=df852c6c74cc40ec" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* YouTube Sermon (Spans 8 columns on desktop) */}
            <div className="md:col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px] border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-lg">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed?listType=playlist&list=UUaydberBn8DnzZv3BQ347QA" 
                title="Latest YouTube Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>



            {/* Podcast Thumbnail (Links to Telegram) */}
            <a 
              href="https://t.me/rcnuyo"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:col-span-12 lg:col-span-12 relative rounded-3xl overflow-hidden group min-h-[300px] border border-white/5 bg-surface-elevated p-8 flex flex-col justify-center items-center text-center hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-surface to-background group-hover:opacity-20 transition-opacity duration-500" />
               <div className="relative z-10 w-24 h-24 rounded-full bg-surface-active border border-gold/20 flex items-center justify-center mb-6 shadow-gold-md group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                  <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
               </div>
               <h4 className="text-xl font-bold text-white relative z-10">Audio Archives</h4>
               <p className="text-secondary text-sm mt-2 relative z-10">Dive deep into past prophetic sessions and teachings on Telegram.</p>
            </a>



          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
