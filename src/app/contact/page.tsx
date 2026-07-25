import Image from "next/image";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact Us | Get in Touch",
  description: "Reach out to Rev. Victor Anaele's ministry for inquiries, partnerships, and support.",
};

const contactMethods = [
  {
    title: "Email Us",
    detail: "revvictoranaele@gmail.com",
    icon: Mail,
    action: "mailto:revvictoranaele@gmail.com"
  },
  {
    title: "Call Us",
    detail: "+234 8085 7510 765",
    icon: Phone,
    action: "tel:+23480857510765"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-20 relative overflow-hidden bg-black selection:bg-gold/30 selection:text-white" style={{ paddingTop: '10rem' }}>
      {/* Subtle Hero Background Image */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 pointer-events-none">
        <Image
          src="/images/hero-placeholder.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      </div>

      {/* Massive Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Indestructible physical spacer for the navbar */}
      <div className="w-full h-12 md:h-24 flex-shrink-0" aria-hidden="true" />

      <section className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <Reveal variants={fadeUp} className="flex flex-col items-center text-center mb-20 md:mb-32">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gold/10 text-gold mb-8">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight">
            Get in <span className="text-gold italic">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed" style={{ textWrap: 'balance' }}>
            We'd love to hear from you. Whether you have a question about our ministry, want to partner with us, or need prayer, our team is ready to connect.
          </p>
        </Reveal>

        {/* Indestructible physical spacer below Hero */}
        <div className="w-full h-20 md:h-40 flex-shrink-0" aria-hidden="true" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Methods */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal variants={fadeUp}>
              <h2 className="text-3xl font-serif text-white mb-8">Contact Information</h2>
            </Reveal>

            <Stagger className="flex flex-col gap-6">
              {contactMethods.map((method, index) => (
                <Reveal 
                  key={index} 
                  variants={fadeUp}
                  className="group relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-full p-8 px-10 hover:bg-white/[0.05] hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <a href={method.action} className="relative z-10 flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <method.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-serif text-white mb-1 group-hover:text-gold transition-colors duration-500">{method.title}</h3>
                      <p className="text-white/60 font-light text-lg group-hover:text-white transition-colors duration-500 break-all md:break-normal">{method.detail}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </Stagger>
          </div>

          {/* Right Column: Contact Form */}
          <Reveal variants={fadeUp} className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] relative group" style={{ padding: '3rem' }}>
              {/* Decorative Orb Container */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 blur-[100px] rounded-full" />
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight" style={{ textWrap: 'balance' }}>Send a Message</h2>
                <p className="text-white/50 font-light" style={{ textWrap: 'balance' }}>Fill out the form below and we will get back to you shortly.</p>

                {/* Indestructible physical spacer */}
                <div className="w-full h-8 flex-shrink-0" aria-hidden="true" />

                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full h-32 flex-shrink-0" aria-hidden="true" />
      </section>
    </main>
  );
}
