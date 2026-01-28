"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "/image/logo.jpeg";

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
    {
      name: "3 Year B.Sc",
      items: [
        { name: "B.Sc Applied Science", href: "/science" },
        { name: "B.Sc Computer Systems & Design", href: "/csd" },
      ],
    },
    {
      name: "2 Year M.Sc",
      items: [{ name: "M.Sc Applied Mathematics", href: "/math" }],
    },
    {
      name: "5 Year Integrated M.Sc",
      items: [
        { name: "M.Sc Software Systems / TCS / DS / CS", href: "/stdc" },
        { name: "M.Sc Fashion Design & Merchandising", href: "/fdm" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-primary flex items-center justify-center overflow-hidden p-1 rounded-lg">
                <Image
                  src={LOGO_URL}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              <div className="hidden md:block">
                <h6 className="text-white font-semibold text-sm">
                  PSG COLLEGE OF TECHNOLOGY
                </h6>
                <p className="text-white/70 text-xs">
                  Government Aided Autonomous Institution
                </p>
                <p className="text-white/70 text-xs">
                  Affiliated to Anna University
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/#about" className="nav-link">
                About
              </Link>

              <div className="relative group">
                <button className="nav-link flex items-center gap-1">
                  Programmes Offered
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white rounded-lg shadow-xl p-4 min-w-[280px]">
                    {programmes.map((category, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <h6 className="text-primary font-semibold text-sm mb-2">
                          {category.name}
                        </h6>

                        {category.items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="block text-gray-600 hover:text-primary text-sm py-1 pl-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/#schedule" className="nav-link">
                Schedule
              </Link>
              <Link href="/#contact" className="nav-link">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/apply" className="btn-secondary hidden sm:inline-flex">
                Apply Now →
              </Link>

              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 lg:hidden">
          <div className="p-4">
            <div className="flex justify-between mb-8">
              <Link href="/" className="flex gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center overflow-hidden p-1">
                  <Image src={LOGO_URL} alt="logo" width={40} height={40} />
                </div>
              </Link>

              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <nav className="space-y-4">
              <Link href="/" className="block text-white text-lg">
                Home
              </Link>

              <Link href="/#about" className="block text-white text-lg">
                About
              </Link>

              <button
                className="flex justify-between w-full text-white text-lg"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programmes Offered
                <ChevronDown
                  className={`${programsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {programsOpen && (
                <div className="pl-4 space-y-3">
                  {programmes.map((cat, i) => (
                    <div key={i}>
                      <h6 className="text-white/70 text-sm">{cat.name}</h6>
                      {cat.items.map((it, j) => (
                        <Link
                          key={j}
                          href={it.href}
                          className="block text-white/90 pl-2"
                        >
                          {it.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <Link href="/#schedule" className="block text-white text-lg">
                Schedule
              </Link>

              <Link href="/#contact" className="block text-white text-lg">
                Contact
              </Link>

              <Link
                href="/apply"
                className="btn-secondary w-full justify-center mt-6"
              >
                Apply Now →
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
