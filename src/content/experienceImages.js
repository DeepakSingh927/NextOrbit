/** Experience cards + gallery — images loaded from src/assets/{folder}/ */

export const experiences = [
  {
    id: 1,
    slug: 'orbit-gala',
    folder: 'Conference',
    title: 'CONFERENCES ',
    category: 'Corporate Event',
    tags: ['Corporate', 'Gala'],
    accent: '#c8a070',
  },
  {
    id: 2,
    slug: 'neon-dreams',
    folder: 'Party',
    title: 'PARTIES ',
    category: 'Music Festival',
    tags: ['Live Music', 'Stage'],
    accent: '#C1593A',
  },

  {
    id: 4,
    slug: 'nexus-summit',
    folder: 'Activation',
    title: 'ACTIVATIONS',
    category: 'Brand Activation',
    tags: ['Tech', 'Activation'],
    accent: '#888888',
  },
  {
    id: 5,
    slug: 'midnight-vibe',
    folder: 'Exhibition',
    title: 'EXHIBITION',
    category: 'VIP Experience',
    tags: ['Exclusive', 'Nightlife'],
    accent: '#FF2D00',
  },
];

const allImages = import.meta.glob('../assets/{Activation,Conference,Exhibition,Party}/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});

function folderFromPath(path) {
  const parts = path.replace(/\\/g, '/').split('/');
  const idx = parts.findIndex((p) =>
    ['Activation', 'Conference', 'Exhibition', 'Party'].includes(p)
  );
  return idx >= 0 ? parts[idx] : null;
}

const imagesByFolder = Object.entries(allImages).reduce((acc, [path, src]) => {
  const folder = folderFromPath(path);
  if (!folder) return acc;
  if (!acc[folder]) acc[folder] = [];
  acc[folder].push({ src, path });
  return acc;
}, {});

Object.keys(imagesByFolder).forEach((folder) => {
  imagesByFolder[folder].sort((a, b) =>
    a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: 'base' })
  );
});

const EVENT_TITLES_BY_FOLDER = {
  Conference: [
    'Global Leadership & Tech Conclave',
    'International Corporate Keynote Forum',
    'NextOrbit Executive Strategy Summit',
    'Future of Luxury & Hospitality Conference',
    'Annual Global Partners Gala & Keynotes',
    'Enterprise Innovation & Transformation Conclave',
    'FinTech & Digital Economy Leadership Summit',
    'Healthcare & Biotech Visionary Assembly',
    'Global Brand Strategy & Media Forum',
    'VVIP Investors & Growth Conclave',
    'Artificial Intelligence & Cloud Architecture Summit',
    'Smart Infrastructure & Urban Design Assembly',
    'Women in Global Business Leadership Conclave',
    'Cross-Border Venture Capital & Innovation Forum',
    'Luxury Real Estate & Destination Conclave',
    'Next-Gen Automation & Robotics Keynote Summit',
    'Global ESG & Sustainable Growth Conclave',
    'Creative Industries & Culture Keynote Forum',
    'International Business & Trade Assembly',
    'Next Orbit Founder & Leadership Symposium',
    'Global Cyber Security & Data Privacy Summit',
    'Future Mobility & Aerospace Conclave',
    'Pinnacle Executive Leadership Retreat & Forum',
    'Omnichannel Retail & E-Commerce Summit',
    'Global Energy & Clean Technology Conclave',
    'Direct-to-Consumer Brand Leadership Forum',
    'Next-Gen Media Production & Broadcast Summit',
    'Global Supply Chain & Logistics Assembly',
    'World Economic & Industry Outlook Conclave',
  ],
  Party: [
    'Neon Orbit Underground Music Night',
    'VVIP Sunset Cocktail & Luxury Afterparty',
    'Exclusive Midnight Beats & VIP Gala',
  ],
  Activation: [
    'Nexus Experiential Brand Launch',
    'Immersive Luxury Product Unveiling',
    'Urban Pop-Up & Interactive Experience',
    'Interactive Tech Pavilion & Showcase',
    'Experiential Retail & Design Installation',
  ],
  Exhibition: [
    'Contemporary Art & Architecture Pavilion',
    'World Luxury & Design Expo',
    'High-Tech Experiential Showcase',
    'Heritage & Culture Masterpiece Gallery',
    'Interactive Digital Installation Conclave',
    'Future Mobility & Design Showcase',
    'Avant-Garde Sculpture & Space Pavilion',
    'Global Craftsmanship & Atelier Expo',
    'Sustainable Design & ECO Installation',
    'Immersive Light & Sound Pavilion',
    'Fine Jewelry & Horology Masterpiece Gallery',
    'VIP Curated Collectors Exhibition',
  ],
};

export function getFolderImages(folder) {
  return (imagesByFolder[folder] ?? []).map((item) => item.src);
}

export function getFolderEventGroups(folder) {
  const images = getFolderImages(folder);
  const titles = EVENT_TITLES_BY_FOLDER[folder] || [];
  const groups = [];
  const chunkSize = 6;

  for (let i = 0; i < images.length; i += chunkSize) {
    const chunkIndex = Math.floor(i / chunkSize);
    const titleIndex = chunkIndex % (titles.length || 1);
    const fallbackTitle = `Event ${chunkIndex + 1} · ${folder} Showcase Part ${chunkIndex + 1}`;
    const title = titles[titleIndex] || fallbackTitle;
    const chunkImages = images.slice(i, i + chunkSize);

    groups.push({
      id: `${folder}-event-${chunkIndex + 1}`,
      eventNumber: chunkIndex + 1,
      title,
      images: chunkImages,
      startIndex: i,
    });
  }

  return groups;
}

export function getExperienceBySlug(slug) {
  return experiences.find((e) => e.slug === slug) ?? experiences[0];
}

export const experiencesWithImages = experiences.map((exp) => {
  const images = getFolderImages(exp.folder);
  return {
    ...exp,
    images,
    coverImage: images[0] ?? null,
  };
});
