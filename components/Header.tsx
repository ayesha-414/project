"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_PSG = "/image/logo.jpeg"; 
const LOGO_COLLEGE = "/image/psg_75_logo.webp";
const LOGO_RIGHT = "/image/100_yr_logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programmes = [
    { name: "3 Year B.Sc", items: [
      { name: "B.Sc Applied Science", href: "/science" },
      { name: "B.Sc Computer Systems & Design", href: "/csd" },
    ]},
    { name: "2 Year M.Sc", items: [
      { name: "M.Sc Applied Mathematics", href: "/math" },
    ]},
    { name: "5 Year Integrated M.Sc", items: [
      { name: "M.Sc Software Systems ", href: "/stdc" },
      { name: "M.Sc Theoritical Computer Science", href: "/stdc" },
      { name: "M.Sc Data Science", href: "/stdc" },
      { name: "M.Sc Cyber Security", href: "/stdc" },
      { name: "M.Sc Computational Finance", href: "/stdc" },
      { name: "M.Sc Fashion Design & Merchandising", href: "/fdm" },
    ]},
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1c3879] shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full px-10">
          <div className="flex items-center justify-between">
            
            {/* LEFT SECTION: Three Logos and Text */}
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                
                {/* Logo 1 */}
                <div className="w-14 h-14 bg-white flex items-center justify-center overflow-hidden p-2 rounded-lg">
                  <Image src={LOGO_PSG} alt="PSG Logo" width={52} height={52} className="object-contain" />
                </div>

                {/* Logo 2 */}
                <div className="w-14 h-14 bg-white flex items-center justify-center overflow-hidden p-2 rounded-lg">
                  <Image src={LOGO_COLLEGE} alt="College Logo" width={52} height={52} className="object-contain" />
                </div>

                {/* Logo 3 (Moved here) */}
                <div className="w-14 h-14 bg-white flex items-center justify-center overflow-hidden p-2 rounded-lg">
                  <Image src={LOGO_RIGHT} alt="Accreditation Logo" width={52} height={52} className="object-contain" />
                </div>
              </div>

              <div className="hidden md:block border-l border-white/30 pl-4">
                <h6 className="text-white font-bold text-xl leading-tight">
                  PSG COLLEGE OF TECHNOLOGY
                </h6>
                <p className="text-white/80 text-xs uppercase">
                  Government Aided Autonomous Institution
                </p>
                <p className="text-white/80 text-xs uppercase">
                  Affiliated to Anna University
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 text-lg">
              <Link href="/" className="nav-link text-lg">Home</Link>
              <Link href="/#about" className="nav-link text-lg">About</Link>
              
              <div className="relative group">
                <button className="nav-link flex items-center gap-1 text-lg">
                  Programmes Offered
                  <ChevronDown className="w-5 h-5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl p-4 min-w-[280px]">
                    {programmes.map((category, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <h6 className="text-[#1c3879] font-semibold text-sm mb-2">
                          {category.name}
                        </h6>
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="block text-gray-600 hover:text-[#1c3879] text-sm py-1 pl-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/gallery" className="nav-link text-lg">Gallery</Link>
              <Link href="/#schedule" className="nav-link text-lg">Schedule</Link>
              <Link href="/#contact" className="nav-link text-lg">Contact</Link>
            </nav>

            {/* RIGHT SECTION: Apply Button Only */}
            <div className="flex items-center gap-4">
              <Link href="/apply" className="btn-secondary hidden sm:inline-flex">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu remains unchanged */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1c3879] z-50 lg:hidden overflow-y-auto">
          {/*0 Your existing mobile code unchanged */}
        </div>
      )}
    </>
  );
}