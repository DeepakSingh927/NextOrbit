import { useState } from "react";
import SectionContainer from "./SectionContainer";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    alt: "Skincare bottles flat lay",
    tag: "Still life",
    span: "col-span-5 row-span-2",
    height: "h-80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80",
    alt: "Pump bottle on surface",
    tag: "Product",
    span: "col-span-3 row-span-1",
    height: "h-[152px]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80",
    alt: "Minimalist product shot",
    tag: "Minimal",
    span: "col-span-4 row-span-2",
    height: "h-80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    alt: "Flower and bottle",
    tag: "Floral",
    span: "col-span-3 row-span-1",
    height: "h-[152px]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=600&q=80",
    alt: "Beauty close-up",
    tag: "Close-up",
    span: "col-span-3 row-span-1",
    height: "h-52",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80",
    alt: "Soft shadow product",
    tag: "Shadow",
    span: "col-span-2 row-span-1",
    height: "h-52",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
    alt: "Perfume bottle",
    tag: "Fragrance",
    span: "col-span-3 row-span-1",
    height: "h-52",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1614178596938-45de5c86f49a?w=500&q=80",
    alt: "Abstract light shapes",
    tag: "Abstract",
    span: "col-span-4 row-span-1",
    height: "h-64",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80",
    alt: "Skincare arrangement",
    tag: "Arrangement",
    span: "col-span-4 row-span-1",
    height: "h-64",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80",
    alt: "Natural light beauty",
    tag: "Natural",
    span: "col-span-4 row-span-1",
    height: "h-64",
  },
];

const meta = [
  { label: "Project Type", value: "Still Life Series" },
  { label: "Location", value: "Studio, Mumbai" },
  { label: "Medium", value: "35mm · Digital" },
];

function PhotoCard({ photo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 ${photo.span} ${photo.height} cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#1F0334]/60 via-transparent to-transparent transition-opacity duration-300 flex items-end p-3 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] tracking-widest uppercase font-medium text-white/90">
          {photo.tag}
        </span>
      </div>
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1F0334] font-sans">
      <SectionContainer>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Header */}
      <header className="mb-14 max-w-3xl">
        

        <h1 className="font-display text-6xl font-normal leading-tight text-neutral-900 dark:text-white mb-6">
          Botanic <em>Stillness</em>
        </h1>

        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-light max-w-lg mb-8">
          A study in quiet beauty — objects pulled from morning light, arranged
          in brief stillness. Each frame explores the tension between the
          organic and the manufactured.
        </p>

        {/* Meta */}
        <div className="flex gap-12">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1.5">
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
                {m.label}
              </span>
              <span className="text-[14px] text-neutral-700 dark:text-neutral-300 font-medium">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Divider */}
      <hr className="border-neutral-200 dark:border-neutral-800 mb-10" />

      {/* Grid */}
      <div className="grid grid-cols-12 gap-4 auto-rows-auto">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-10 pb-4">
        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        <span className="text-[12px] text-neutral-400 dark:text-neutral-500">
          10 photographs · all rights reserved
        </span>
      </div>
      </SectionContainer>
    </div>
  );
}