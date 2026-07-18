"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";

export default function BookAppointmentPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
      </div>

      <Container className="relative z-10 max-w-4xl w-full flex flex-col flex-grow">
        <div className="mb-8 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">Connect</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book an Appointment</h1>
          <p className="text-secondary max-w-xl mx-auto">
            Schedule a dedicated time for counseling, mentorship, or impartation with Rev. Victor Anaele.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="flex-grow w-full bg-surface-elevated border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden min-h-[700px]">
          {mounted && (
            <iframe
              src="https://calendly.com/your-calendly-link?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=d4af37"
              width="100%"
              height="100%"
              frameBorder="0"
              className="absolute inset-0 w-full h-full"
              title="Calendly Scheduling Page"
            ></iframe>
          )}
        </div>
      </Container>
    </main>
  );
}
