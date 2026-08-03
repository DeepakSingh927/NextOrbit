import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionContainer from "./SectionContainer";
import heroVideo from "../assets/heroTrasition/heropage.mp4";
import ParallaxLayer from "./animations/ParallaxLayer";

const heroStats = [
  { value: "1250+", label: "Live Events" },
  { value: "81+", label: "Brands Elevated" },
  { value: "26+", label: "Years of Craft" },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const heroRoot = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(heroRoot.current, {
        autoAlpha: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-title-line", {
        autoAlpha: 0,
        y: 42,
        stagger: 0.12,
        duration: 1.05,
        ease: "power3.out",
      });

      gsap.from(".hero-copy", {
        autoAlpha: 0,
        y: 28,
        duration: 1,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        autoAlpha: 0,
        y: 24,
        duration: 0.95,
        delay: 0.28,
        ease: "power3.out",
      });

      gsap.from(statRefs.current, {
        autoAlpha: 0,
        y: 24,
        duration: 0.95,
        stagger: 0.08,
        delay: 0.34,
        ease: "power3.out",
      });
    }, heroRoot);

    return () => ctx.revert();
  }, []);

  const addStatRef = (el) => {
    if (el && !statRefs.current.includes(el)) statRefs.current.push(el);
  };

  return (
    <section ref={heroRoot} className="relative min-h-screen overflow-hidden bg-[#08020f] text-white">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      
        <ParallaxLayer speed={40} direction="down" className="absolute left-[-12%] top-16 h-80 w-80 rounded-full bg-[#8b5cf6]/25 blur-3xl pointer-events-none" />
        <ParallaxLayer speed={60} direction="up" className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#00b4ff]/20 blur-3xl pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_22%)] pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08020f] to-transparent pointer-events-none" />
    </section>
  );
}
