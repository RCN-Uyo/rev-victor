"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section, Container, SectionHeading } from "@/components/ui";

const TIMELINE_EVENTS = [
  {
    id: "event-1",
    year: "2023",
    title: "The Foundation & Prayer Storm",
    date: "May 13 & August 20, 2023",
    description:
      "The Uyo Apostolic Center was birthed in obedience to God's instruction through our Father, Apostle Arome Osayi. We launched with the Akwa Ibom Prayer Storm at the Oba Liaison Hall. By August 20, our first meeting in the Remnant Hall, a six-hour prayer contact, was held, followed by the commencement of weekly Sunday services in September.",
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    id: "event-2",
    year: "2024",
    title: "Prophetic Streams Conference",
    date: "September 13-15, 2024",
    description:
      "A significant milestone as the ministry hosted a three-day conference themed “Prophetic Streams.” Featuring powerful ministrations from Prophet Ayo Jeje and Prophet Jesse Jangfa, the teachings, prayers, and impartations stirred revival and healing. This gathering also marked our glorious first anniversary.",
    image: "https://picsum.photos/800/600?random=5",
  },
  {
    id: "event-3",
    year: "2025",
    title: "Campus Invasion & Naioth in Ramah",
    date: "Early 2025",
    description:
      "The ministry embarked on a 40 Days Campus Invasion Tour across secondary schools and universities, igniting revival. Following this was the “Naioth in Ramah” Prophetic Convergence with Prophet Ayo Jeje and Prophet Tobi Omojowo, a season of intense encounters that coincided with a joyful dedication ceremony.",
    image: "https://picsum.photos/800/600?random=6",
  },
  {
    id: "event-4",
    year: "2025",
    title: "Sounds of Truth Conference",
    date: "August 2025",
    description:
      "Themed “The Quickening Spirit,” this iconic moment featured Apostle Toluwalogo and Min. Theophilus Sunday. The atmosphere was saturated with worship and revelation. It now stands as an annual celebration of our anniversary, marked by thanksgiving and spiritual renewal.",
    image: "https://picsum.photos/800/600?random=7",
  },
  {
    id: "event-5",
    year: "2026",
    title: "Future Vision: Intercessory Convergence",
    date: "June 12-14, 2026",
    description:
      "As we advance into a new season, preparations are underway for the 2026 Prophetic & Intercessory Convergence. Designed to stir prayer and spiritual awakening, this upcoming gathering promises intense intercession and divine encounters in the presence of God.",
    image: "https://picsum.photos/800/600?random=8",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="journey" className="py-24 md:py-32 bg-surface overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Our History"
          title={
            <>
              The Ministry <span className="text-gold italic">Journey</span>
            </>
          }
          subtitle="A visual testament to God's faithfulness, from our humble beginnings to our future vision."
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="relative" ref={containerRef}>
          {/* Center Timeline Line (Desktop) & Left Timeline Line (Mobile) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div
              className="w-full bg-gold origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row items-start gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-surface -translate-x-1/2 mt-6 md:mt-8 shadow-gold-sm z-20" />

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-1/2 pl-12 pr-4 md:px-12 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-1 mb-6 backdrop-blur-sm transition-colors hover:border-gold/30">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden w-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4 text-left md:text-left">
                          <span className="inline-block px-3 py-1 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                            {event.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`space-y-3 ${isEven ? "md:flex md:flex-col md:items-end" : ""}`}>
                      <p className="text-gold font-medium tracking-wide text-sm">
                        {event.date}
                      </p>
                      <p className={`text-muted text-sm md:text-base leading-relaxed max-w-md ${isEven ? "md:text-right" : "md:text-left"}`}>
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
