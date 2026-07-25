import Image from "next/image";
import Link from "next/link";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";
import { HeartHandshake, Coins, Flame, Lightbulb, Users, BookOpen, Shield, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Get Involved | Partnership & Mentorship",
  description: "Join hands with Rev. Victor Anaele through strategic partnerships and mentorship to advance God's Kingdom.",
};

const partnershipOpportunities = [
  {
    title: "Ministry Partnership",
    description: "Collaborate with us in establishing apostolic centers, organizing conferences, and spreading the Gospel across strategic locations.",
    icon: Users,
    items: ["Joint ministry events", "Apostolic center establishment", "Conference collaboration", "Evangelistic outreaches"]
  },
  {
    title: "Financial Partnership",
    description: "Support our ministry financially to help us reach more souls, establish training centers, and expand our apostolic influence.",
    icon: Coins,
    items: ["Monthly giving programs", "Project-specific funding", "Equipment and facility support", "Scholarship programs"]
  },
  {
    title: "Prayer Partnership",
    description: "Join our intercessory network and become part of our prayer force who stand in the gap for revival and transformation.",
    icon: Flame,
    items: ["Weekly prayer call", "Intercessory gathering", "Spiritual warfare support"]
  },
  {
    title: "Skills Partnership",
    description: "Contribute your professional skills and expertise to help us in areas like media, technology, administration, and more.",
    icon: Lightbulb,
    items: ["Media and communications", "Technology and web services", "Administrative support", "Professional consulting"]
  }
];

