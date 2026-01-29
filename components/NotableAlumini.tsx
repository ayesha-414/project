"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Alumni {
  name: string
  designation: string
  company: string
  image?: string
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

    const interval = setInterval(() => {
      nextAlumni()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextAlumni])

  const getVisibleAlumni = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % alumniData.length
      visible.push({ ...alumniData[index], originalIndex: index })
    }
    return visible
  }

  const visibleAlumni = getVisibleAlumni()

  return (
    <Card
      className="w-full bg-gradient-to-br from-[#1a1f3c] to-[#0d1025] border-0 text-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <GraduationCap className="h-5 w-5 text-amber-400" />
          <span className="text-amber-400">Notable Alumni</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="relative">
          {/* Alumni Cards */}
          <div className="space-y-3">
            {visibleAlumni.map((alumni, index) => (
              <div
                key={`${alumni.name}-${alumni.originalIndex}`}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                  ${index === 0 ? "bg-white/10 scale-100" : "bg-white/5 scale-[0.98] opacity-70"}
                `}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                    {alumni.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm truncate">{alumni.name}</h4>
                  <p className="text-xs text-gray-300 truncate">{alumni.designation}</p>
                  <p className="text-xs text-gray-400 truncate">{alumni.company}</p>
                </div>

                {/* Category Badge */}
                {index === 0 && alumni.category && (
                  <Badge variant="outline" className="text-[10px] border-amber-400/50 text-amber-400 shrink-0">
                    {alumni.category}
                  </Badge>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-1">
              {alumniData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentIndex ? "bg-amber-400 w-4" : "bg-white/30 hover:bg-white/50"}
                  `}
                  aria-label={`Go to alumni ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/10"
                onClick={prevAlumni}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/10"
                onClick={nextAlumni}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
