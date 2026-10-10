import { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Footer from '../components/Footer';

// Real Founder & Team Image Imports
import rahulPhoto from '../assets/rahul.jpeg';
import malleshPhoto from '../assets/mallesh.jpeg';
import prasadPhoto from '../assets/prasad.jpeg';
import saymaPhoto from '../assets/sayma.jpeg';
import perpetualPhoto from '../assets/perpetual.jpeg';
import tiePhoto from '../assets/tie.jpeg';

const leads = [
  {
    id: 'lead-rahul',
    name: 'Rahul Dhamankar',
    role: 'Founder & Creative Director',
    image: rahulPhoto,
    tag: 'FOUNDER & CREATIVE DIRECTION',
    summary:
      'Rahul Dhamankar founded Next Orbit with a simple belief: events should feel cinematic — every frame intentional, every guest journey elevated.',
    details:
      'With over two decades of experience in live production and experiential design, Rahul leads creative direction end to end — from concept and show flow to technical production, artist management, and on-ground execution across India and the GCC.',
  },
  {
    id: 'lead-mallesh',
    name: 'Mallesh Shinde',
    role: 'Co-Founder & Operations Lead',
    image: malleshPhoto,
    tag: 'CO-FOUNDER & OPERATIONS',
    summary:
      'Oversees end-to-end production management, vendor execution, spatial engineering, and high-stakes event logistics.',
    details:
      'Manages complex timelines, technical delivery, and on-site coordination so every multi-day festival, corporate conclave, and luxury experience arrives precisely as planned.',
  },
];

const staff = [
  {
    id: 'staff-prasad',
    name: 'Prasad Chalke',
    role: 'Head of Creatives',
    image: prasadPhoto,
    tag: 'Creatives',
    bio: 'Leads 3D visual design, spatial concepts, stage renders, and creative asset direction.',
  },
  {
    id: 'staff-sayma',
    name: 'Sayma Mehboob',
    role: 'Accounts Executive',
    image: saymaPhoto,
    tag: 'Accounts',
    bio: 'Manages event financial planning, budget execution, vendor invoicing, and account management.',
  },
  {
    id: 'staff-perpetual',
    name: 'Perpetual Fernandes',
    role: 'Business Development Head',
    image: perpetualPhoto,
    tag: 'Business Development',
    bio: 'Drives strategic brand partnerships, corporate client acquisitions, and business growth.',
  },
  {
    id: 'staff-tie',
    name: 'Tie Raul',
    role: 'Client Servicing Executive',
    image: tiePhoto,
    tag: 'Client Servicing',
    bio: 'Manages client relations, project coordination, guest servicing, and on-ground communication.',
  },
];

export default function TeamPage() {
  const [expanded, setExpanded] = useState([false, false]);

  const toggleExpand = (index) => {
    setExpanded((current) =>
      current.map((state, idx) => (idx === index ? !state : state))
    );
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans pt-20 sm:pt-24 pb-16 relative overflow-hidden">
      {/* Ambient Glows */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(0,180,255,0.06) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(255,255,255,0.03) 0%, transparent 45%)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00B4FF]/5 blur-3xl z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <SectionContainer padding="none">
          <div className="py-4 sm:py-8">
            {/* Header Title */}
            <div className="mb-10 sm:mb-14 text-center sm:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#00B4FF] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
                Leadership &amp; Production Crew
              </div>
              <h1
                className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                The Visionaries &amp; Operators Behind Next Orbit
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
                A dedicated crew of founders, creative directors, production leads, and client experience managers elevating luxury events across India and worldwide.
              </p>
            </div>

            {/* Main Founders Section - Large Portrait Images (Rahul & Mallesh) */}
            <div className="mb-16 sm:mb-20">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                <h2
                  className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Founders &amp; Executive Leadership
                </h2>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  Co-Founders
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {leads.map((lead, index) => (
                  <article
                    key={lead.id}
                    className="group rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,180,255,0.12)] flex flex-col"
                  >
                    {/* Big Founder Image - Portrait Aspect Ratio */}
                    <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 mb-6 shadow-2xl">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#00B4FF] uppercase tracking-wider">
                          {lead.tag}
                        </span>
                      </div>
                    </div>

                    {/* Founder Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#00B4FF] mb-1 font-semibold">
                          {lead.role}
                        </p>
                        <h3
                          className="text-2xl sm:text-3xl font-bold text-white mb-3"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {lead.name}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed font-light mb-4">
                          {expanded[index] ? lead.details : lead.summary}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00B4FF] hover:text-white transition-colors w-fit pt-2"
                      >
                        <span>{expanded[index] ? 'Show Less' : 'Read Full Bio'}</span>
                        <span>{expanded[index] ? '↑' : '→'}</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Core Team Staff Section - Bigger Square/Portrait Cards */}
            <div className="mt-14 sm:mt-16">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00B4FF] block mb-1">
                    SPECIALISTS &amp; OPERATORS
                  </span>
                  <h2
                    className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Core Production &amp; Experience Staff
                  </h2>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  Execution Team
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {staff.map((member) => (
                  <article
                    key={member.id}
                    className="group rounded-2xl border border-white/10 bg-neutral-950 p-5 shadow-lg transition-all duration-500 hover:border-white/25 hover:shadow-2xl flex flex-col"
                  >
                    {/* Bigger Staff Image - Square/Portrait */}
                    <div className="relative w-full h-[250px] sm:h-[280px] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-4 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white/80 uppercase tracking-wider">
                          {member.tag}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#00B4FF] mb-2 font-semibold">
                        {member.role}
                      </p>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {member.bio}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <Footer />
    </main>
  );
}
