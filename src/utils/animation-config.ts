export const ANIMATION_CONFIG = {
  CARD_HOVER_DURATION: 0.15,
  ZOOM_DURATION: 2,
  CONTENT_DURATION: 1.5,
  STAGGER_DURATION: 0.8,

  CARD_EASE: 'power2.out',
  ZOOM_EASE: 'power1.out',
  CONTENT_EASE: 'sine.out',
  STAGGER_EASE: 'back.out(1.4)',

  CARD_HOVER_SCALE: 1.02,
  CARD_HOVER_Y: -3,
  ZOOM_SCALE: 5,
  INITIAL_Y: 80,
  INITIAL_SCALE: 0.9,

  SCROLL_TRIGGER: {
    start: 'top top',
    end: '+=100vh',
    scrub: 1,
    pin: true,
    anticipatePin: 0.5,
    markers: false,
  },

  STAGGER_CONFIG: {
    each: 0.12,
    from: 'random' as const,
    ease: 'power2.out',
  },
} as const;

export const SLUG_MAP: Record<string, string> = {
  'Server Side Rendering (SSR)': 'ssr',
  'Static Site Generation (SSG)': 'ssg',
  'Incremental Static Regeneration (ISR)': 'isr',
  'Client Side Rendering (CSR)': 'csr',
  'App Router': 'app-router',
  'API Routes': 'api-routes',
} as const;

export const getCategoryFromTitle = (title: string): string => {
  if (title.includes('SSR') || title.includes('Server')) return 'Rendering';
  if (title.includes('SSG') || title.includes('Static')) return 'Performance';
  if (title.includes('ISR') || title.includes('Incremental')) return 'Hybrid';
  if (title.includes('CSR') || title.includes('Client')) return 'Interactive';
  if (title.includes('Router') || title.includes('App')) return 'Navigation';
  if (title.includes('API')) return 'Backend';
  return 'Core';
};

export const generateSlug = (title: string): string => {
  return (
    SLUG_MAP[title] ||
    title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
  );
};
