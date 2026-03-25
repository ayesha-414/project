"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const LOGO_PSG = "/image/logo.jpeg";

export default function Header() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen]   = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToApply = () => {
    const section = document.getElementById("apply");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const programmes = [
    {
      name: "3 Year B.Sc",
      items: [
        { name: "B.Sc Applied Science",             href: "/science" },
        { name: "B.Sc Computer Systems & Design",   href: "/csd"     },
      ],
    },
    {
      name: "2 Year M.Sc",
      items: [
        { name: "M.Sc Applied Mathematics",         href: "/math"    },
      ],
    },
    {
      name: "5 Year Integrated M.Sc",
      items: [
        { name: "M.Sc Software Systems",                  href: "/stdc" },
        { name: "M.Sc Theoretical Computer Science",      href: "/stdc" },
        { name: "M.Sc Data Science",                      href: "/stdc" },
        { name: "M.Sc Cyber Security",                    href: "/stdc" },
        { name: "M.Sc Computational Finance",             href: "/stdc" },
        { name: "M.Sc Fashion Design & Merchandising",    href: "/fdm"  },
      ],
    },
  ];

  return (
    <>
      {/* ─────────────────────────── HEADER ─────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1c3879] shadow-lg" : "bg-transparent"
        }`}
      >
        {/* ── TOP TIER ───────────────────────────────────────────────── */}
        <div className="mx-auto px-3 sm:px-5 lg:px-10 py-0 border-b border-white/10">
          <div className="flex items-center justify-between">

            {/* Branding */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
              {/* Logo container — shrinks gracefully */}
              <div className="w-10 h-11 sm:w-12 sm:h-13 lg:w-15 lg:h-16 flex items-center justify-center overflow-hidden p-0.5 sm:p-1 shrink-0">
                <Image
                  src={LOGO_PSG}
                  alt="PSG Logo"
                  width={35}
                  height={45}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* College name — hides on very small screens, scales on md */}
              <div className="border-l-2 border-white/30 pl-2 sm:pl-3 lg:pl-4 min-w-0">
                <h1
                  className="text-white font-black uppercase tracking-wide leading-tight
                             text-[13px] xs:text-[15px] sm:text-lg md:text-xl lg:text-2xl
                             whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ wordSpacing: "4px" }}
                >
                  PSG College of Technology
                </h1>
              </div>
            </Link>

            {/* Right side: Apply Now + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
              {/* <button
                  onClick={scrollToApply}
                  className="hidden sm:flex items-center gap-1.5 bg-white text-[#1c3879]
                            px-4 sm:px-5 lg:px-8
                            py-1.5 sm:py-2 lg:py-2.5
                            rounded-full font-black
                            text-sm sm:text-sm lg:text-base
                            shadow-lg hover:bg-blue-50 transition-all active:scale-95"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button> */}

              <button
                className="lg:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM TIER: Desktop Nav ────────────────────────────────── */}
        <nav className="hidden lg:flex items-center justify-center gap-0 xl:gap-6 py-0">
          <Link
            href="/" className="nav-link text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap"
            onClick={(e) => {
              // If already on homepage → prevent navigation
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
          <Link
            href="/#about" className="nav-link text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap"
            onClick={(e) => {
              if (window.location.pathname === "/" && window.location.hash === "#about") {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </Link>
          {/* Programmes Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1 text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap">
              Programmes
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown panel — repositioned so it never overflows viewport */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-2xl p-4 xl:p-6 min-w-[480px] xl:min-w-[560px] border border-gray-100 flex">

                {/* Left: Categories */}
                <div className="w-[44%] border-r border-gray-100 pr-3 xl:pr-4">
                  {programmes.map((category, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveProgram(idx)}
                      className="group/cat flex items-center justify-between px-3 xl:px-4 py-2.5 xl:py-3 rounded-xl cursor-pointer font-black uppercase tracking-widest text-xs xl:text-sm text-gray-600 hover:bg-blue-50 hover:text-[#1c3879] transition-all"
                    >
                      <span>{category.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 transition-all" />
                    </div>
                  ))}
                </div>

                {/* Right: Items */}
                <div className="w-[56%] pl-3 xl:pl-4">
                  <ul className="space-y-0.5 xl:space-y-1">
                    {programmes[activeProgram].items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="group/item flex items-center justify-between px-2 xl:px-3 py-1.5 xl:py-2 rounded-md text-gray-700 font-semibold text-[13px] xl:text-[15px] cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:text-[#1c3879]"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-[#1c3879] rounded-full shrink-0" />
                            {item.name}
                          </span>
                          <span className="w-5 flex justify-end shrink-0">
                            <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-200 text-[#1c3879]" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <Link href="/gallery"    className="nav-link text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap">Gallery</Link>
          <Link
            href="/#schedule" className="nav-link text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap"
            onClick={(e) => {
              if (window.location.pathname === "/" && window.location.hash === "#schedule") {
                e.preventDefault(); // stop defaulttt
                const section = document.getElementById("schedule");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            Schedule
          </Link>
          <Link href="/#contact"   className="nav-link text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white px-3 xl:px-4 py-1.5 hover:text-blue-200 transition-all uppercase whitespace-nowrap">Contact</Link>
        </nav>

        {/* Bottom Accent Gradient */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </header>

      {/* ─────────────────────── MOBILE MENU ──────────────────────────── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[99] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[340px] sm:max-w-[380px] bg-[#1c3879] z-[100] lg:hidden
                    overflow-y-auto transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center p-1 shrink-0">
              <Image src={LOGO_PSG} alt="Logo" width={40} height={40} className="object-contain" />
            </div>
            <h6 className="text-white font-bold text-base sm:text-lg leading-tight">PSG TECH</h6>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="p-5 sm:p-6 space-y-1">

          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center text-white text-lg sm:text-xl font-bold border-b border-white/10 py-3 hover:text-blue-200 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/#about"  className="flex items-center justify-between w-full text-white text-lg sm:text-xl font-bold py-3 hover:text-blue-200 transition-colors"
            onClick={(e) => {
              if (window.location.pathname === "/" && window.location.hash === "#about") {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </Link>

          {/* Programmes accordion */}
          <div className="border-b border-white/10">
            <button
              className="flex items-center justify-between w-full text-white text-lg sm:text-xl font-bold py-3 hover:text-blue-200 transition-colors"
              onClick={() => setProgramsOpen(!programsOpen)}
              aria-expanded={programsOpen}
            >
              Programmes
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                programsOpen ? "max-h-[600px] opacity-100 pb-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-3 sm:pl-4 space-y-4 pt-2">
                {programmes.map((cat, i) => (
                  <div key={i}>
                    <p className="text-blue-200 text-[11px] sm:text-xs font-black uppercase tracking-widest mb-2">
                      {cat.name}
                    </p>
                    {cat.items.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-white/80 text-sm sm:text-base py-1.5 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full shrink-0" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center text-white text-lg sm:text-xl font-bold border-b border-white/10 py-3 hover:text-blue-200 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/#schedule" className="flex items-center text-white text-lg sm:text-xl font-bold border-b border-white/10 py-3 hover:text-blue-200 transition-colors"
            onClick={(e) => {
              if (window.location.pathname === "/" && window.location.hash === "#schedule") {
                e.preventDefault(); // stop default
                const section = document.getElementById("schedule");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            Schedule
          </Link>

          <Link
            href="/#contact" className="flex items-center text-white text-lg sm:text-xl font-bold border-b border-white/10 py-3 hover:text-blue-200 transition-colors"
            onClick={(e) => {
              if (window.location.pathname === "/" && window.location.hash === "#contact") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </Link>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false); // close menu

              const section = document.getElementById("apply");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center justify-center gap-3 bg-white text-[#1c3879] w-full py-3.5 sm:py-4 rounded-xl font-black text-lg sm:text-xl mt-6 hover:bg-blue-50 transition-colors active:scale-95"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </>
  );
}