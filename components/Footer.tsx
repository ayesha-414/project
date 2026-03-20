"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gradient text-white">
      <div className="w-full px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/image/logo.jpeg"
                alt="PSG Logo"
                width={50}
                height={50}
                className="p-1 flex-shrink-0"
              />
              <div>
                <h6 className="text-white font-bold text-lg sm:text-xl leading-tight tracking-tight uppercase">
                  PSG COLLEGE OF TECHNOLOGY
                </h6>
              </div>
            </div>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed text-justify">
              PSG College of Technology, established in the year 1951 by PSG & Sons Charities, Coimbatore,
              is one of the premier institutions of the country.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:ml-0 lg:ml-14">
            <h5 className="text-xl sm:text-2xl font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#programmes" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h5 className="text-xl sm:text-2xl font-semibold mb-6">Programmes</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/science" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  B.Sc Applied Science
                </Link>
              </li>
              <li>
                <Link href="/csd" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  B.Sc Computer Systems & Design
                </Link>
              </li>
              <li>
                <Link href="/math" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  M.Sc Applied Mathematics
                </Link>
              </li>
              <li>
                <Link href="/stdc" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  5 Year Integrated M.Sc
                </Link>
              </li>
              <li>
                <Link href="/fdm" className="text-white/80 hover:text-white transition-colors text-base sm:text-lg">
                  M.Sc Fashion Design & Merchandising
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h5 className="text-xl sm:text-2xl font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=PSG+College+of+Technology+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors"
                >
                  PSG College of Technology, <br />
                  Postbox No: 1611<br />
                  Peelamedu, Avinashi road<br />
                  Coimbatore - 641 004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="tel:+914222572177"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors"
                >
                  +91 422 257 2177
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="tel:+914222572477"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors"
                >
                  +91 422 257 2477
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="tel:+914224344777"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors"
                >
                  +91 422 434 4777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="mailto:admission.amcs@psgtech.ac.in"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors break-all"
                >
                  admission.amcs@psgtech.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="mailto:admission.afd@psgtech.ac.in"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors break-all"
                >
                  admission.afd@psgtech.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
                <a
                  href="mailto:admission.apsc@psgtech.ac.in"
                  className="text-white/80 text-base sm:text-lg hover:text-white transition-colors break-all"
                >
                  admission.apsc@psgtech.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/70 text-sm sm:text-lg">
              © 2026 PSG College of Technology. All Rights Reserved.
            </p>
            <p className="text-white/70 text-sm sm:text-lg">
              Designed & Developed by Department of Applied Mathematics and Computational Sciences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}