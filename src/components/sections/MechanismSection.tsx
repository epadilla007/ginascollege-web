'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const differentiators = [
  {
    number: '01',
    title: 'Real clients. Not classmates.',
    body:
      'Our in-house student spa operates with real paying clients from day one. The hands-on experience employers are actually hiring for.',
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=600&q=80',
    imageAlt: 'Student performing a facial treatment on a real client in the Gina\'s College spa',
  },
  {
    number: '02',
    title: 'CIDESCO certification.',
    body:
      'The world's most recognized aesthetics credential. Ontario's only career college with CIDESCO accreditation. This changes what you can charge and where you can work.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    imageAlt: 'CIDESCO certified graduate holding diploma',
  },
  {
    number: '03',
    title: 'OSAP-eligible.',
    body:
      'Government-backed financial support. You can use OSAP for your full diploma program. Most aesthetics schools can't say that.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    imageAlt: 'Student reviewing financial aid options at a desk',
  },
  {
    number: '04',
    title: '45 years. Still privately owned.',
    body:
      'Three generations of the same family. The owners are still on the floor with students every single day. You don't find that anymore.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    imageAlt: 'Gina\'s College campus exterior',
  },
]

export function MechanismSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

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

        // Cards stagger
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('.diff-card')
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease,
            stagger: 0.12,
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
      className="section bg-[#E9E9E9]"
      aria-labelledby="mechanism-heading"
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="max-w-[640px] mb-16 lg:mb-20">
          <p className="eyebrow text-[#01426A] mb-4">Why Gina's</p>
          <h2
            id="mechanism-heading"
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Four things no other school in Ontario can say.
          </h2>
        </div>

        {/* Differentiator cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.number}
              className="diff-card group bg-white rounded-[8px] overflow-hidden border border-white hover:border-[#B1C6D9] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Number overlay */}
                <div className="absolute top-4 left-4">
                  <span className="font-display text-white/30 text-5xl font-bold leading-none">
                    {d.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-[#01426A] text-2xl font-semibold mb-3 leading-snug">
                  {d.title}
                </h3>
                <p className="text-[#000000]/60 text-base leading-relaxed">{d.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Program grid teaser */}
        <div className="mt-16 text-center">
          <p className="text-[#000000]/50 text-sm mb-4">Ready to see what you'll learn?</p>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 text-[#01426A] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Explore what you'll learn
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
