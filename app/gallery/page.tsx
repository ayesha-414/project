"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, X, ChevronRight, ChevronLeft as ArrowLeft } from "lucide-react";
const galleryImages = [

  { id: 1, src: "/image/campus-1.jpg", title: "PSG Tech Main Entrance" },

  { id: 2, src: "/image/campus-2.jpg", title: "The Iconic Bridge" },

  { id: 3, src: "/image/campus-3.jpg.jpeg", title: "GRD Memorial Library" },

  { id: 4, src: "/image/campus-4.jpg.jpeg", title: "Quadrangle Area" },

  { id: 5, src: "/image/campus-5.jpg.jpeg", title: "High-Tech Laboratory" },

  { id: 6, src: "/image/campus-6.jpg.jpeg", title: "Student Amenities Center" },

  { id: 7, src: "/image/campus-7.jpg.jpeg", title: "Hostel Facilities" },

  { id: 8, src: "/image/campus-8.jpg.jpeg", title: "Sports Complex" },

  { id: 9, src: "/image/campus-9.jpg.jpeg", title: "PSG-CARE Building" },

  { id: 10, src: "/image/campus-10.jpg.JPEG", title: "Department of Management Sciences" },

  { id: 11, src: "/image/campus-11.jpg", title: "Textile Technology Dept" },

  { id: 12, src: "/image/campus-12.jpg", title: "Campus Green Spaces" },

  { id: 13, src: "/image/campus-13.jpg", title: "Annual Event - Kriya" },

  { id: 14, src: "/image/campus-14.jpg", title: "Graduation Day" },

];

export default function GalleryPage() {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null);

  // Function to go to next image
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIdx !== null) {
      setSelectedImgIdx((selectedImgIdx + 1) % galleryImages.length);
    }
  };

  // Function to go to previous image
  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIdx !== null) {
      setSelectedImgIdx((selectedImgIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Keyboard support (Arrow keys and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImgIdx === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedImgIdx(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIdx]);

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 rounded-full hover:bg-gray-200 transition-colors text-[#1c3879]">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-[#1c3879]">Campus Gallery</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImgIdx(index)}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white aspect-[4/3] cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click to Expand</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Fullscreen Lightbox Modal --- */}
      {selectedImgIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImgIdx(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-400 z-[110]"
            onClick={() => setSelectedImgIdx(null)}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Previous Arrow */}
          <button 
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={showPrev}
          >
            <ArrowLeft className="w-12 h-12" />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex flex-col items-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selectedImgIdx].src}
                alt="Fullscreen view"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Image Title in Fullscreen */}
            <div className="mt-4 text-center">
              <h2 className="text-white text-xl font-semibold">{galleryImages[selectedImgIdx].title}</h2>
              <p className="text-gray-400 text-sm">{selectedImgIdx + 1} / {galleryImages.length}</p>
            </div>
          </div>

          {/* Next Arrow */}
          <button 
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={showNext}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </main>
  );
}