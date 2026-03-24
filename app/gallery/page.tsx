"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  X,
  ChevronRight,
  ChevronLeft as ArrowLeft,
} from "lucide-react";

/* ✅ Correct keys */
const folderNames: any = {
  amcs: "Department of Applied Mathematics and Computational Sciences",
  fdm: "Department of Apparel and Fashion Design",
  sci: "Department of Applied Science",
};

/* 🔹 Folder-wise images */
const galleryFolders: any = {
  amcs: [
  { id: 1, src: "/image/campus-1.jpg", title: "Graduation Day" },

  { id: 2, src: "/image/campus-2.jpg", title: "Infinity Event" },

  { id: 3, src: "/image/campus-3.jpg.jpeg", title: "Infinity Event" },

  { id: 4, src: "/image/campus-4.jpg.jpeg", title: "Infinity Event" },

  { id: 5, src: "/image/campus-5.jpg.jpeg", title: "Infinity Event" },

  { id: 6, src: "/image/campus-6.jpg.jpeg", title: "Infinity Event" },

  { id: 7, src: "/image/campus-7.jpg.jpeg", title: "Infinity Event" },

  { id: 8, src: "/image/campus-8.jpg.jpeg", title: "Infinity Event" },

  { id: 9, src: "/image/campus-9.jpg.jpeg", title: "Infinity Event" },

  { id: 10, src: "/image/campus-10.jpg.JPEG", title: "Infinity Event" },

  { id: 11, src: "/image/campus-11.jpg", title: "Infinity Event" },

  { id: 12, src: "/image/campus-12.jpg", title: "Infinity Event" },

  { id: 13, src: "/image/campus-13.jpg", title: "Infinity Event" },

  { id: 14, src: "/image/campus-14.jpg", title: "Infinity Event" },

  { id: 15, src: "/image/1.JPG", title: "Alumini Meet" },

  { id: 16, src: "/image/2.JPG", title: "Alumini Meet" },

  { id: 17, src: "/image/3.JPG", title: "Alumini Meet" },
  { id: 18, src: "/image/4.JPG", title: "Alumini Meet" },
   { id: 19, src: "/image/7.JPG", title: "Alumini Meet" },
 { id: 20, src: "/image/image.png", title: "Alumini Meet" },
  { id: 21, src: "/image/IMG_0670.JPG", title: "Alumini Meet" },
 
 { id: 22, src: "/image/IMG_4372.png", title: "Login Event" },
 { id: 23, src: "/image/IMG_9555.JPG", title: "Silver Jubilee Celebration" },
 { id: 24, src: "/image/IMG_9833.JPG", title: "Silver Jubilee Celebration" },
 
 { id: 25, src: "/image/IMG_0680.JPG", title: "Orientation Program" },
 { id: 26, src: "/image/axios.png", title: ""},
 { id: 27, src: "/image/axios-g.png", title: ""},
 { id: 28, src: "/image/axios-w.png", title: ""},
 { id: 29, src: "/image/axios-t.png", title: ""},
 { id: 30, src: "/image/axios-s.png", title: ""},
 { id: 31, src: "/image/axios-q.png", title: ""},
 { id: 32, src: "/image/axios-m.png", title: ""},
 { id: 33, src: "/image/axios-d.png", title: ""},
 { id: 34, src: "/image/axios-b.png", title: ""},
 { id: 35, src: "/image/axios-cl.png", title: ""},
  ],

  fdm: [
    { id: 1, src: "/fdm_gallery/_MG_9386-12.JPG", title: "" },
    { id: 2, src: "/fdm_gallery/_MG_9423-16.JPG", title: ""},
    { id: 3, src: "/fdm_gallery/_MG_9455 -17.JPG", title: ""},
    { id: 4, src: "/fdm_gallery/Copy of PSG_8097.JPG", title: ""},
    { id: 5, src: "/fdm_gallery/image (4).png", title: ""},
    { id: 6, src: "/fdm_gallery/image (5).png", title: ""},
    { id: 7, src: "/fdm_gallery/IMG_0866 (1).JPG", title: ""},
    { id: 8, src: "/fdm_gallery/IMG-20240320-WA0002 (1).jpg", title: ""},
    { id: 9, src: "/fdm_gallery/IMG-20240927-WA0012.jpg", title: ""},
    { id: 10, src: "/fdm_gallery/IMG-20240928-WA0018.jpg", title: ""},
    { id: 11, src: "/fdm_gallery/IMG-20240928-WA0023 (1).jpg", title: ""},
    { id: 12, src: "/fdm_gallery/IMG-20250702-WA0024 (1).jpg", title: "" },
    { id: 13, src: "/fdm_gallery/IMG-20250930-WA0005.jpg", title: ""},
    { id: 14, src: "/fdm_gallery/IMG-20251006-WA0013.jpg", title: ""},
    { id: 15, src: "/fdm_gallery/IMG-20251006-WA0026.jpg", title: ""},
    { id: 16, src: "/fdm_gallery/IMG-20251006-WA0216.jpg", title: ""},
    { id: 17, src: "/fdm_gallery/IMG-20260318-WA0005.jpg", title: ""},
    { id: 18, src: "/fdm_gallery/IMG-20260318-WA0018.jpg", title: ""},
    { id: 19, src: "/fdm_gallery/IMG-20260318-WA0026.jpg", title: ""},
    { id: 20, src: "/fdm_gallery/internship.png", title: ""},
    { id: 21, src: "/fdm_gallery/PSG_8029.JPG", title: ""},
    { id: 22, src: "/fdm_gallery/PSG_8148.JPG", title: ""},
      ],

  sci: [],
};

