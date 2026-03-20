"use client";

import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  type: "integrated" | "undergraduate" | "postgraduate";
  icon?: string;
  note?: string | undefined;
}

const imageMap: Record<string, string> = {
  software: "/image/software-system.jpg",
  theory: "/image/theoretical-computer-science.png",
  data: "/image/data-science.jpg",
  cyber: "/image/cyber-security.png",
  finance: "/image/cf.png",
  fashion: "/image/fashion-design.png",
  computer: "/image/csd.png",
  science: "/image/science.png",
  math: "https://images.squarespace-cdn.com/content/v1/562bf658e4b0947cbf09e119/1459012977251-077VMETIXQ4G7JG5M51H/calculus+darker+smaller+file.jpg",
};

export default function ProgramCard({
  title,
  subtitle,
  description,
  href,
  type,
  icon = "science",
  note,
}: ProgramCardProps) {
  const typeColors = {
    integrated: "from-[#1c3879] to-[#0f2557]",
    undergraduate: "from-[#1c3879] to-[#0f2557]",
    postgraduate: "from-[#1c3879] to-[#0f2557]",
  };

  const typeLabels = {
    integrated: "FIVE YEAR INTEGRATED PROGRAMME",
    undergraduate: "UNDERGRADUATE PROGRAMME",
    postgraduate: "POSTGRADUATE PROGRAMME",
  };

  const imageSrc = imageMap[icon] || "/image/science.png";

  return (
    <div className="program-card group h-full flex flex-col rounded-lg overflow-hidden shadow-md">
      {/* Image Section */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <Image
          src={imageSrc ?? "/image/science.png"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${typeColors[type]} opacity-20`}
        ></div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="text-[10px] sm:text-xs font-semibold bg-white/90 text-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full leading-tight text-center block max-w-[140px] sm:max-w-none">
            {typeLabels[type]}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`bg-gradient-to-br ${typeColors[type]} p-4 sm:p-5 md:p-6 text-white`}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-white/90 transition-colors leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/70 text-xs sm:text-sm">{subtitle}</p>
        )}
      </div>

      {/* Description Section */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 flex-1">
          {description}
        </p>
        {note && (
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-3 sm:mb-4">
            <span className="text-red-600 font-bold">*</span> {note}
          </p>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[#1c3879] font-semibold hover:text-[#e8505b] text-base sm:text-lg transition-colors group/link"
        >
          Read More Details
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}