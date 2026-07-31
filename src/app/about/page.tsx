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
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">About Rev'd Victor</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light text-justify">
                <p>
                  Rev. Victor Ifeanyi Anaele is one of the vibrant apostolic voices emerging from Nigeria, carrying a burden for revival, transformation, and the restoration of God's eternal purpose in the Church. 
                </p>
                <p>
                  He currently serves as the Resident Pastor of Remnant Christian Network (RCN), Uyo, a divine assignment entrusted to him by the Lord after years of fruitful ministry service. Before his assignment in Uyo, Rev. Victor faithfully served as RCN's point man in Abia State, where he pioneered and nurtured apostolic centers, laboring to establish altars of righteousness and raise a people consecrated unto God. 
                </p>
                <p>
                  His ministry has consistently been marked by a passion to see territories transformed through the power of the Gospel. During his undergraduate years, he served as the Faculty President of the Nigerian Fellowship of Evangelical Students (NIFES), Calabar (2013–2014). 
                </p>
                <p>
                  These formative years of leadership deepened his hunger for God and laid a strong foundation for his apostolic calling and lifelong commitment to revival and Kingdom advancement.
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
                    In 2017, Rev. Victor Anaele joined the Remnant Christian Network under the apostolic leadership of Apostle Arome Osayi. Since then, he has faithfully served God's purpose by raising apostolic altars and equipping believers to walk in truth, power, and intimacy with God.
                  </p>
                  <p>
                    Rev. Victor is also the convener of major intercessory and revival gatherings such as the Eastern Watchmen Convergence, The Prophetic and Intercessory Convergence and The Sounds of Truth Conference solely dedicated to causing an awakening in the hearts of men, raising watchmen, and advancing God's Kingdom agenda in the nations.
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
                  src="/images/IMG-116.jpg"
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
