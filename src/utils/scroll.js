/** Sticky navbar height + breathing room */
export const NAV_SCROLL_OFFSET = 88;

export function scrollToTop(behavior = 'instant') {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** After route change: jump to top, then scroll to a section once layout is ready */
export function scrollToSectionAfterNav(id, delayMs = 150) {
  scrollToTop('instant');
  return window.setTimeout(() => scrollToSection(id), delayMs);
}
