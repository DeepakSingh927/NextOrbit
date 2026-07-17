import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "./SectionContainer";

// Load exhibition images from the assets/Exhibition folder (Vite import glob)
const imageModules = import.meta.glob('../assets/Exhibition/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules)
  .map((m) => (m && m.default) || m)
  .filter(Boolean)
  .sort();

const silver = {
  solid: "#C0C0C0",
  light: "#D8D8D8",
  bright: "#E8E8E8",
  gradient: "linear-gradient(135deg, #E8E8E8 0%, #A8A8A8 50%, #D0D0D0 100%)",
  glow: "rgba(200, 200, 210, 0.35)",
  glowSoft: "rgba(200, 200, 210, 0.12)",
  border: "rgba(200, 200, 210, 0.35)",
  borderSoft: "rgba(200, 200, 210, 0.2)",
  borderMed: "rgba(200, 200, 210, 0.5)",
};

const stats = [
  { value: "1250+", label: "Events Delivered" },
  { value: "81+", label: "Brands Partnered" },
  
  { value: "26+", label: "Years of Excellence" },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // faster but smooth transition (1.2s interval)
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % images.length;
        setPrev(c);
        return next;
      });
    }, 1200);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col m-0 p-0 pt-0"
      style={{ background: 'var(--bg-hero)', margin: 0, padding: 0 }}
    >

      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${silver.solid} 0%, transparent 70%)` }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #dc3c78 0%, transparent 70%)" }} />

      {/* ── HERO BODY ── */}
      <SectionContainer padding="none" className="relative z-10 grid w-full flex-1 gap-8 lg:grid-cols-[1.2fr_minmax(420px,640px)] items-start pt-10 pb-12">

        {/* RIGHT — immersive event showcase */}
        <div className="order-1 lg:order-2 flex items-center justify-center w-full">
 
          <div className="relative w-full max-w-160 min-w-105 aspect-square">
            <div
              className="absolute inset-0 rounded-4xl border border-white/10"
              style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.04)" }}
            />
            <div
              className="absolute inset-5 rounded-4xl border border-white/10 animate-spin"
              style={{ animationDuration: "16s" }}
            />
            <div
              className="absolute inset-10 rounded-[1.8rem] border border-white/10 animate-spin"
              style={{ animationDuration: "24s" }}
            />

            <div className="absolute inset-[12%] rounded-4xl overflow-hidden border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <img src={images[prev]} alt="event" className="absolute inset-0 w-full h-full object-cover" />
              <img
                key={current}
                src={images[current]}
                alt="event"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ animation: "fadeIn 0.6s ease-in-out" }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-black/30" />
              <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
            </div>

            
             

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
              Latest Events
            </div>
          </div>
        </div>

        {/* LEFT — text content */}
        <div className="order-2 lg:order-1 w-full lg:max-w-xl xl:max-w-2xl">

          

          {/* Headline */}
          <h1 className="text-[clamp(1.8rem,3.6vw,3rem)] sm:text-[clamp(2.2rem,4.2vw,4rem)] lg:text-[clamp(2.6rem,5vw,4.6rem)] font-medium text-white leading-[0.95] tracking-[-0.03em] mb-4">
            <span className="block sm:whitespace-nowrap">
              BUILT ON <span className="italic" style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                EXPERIENCE
              </span>
            </span>
            <span className="block sm:whitespace-nowrap">DRIVEN BY INNOVATION</span>
          </h1>

          {/* Description — fixed: split into short logical lines, no excess height */}
          <div className="mb-8 max-w-lg space-y-2">
            <p className="text-white/50 text-base leading-relaxed">
 NEXT ORBIT is a creative event design and 
management studio delivering immersive brand 
experiences. We blend creativity, strategy and 
seamless execution to craft events that inspire, 
engage and leave a lasting impact            </p>
            {/* <p className="text-white/35 text-sm leading-relaxed">
              <span className="text-white/50 font-medium">Vision —</span> Craft innovative ideas and unforgettable experiences.{" "}
              <span className="text-white/50 font-medium">Mission —</span> Deliver seamless, impactful events through expertise, creativity, and modern technology.
            </p> */}
          </div>

        

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="w-full sm:w-auto min-w-22.5 sm:min-w-29.5 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div
                  className="text-xl sm:text-2xl font-semibold"
                  style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </SectionContainer>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(31, 3, 52, 0.85), transparent)" }}
      />
    </div>
  );
}