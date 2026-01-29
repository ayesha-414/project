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
}

const imageMap: Record<string, string> = {
  software: "/image/software-system.jpg", 
  theory: "/image/theoretical-computer-science.png", 
  data: "/image/data-science.jpg", 
  cyber: "/image/cyber-security.png", 
  fashion: "/image/fashion-design.png", 
  science: "/image/science.png", 
  math: "/image/math.png", 
  computer: "/image/csd.png",
};

export default function ProgramCard({ title, subtitle, description, href, type, icon = "science" }: ProgramCardProps) {
  const typeColors = {
    integrated: "from-[#1c3879] to-[#0f2557]",
    undergraduate: "from-[#1c3879] to-[#0f2557]",
    postgraduate: "from-[#1c3879] to-[#0f2557]",
  };

  const typeLabels = {
    integrated: "5 YEAR INTEGRATED PROGRAMME",
    undergraduate: "UNDERGRADUATE PROGRAMME",
    postgraduate: "POSTGRADUATE PROGRAMME",
  };

  const imageSrc = imageMap[icon] || imageMap.science;

  return (
    <div className="program-card group h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden ">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${typeColors[type]} opacity-20`}></div>
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold bg-white/90 text-gray-800 px-3 py-1 rounded-full">
            {typeLabels[type]}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className={`bg-gradient-to-br ${typeColors[type]} p-6 text-white`}>
        <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/70 text-sm">{subtitle}</p>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[#1c3879] font-semibold hover:text-[#e8505b] transition-colors group/link"
        >
          Read More Details
          <svg 
            className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}