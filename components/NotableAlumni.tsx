"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"

interface Alumni {
  name: string
  designation: string
  company: string
  image?: string // This MUST be lowercase 'image'
  category?: string
}

const alumniData: Alumni[] = [
  {
    name: "Dr. Pravin Shankar",
    designation: "Data Science Director",
    company: "Meta/WhatsApp USA",
    category: "PhD Holders",
   },
  {
    name: "Harini Seshadri",
    designation: "Executive Director",
    company: "Morgan Stanley, Bengaluru",
    category: "Higher Studies",
  },
  {
    name: "Kasiviswanathan M",
    designation: "Executive Director",
    company: "JPMorgan Chase & Co, USA",
    category: "Entrepreneurs",
  },
  {
    name: "Dr. Parameswaran R",
    designation: "Research Scientist",
    company: "Meta, San Francisco",
    category: "PhD Holders",
  },
  {
    name: "Gowri Sekar",
    designation: "Managing Director",
    company: "Goldman Sachs, Bengaluru",
    category: "Higher Studies",
  },
  {
    name: "Laks Srini",
    designation: "Co Founder & CTO",
    company: "Zerodown, USA",
    category: "Entrepreneurs",
  },
  {
    name: "Raghavan S",
    designation: "Aviation Management",
    company: "Indian Navy",
    category: "Events",
  },
  {
    name: "R.K. Karthikeyan",
    designation: "IPS",
    company: "Ministry of Home Affairs, India",
    category: "Events",
  },
]

export default function NotableAlumni() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextAlumni = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % alumniData.length)
  }, [])

  const prevAlumni = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + alumniData.length) % alumniData.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextAlumni, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextAlumni])

  const currentAlumni = alumniData[currentIndex]

  return (
    <Card
      className="w-full bg-white border border-gray-100 shadow-sm overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <CardHeader className="pb-2 border-b border-gray-50">
        <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold text-[#1c3879]">
          <GraduationCap className="h-5 w-5" />
          Notable Alumni
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="relative flex flex-col items-center">
          
          <button onClick={prevAlumni} className="absolute left-0 top-1/2 -translate-y-1/2 p-1 bg-[#1c3879] rounded-full text-white z-10">
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button onClick={nextAlumni} className="absolute right-0 top-1/2 -translate-y-1/2 p-1 bg-[#1c3879] rounded-full text-white z-10">
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* FIX: Simplified Image Logic */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-md bg-gray-200 flex items-center justify-center mb-4">
            {currentAlumni?.image ? (
              <img 
                key={currentAlumni.image} // Force re-render on change
                src={currentAlumni.image} 
                alt={currentAlumni.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-[#1c3879]">
                {currentAlumni?.name?.charAt(0) || "A"}
              </span>
            )}
          </div>
          {/* Image Section - Forced for Testing */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center mb-4">
            <img 
              src={currentAlumni.image} 
              alt={currentAlumni.name} 
              className="w-full h-full object-cover"
              // If the image fails, it will show a red border so we know it tried
              onError={(e) => {
                  console.error("Image failed to load:", currentAlumni.image);
                  e.currentTarget.style.border = "2px solid red";
              }}
            />
          </div>

          <div className="text-center">
            <h4 className="text-lg font-bold text-[#1c3879]">{currentAlumni?.name}</h4>
            <p className="text-sm font-semibold text-[#e8505b]">{currentAlumni?.designation}</p>
            <p className="text-xs text-gray-500">{currentAlumni?.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}