'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    quote:
      'I am now employed as a laser specialist in one of the top medical spas in Ottawa. I would highly recommend Gina\'s College.',
    name: 'Liz M.',
    credential: 'Laser Specialist',
    location: 'Ottawa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    quote:
      'I graduated at the top of my class — something I thought I would never achieve.',
    name: 'Jessica T.',
    credential: 'Advanced Aesthetics Graduate',
    location: 'Mississauga',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  },
  {
    quote:
      'Our instructors went well above to make our experience exceptional. The real-client training made all the difference.',
    name: 'Dawn N.',
    credential: 'Certified Nail Technician',
    location: 'Waterloo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

export function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const quoteMarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

        // Decorative quote marks scale-in
        gsap.from(quoteMarkRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })

        // Header
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Testimonial cards
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('.testimonial-card')
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        }
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section bg-[#01426A] relative overflow-hidden"
      aria-labelledby="proof-heading"
    >
      {/* Decorative quote mark */}
      <div
        ref={quoteMarkRef}
        className="absolute top-16 left-8 lg:left-16 text-white/5 font-display font-bold leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(160px, 20vw, 320px)' }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-[540px] mb-16">
          <p className="eyebrow text-white/50 mb-4">Graduate stories</p>
          <h2
            id="proof-heading"
            className="font-display text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Students who weren't sure they could — graduated and built careers they love.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white/8 backdrop-blur-sm border border-white/10 rounded-[8px] p-8 hover:border-white/25 transition-colors duration-300"
            >
              {/* Quote */}
              <p className="text-white/85 text-lg leading-relaxed mb-8 font-light italic">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 grayscale">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.credential} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            {/* Google stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#F5C518">
                  <path d="M9 1.5l2.12 4.3 4.75.69-3.44 3.35.81 4.73L9 12.27l-4.24 2.3.81-4.73L2.13 6.5l4.75-.69L9 1.5z" />
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm ml-2">4.8 on Google · 200+ reviews</span>
          </div>
          <Link href="/apply" className="btn btn-white text-sm">
            Start Your Application →
          </Link>
        </div>
      </div>
    </section>
  )
}