const mentorshipPillars = [
  {
    title: "Biblical Insight",
    description: "In-depth biblical teaching and theological understanding.",
    icon: BookOpen
  },
  {
    title: "Spiritual Warfare",
    description: "Practical guidance on prayer, intercession, and spiritual warfare.",
    icon: Shield
  },
  {
    title: "Leadership",
    description: "Strategies for effective leadership and ministry development.",
    icon: GraduationCap
  }
];

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-placeholder.png"
            alt="Partnership Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="container relative z-10 text-center px-6 md:px-12">
          <Reveal variants={fadeUp} className="flex flex-col items-center justify-center w-full">
            <div className="inline-flex items-center justify-center p-4 md:p-5 bg-gold/10 rounded-full mb-6 text-gold">
              <HeartHandshake className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4 text-center w-full">
              Get <span className="text-gold">Involved</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light text-center w-full leading-relaxed">
              Join hands with Rev. Victor Anaele in advancing God's Kingdom through strategic <br className="hidden md:block" /> partnerships and mentorship that will transform lives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="container max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <Reveal variants={fadeUp} className="flex flex-col items-center justify-center text-center w-full">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center w-full">Partnership Opportunities</h2>
          <p className="text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto text-center w-full leading-relaxed">
            Discover various ways to partner with us in ministry and make a lasting impact in <br className="hidden md:block" /> the Kingdom of God.
          </p>
        </Reveal>

        <div className="w-full h-[115px] flex-shrink-0" aria-hidden="true" />

        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {partnershipOpportunities.map((opp, index) => (
            <Reveal
              key={index}
              variants={fadeUp}
              className="bg-white/[0.05] border border-transparent rounded-[3rem] px-12 md:px-16 pb-12 md:pb-16 pt-20 md:pt-28 hover:bg-white/[0.08] hover:border-gold/30 hover:shadow-[0_0_40px_rgba(206,170,84,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gold Orb */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Offset Watermark Icon */}
              <opp.icon className="absolute -bottom-16 -right-16 w-96 h-96 text-gold opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none transform -rotate-12" />

              <div className="relative z-10 w-full flex flex-col items-center text-center px-7">
                {/* Indestructible physical spacer at the top */}
                <div className="w-full h-6 flex-shrink-0" aria-hidden="true" />

                <div className="inline-flex items-center justify-center mb-12 text-gold group-hover:scale-110 transition-all duration-500 group-hover:text-gold-light">
                  <opp.icon className="w-16 h-16" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">{opp.title}</h3>

                <p className="text-white/70 font-light text-lg mb-12 leading-loose max-w-lg mx-auto">
                  {opp.description}
                </p>

                <div className="flex flex-col items-center w-full">
                  <ul className="flex flex-col gap-y-5 text-left w-fit">
                    {opp.items.map((item, i) => (
                      <li key={i} className="text-white/80 text-base flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Indestructible physical spacer at the bottom */}
                <div className="w-full h-6 flex-shrink-0" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </Stagger>

        <div className="w-full h-32 flex-shrink-0" aria-hidden="true" />
      </section>

      {/* Mentorship Section */}
      <section className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal variants={fadeUp}>
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-white">Mentorship Program</h2>
              
              <div className="w-full h-8 flex-shrink-0" aria-hidden="true" />
              
              <div className="text-white/80 font-light leading-relaxed">
                <p>
                  Our mentorship program is designed for individuals seeking to deepen their spiritual walk, discover their divine purpose, and develop their leadership potential.
                </p>
                
                <div className="w-full h-2 flex-shrink-0" aria-hidden="true" />
                
                <p>
                  Rev. Victor provides personalized guidance, drawing from years of experience and profound biblical insight.
                </p>
              </div>
            </Reveal>
            
            <div className="w-full h-12 flex-shrink-0" aria-hidden="true" />

            <Stagger className="space-y-6">
              {mentorshipPillars.map((pillar, index) => (
                <Reveal key={index} variants={fadeUp} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-500 cursor-default">
                  <div className="text-gold shrink-0 pt-1 group-hover:text-gold-light group-hover:scale-110 transition-all duration-500">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold-light transition-colors duration-500">{pillar.title}</h4>
                    <div className="w-full h-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-white/80 text-base font-light">{pillar.description}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>

          <Reveal variants={fadeUp} delay={0.2} className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/images/hero-placeholder.png"
              alt="Mentorship"
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg">Ready to Grow?</h3>
                <p className="text-white/90 text-lg md:text-xl font-light mb-10">Join the next cohort of emerging leaders.</p>
                <Link 
                  href="/contact" 
                  className="bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-gold hover:border-gold hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
                  style={{ display: 'inline-block', padding: '1.25rem 3.5rem', whiteSpace: 'nowrap' }}
                >
                  Apply for Mentorship
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="w-full h-32 flex-shrink-0" aria-hidden="true" />

      {/* How To Become A Partner */}
      <section className="container max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Reveal variants={fadeUp} className="p-16 md:p-24 border border-white/10 rounded-[3rem] bg-white/[0.02] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/5 blur-[100px] rounded-full z-0 pointer-events-none" />
          
          {/* Offset Watermark Icon */}
          <HeartHandshake className="absolute -bottom-16 -right-16 w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-gold opacity-[0.03] pointer-events-none transform -rotate-12" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Indestructible physical spacer above title */}
            <div className="w-full h-8 flex-shrink-0" aria-hidden="true" />
            
            <h2 className="text-3xl md:text-4xl font-serif text-white text-center w-full">How to Become a Partner</h2>
            
            {/* Indestructible physical spacer below title */}
            <div className="w-full h-3 flex-shrink-0" aria-hidden="true" />

            <div className="w-full flex justify-center">
              <p className="text-white/60 font-light text-center" style={{ maxWidth: '42rem', textWrap: 'balance' }}>
                Through strategic partnerships, we have been able to achieve remarkable milestones. Follow these simple steps to join our network.
              </p>
            </div>

            {/* Indestructible physical spacer below text */}
            <div className="w-full h-8 md:h-12 flex-shrink-0" aria-hidden="true" />

            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center">
              <Reveal variants={fadeUp} className="flex flex-col items-center bg-transparent group hover:-translate-y-2 transition-transform duration-500 cursor-default">
                <div className="text-gold font-sans font-medium tracking-widest text-lg mb-2 group-hover:scale-110 group-hover:text-gold-light transition-all duration-500">01</div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">Connect With Us</h4>
                  <div className="w-full h-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-white/70 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">Reach out through our contact channels to express your interest.</p>
                </div>
              </Reveal>
              
              <Reveal variants={fadeUp} className="flex flex-col items-center bg-transparent group hover:-translate-y-2 transition-transform duration-500 cursor-default">
                <div className="text-gold font-sans font-medium tracking-widest text-lg mb-2 group-hover:scale-110 group-hover:text-gold-light transition-all duration-500">02</div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">Choose Partnership</h4>
                  <div className="w-full h-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-white/70 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">Select the opportunity that aligns with your passion and resources.</p>
                </div>
              </Reveal>
              
              <Reveal variants={fadeUp} className="flex flex-col items-center bg-transparent group hover:-translate-y-2 transition-transform duration-500 cursor-default">
                <div className="text-gold font-sans font-medium tracking-widest text-lg mb-2 group-hover:scale-110 group-hover:text-gold-light transition-all duration-500">03</div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">Complete Form</h4>
                  <div className="w-full h-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-white/70 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">Fill out the partnership agreement form with your details.</p>
                </div>
              </Reveal>
              
              <Reveal variants={fadeUp} className="flex flex-col items-center bg-transparent group hover:-translate-y-2 transition-transform duration-500 cursor-default">
                <div className="text-gold font-sans font-medium tracking-widest text-lg mb-2 group-hover:scale-110 group-hover:text-gold-light transition-all duration-500">04</div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">Begin Journey</h4>
                  <div className="w-full h-2 flex-shrink-0" aria-hidden="true" />
                  <p className="text-white/70 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">Start transforming lives for God's Kingdom together with us.</p>
                </div>
              </Reveal>
            </Stagger>

            {/* Indestructible physical spacer below grid */}
            <div className="w-full h-8 flex-shrink-0" aria-hidden="true" />

            <div className="flex justify-center w-full">
              <Link 
                href="/contact" 
                className="bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-gold hover:border-gold hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
                style={{ display: 'inline-block', padding: '1.25rem 3.5rem', whiteSpace: 'nowrap' }}
              >
                Contact Us to Partner
              </Link>
            </div>

            {/* Indestructible physical spacer below button */}
            <div className="w-full h-8 flex-shrink-0" aria-hidden="true" />
          </div>
        </Reveal>
      </section>

      <div className="w-full h-32 flex-shrink-0" aria-hidden="true" />
    </main>
  );
}
