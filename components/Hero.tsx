"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/image/background.jpg",
  "https://thecollegesphere.com/wp-content/uploads/2025/09/P.S.G-college.Collegesphere-1024x683.webp",
  "https://pbs.twimg.com/media/GW8J8kcWcAAWg0J.jpg",
];

type Particle = {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const iv = setInterval(
      () => setCurrentSlide((p) => (p + 1) % HERO_IMAGES.length),
      5500
    );
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
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
      {/* ── Ticker Bar ─────────────────────────────────────────────── */}
      {/*
        top offset:
          mobile  (~<640px)  : top-[72px]   — navbar is slimmer
          sm      (640-768px): top-[90px]
          md      (768-1024px): top-[104px]
          lg+     (1024px+)  : top-[114px]  — original value
      */}
      <div
        className="
          absolute left-0 w-full z-40
          bg-[#1c3879]/90 backdrop-blur-md
          border-b border-white/20 overflow-hidden
          top-[72px] sm:top-[90px] md:top-[104px] lg:top-[114px]
        "
      >
        <div className="flex whitespace-nowrap animate-[ticker_20s_linear_infinite]">
          <div
            className="
              flex items-center gap-12 py-1 px-8
              text-white font-semibold tracking-wide
              text-xs sm:text-sm md:text-base lg:text-lg
            "
          >
            <span>📢 PSG College of Technology is Celeberating 75 Years of Academic Excellence</span>
            <span>📢 PSG College of Technology is Celeberating 75 Years of Academic Excellence </span>
            <span>📢 PSG College of Technology is Celeberating 75 Years of Academic Excellence</span>
            <span>📢 PSG College of Technology is Celeberating 75 Years of Academic Excellence</span>
            <span>📢 PSG College of Technology is Celeberating 75 Years of Academic Excellence</span>
          </div>
        </div>
      </div>

      {/* ── LEFT LOGO ─────────────────────────────────────────────── */}
      {/*
        mobile : top-[120px], left-3, width/height 44/34
        sm     : top-[140px], left-5, width/height 60/46
        md     : top-[150px], left-6, width/height 70/54
        lg+    : top-[160px], left-8, width/height 80/60  (original)
      */}
      <div
        className="
          absolute z-30 animate-[float_6s_ease-in-out_infinite]
          top-[120px] left-3
          sm:top-[140px] sm:left-5
          md:top-[150px] md:left-6
          lg:top-[160px] lg:left-8
        "
      >
        <Image
          src="/image/psg_75_logo.webp"
          alt="75 Years Logo"
          width={80}
          height={60}
          className="
            object-contain drop-shadow-[0_0_20px_rgba(163,202,233,0.8)]
            w-[44px] h-auto
            sm:w-[60px]
            md:w-[70px]
            lg:w-[80px]
          "
        />
      </div>

      {/* ── RIGHT LOGO ────────────────────────────────────────────── */}
      <div
        className="
          absolute z-30 animate-[float_6s_ease-in-out_infinite]
          top-[120px] right-3
          sm:top-[140px] sm:right-5
          md:top-[150px] md:right-6
          lg:top-[160px] lg:right-8
        "
      >
        <div
          className="
            rounded-2xl bg-white border border-white/30
            shadow-[0_0_30px_rgba(163,202,233,0.4)]
            p-1.5 sm:p-2 md:p-3 lg:p-4
          "
        >
          <Image
            src="/image/100_yr_logo.png"
            alt="100 Years Logo"
            width={90}
            height={90}
            className="
              object-contain
              w-[44px] h-auto
              sm:w-[60px]
              md:w-[74px]
              lg:w-[90px]
            "
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
          font-size: clamp(3.2rem, 11vw, 8rem);
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
          gap: 8px;
          padding: 13px 28px;
          font-weight: 800;
          font-size: 0.78rem;
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
          gap: 8px;
          padding: 11px 26px;
          font-weight: 700;
          font-size: 0.78rem;
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

        /* Responsive button sizes — md and up get original sizing */
        @media (min-width: 768px) {
          .h-btn-primary {
            padding: 17px 46px;
            font-size: 0.88rem;
            gap: 10px;
          }
          .h-btn-outline {
            padding: 15px 42px;
            font-size: 0.88rem;
            gap: 10px;
          }
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
            style={{
              animation:
                i === currentSlide
                  ? "kb 14s ease-in-out infinite alternate"
                  : "none",
            }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── Multi-layer overlays ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(155deg,rgba(6,18,42,.72) 0%,rgba(30,58,138,.52) 48%,rgba(14,120,180,.28) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top,rgba(6,18,42,.72) 0%,transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%,transparent 35%,rgba(0,0,0,.5) 100%)",
        }}
      />

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
              background:
                "radial-gradient(circle,rgba(163,202,233,.95),rgba(110,159,193,.3))",
              boxShadow: `0 0 ${p.size * 4}px rgba(163,202,233,.7)`,
              animation: `rise ${p.duration}s ${p.delay}s ease-in infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Slide dots ───────────────────────────────────────────────── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: "8px",
              borderRadius: "999px",
              width: i === currentSlide ? "30px" : "8px",
              background:
                i === currentSlide
                  ? "linear-gradient(90deg,#6E9FC1,#A3CAE9)"
                  : "rgba(255,255,255,.3)",
              boxShadow:
                i === currentSlide ? "0 0 14px rgba(110,159,193,.9)" : "none",
              transition: "all 0.5s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      {/*
        top offset for content block:
          mobile : top-[100px]  — pushes content below ticker + logos
          sm     : top-[110px]
          md     : top-[88px]   — more room, logos sit beside
          lg+    : top-[88px]   (equivalent to original top-22 = ~88px)
      */}
      <div
        className="
          relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center
          top-[100px] sm:top-[110px] md:top-[88px] lg:top-[88px]
        "
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease" }}
      >
        {/* top badge placeholder */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-4 sm:mb-8"
          style={{
            backdropFilter: "blur(14px)",
            animation: "h-down 0.7s 0.15s ease both",
          }}
        />

        {/* H1 */}
        <h1
          className="font-semibold text-white leading-[1.1] mb-2 sm:mb-3 tracking-tight"
          style={{
            fontSize: "clamp(1.7rem,5.5vw,4.8rem)",
            textShadow: "0 2px 48px rgba(57,90,127,.45)",
            animation: "h-up 0.8s 0.35s ease both",
            wordSpacing: "3px",
          }}
        >
          B.Sc &amp; M.Sc PROGRAMMES
        </h1>

        {/* H2 */}
        <h2
          className="font-semibold text-[#edf1f4] mb-2 sm:mb-3 tracking-tight"
          style={{
            fontSize: "clamp(1.4rem,3.9vw,3.0rem)",
            animation: "h-up 0.8s 0.5s ease both",
          }}
        >
          ADMISSIONS
        </h2>

        {/* ── YEAR ── */}
        <div
          style={{ animation: "h-up 1s 0.75s ease both" }}
          className="relative my-2 sm:my-3 select-none"
        >
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 0 }}
          />
          <span className="hero-year relative z-10">2026-27</span>
        </div>

        {/* ── Buttons ── */}
        <div
          className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center mt-5 sm:mt-8 mb-8 sm:mb-12"
          style={{ animation: "h-up 0.8s 1.1s ease both" }}
        >
          <Link href="" className="h-btn-primary">
            Apply Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-[18px] sm:h-[18px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link href="/#programmes" className="h-btn-outline">
            Explore Programmes
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-[18px] sm:h-[18px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* scroll cue */}
        <div
          className="mt-8 sm:mt-16 flex flex-col items-center gap-1.5 pointer-events-none"
          style={{ animation: "h-up 1s 1.55s ease both", opacity: 0.4 }}
        >
          <span className="text-white text-[10px] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom,rgba(163,202,233,.9),transparent)",
              animation: "scan 2.2s ease-in-out infinite",
              transformOrigin: "top",
            }}
          />
        </div>
      </div>
    </section>
  );
}