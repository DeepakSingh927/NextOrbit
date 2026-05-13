import { useState, useEffect, useRef } from "react";

/* ─── Visual fills ─── */
const KituVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
    style={{ background: "linear-gradient(135deg,#f0e8df 0%,#e0cfc3 50%,#cdbba8 100%)" }}>
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 20% 80%,rgba(200,170,145,.5) 0%,transparent 55%)" }} />
    <div className="absolute shadow-2xl"
      style={{
        width: "clamp(120px,16vw,200px)", height: "clamp(160px,21vw,264px)",
        transform: "rotate(-14deg) translate(-40px,8px)",
        background: "linear-gradient(145deg,#fff 0%,#f4efea 100%)",
        borderRadius: 2,
      }}>
      <div className="absolute bottom-6 left-4 right-4 space-y-0.5">
        <p className="text-gray-400 tracking-widest uppercase" style={{ fontSize: 7 }}>VVIP Access Only</p>
        <p className="text-gray-400 tracking-widest uppercase" style={{ fontSize: 7 }}>NextOrbit Gala</p>
        <p className="text-gray-300 mt-1" style={{ fontSize: 6 }}>Est. 2026 · Exclusive</p>
      </div>
      <div className="absolute top-1/2 right-3" style={{ transform: "rotate(90deg) translateX(-50%)" }}>
        <p className="text-gray-300 tracking-wider whitespace-nowrap"
          style={{ fontSize: 8, fontFamily: "'Playfair Display',serif" }}>Orbit. Gala</p>
      </div>
    </div>
    <div className="absolute font-black text-gray-800 select-none"
      style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(52px,8vw,88px)", letterSpacing: "-0.04em", lineHeight: 1, transform: "translate(28px,22px)" }}>
      Orbit.
    </div>
  </div>
);

const TuneVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
    style={{ background: "linear-gradient(160deg,#b84c30 0%,#8a3520 50%,#5e2010 100%)" }}>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
      style={{ width: "clamp(120px,18vw,220px)", height: 60, background: "rgba(40,10,5,.7)", filter: "blur(20px)" }} />
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 70% 20%,rgba(220,120,80,.22) 0%,transparent 60%)" }} />
    <div className="relative flex flex-col items-center">
      <div className="rounded-full relative"
        style={{
          width: "clamp(140px,20vw,240px)", height: "clamp(140px,20vw,240px)",
          background: "radial-gradient(circle at 32% 32%,#d4714f 0%,#a8472a 42%,#6e2a14 100%)",
          boxShadow: "0 24px 72px rgba(0,0,0,.6),inset 0 -6px 16px rgba(0,0,0,.35)",
        }}>
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <div key={`${row}-${col}`} className="absolute rounded-full"
              style={{ width: 6, height: 6, background: "rgba(0,0,0,.38)", top: `${16 + row * 7.5}%`, left: `${16 + col * 7.5}%` }} />
          ))
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
          style={{ width: 48, height: 48, background: "radial-gradient(circle at 38% 38%,#222 0%,#0a0a0a 100%)", boxShadow: "0 6px 16px rgba(0,0,0,.7)" }}>
          <div className="rounded-full border border-red-500"
            style={{ width: 24, height: 24, boxShadow: "0 0 10px rgba(239,68,68,.6)" }} />
        </div>
      </div>
      <div className="rounded-full mt-2"
        style={{ width: "clamp(80px,12vw,130px)", height: 13, background: "linear-gradient(180deg,#b05030 0%,#7a3318 100%)", boxShadow: "0 4px 14px rgba(0,0,0,.45)" }} />
      <div className="rounded-full"
        style={{ width: "clamp(100px,15vw,160px)", height: 9, background: "linear-gradient(180deg,#8a3a22 0%,#5a2010 100%)" }} />
    </div>
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(30,8,2,.55) 0%,transparent 45%)" }} />
  </div>
);

const AdonisVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden"
    style={{ background: "linear-gradient(160deg,#2b4a2e 0%,#1e3520 50%,#152518 100%)" }}>
    <div className="absolute inset-0 opacity-10"
      style={{ background: "repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0px,rgba(255,255,255,.04) 1px,transparent 1px,transparent 14px)" }} />
    {/* White brand card — tilted */}
    <div className="absolute bg-white shadow-2xl flex flex-col items-center justify-center gap-4"
      style={{
        width: "clamp(150px,22vw,280px)", height: "clamp(190px,28vw,360px)",
        borderRadius: 6, transform: "rotate(-3deg)",
        padding: "clamp(16px,3vw,32px)",
      }}>
      <svg viewBox="0 0 60 72" style={{ width: "clamp(36px,5vw,56px)", height: "auto" }} fill="none" stroke="#1a2e1c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 62 C30 62 8 46 8 27 C8 14 18 6 30 6 C42 6 52 14 52 27 C52 46 30 62 30 62Z" />
        <line x1="30" y1="6" x2="30" y2="62" />
        <path d="M16 24 C16 24 30 31 44 24" />
        <path d="M12 38 C12 38 30 44 48 38" />
      </svg>
      <div className="text-center">
        <p className="text-gray-800 font-semibold tracking-widest"
          style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(12px,1.8vw,20px)" }}>Eclipse</p>
        <p className="text-gray-400 tracking-widest mt-0.5" style={{ fontSize: "clamp(6px,0.9vw,9px)" }}>Luxury Wedding</p>
      </div>
      <div className="w-full" style={{ height: 1, background: "rgba(0,0,0,0.08)" }} />
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 60 72" style={{ width: "clamp(24px,3.5vw,40px)", height: "auto" }} fill="none" stroke="#1a2e1c" strokeWidth="1.3" strokeLinecap="round">
          <path d="M30 62 C30 62 8 46 8 27 C8 14 18 6 30 6 C42 6 52 14 52 27 C52 46 30 62 30 62Z" />
          <line x1="30" y1="6" x2="30" y2="62" />
        </svg>
        <p className="text-gray-300 tracking-widest mt-1" style={{ fontSize: "clamp(5px,0.7vw,8px)" }}>Eclipse</p>
      </div>
    </div>
    {/* Olive branch top right */}
    <div className="absolute top-0 right-0 opacity-75">
      <svg viewBox="0 0 140 120" width="160" height="130" fill="none">
        <path d="M90 8 C90 8 130 25 118 68 C108 102 65 95 65 95" stroke="#4a7a40" strokeWidth="2.5" fill="rgba(55,95,38,.28)" />
        <path d="M110 4 C110 4 142 35 126 72 C115 92 80 88 80 88" stroke="#3d6535" strokeWidth="1.8" fill="rgba(45,85,32,.18)" />
        <path d="M70 2 C70 2 108 20 102 56" stroke="#5a8a4a" strokeWidth="1.5" fill="none" />
        <path d="M118 68 C118 68 95 55 90 8" stroke="#4a7a40" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity=".4" />
      </svg>
    </div>
    {/* Bottle bottom-left */}
    <div className="absolute left-8 bottom-0" style={{ transform: "translateY(15%)" }}>
      <div style={{ width: 36, height: 14, background: "#777", borderRadius: "3px 3px 0 0", margin: "0 auto" }} />
      <div className="shadow-xl" style={{
        width: 36, height: "clamp(80px,10vw,130px)",
        background: "linear-gradient(180deg,#3a3a28 0%,#1a1a10 35%,#c8a820 55%,#c8a820 68%,#1a1a10 100%)",
        borderRadius: "0 0 3px 3px",
      }} />
    </div>
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(12,26,12,.65) 0%,transparent 50%)" }} />
  </div>
);

const FormaVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ background: "#111" }}>
    <div className="absolute border border-neutral-800" style={{ top: "8%", left: "6%", width: "42%", height: "54%" }} />
    <div className="absolute border border-neutral-700" style={{ top: "12%", left: "10%", width: "42%", height: "54%", background: "rgba(255,255,255,.02)" }} />
    <div className="absolute border border-neutral-800 rotate-45" style={{ bottom: "10%", right: "8%", width: 56, height: 56 }} />
    <div className="absolute top-0 w-px bg-neutral-800 opacity-30" style={{ right: "28%", height: "100%" }} />
    <div className="relative z-10 text-center px-8">
      <p className="text-neutral-600 tracking-[0.35em] uppercase mb-3"
        style={{ fontSize: "clamp(7px,.9vw,10px)", fontFamily: "'DM Mono',monospace" }}>Immersive Activation</p>
      <h3 className="text-white font-light leading-none mb-4"
        style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,5vw,64px)", letterSpacing: "-0.02em" }}>
        Nexus
      </h3>
      <div className="w-10 h-px bg-neutral-700 mx-auto mb-3" />
      <p className="text-neutral-700 tracking-[0.22em] uppercase"
        style={{ fontSize: "clamp(7px,.9vw,9px)", fontFamily: "'DM Mono',monospace" }}>Summit 2026</p>
    </div>
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 62% 38%,rgba(255,255,255,.03) 0%,transparent 55%)" }} />
  </div>
);

const PulseVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ background: "#f5f0e8" }}>
    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
      <p className="font-black text-stone-200"
        style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(72px,12vw,160px)", letterSpacing: "-0.05em", lineHeight: 1, transform: "rotate(-6deg)" }}>
        VIBE
      </p>
    </div>
    <div className="relative z-10 text-left">
      <div className="flex items-baseline gap-2 leading-none">
        <span className="font-black text-gray-900"
          style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,6vw,76px)", letterSpacing: "-0.04em" }}>FEST</span>
        <span className="font-black" style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,6vw,76px)", color: "#FF2D00" }}>X</span>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px bg-gray-900" style={{ width: 44 }} />
        <p className="text-gray-500 tracking-[0.3em] uppercase" style={{ fontSize: "clamp(6px,.8vw,8px)", fontFamily: "'DM Mono',monospace" }}>Summer 2026</p>
      </div>
      <p className="text-gray-400 tracking-wider uppercase mt-1" style={{ fontSize: "clamp(6px,.8vw,9px)", fontFamily: "'DM Mono',monospace" }}>Exclusive VIP Experience</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0" style={{ height: 3, background: "#FF2D00" }} />
    <div className="absolute top-5 right-5 text-gray-300 uppercase tracking-[0.3em]"
      style={{ fontSize: 7, transform: "rotate(90deg)", transformOrigin: "right top", fontFamily: "'DM Mono',monospace", whiteSpace: "nowrap" }}>
      Experience ↓
    </div>
  </div>
);

/* ─── Works ─── */
const works = [
  { id: 1, title: "Orbit Gala",           category: "Corporate Event",      tags: ["Corporate", "Gala"],               accent: "#c8a070", visual: <KituVisual /> },
  { id: 2, title: "Neon Dreams Fest",     category: "Music Festival",       tags: ["Live Music", "Stage"],             accent: "#C1593A", visual: <TuneVisual /> },
  { id: 3, title: "Eclipse Wedding",      category: "Luxury Wedding",       tags: ["Luxury", "Destination", "Wedding"],accent: "#6a9e50", visual: <AdonisVisual />, featured: true },
  { id: 4, title: "Nexus Summit",         category: "Brand Activation",     tags: ["Tech", "Activation"],              accent: "#888888", visual: <FormaVisual /> },
  { id: 5, title: "Midnight Vibe",        category: "VIP Experience",       tags: ["Exclusive", "Nightlife"],          accent: "#FF2D00", visual: <PulseVisual /> },
];

