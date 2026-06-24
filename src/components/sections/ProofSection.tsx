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
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current?.querySelectorAll('.testimonial-card'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
            }
          )
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-white" aria-label="Student testimonials">
      <div className="container">
        {/* Header */}
        <div className="max-w-[520px] mb-12">
          <p className="eyebrow text-[#01426A] mb-3">Success Stories</p>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-semibold text-[#01426A] leading-tight">
            What people say about Us.
          </h2>
        </div>

        {/* Masonry-style testimonial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card opacity-0 break-inside-avoid bg-[#F6F8FA] rounded-[8px] border border-[#E9E9E9] p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#01426A">
                    <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1l-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-[14px] text-[#444] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="border-t border-[#E9E9E9] pt-4">
                <p className="text-[13px] font-semibold text-[#01426A]">{t.author}</p>
                <p className="text-[12px] text-[#888]">{t.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
