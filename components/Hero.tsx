"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/image/background.jpg",
  "https://thecollegesphere.com/wp-content/uploads/2025/09/P.S.G-college.Collegesphere-1024x683.webp",
  "https://pbs.twimg.com/media/GW8J8kcWcAAWg0J.jpg",
];
const LOGO_LEFT = "/image/psg_75_logo.webp";
const LOGO_RIGHT = "/image/100_yr_logo.png";

type Particle = { id: number; x: number; size: number; delay: number; duration: number };

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded]             = useState(false);
  const [particles, setParticles]       = useState<Particle[]>([]);

  useEffect(() => {
    const t  = setTimeout(() => setLoaded(true), 80);
    const iv = setInterval(() => setCurrentSlide((p) => (p + 1) % HERO_IMAGES.length), 5500);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  /* client-only — avoids SSR hydration mismatch */
  useEffect(() => {
    setParticles(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 7,
        duration: Math.random() * 9 + 7,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-30 left-0 w-full z-40 bg-[#1c3879]/90 backdrop-blur-md border-b border-white/20 overflow-hidden">
          
        <div className="flex whitespace-nowrap animate-[ticker_20s_linear_infinite]">
            
          <div className="flex items-center gap-12 py-2 px-6 text-white font-semibold text-lg tracking-wide">
            <span>📢 Applications for B.Sc & M.Sc Programmes 2026 will close on <span className="text-[#A3CAE9] font-bold">17 May 2026</span> – Apply Soon!</span>
            <span>📢 Applications for B.Sc & M.Sc Programmes 2026 will close on <span className="text-[#A3CAE9] font-bold">17 May 2026</span> – Apply Soon!</span>
            <span>📢 Applications for B.Sc & M.Sc Programmes 2026 will close on <span className="text-[#A3CAE9] font-bold">17 May 2026</span> – Apply Soon!</span>
          </div>

        </div>

      </div>
      {/* LEFT LOGO */}
      <div className="absolute top-45 left-8 z-30 animate-[float_6s_ease-in-out_infinite]">
        <Image
          src="/image/psg_75_logo.webp"
          alt="75 Years Logo"
          width={90}
          height={90}
          className="object-contain drop-shadow-[0_0_20px_rgba(163,202,233,0.8)]"
        />
      </div>

      {/* RIGHT LOGO */}
      <div className="absolute top-45 right-8 z-30 animate-[float_6s_ease-in-out_infinite]">
        <div className="p-4 rounded-2xl bg-white border border-white/30 shadow-[0_0_30px_rgba(163,202,233,0.4)]">
          <Image
            src="/image/100_yr_logo.png"
            alt="100 Years Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* ── Scoped keyframes ─────────────────────────────────────────── */}
      <style>{`
        @keyframes kb        { 0%{transform:scale(1)} 100%{transform:scale(1.09)} }
        @keyframes rise      {
          0%  { transform:translateY(0) scale(1);   opacity:0; }
          8%  { opacity:.75; }
          90% { opacity:.25; }
          100%{ transform:translateY(-110vh) scale(1.5); opacity:0; }
        }
        @keyframes h-up      { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:none} }
        @keyframes h-down    { from{opacity:0;transform:translateY(-24px)} to{opacity:1;transform:none} }
        @keyframes line-grow { from{width:0} to{width:72px} }
        @keyframes yr-shimmer{
          0%  {background-position:-200% center}
          100%{background-position: 200% center}
        }
        @keyframes yr-breathe{
          0%,100%{ filter:drop-shadow(0 0 18px rgba(163,202,233,.55)) drop-shadow(0 0 48px rgba(110,159,193,.25)); }
          50%    { filter:drop-shadow(0 0 36px rgba(163,202,233,.9))  drop-shadow(0 0 90px rgba(110,159,193,.5));  }
        }
        @keyframes btn-pulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(163,202,233,.55),0 8px 28px rgba(57,90,127,.5),inset 0 1px 0 rgba(255,255,255,.35); }
          50%    { box-shadow:0 0 0 8px rgba(163,202,233,0), 0 12px 36px rgba(57,90,127,.7),inset 0 1px 0 rgba(255,255,255,.5); }
        }
        @keyframes btn-sweep {
          0%  {background-position:-200% center}
          100%{background-position: 200% center}
        }
        @keyframes scan { 0%{transform:scaleY(0);opacity:0} 40%{opacity:1} 100%{transform:scaleY(1);opacity:0} }
        @keyframes dot-blink{ 0%,100%{box-shadow:0 0 8px rgba(163,202,233,.9)} 50%{box-shadow:0 0 18px rgba(163,202,233,1)} }

        /* YEAR */
        .hero-year {
          font-size: clamp(4.5rem, 12vw, 8rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          background: linear-gradient(120deg,#fff 0%,#A3CAE9 25%,#6E9FC1 50%,#A3CAE9 75%,#fff 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: yr-shimmer 5s linear infinite, yr-breathe 3s ease-in-out infinite;
          display: block;
          user-select: none;
        }

        /* PRIMARY button */
        .h-btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 17px 46px;
          font-weight: 800;
          font-size: 0.88rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          border-radius: 999px;
          overflow: hidden;
          text-decoration: none;
          background: linear-gradient(135deg,#2a4a6e 0%,#395A7F 30%,#6E9FC1 70%,#A3CAE9 100%);
          background-size: 200% auto;
          border: 1.5px solid rgba(255,255,255,0.42);
          animation: btn-pulse 2.8s ease-in-out infinite;
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .h-btn-primary::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.22) 50%,transparent 65%);
          background-size:200% 100%;
          animation: btn-sweep 3s linear infinite;
          border-radius:inherit;
          pointer-events:none;
        }
        .h-btn-primary:hover{ transform:translateY(-5px) scale(1.06); filter:brightness(1.15); }

        /* OUTLINE button */
        .h-btn-outline {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 42px;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255,255,255,0.10);
          border: 2px solid rgba(163,202,233,0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.08),
            0 4px 20px rgba(57,90,127,0.35),
            0 0 28px rgba(110,159,193,0.20);
          transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .h-btn-outline:hover {
          background: rgba(163,202,233,0.20);
          border-color: rgba(163,202,233,1);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.18),
            0 8px 36px rgba(57,90,127,0.5),
            0 0 64px rgba(110,159,193,0.38);
          transform: translateY(-5px) scale(1.05);
        }
      `}</style>

      {/* ── Background slides ────────────────────────────────────────── */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === currentSlide ? 1 : 0,
            transition: "opacity 1.8s ease-in-out",
            zIndex: 1,
          }}
        >
          <Image
            src={img}
            alt="Campus"
            fill
            className="object-cover"
            style={{ animation: i === currentSlide ? "kb 14s ease-in-out infinite alternate" : "none" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── Multi-layer overlays ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(155deg,rgba(6,18,42,.72) 0%,rgba(30,58,138,.52) 48%,rgba(14,120,180,.28) 100%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top,rgba(6,18,42,.72) 0%,transparent 55%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "radial-gradient(ellipse at 60% 40%,transparent 35%,rgba(0,0,0,.5) 100%)" }} />

      {/* ── Floating particles ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: `-${p.size * 3}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "radial-gradient(circle,rgba(163,202,233,.95),rgba(110,159,193,.3))",
              boxShadow: `0 0 ${p.size * 4}px rgba(163,202,233,.7)`,
              animation: `rise ${p.duration}s ${p.delay}s ease-in infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Slide dots ───────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: "8px",
              borderRadius: "999px",
              width: i === currentSlide ? "30px" : "8px",
              background: i === currentSlide ? "linear-gradient(90deg,#6E9FC1,#A3CAE9)" : "rgba(255,255,255,.3)",
              boxShadow: i === currentSlide ? "0 0 14px rgba(110,159,193,.9)" : "none",
              transition: "all 0.5s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center top-22"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease" }}
      >

        {/* top badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8"
          style={{
            backdropFilter: "blur(14px)",
            animation: "h-down 0.7s 0.15s ease both",
          }}
        >
        </div>

        <h1
          className="font-semibold text-white leading-[1.1]  mb-3 tracking-tight"
          style={{
            fontSize: "clamp(2.2rem,5.5vw,4.8rem)",
            textShadow: "0 2px 48px rgba(57,90,127,.45)",
            animation: "h-up 0.8s 0.35s ease both",
            wordSpacing: "3px"
          }}
        >
          B.Sc &amp; M.Sc PROGRAMMES
        </h1>

        {/* sub heading */}

        <h2
          className="font-semibold text-[#edf1f4]  mb-3 tracking-tight"
          style={{
            fontSize: "clamp(1.9rem,3.9vw,3.0rem)",
            animation: "h-up 0.8s 0.5s ease both",
          }}
        >
          ADMISSIONS
        </h2>

        {/* ── YEAR ── */}
        <div style={{ animation: "h-up 1s 0.75s ease both" }} className="relative my-3 select-none">
          {/* decorative ring behind number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
            <div style={{
              width: "clamp(220px,36vw,340px)", height: "clamp(220px,36vw,340px)",
              borderRadius: "50%",
              border: "1px solid rgba(163,202,233,0.18)",
              boxShadow: "0 0 80px rgba(110,159,193,.15)",
            }} />
          </div>
          <span className="hero-year relative z-10">2026</span>
        </div>


        {/* ── Buttons ── */}
        <div
          className="flex flex-wrap gap-5 justify-center items-center mt-8 mb-12"
          style={{ animation: "h-up 0.8s 1.1s ease both" }}
        >
          <Link href="/apply" className="h-btn-primary">
            Apply Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link href="/#programmes" className="h-btn-outline">
            Explore Programmes
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* scroll cue */}
        <div
          className="mt-16 flex flex-col items-center gap-1.5 pointer-events-none"
          style={{ animation: "h-up 1s 1.55s ease both", opacity: 0.4 }}
        >
          <span className="text-white text-[10px] tracking-[0.22em] uppercase">Scroll</span>
          <div style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom,rgba(163,202,233,.9),transparent)",
            animation: "scan 2.2s ease-in-out infinite",
            transformOrigin: "top",
          }} />
        </div>
        {/* Announcement Bar */}
        

      </div>
    </section>
  );
}