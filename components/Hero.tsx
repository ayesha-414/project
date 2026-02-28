"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/image/background.jpg",
  "https://images.unsplash.com/photo-1562774053-701939374585",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={img}
            alt="Campus"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 text-center animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
          B.Sc & M.Sc Programmes
        </h1>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2">
          Admission
        </h2>

        <div className="inline-block px-8 py-3 rounded-full mt-4 mb-8">
          <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue">
            2026
          </span>
        </div>

        {/* <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join one of India&apos;s premier institutions for science education.
        </p> */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/apply" className="btn-glow px-10 py-4 text-lg bg-blue-100 rounded-full">
            <span>Apply Now</span>
          </Link>

          <Link href="/#programmes" className="btn-glow px-10 py-4 text-l bg-blue-100 rounded-full">
            Explore Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
