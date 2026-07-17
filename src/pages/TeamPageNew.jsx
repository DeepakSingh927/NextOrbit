import SectionContainer from '../components/SectionContainer';
import Footer from '../components/Footer';
import founderPhoto from '../assets/founder.jpg';
import heroPhoto from '../assets/hero.png';
import picture1 from '../assets/Picture1.png';

const mainLeads = [
  {
    name: 'Lorem Ipsum',
    role: 'Creative Director',
    image: founderPhoto,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, massa vel euismod faucibus, lacus tellus vehicula arcu.',
  },
  {
    name: 'Dolor Sit',
    role: 'Operations Lead',
    image: heroPhoto,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat felis eu purus lacinia, in interdum sapien vulputate.',
  },
];

const staffMembers = [
  { name: 'Amet', role: 'Event Producer', image: founderPhoto },
  { name: 'Consectetur', role: 'Technical Lead', image: heroPhoto },
  { name: 'Adipiscing', role: 'Client Experience', image: picture1 },
];

export default function TeamPageNew() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative overflow-hidden bg-[#0f0820] py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#8b5cf6]/40 to-transparent" />
        <div className="absolute left-[-3rem] top-20 h-56 w-56 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
        <div className="absolute right-[-2rem] top-32 h-44 w-44 rounded-full bg-[#00b4ff]/15 blur-3xl" />
        <SectionContainer>
          <div className="relative max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#c7b7ff] mb-4">
              Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
              Bold creatives. Intuitive operators. Elegant impact.
            </h1>
            <p className="mt-6 max-w-xl text-sm text-[#d8ccff] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </SectionContainer>
      </section>

      <section className="py-16 bg-[#faf7ff]">
        <SectionContainer>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,8,32,0.08)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-3">
                      Lead Creative
                    </p>
                    <h2 className="text-3xl font-semibold text-neutral-900 mb-3">
                      Lorem Ipsum
                    </h2>
                    <p className="text-sm text-neutral-600 leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at enim id nibh facilisis ullamcorper.
                    </p>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-[1.75rem] lg:w-1/2">
                    <img src={founderPhoto} alt="Lorem Ipsum" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,8,32,0.08)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-3">
                      Operations Lead
                    </p>
                    <h2 className="text-3xl font-semibold text-neutral-900 mb-3">
                      Dolor Sit
                    </h2>
                    <p className="text-sm text-neutral-600 leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod urna vel varius vulputate.
                    </p>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-[1.75rem] lg:w-1/2">
                    <img src={heroPhoto} alt="Dolor Sit" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#fbf2ff] p-6 shadow-[0_25px_80px_rgba(15,8,32,0.06)] border border-[#e8e0ff]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b5cf6] mb-4">
                Studio Culture
              </p>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                A boutique team energy with clear focus.
              </h3>
              <ul className="space-y-4 text-sm text-neutral-600 leading-7">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />Lorem ipsum dolor sit amet, consectetur.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />Vitae pulvinar magna neque vehicula.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />Curabitur sit amet nisl at sapien gravida.</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="py-14">
        <SectionContainer>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-1">
                Core Staff
              </p>
              <h3 className="text-2xl font-semibold text-neutral-900">
                The team that supports every show.
              </h3>
            </div>
            <p className="max-w-xl text-sm text-neutral-600 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-56 overflow-hidden bg-[#f3efff]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-base font-semibold text-neutral-900 mb-1">{member.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-600 leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </main>
  );
}
