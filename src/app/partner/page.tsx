import Image from "next/image";
import Link from "next/link";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";
import { HeartHandshake, Coins, Flame, Lightbulb, Users, BookOpen, Shield, GraduationCap } from "lucide-react";

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
          <Reveal variants={fadeUp}>
            <div className="inline-flex items-center justify-center p-3 bg-gold/10 rounded-full mb-6 text-gold">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4">
              Get <span className="text-gold">Involved</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Join hands with Rev. Victor Anaele in advancing God's Kingdom through strategic partnerships and mentorship that will transform lives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="container max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <Reveal variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Partnership Opportunities</h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            Discover various ways to partner with us in ministry and make a lasting impact in the Kingdom of God.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipOpportunities.map((opp, index) => (
            <Reveal key={index} variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-colors group">
              <opp.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-serif text-white mb-3">{opp.title}</h3>
              <p className="text-white/70 font-light text-sm mb-6 leading-relaxed">
                {opp.description}
              </p>
              <ul className="space-y-2">
                {opp.items.map((item, i) => (
                  <li key={i} className="text-white/50 text-xs flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Stagger>
      </section>

      {/* Mentorship Section */}
      <section className="container max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal variants={fadeUp}>
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Mentorship Program</h2>
              <div className="text-white/80 font-light leading-relaxed mb-8 space-y-4">
                <p>
                  Our mentorship program is designed for individuals seeking to deepen their spiritual walk, discover their divine purpose, and develop their leadership potential. 
                </p>
                <p>
                  Rev. Victor provides personalized guidance, drawing from years of experience and profound biblical insight.
                </p>
              </div>
            </Reveal>

            <Stagger className="space-y-6">
              {mentorshipPillars.map((pillar, index) => (
                <Reveal key={index} variants={fadeUp} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{pillar.title}</h4>
                    <p className="text-white/60 text-sm font-light">{pillar.description}</p>
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
                <h3 className="text-2xl font-serif text-gold mb-4">Ready to Grow?</h3>
                <p className="text-white/80 text-sm mb-8">Join the next cohort of emerging leaders.</p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-gold text-black font-medium rounded-full hover:bg-white transition-colors">
                  Apply for Mentorship
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How To Become A Partner */}
      <section className="container max-w-4xl mx-auto px-6 md:px-12 mt-32 text-center">
        <Reveal variants={fadeUp} className="p-12 border border-white/10 rounded-3xl bg-white/[0.02] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/5 blur-[100px] rounded-full z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">How to Become a Partner</h2>
            <p className="text-white/60 font-light mb-12 max-w-2xl mx-auto">
              Through strategic partnerships, we have been able to achieve remarkable milestones. Follow these simple steps to join our network.
            </p>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
              <Reveal variants={fadeUp} className="flex gap-4 items-start p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-gold font-serif text-xl">01</div>
                <div>
                  <h4 className="text-white mb-2">Connect With Us</h4>
                  <p className="text-white/50 text-sm font-light">Reach out through our contact channels to express your interest.</p>
                </div>
              </Reveal>
              <Reveal variants={fadeUp} className="flex gap-4 items-start p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-gold font-serif text-xl">02</div>
                <div>
                  <h4 className="text-white mb-2">Choose Partnership</h4>
                  <p className="text-white/50 text-sm font-light">Select the opportunity that aligns with your passion and resources.</p>
                </div>
              </Reveal>
              <Reveal variants={fadeUp} className="flex gap-4 items-start p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-gold font-serif text-xl">03</div>
                <div>
                  <h4 className="text-white mb-2">Complete Form</h4>
                  <p className="text-white/50 text-sm font-light">Fill out the partnership agreement form with your details.</p>
                </div>
              </Reveal>
              <Reveal variants={fadeUp} className="flex gap-4 items-start p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-gold font-serif text-xl">04</div>
                <div>
                  <h4 className="text-white mb-2">Begin Journey</h4>
                  <p className="text-white/50 text-sm font-light">Start transforming lives for God's Kingdom together with us.</p>
                </div>
              </Reveal>
            </Stagger>

            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-gold transition-colors shadow-[0_0_20px_rgba(200,165,74,0.3)] hover:shadow-[0_0_30px_rgba(200,165,74,0.5)]">
              Contact Us to Partner
            </Link>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
