'use client'

import { useEffect, useRef } from 'react'

const pullQuote = {
  quote:
    "Thanks to my education at Gina's College, I now own my own spa — Primal Studio & Skin Care. The business knowledge they gave me was just as important as the technical skills.",
  author: 'Joanne B.',
  credential: 'Spa Owner, Primal Studio & Skin Care',
}

const testimonials = [
  {
    quote:
      "After graduating from Gina's College, I became a laser specialist at one of the top medical spas in Ottawa. The training was exceptional.",
    author: 'Liz M.',
    credential: 'Laser Specialist, Ottawa',
  },
  {
    quote:
      "I graduated at the top of my class and immediately landed a position at a high-end salon. The instructors are truly passionate about what they teach.",
    author: 'Jessica T.',
    credential: 'Salon Stylist',
  },
  {
    quote:
      "The hands-on experience at Gina's student clinic was invaluable. Working on real clients gave me the confidence I needed to succeed.",
    author: 'Louise M.',
    credential: 'Aesthetics Graduate',
  },
  {
    quote:
      "The CIDESCO credential opened doors I didn't even know existed — clients and employers take it seriously everywhere.",
    author: 'Ligia T.',
    credential: 'CIDESCO Graduate',
  },
  {
    quote:
      "Small class sizes meant I got real guidance from my instructors. I felt supported every step of the way.",
    author: 'Rawa W.',
    credential: 'Aesthetics Graduate',
  },
  {
    quote:
      "I'm now a certified Nail Technician building a loyal client base. Gina's gave me both the skills and the confidence.",
    author: 'Dawn N.',
    credential: 'Certified Nail Technician',
  },
]

export function ProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pullRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const pull = pullRef.current
    if (!section || !pull) return

    const items = section.querySelectorAll('.testi-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === pull) {
            ;(pull as HTMLElement).style.opacity = '1'
            ;(pull as HTMLElement).style.transform = 'translateY(0)'
          } else {
            items.forEach((item, i) => {
              setTimeout(() => {
                ;(item as HTMLElement).style.opacity = '1'
                ;(item as HTMLElement).style.transform = 'translateY(0)'
              }, i * 70)
            })
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(pull)
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="Student testimonials" style={{ backgroundColor: 'var(--color-cream)' }}>

      {/* Pull quote — editorial dominant statement */}
      <div
        ref={pullRef}
        className="container"
        style={{
          paddingTop: 'clamp(72px, 9vw, 120px)',
          paddingBottom: '60px',
          opacity: 0,
          transform: 'translateY(32px)',
          transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Decorative open quote */}
        <svg
          className="mb-6"
          width="52" height="38"
          viewBox="0 0 52 38"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 38V22.4C0 9.6 7.2 2.8 21.6 0l3 5.4C16.2 7.2 12 11.7 10.8 19.2H21.6V38H0zm30.4 0V22.4C30.4 9.6 37.6 2.8 52 0l3 5.4C46.6 7.2 42.4 11.7 41.2 19.2H52V38H30.4z"
            fill="#C4856A"
            fillOpacity="0.35"
          />
        </svg>

        <blockquote className="max-w-[860px]">
          <p
            className="font-serif italic font-light text-[#01426A] leading-[1.1]"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            {pullQuote.quote}
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <div className="w-10 h-[1px] bg-[#C4856A]/50" />
            <div>
              <cite className="not-italic text-[14px] font-bold text-[#01426A] tracking-[0.04em]">
                {pullQuote.author}
              </cite>
              <p className="text-[12px] text-[#01426A]/70 tracking-[0.04em] mt-0.5">{pullQuote.credential}</p>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Thin rule */}
      <div className="container">
        <div className="border-t border-[#C4856A]/20" />
      </div>

      {/* Editorial testimonial grid */}
      <section ref={sectionRef} className="container" style={{ paddingTop: '60px', paddingBottom: 'clamp(72px, 9vw, 120px)' }}>
        <p className="eyebrow text-[#01426A]/70 mb-10">More Success Stories</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(196, 133, 106, 0.15)' }}>
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="testi-item py-8 px-8"
              style={{
                backgroundColor: 'var(--color-cream)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="11" height="11" viewBox="0 0 14 14" fill="#C4856A">
                    <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1l-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif italic text-[16px] text-[#333] leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[13px] font-bold text-[#01426A]">{t.author}</p>
                <p className="text-[11.5px] text-[#999] mt-0.5">{t.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </section>
  )
}
