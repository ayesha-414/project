"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// Update these paths to match your actual files in /public/image/
const LOGO_PSG = "/image/logo.jpeg"; 
const LOGO_COLLEGE = "/image/psg_75_logo.webp"; 
const LOGO_RIGHT = "/image/100_yr_logo.png"; 


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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 ${
        isScrolled ? "bg-[#1c3879] shadow-lg py-3" : "bg-transparent py-5"
      }`}
      
      >
        <div className="max-w-full mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            
            {/* LEFT SECTION: Three Logos and Text */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1 shrink-0">
                <div className="w-20 h-20  flex items-center justify-center overflow-hidden p-1 rounded-lg ">
                  <Image src={LOGO_PSG} alt="PSG Logo" width={60} height={60} className="object-contain" />
                </div>
                {/* <div className="w-20 h-20  flex items-center justify-center overflow-hidden p-1 rounded-lg ">
                  <Image src={LOGO_COLLEGE} alt="College Logo" width={55} height={55} className="object-contain" />
                </div>
                <div className="w-16 h-16 bg-white flex items-center justify-center overflow-hidden p-1 rounded-lg ">
                  <Image src={LOGO_RIGHT} alt="3rd Logo" width={55} height={55} className="object-contain" />
                </div> */}
              </div>

              <div className="hidden xl:block border-l-2 border-white/40 pl-4">
                <h6 className="text-white font-bold text-xl leading-tight tracking-tight uppercase">PSG College of Technology</h6>
                {/* <p className="text-white/90 text-sm font-medium uppercase tracking-wider">Government Aided Autonomous Institution</p>
                <p className="text-white/90 text-sm font-medium uppercase tracking-wider">Affiliated to Anna University</p> */}
              </div>
            </Link>

            {/* Desktop Navigation - Increased Text Size and Clarity */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              <Link href="/" className="nav-link text-[21px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">Home</Link>
              <Link href="/#about" className="nav-link text-[21px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">About</Link>
              
              {/* FUNCTIONAL MENU SECTION */}
              <div className="relative group">
                <button className="nav-link flex items-center gap-1 text-[19px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">
                  Programmes
                  <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-2xl p-5 min-w-[520px] border border-gray-100 ring-1 ring-black/5 flex">

                    {/* LEFT SIDE – HEADINGS */}
                    <div className="w-1/2 border-r pr-4">
                      {programmes.map((category, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setActiveProgram(idx)}
                          className="group flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer font-black uppercase tracking-widest text-[15px] text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-[#1c3879] hover:scale-[1.03]"
                        >
                          <span>{category.name}</span>

                          <span className="w-6 flex justify-end">
                            <ArrowRight className="w-4 h-4 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#1c3879]" />
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT SIDE – COURSES */}
                    <div className="w-1/2 pl-4">
                      <ul className="space-y-2">
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
                {/* <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-2xl p-5 min-w-[340px] border border-gray-100 ring-1 ring-black/5">
                    {programmes.map((category, idx) => (
                      <div key={idx} className="mb-5 last:mb-0">
                        
                        <h6 className="text-[#1c3879] font-black  uppercase tracking-widest mb-3 px-2 border-b-2 border-blue-50 pb-1 text-lg">
                          {category.name}
                        </h6>
                        
                        <div className="space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="group/item flex items-center justify-between text-gray-700 hover:text-[#1c3879] hover:bg-blue-50/80 text-[15px] font-semibold py-2.5 px-3 rounded-lg transition-all"
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

              <Link href="/gallery" className="nav-link text-[21px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">Gallery</Link>
              <Link href="/#schedule" className="nav-link text-[21px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">Schedule</Link>
              <Link href="/#contact" className="nav-link text-[21px] font-bold text-white px-4 py-2 hover:text-blue-200 transition-all drop-shadow-sm">Contact</Link>
            </nav>

            {/* RIGHT SECTION: Apply Button */}
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/apply" className="btn-secondary hidden sm:flex items-center gap-2 bg-white text-[#1c3879] px-7 py-3 rounded-full font-black text-base shadow-lg hover:shadow-white/10 transition-all active:scale-95">
                Apply Now
                <ArrowRight className="w-5 h-5" />
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
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A3CAE9] to-transparent opacity-70"></div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1c3879] z-[100] lg:hidden overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex gap-2">
                   <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                     <Image src={LOGO_PSG} alt="Logo" width={40} height={40} className="object-contain" />
                   </div>
                </div>
                <div>
                  <h6 className="text-white font-bold text-base tracking-tight leading-tight">PSG COLLEGE OF TECHNOLOGY</h6>
                  <p className="text-white/80 text-[10px] uppercase font-medium">Government Aided Autonomous</p>
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-full">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="space-y-6">
              <Link href="/" className="block text-white text-2xl font-bold border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/#about" className="block text-white text-2xl font-bold border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
              <div className="border-b border-white/10 pb-2">
                <button className="flex items-center justify-between w-full text-white text-2xl font-bold py-2" onClick={() => setProgramsOpen(!programsOpen)}>
                  Programmes Offered
                  <ChevronDown className={`w-7 h-7 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                </button>
                {programsOpen && (
                  <div className="pl-4 mt-4 space-y-5 animate-in fade-in slide-in-from-top-2">
                    {programmes.map((category, idx) => (
                      <div key={idx}>
                        <h6 className="text-blue-200 font-black text-sm mb-3 uppercase tracking-widest">{category.name}</h6>
                        <div className="grid gap-3">
                          {category.items.map((item, itemIdx) => (
                            <Link key={itemIdx} href={item.href} className="block text-white/90 text-lg font-medium pl-3 border-l-2 border-white/20 hover:border-white transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/gallery" className="block text-white text-2xl font-bold border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              <Link href="/#contact" className="block text-white text-2xl font-bold border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <Link href="/apply" className="flex items-center justify-center gap-3 bg-white text-[#1c3879] w-full py-5 rounded-2xl font-black text-xl shadow-xl mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                Apply Now <ArrowRight className="w-6 h-6" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}