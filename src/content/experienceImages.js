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

export function getFolderImages(folder) {
  return (imagesByFolder[folder] ?? []).map((item) => item.src);
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
