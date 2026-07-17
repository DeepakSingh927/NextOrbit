import { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Footer from '../components/Footer';
import founderPhoto from '../assets/founder.jpg';
import heroPhoto from '../assets/hero.png';
import picture1 from '../assets/Picture1.png';

const leads = [
  {
    name: 'Lorem Ipsum',
    role: 'Creative Director',
    image: founderPhoto,
    summary:
      'Leads creative direction with a clear, disciplined approach.',
    details:
      'Delivers concept, visual strategy, and production direction. Keeps every event sharp, intentional, and on brand with minimal clutter.',
  },
  {
    name: 'Dolor Sit',
    role: 'Operations Lead',
    image: heroPhoto,
    summary:
      'Oversees production, vendor execution, and logistics.',
    details:
      'Manages timelines, technical delivery, and on-site coordination so every experience arrives precisely as planned.',
  },
];

const staff = [
  { name: 'Amet', role: 'Event Producer', image: founderPhoto },
  { name: 'Consectetur', role: 'Technical Lead', image: heroPhoto },
  { name: 'Adipiscing', role: 'Client Experience', image: picture1 },
];

export default function TeamPage() {
  const [expanded, setExpanded] = useState([false, false]);

  const toggleExpand = (index) => {
    setExpanded((current) =>
      current.map((state, idx) => (idx === index ? !state : state))
    );
  };

  return (
    <main className="min-h-screen bg-[#1F0334] text-white font-sans">
      <SectionContainer>
        <section className="relative overflow-hidden py-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at top, rgba(139,92,246,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(0,180,255,0.16), transparent 30%)',
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-20 h-24 w-24 rounded-full border border-white/20 opacity-80 animate-[spin_28s_linear_infinite]" />
          <div className="pointer-events-none absolute left-8 top-40 h-16 w-16 rounded-full border border-[#8B5CF6]/30 opacity-80 animate-[orbit_18s_linear_infinite]" />
          <div className="pointer-events-none absolute right-1/4 bottom-16 h-12 w-12 rounded-full bg-[#8B5CF6]/40 blur-xl animate-[orbit-reverse_20s_linear_infinite]" />

          <div className="relative z-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300 mb-3">
                Team
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
                The team that makes every event feel effortless.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-7 max-w-xl">
                A focused crew for strategy, production, and guest experience. Clean delivery, less noise, more impact.
              </p>
            </div>

            <section className="grid gap-4 lg:grid-cols-2">
              {leads.map((lead, index) => (
                <article
                  key={lead.name}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-16 w-16 rounded-3xl overflow-hidden bg-slate-950/30 ring-1 ring-white/10">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300 mb-2">
                        {lead.role}
                      </p>
                      <h2 className="text-xl font-semibold text-white mb-2">
                        {lead.name}
                      </h2>
                      <p className="text-sm text-slate-200 leading-6 mb-3">
                        {expanded[index] ? lead.details : lead.summary}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="text-sm font-medium text-[#8B5CF6] hover:text-white"
                      >
                        {expanded[index] ? 'Show less' : 'Read more'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-300 mb-2">
                    Core Staff
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    A lean crew with full execution.
                  </h2>
                </div>
                <p className="text-sm text-slate-200 leading-6">
                  Streamlined roles, clear handoff, and sharp delivery across every event touchpoint.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {staff.map((member) => (
                  <article
                    key={member.name}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-3xl overflow-hidden bg-slate-950/40 ring-1 ring-white/10">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{member.name}</h3>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </SectionContainer>

      <Footer />
    </main>
  );
}
