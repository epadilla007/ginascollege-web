'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function ActionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
        const tl = gsap.timeline({
          defaults: { ease },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })

        // Word-by-word headline reveal
        if (headlineRef.current) {
          const words = headlineRef.current.querySelectorAll('.word')
          if (words.length) {
            tl.from(words, { y: 50, opacity: 0, duration: 0.7, stagger: 0.07 })
          } else {
            tl.from(headlineRef.current, { y: 40, opacity: 0, duration: 0.7 })
          }
        }

        tl.from(subRef.current, { y: 30, opacity: 0, duration: 0.5 }, '-=0.3')
        tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
        tl.from(trustRef.current, { y: 20, opacity: 0, duration: 0.4 }, '-=0.1')
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section bg-[#000000] relative overflow-hidden"
      aria-labelledby="action-heading"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #01426A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B1C6D9 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 text-center">
        <p className="eyebrow text-white/40 mb-6">One step</p>

        <h2
          ref={headlineRef}
          id="action-heading"
          className="font-display text-white leading-[1.0] tracking-[-0.03em] mb-6 mx-auto"
          style={{ fontSize: 'clamp(48px, 7vw, 110px)', maxWidth: '900px' }}
          aria-label="Your career starts with one step. Take it today."
        >
          <span className="word inline-block">Your</span>{' '}
          <span className="word inline-block">career</span>{' '}
          <span className="word inline-block">starts</span>{' '}
          <span className="word inline-block text-[#B1C6D9]">with</span>{' '}
          <span className="word inline-block text-[#B1C6D9]">one</span>{' '}
          <span className="word inline-block text-[#B1C6D9]">step.</span>
        </h2>

        <p
          ref={subRef}
          className="text-white/55 text-lg lg:text-xl leading-relaxed mb-12 max-w-[480px] mx-auto"
        >
          Free career consultation. No pressure. Campus tours available at all three locations.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link href="/apply" className="btn btn-white text-base w-full sm:w-auto">
            Start Your Application
          </Link>
          <Link href="/consultation" className="btn btn-outline-white text-base w-full sm:w-auto">
            Book a Free Career Consultation
          </Link>
        </div>

        {/* Trust signals */}
        <div
          ref={trustRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/35"
        >
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No application fee
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            OSAP funding available
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Admissions advisor responds within 24h
          </span>
        </div>

        {/* Micro CTA */}
        <div className="mt-10">
          <a
            href="tel:+19058273940"
            className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            Or call us: (905) 827-3940
          </a>
        </div>
      </div>
    </section>
  )
}
