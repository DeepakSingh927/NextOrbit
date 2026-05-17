import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "./SectionContainer";

const images = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519671482677-11fbbbc30979?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1536051257676-4ad4ba2131cc?w=400&h=400&fit=crop",
];

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

export default function HeroSection() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % images.length;
        setPrev(c);
        return next;
      });
    }, 400);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: 'var(--bg-primary)' }}>

      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${silver.solid} 0%, transparent 70%)` }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #dc3c78 0%, transparent 70%)" }} />

      {/* ── HERO BODY ── */}
      <SectionContainer padding="none" className="relative z-10 flex flex-1 flex-col lg:flex-row items-center justify-between pt-10 pb-20 gap-12">

        {/* LEFT — text content */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl">

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{ color: silver.bright, background: silver.glowSoft, border: `0.5px solid ${silver.border}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ background: silver.bright }} />
            Mumbai's Premier Event Studio
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight mb-4">
            BUILT ON{" "}
            <span className="italic" style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              EXPERIENCE
            </span>
            <br />DRIVEN BY INNOVATION
          </h1>

          {/* Description — fixed: split into short logical lines, no excess height */}
          <div className="mb-8 max-w-lg space-y-2">
            <p className="text-white/50 text-base leading-relaxed">
              Next Orbit is the preferred path for brands seeking immersive experiences that enhance their presence and elevate their portfolio.
            </p>
            <p className="text-white/35 text-sm leading-relaxed">
              <span className="text-white/50 font-medium">Vision —</span> Craft innovative ideas and unforgettable experiences.{" "}
              <span className="text-white/50 font-medium">Mission —</span> Deliver seamless, impactful events through expertise, creativity, and modern technology.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="text-black font-medium px-6 py-2.5 rounded-full hover:opacity-85 transition-opacity text-sm"
              style={{ background: silver.gradient }}
            >
              Start a Project
            </button>
            <button
              type="button"
              onClick={() => navigate("/", { state: { scrollTo: "experiences" } })}
              className="text-white text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
              style={{ border: "0.5px solid rgba(255,255,255,0.25)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[["500+", "Events Delivered"], ["12+", "Cities Covered"], ["98%", "Client Satisfaction"], ["22 Yrs", "of Excellence"]].map(([n, l]) => (
              <div key={l}>
                <div
                  className="text-2xl font-medium"
                  style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >{n}</div>
                <div className="text-white/40 text-xs tracking-wide mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — rotating image circle */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <div className="text-white/30 text-xs tracking-widest uppercase">Live Events</div>

          <div className="relative flex items-center justify-center">
            {/* Spinning dashed ring */}
            <div
              className="absolute w-52 h-52 rounded-full animate-spin"
              style={{ border: `1.5px dashed ${silver.border}`, animationDuration: "12s" }}
            />
            {/* Static silver ring */}
            <div className="absolute w-44 h-44 rounded-full" style={{ border: `0.5px solid ${silver.borderSoft}` }} />

            {/* Dot on spinning ring */}
            <div className="absolute w-52 h-52 rounded-full animate-spin" style={{ animationDuration: "12s" }}>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{ background: silver.bright, boxShadow: `0 0 8px ${silver.glow}` }}
              />
            </div>

            {/* Crossfade image circle */}
            <div
              className="w-40 h-40 rounded-full overflow-hidden relative"
              style={{ border: `2px solid ${silver.borderMed}` }}
            >
              <img src={images[prev]} alt="event" className="w-full h-full object-cover absolute inset-0" />
              <img
                key={current}
                src={images[current]}
                alt="event"
                className="w-full h-full object-cover absolute inset-0"
                style={{ animation: "fadeIn 0.4s ease-in-out" }}
              />
              <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
              {/* Shine */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)" }}
              />
            </div>
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