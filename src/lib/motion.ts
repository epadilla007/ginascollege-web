// GSAP motion utilities for Gina's College
// All animations derive from this system — no arbitrary values.

import { ease, duration, stagger } from './design-tokens'

// Base ScrollTrigger config used across all sections
export const scrollTriggerDefaults = {
  start: 'top 85%',
  toggleActions: 'play none none none',
} as const

// Fade-up enter — the primary entrance animation for all elements
export function fadeUp(
  target: gsap.TweenTarget,
  options?: {
    delay?: number
    duration?: number
    from?: { y?: number; opacity?: number }
  }
) {
  return {
    from: {
      y: options?.from?.y ?? 40,
      opacity: options?.from?.opacity ?? 0,
    },
    to: {
      y: 0,
      opacity: 1,
      duration: (options?.duration ?? duration.standard) / 1000,
      ease: ease.luxury,
      delay: (options?.delay ?? 0) / 1000,
    },
  }
}

// Staggered children — used for cards, testimonials, differentiators
export const staggerChildren = {
  element: stagger.element,
  section: stagger.section,
}

// Hero stat bar scroll-sync config
export const statBarScrollSync = {
  scrub: 1,
  start: 'top top',
  end: 'bottom top',
}

// Scale-recede exit — used when programs section scrolls into proof
export const scaleRecede = {
  scale: 0.97,
  opacity: 0.4,
  ease: ease.luxury,
}
