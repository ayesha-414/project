"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const LOGO_PSG = "/image/logo.jpeg"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);

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
      { name: "M.Sc Software Systems", href: "/stdc" },
      { name: "M.Sc Theoretical Computer Science", href: "/stdc" },
      { name: "M.Sc Data Science", href: "/stdc" },
      { name: "M.Sc Cyber Security", href: "/stdc" },
      { name: "M.Sc Computational Finance", href: "/stdc" },
      { name: "M.Sc Fashion Design & Merchandising", href: "/fdm" },
    ]},
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1c3879] shadow-lg" : "bg-transparent"
        }`}>
        
        {/* --- TOP TIER: LOGO, NAME, AND APPLY NOW --- */}
        <div className=" mx-auto px-6 lg:px-10 py-0 border-b border-white/10">
          <div className="flex items-center justify-between">
            {/* Branding Section */}
            <Link href="/" className="flex items-center gap-4">
              <div className="w-15 h-16  flex items-center justify-center overflow-hidden p-1  shrink-0">
                <Image src={LOGO_PSG} alt="PSG Logo" width={35} height={45}  />
              </div>
              <div className="border-l-2 border/30 pl-4">
                <h1 className="text-white font-black text-2xl md:text-2xl uppercase tracking-wide"
                    style={{ wordSpacing: "6px" }}>
                  PSG College of Technology
                </h1>
              </div>
            </Link>

            {/* Apply Now Button (Top Level) */}
            <div className="flex items-center gap-4">
              <Link href="" className="btn-secondary hidden sm:flex items-center gap-2 bg-white text-[#1c3879] px-8 py-2.5 rounded-full font-black text-lg md:text-base shadow-lg hover:bg-blue-50 transition-all active:scale-95">
                Apply Now
                <ArrowRight className="w-4 h-4 md:w-5 h-5" />
              </Link>
              <button
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM TIER: NAVIGATION LINKS --- */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-8 py-0  ">
          <Link href="/" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">Home</Link>
          <Link href="/#about" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">About</Link>
          
          {/* Programmes Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1 text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">
              Programmes
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-2xl p-6 min-w-[550px] border border-gray-100 flex">
                {/* Left: Categoriess */}
                <div className="w-1/2 border-r border-gray-100 pr-4">
                  {programmes.map((category, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveProgram(idx)}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer font-black uppercase tracking-widest text-sm text-gray-600 hover:bg-blue-50 hover:text-[#1c3879] transition-all uppercase"
                    >
                      <span>{category.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  ))}
                </div>
                {/* Right: Itemss */}
                <div className="w-1/2 pl-4">
                  <ul className="space-y-1">
                    {programmes[activeProgram].items.map((item, i) => (
                      <li key={i}>
                        <Link
                              href={item.href}
                              className="group flex items-center justify-between px-3 py-2 rounded-md text-gray-700 font-semibold text-[15px] cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:text-[#1c3879]"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1c3879] rounded-full"></span>
                                {item.name}
                              </span>

                              <span className="w-5 flex justify-end">
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 text-[#1c3879]" />
                              </span>
                            </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/gallery" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">Gallery</Link>
          <Link href="/#schedule" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">Schedule</Link>
          <Link href="/#contact" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all uppercase">Contact</Link>
        </nav>

        {/* Bottom Accent Gradient */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </header>

      {/* Mobile Menu (Kept same logic, just updated design to match) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1c3879] z-[100] lg:hidden overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                <Image src={LOGO_PSG} alt="Logo" width={40} height={40} className="object-contain" />
              </div>
              <h6 className="text-white font-bold text-lg leading-tight">PSG TECH</h6>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-full">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="space-y-6">
            <Link href="/" className="block text-white text-2xl font-bold border-b border-white/10 pb-2">Home</Link>
            <Link href="/#about" className="block text-white text-2xl font-bold border-b border-white/10 pb-2">About</Link>
            <button className="flex items-center justify-between w-full text-white text-2xl font-bold" onClick={() => setProgramsOpen(!programsOpen)}>
              Programmes <ChevronDown className={programsOpen ? "rotate-180" : ""} />
            </button>
            {programsOpen && (
              <div className="pl-4 space-y-4">
                {programmes.map((cat, i) => (
                  <div key={i}>
                    <p className="text-blue-200 text-xs font-black uppercase mb-2">{cat.name}</p>
                    {cat.items.map((item, j) => (
                      <Link key={j} href={item.href} className="block text-white/80 text-lg py-1">{item.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <Link href="/gallery" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all">Gallery</Link>
            <Link href="/#schedule" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all">Schedule</Link>
            <Link href="/#contact" className="nav-link text-[17px] xl:text-2xl font-bold text-white px-4 py-1.5 hover:text-blue-200 transition-all">Contact</Link>
    
            <Link href="" className="flex items-center justify-center gap-3 bg-white text-[#1c3879] w-full py-4 rounded-xl font-black text-xl mt-8">
              Apply Now <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}