export default function GalleryPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null);

  const currentImages = selectedFolder
    ? galleryFolders[selectedFolder]
    : [];

  /* 🔹 Next Image */
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIdx !== null && currentImages.length > 0) {
      setSelectedImgIdx((selectedImgIdx + 1) % currentImages.length);
    }
  };

  /* 🔹 Previous Image */
  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIdx !== null && currentImages.length > 0) {
      setSelectedImgIdx(
        (selectedImgIdx - 1 + currentImages.length) %
          currentImages.length
      );
    }
  };

  /* 🔹 Keyboard Controls */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImgIdx === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedImgIdx(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIdx, currentImages]);

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔹 Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-gray-200 text-[#1c3879]"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>

          <h1 className="text-3xl font-bold text-[#1c3879]">
            {selectedFolder
              ? folderNames[selectedFolder] || selectedFolder
              : "Campus Gallery"}
          </h1>
        </div>

        {/* 🔹 Folder View */}
        {!selectedFolder && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(galleryFolders).map((folder) => (
              <div
                key={folder}
                onClick={() => setSelectedFolder(folder)}
                className="cursor-pointer group relative h-56 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >
                {/* Background Image */}
                <Image
                  src={
                    folder === "amcs"
                      ? "/image/campus-1.jpg"
                      : folder === "fdm"
                      ? "/image/campus-5.jpg.jpeg"
                      : "/image/2.JPG"
                  }
                  alt="folder preview"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* ✅ Dark Overlay */}
                {/* for blue :absolute inset-0 bg-blue-900/60 group-hover:bg-blue-800/70 transition*/}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg md:text-xl font-bold mb-1">
                    {folderNames[folder] || folder}
                  </h2>
                  <p className="text-gray-200 text-sm">
                    Click to explore →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 🔹 Image Grid */}
        {selectedFolder && (
          <>
            <button
              onClick={() => setSelectedFolder(null)}
              className="mb-6 px-4 py-2 bg-[#1c3879] text-white rounded-lg"
            >
              ⬅ Back to Folders
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentImages.map((image: any, index: number) => (
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
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 🔹 Lightbox (only ONE version ✅) */}
    
{selectedImgIdx !== null && selectedFolder && (
  <div
    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
    onClick={() => setSelectedImgIdx(null)}
  >
    {/* ❌ Close Button */}
    <button
      className="absolute top-6 right-6 text-white hover:text-red-400 z-[110]"
      onClick={() => setSelectedImgIdx(null)}
    >
      <X className="w-10 h-10" />
    </button>

    {/* ⬅ Previous */}
    <button
      className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[110]"
      onClick={showPrev}
    >
      <ArrowLeft className="w-12 h-12" />
    </button>

    {/* 🖼 Image Container */}
    <div
      className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
      onClick={(e) => e.stopPropagation()} // ✅ prevents closing when clicking image
    >
      {/* Image */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={currentImages[selectedImgIdx].src}
          alt="Fullscreen"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>

      {/* 📌 Title + Counter */}
      <div className="mt-4 text-center">
        <h2 className="text-white text-xl font-semibold">
          {currentImages[selectedImgIdx].title}
        </h2>
        <p className="text-gray-400 text-sm">
          {selectedImgIdx + 1} / {currentImages.length}
        </p>
      </div>
    </div>

    {/* ➡ Next */}
    <button
      className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[110]"
      onClick={showNext}
    >
      <ChevronRight className="w-12 h-12" />
    </button>
  </div>
)}

    </main>
  );
}
