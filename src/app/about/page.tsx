import Image from "next/image";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";

export const metadata = {
  title: "About",
  description: "Learn more about Rev. Victor Ifeanyi Anaele and his ministry journey.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
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
          <Reveal variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gold mb-4">
              About Rev. Victor Anaele
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              A vibrant apostolic voice emerging in Nigeria with a burden for regional transformation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-5xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Biography */}
          <div className="md:col-span-12">
            <Reveal variants={fadeUp} className="mb-16">
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Journey</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
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
          </div>

          {/* Ministry */}
          <div className="md:col-span-12">
            <Reveal variants={fadeUp} delay={0.2} className="p-8 md:p-12 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <div className="w-16 h-[2px] bg-gold mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Ministry</h2>
                <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
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

        </div>
      </section>
    </main>
  );
}