/* ─── Card ─── */
function WorkCard({ work, featured = false, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative cursor-pointer overflow-hidden w-full h-full"
      style={{ borderRadius: featured ? 20 : 14, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* visual */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}>
        {work.visual}
      </div>
      {/* persistent bottom vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 38%)" }} />
      {/* hover reveal overlay */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.08) 45%,transparent 70%)", opacity: hovered ? 1 : 0 }} />

      {/* badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
          style={{ fontSize: 9, fontFamily: "'DM Mono',monospace", background: "rgba(255,255,255,.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.92)" }}>
          {work.category}
        </span>
      </div>
      {/* number */}
      <div className="absolute top-5 right-5 z-10 text-white opacity-25"
        style={{ fontSize: 11, fontFamily: "'DM Mono',monospace" }}>0{work.id}</div>

      {/* bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: work.accent }} />
            <h3 className="text-white font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display',serif", fontSize: featured ? "clamp(17px,2.2vw,24px)" : "clamp(13px,1.6vw,18px)" }}>
              {work.title}
            </h3>
          </div>
          <p className="text-neutral-400 tracking-wider uppercase ml-3.5"
            style={{ fontSize: 9, fontFamily: "'DM Mono',monospace" }}>
            {work.tags.join(" / ")}
          </p>
        </div>
        <div className="flex-shrink-0 ml-3 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            width: 36, height: 36,
            background: hovered ? "rgba(255,255,255,.15)" : "transparent",
            borderColor: hovered ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.2)",
            transform: hovered ? "scale(1.12)" : "scale(1)",
          }}>
          <span className="text-white" style={{ fontSize: 12, display: "block", transform: hovered ? "translate(1px,-1px)" : "none", transition: "transform .3s" }}>↗</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function StudioWorkSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Mono:wght@300;400;500&display=swap');

        .sw-fade { opacity:0; transform:translateY(28px); transition:opacity .85s ease-out,transform .85s ease-out; }
        .sw-fade.on { opacity:1; transform:translateY(0); }
        .d0{transition-delay:0ms} .d1{transition-delay:120ms} .d2{transition-delay:220ms}
        .d3{transition-delay:320ms} .d4{transition-delay:420ms} .d5{transition-delay:520ms}

        .mq-inner{display:flex;gap:2.5rem;animation:mq 28s linear infinite;white-space:nowrap;}
        @keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        /* layout grid */
        .sw-top-row   { display:grid; grid-template-columns:1fr 1fr; gap:16px; height:clamp(280px,36vw,500px); }
        .sw-center    { width:100%; height:clamp(320px,46vw,600px); margin-top:16px; }
        .sw-bot-row   { display:grid; grid-template-columns:1fr 1fr; gap:16px; height:clamp(260px,34vw,460px); margin-top:16px; }

        @media(max-width:640px){
          .sw-top-row,.sw-bot-row{grid-template-columns:1fr;height:auto;}
          .sw-top-row>*,.sw-bot-row>*{height:300px;}
          .sw-center{height:340px;}
        }
      `}</style>

      <section ref={ref} className="py-20" style={{ background: "#0A0A0A", fontFamily: "'DM Mono',monospace" }}>

        {/* Header */}
        <div className={`mb-14 px-6 md:px-12 lg:px-16 sw-fade d0 ${visible ? "on" : ""}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-neutral-700" />
            <span className="text-neutral-500 uppercase tracking-[0.4em]" style={{ fontSize: 10 }}>Our Experiences</span>
          </div>
        
        </div>

        {/* Marquee */}
        <div className={`overflow-hidden border-y border-neutral-800 py-3.5 mb-10 sw-fade d1 ${visible ? "on" : ""}`}>
          <div className="mq-inner">
            {[...Array(2)].flatMap((_, gi) =>
              ["Luxury Weddings","Corporate Galas","Brand Activations","Music Festivals","Stage Production","VIP Experiences","Destination Events","Live Concerts"].map((s, i) => (
                <span key={`${gi}-${i}`} className="text-neutral-700 uppercase tracking-[0.28em] flex items-center gap-2.5" style={{ fontSize: 9 }}>
                  {s} <span className="text-neutral-800">◆</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── 2 / 1 / 2 layout ── */}
        <div className="px-6 md:px-12 lg:px-16">

          {/* TOP — 2 equal */}
          <div className={`sw-top-row sw-fade d2 ${visible ? "on" : ""}`}>
            <WorkCard work={works[0]} />
            <WorkCard work={works[1]} />
          </div>

          {/* CENTER — 1 big */}
          <div className={`sw-center sw-fade d3 ${visible ? "on" : ""}`}>
            <WorkCard work={works[2]} featured />
          </div>

          {/* BOTTOM — 2 equal */}
          <div className={`sw-bot-row sw-fade d4 ${visible ? "on" : ""}`}>
            <WorkCard work={works[3]} />
            <WorkCard work={works[4]} />
          </div>

        </div>

        {/* Footer CTA */}
        <div className={`mt-16 mx-6 md:mx-12 lg:mx-16 flex items-center justify-between border-t border-neutral-800 pt-8 sw-fade d5 ${visible ? "on" : ""}`}>
          <p className="text-neutral-700 uppercase tracking-[0.3em]" style={{ fontSize: 10 }}>© NExt Orbit — 2026</p>
          <button className="group flex items-center gap-3 px-6 py-3 border border-neutral-800 rounded-full hover:border-neutral-500 transition-all duration-300">
            <span className="text-neutral-500 group-hover:text-white uppercase tracking-[0.25em] transition-colors duration-300" style={{ fontSize: 10 }}>
              Start a Project
            </span>
            <span className="text-neutral-700 group-hover:text-white transition-colors text-xs">→</span>
          </button>
        </div>

      </section>
    </>
  );
}