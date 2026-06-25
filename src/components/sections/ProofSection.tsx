'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote:
      "After graduating from Gina's College, I became a laser specialist at one of the top medical spas in Ottawa. The training I received was exceptional and prepared me for anything the industry could throw at me.",
    author: 'Liz M.',
    credential: 'Laser Specialist',
  },
  {
    quote:
      "I graduated at the top of my class and immediately landed a position at a high-end salon. The instructors at Gina's College are truly passionate about what they teach.",
    author: 'Jessica T.',
    credential: 'Graduate',
  },
  {
    quote:
      "The hands-on experience at Gina's student clinic was invaluable. Working on real clients gave me the confidence I needed to succeed in the industry.",
    author: 'Louise M.',
    credential: 'Aesthetics Graduate',
  },
  {
    quote:
      "Gina's College gave me a world-class education. The CIDESCO credential opened doors I didn't even know existed — clients and employers take it seriously.",
    author: 'Ligia T.',
    credential: 'CIDESCO Graduate',
  },
  {
    quote:
      "The small class sizes meant I got individual attention and real guidance from my instructors. I felt supported every step of the way.",
    author: 'Rawa W.',
    credential: 'Aesthetics Graduate',
  },
  {
    quote:
      "I'm now a certified Nail Technician and loving every minute of my career. Gina's College gave me the skills and the confidence to build a loyal client base.",
    author: 'Dawn N.',
    credential: 'Certified Nail Technician',
  },
  {
    quote:
      "Thanks to my education at Gina's College, I now own my own spa — Primal Studio & Skin Care. The business knowledge they gave me was just as important as the technical skills.",
    author: 'Joanne B.',
    credential: 'Spa Owner, Primal Studio & Skin Care',
  },
]

export function ProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.testimonial-card')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        Array.from(cards).forEach((card, i) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = '1'
            ;(card as HTMLElement).style.transform = 'translateY(0)'
          }, i * 80)
        })
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-white" aria-label="Student testimonials">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-[460px]">
            <p className="eyebrow text-[#01426A] mb-3">Success Stories</p>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-semibold text-[#01426A] leading-tight">
              What people say about Us.
            </h2>
          </div>
          {/* Decorative quote mark */}
          <svg className="hidden sm:block text-[#B1C6D9]/30 flex-shrink-0" width="72" height="52" viewBox="0 0 72 52" fill="currentColor">
            <path d="M0 52V30.4C0 13.6 9.6 4 28.8 0l4 7.2C21.6 9.6 16 15.6 14.4 25.6H28.8V52H0zm43.2 0V30.4C43.2 13.6 52.8 4 72 0l4 7.2C64.8 9.6 59.2 15.6 57.6 25.6H72V52H43.2z" />
          </svg>
        </div>

        {/* Masonry-style testimonial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="testimonial-card break-inside-avoid bg-[#F6F8FA] rounded-[10px] border border-[#E9E9E9] p-6 flex flex-col gap-4 hover:border-[#B1C6D9] hover:shadow-md transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, box-shadow 0.25s ease, border-color 0.25s ease`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#01426A">
                    <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1l-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-[13.5px] text-[#444] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="border-t border-[#E9E9E9] pt-4 mt-auto">
                <p className="text-[13px] font-semibold text-[#01426A]">{t.author}</p>
                <p className="text-[11.5px] text-[#999] tracking-[0.02em]">{t.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
