import Image from "next/image";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";

export const metadata = {
  title: "About",
  description: "Learn more about Rev. Victor Ifeanyi Anaele and his ministry journey.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-48 md:pb-64">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-placeholder.png"
            alt="Rev Victor Anaele Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center px-6 md:px-12">
          <Reveal variants={fadeUp} className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gold mb-4 text-center w-full">
              About Rev. Victor Anaele
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light text-center w-full md:whitespace-nowrap">
              A vibrant apostolic voice emerging in Nigeria with a burden for regional transformation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-24 md:gap-32">
            {/* Biography */}
            <Reveal variants={fadeUp}>
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Journey</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light text-justify">
                <p>
                  Rev. Victor Ifeanyi Anaele stands as one of the vibrant apostolic voices emerging in Nigeria. He is the Resident Pastor of Remnant Christian Network (RCN), Uyo, a city to which the Lord divinely directed him after fruitful years of ministry service.
                </p>
                <p>
                  Before his assignment in Uyo, he faithfully served as RCN's point man in Abia State, where he planted and nurtured apostolic centers. Rev. Victor Anaele has always carried a burden for regional transformation through the Gospel.
                </p>
                <p>
                  During his undergraduate years, he rose to serve as Faculty President of NIFES Calabar in the 2013-2014 session. These formative leadership roles deepened his hunger for revival and laid a strong foundation for his later apostolic calling.
                </p>
              </div>
            </Reveal>

            {/* Ministry */}
            <Reveal variants={fadeUp} delay={0.2} className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-[2px] bg-gold mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Ministry</h2>
                <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light text-justify">
                  <p>
                    In 2017, Rev. Victor joined the Remnant Christian Network under the apostolic leadership of Apostle Arome Osayi. His burden for raising altars of righteousness and restoring priesthood led him to pioneer and establish six RCN apostolic centers in strategic cities, including Aba, Owerri, Port Harcourt, Bayelsa, Umuahia, and now Uyo.
                  </p>
                  <p>
                    Through these platforms, he has impacted countless lives, reviving a fresh hunger for God's presence and truth across the world. He is the convener of major intercessory gatherings such as the Eastern Watchmen Convergence and The Prophetic Convergence.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sticky Image Column */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="sticky top-32">
              <Reveal variants={fadeUp} delay={0.3} className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 hover:shadow-[0_0_40px_rgba(206,170,84,0.25)] hover:border-gold/30 transition-all duration-700">
                <Image
                  src="/images/about-bw.jpg"
                  alt="Rev. Victor Anaele"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 animate-kenburns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* Explicit Spacer to push footer down */}
      <div className="h-32 md:h-64 w-full shrink-0" aria-hidden="true" />
    </main>
  );
}
