import Image from "next/image";
import { Reveal, fadeUp } from "@/components/ui/motion";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";

export const metadata = {
  title: "Gallery | Ministry Moments",
  description: "Explore the visual journey of Rev. Victor Anaele's ministry.",
};

const GALLERY_IMAGES = [
  "IMG-115.jpg", "IMG-117.jpg", "IMG-12.jpg", "IMG-121.jpg", "IMG-15.jpg", "IMG-16.jpg", 
  "IMG-207.jpg", "IMG-216.jpg", "IMG-37.jpg", "IMG-38.jpg", "IMG-53.jpg", "IMG-57.jpg", 
  "IMG-58.jpg", "IMG-61.jpg", "IMG-63.jpg", "IMG-64.jpg", "IMG-68.jpg", "IMG-71.jpg", 
  "IMG-72.jpg", "IMG-73.jpg", "IMG-74.jpg", "IMG-79.jpg", "IMG-80.jpg", "IMG-83.jpg", 
  "IMG-88.jpg", "IMG-89.jpg", "IMG-91.jpg"
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pb-20 relative overflow-hidden bg-black selection:bg-gold/30 selection:text-white" style={{ paddingTop: '10rem' }}>
      {/* Subtle Hero Background Image */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 pointer-events-none">
        <Image
          src="/images/hero-placeholder.png"
          alt="Gallery Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <Reveal variants={fadeUp}>
          <div className="w-16 h-[2px] bg-gold mb-6 mx-auto" />
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gold mb-4">
            Ministry Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
            Captured moments of faith, raw encounters, and the global move of the Spirit.
          </p>
        </Reveal>
      </section>

      {/* Bento Box Grid */}
      <section className="container max-w-[1400px] mx-auto px-6 mt-8">
        <div className="h-20 w-full" aria-hidden="true" />
        <GalleryLightbox images={GALLERY_IMAGES} />
      </section>

      {/* Explicit Spacer to push footer down */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </main>
  );
}
