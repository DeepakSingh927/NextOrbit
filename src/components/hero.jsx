import { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519671482677-11fbbbc30979?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519167758481-dc8986ba6c28?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1536051257676-4ad4ba2131cc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd't-crop",
];

/* ── Premium silver palette ─────────────────────────────────── */
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
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">

      {/* Background glow blobs — silver instead of amber */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{ background: `radial-gradient(ellipse, ${silver.solid} 0%, transparent 70%)` }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-5"
        style={{ background: "radial-gradient(ellipse, #dc3c78 0%, transparent 70%)" }} />

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-5"
        style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}>
        <div className="text-white text-xl font-medium tracking-widest">
          Next<span style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Orbit</span>
        </div>
        <div className="flex gap-8">
          {["Services", "Gallery", "About", "Contact"].map(l => (
            <a key={l} href="#" className="text-white/50 text-sm transition-colors duration-200"
              style={{ "--hover-color": silver.light }}
              onMouseEnter={e => e.target.style.color = silver.light}
              onMouseLeave={e => e.target.style.color = ""}>{l}</a>
          ))}
        </div>
        <button className="text-black text-sm font-medium px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
          style={{ background: silver.gradient }}>
          Let's Talk
        </button>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-1 items-center px-10 md:px-20 pt-8 pb-32">
        <div className="max-w-2xl">

          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{ color: silver.bright, background: silver.glowSoft, border: `0.5px solid ${silver.border}` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: silver.bright }} />
            Mumbai's Premier Event Studio
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-5">
            We craft{" "}
            <span className="italic" style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>experiences</span>
            <br />
            people never forget
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
            From intimate brand activations to grand corporate galas — we bring your vision to life with bold creativity and flawless execution.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-12">
            <button className="text-black font-medium px-7 py-3 rounded-full hover:opacity-85 transition-opacity text-sm"
              style={{ background: silver.gradient }}>
              Start a Project
            </button>
            <button className="text-white text-sm px-7 py-3 rounded-full transition-colors duration-200"
              style={{ border: "0.5px solid rgba(255,255,255,0.25)" }}
              onMouseEnter={e => e.target.style.borderColor = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,0.25)"}>
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap">
            {[["500+", "Events Delivered"], ["12+", "Cities Covered"], ["98%", "Client Satisfaction"], ["8 Yrs", "of Excellence"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-medium"
                  style={{ background: silver.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
                <div className="text-white/40 text-xs tracking-wide mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROTATING IMAGE CIRCLE — bottom right area */}
      <div className="absolute top-[55%] -translate-y-1/2 right-16 z-20 flex flex-col items-center gap-3">

        {/* Label */}
        <div className="text-white/30 text-xs tracking-widest uppercase">Live Events</div>

        {/* Outer ring with spinning dashes */}
        <div className="relative flex items-center justify-center">

          {/* Spinning dashed ring */}
          <div className="absolute w-52 h-52 rounded-full animate-spin"
            style={{
              border: `1.5px dashed ${silver.border}`,
              animationDuration: "12s",
            }} />

          {/* Static silver ring */}
          <div className="absolute w-44 h-44 rounded-full"
            style={{ border: `0.5px solid ${silver.borderSoft}` }} />

          {/* Dot on spinning ring */}
          <div className="absolute w-52 h-52 rounded-full animate-spin"
            style={{ animationDuration: "12s" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
              style={{ background: silver.bright, boxShadow: `0 0 8px ${silver.glow}` }} />
          </div>

          {/* Image circle — crossfade (no black flash) */}
          <div className="w-40 h-40 rounded-full overflow-hidden relative"
            style={{ border: `2px solid ${silver.borderMed}` }}>

            {/* Previous image (always visible behind) */}
            <img
              src={images[prev]}
              alt="event"
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Current image fades in on top */}
            <img
              key={current}
              src={images[current]}
              alt="event"
              className="w-full h-full object-cover absolute inset-0"
              style={{
                opacity: 1,
                animation: "fadeIn 0.4s ease-in-out",
              }}
            />
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>

            {/* Shine overlay */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)" }} />
          </div>

          {/* Counter badge — REMOVED */}
          {/* Dots indicator — REMOVED */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />

    </div>
  );
}