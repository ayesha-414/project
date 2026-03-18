"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gradient text-white">
      <div className="w-full pl-6 pr-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* About */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
              src="/image/logo.jpeg"
              alt="PSG Logo"
              width={50}
              height={50}
              className="  p-1 mt-[-30]"
            />
              <div >
                <h6 className="text-white font-bold text-xl leading-tight tracking-tight uppercase whitespace-nowrap overflow-hidden text-ellipsis ">PSG COLLEGE OF TECHNOLOGY</h6>
              </div>
            </div>
            <p className="text-white/80 text-lg leading-relaxed text-justify">
              PSG College of Technology, established in the year 1951 by PSG & Sons Charities, Coimbatore, 
              is one of the premier institutions of the country.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-14">
            <h5 className="text-2xl font-semibold mb-6  ">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/80 hover:text-white transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#programmes" className="text-white/80 hover:text-white transition-colors text-lg">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="text-white/80 hover:text-white transition-colors text-lg">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="" className="text-white/80 hover:text-white transition-colors text-lg">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h5 className="text-2xl font-semibold mb-6">Programmes</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/science" className="text-white/80 hover:text-white transition-colors text-lg">
                  B.Sc Applied Science
                </Link>
              </li>
              <li>
                <Link href="/csd" className="text-white/80 hover:text-white transition-colors text-lg">
                  B.Sc Computer Systems & Design
                </Link>
              </li>
              <li>
                <Link href="/math" className="text-white/80 hover:text-white transition-colors text-lg">
                  M.Sc Applied Mathematics
                </Link>
              </li>
              <li>
                <Link href="/stdc" className="text-white/80 hover:text-white transition-colors text-lg">
                  5 Year Integrated M.Sc
                </Link>
              </li>
              <li>
                <Link href="/fdm" className="text-white/80 hover:text-white transition-colors text-lg">
                  M.Sc Fashion Design & Merchandising
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h5 className="text-2xl font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=PSG+College+of+Technology+Coimbatore"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-lg hover:text-white transition-colors"
                >
                  PSG College of Technology, <br />
                  Postbox No: 1611<br />
                  Peelamedu,Avinashi road<br />
                  Coimbatore - 641 004
                </a>
              </li>
              <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="tel:+91 422 257 2177" 
                className="text-white/80 text-lg hover:text-white transition-colors"
              >
                +91 422 257 2177
              </a>
            </li>
             <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="tel:+914222572477" //help
                className="text-white/80 text-lg hover:text-white transition-colors"
              >
                +91 422 257 2477
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="tel:+914224344777" 
                className="text-white/80 text-lg hover:text-white transition-colors"
              >
                +91 422 434 4777
              </a>
            </li>
              <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="mailto:principal@psgtech.ac.in" 
                className="text-white/80 text-lg hover:text-white transition-colors"
              >
                admission.amcs@psgtech.ac.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="mailto:principal@psgtech.ac.in" 
                className="text-white/80 text-lg hover:text-white transition-colors"
              >
                admission.afd@psgtech.ac.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#e8505b] flex-shrink-0" />
              <a 
                href="mailto:principal@psgtech.ac.in" 
                className="text-white/80 text-lg hover:text-white transition-colors"
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-lg">
              © 2026 PSG College of Technology. All Rights Reserved.
            </p>
            <p className="text-white/70 text-lg">
              Designed & Developed by Department of Applied Mathematics and Computational Sciences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
