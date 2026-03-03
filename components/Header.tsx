"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// Update these paths to match your actual files in /public/image/
const LOGO_PSG = "/image/logo.jpeg"; 
const LOGO_COLLEGE = "/image/psg_75_logo.webp"; // Place your 2nd logo here
const LOGO_RIGHT = "/image/100_yr_logo.png";    // Place your 3rd logo here

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
          isScrolled ? "bg-[#1c3879] shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* LEFT SECTION: Two Logos and Text */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {/* Logo 1 */}
                <div className="w-12 h-12 bg-white flex items-center justify-center overflow-hidden p-1 rounded-lg">
                  <Image src={LOGO_PSG} alt="PSG Logo" width={44} height={44} className="object-contain" />
                </div>
                {/* Logo 2 */}
                <div className="w-12 h-12 bg-white flex items-center justify-center overflow-hidden p-1 rounded-lg">
                  <Image src={LOGO_COLLEGE} alt="College Logo" width={44} height={44} className="object-contain" />
                </div>
              </div>

              <div className="hidden md:block border-l border-white/30 pl-3">
                <h6 className="text-white font-semibold text-md leading-tight">PSG COLLEGE OF TECHNOLOGY</h6>
                <p className="text-white/70 text-[10px] uppercase">Government Aided Autonomous Institution</p>
                <p className="text-white/70 text-[10px] uppercase">Affiliated to Anna University</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/#about" className="nav-link">About</Link>
              
              <div className="relative group">
                <button className="nav-link flex items-center gap-1">
                  Programmes Offered
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl p-4 min-w-[280px]">
                    {programmes.map((category, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <h6 className="text-[#1c3879] font-semibold text-sm mb-2">{category.name}</h6>
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

              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/#schedule" className="nav-link">Schedule</Link>
              <Link href="/#contact" className="nav-link">Contact</Link>
            </nav>

            {/* RIGHT SECTION: Third Logo and Apply Button */}
            <div className="flex items-center gap-4">
              {/* Logo 3 (NAAC/Anniversary) */}
              <div className="hidden sm:flex w-14 h-14 bg-white/10 items-center justify-center overflow-hidden p-1 rounded-full border border-white/20">
                <Image src={LOGO_RIGHT} alt="Accreditation Logo" width={50} height={50} className="object-contain" />
              </div>

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

      {/* Mobile Menu (Matches your original content) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1c3879] z-50 lg:hidden overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex gap-2">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                     <Image src={LOGO_PSG} alt="Logo" width={32} height={32} className="object-contain" />
                   </div>
                </div>
                <div>
                  <h6 className="text-white font-semibold text-sm">PSG COLLEGE OF TECHNOLOGY</h6>
                  <p className="text-white/70 text-xs">Government Aided Autonomous Institution</p>
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-4">
              <Link href="/" className="block text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/#about" className="block text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
              <div>
                <button className="flex items-center justify-between w-full text-white text-lg py-2" onClick={() => setProgramsOpen(!programsOpen)}>
                  Programmes Offered
                  <ChevronDown className={`w-5 h-5 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                </button>
                {programsOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    {programmes.map((category, idx) => (
                      <div key={idx}>
                        <h6 className="text-white/70 font-semibold text-sm mb-2">{category.name}</h6>
                        {category.items.map((item, itemIdx) => (
                          <Link key={itemIdx} href={item.href} className="block text-white/90 py-1 pl-2" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/gallery" className="block text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              <Link href="/#schedule" className="block text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Schedule</Link>
              <Link href="/#contact" className="block text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <Link href="/apply" className="btn-secondary w-full justify-center mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}