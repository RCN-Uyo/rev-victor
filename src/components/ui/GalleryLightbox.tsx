"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal, fadeUp, Stagger } from "@/components/ui/motion";
import { X } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
        {images.map((img, index) => {
          // A perfect 10-item interlocking bento pattern for 4 columns
          const bentoPattern = [
            "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // 0: Large square
            "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 1: Small square
            "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 2: Small square
            "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // 3: Wide rectangle
            "col-span-1 row-span-2 md:col-span-1 md:row-span-2", // 4: Tall rectangle
            "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 5: Small square
            "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // 6: Wide rectangle
            "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 7: Small square
            "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 8: Small square
            "col-span-2 row-span-1 md:col-span-1 md:row-span-1", // 9: Small square (spans 2 on mobile to avoid orphaned cell)
          ];
          const spanClass = bentoPattern[index % bentoPattern.length];

          return (
            <Reveal key={index} variants={fadeUp} delay={(index % 4) * 0.1} className={`${spanClass} h-full w-full`}>
              <div 
                className="relative group w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer shadow-sm hover:shadow-gold-lg transition-all duration-700"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Ministry moment ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-500 delay-75">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-gold/40 transition-colors duration-500" />
              </div>
            </Reveal>
          );
        })}
      </Stagger>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-6xl h-full flex items-center justify-center cursor-default animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 md:-top-4 md:-right-4 z-[110] text-white/70 hover:text-white bg-black/50 hover:bg-gold/20 rounded-full p-2 backdrop-blur-md transition-all cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <Image 
              src={`/images/${selectedImage}`}
              alt="Expanded view"
              fill
              className="object-contain rounded-xl shadow-2xl p-4 md:p-12"
            />
          </div>
        </div>
      )}
    </>
  );
}
