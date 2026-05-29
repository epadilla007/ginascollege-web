'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// GSAP loaded client-side only to avoid SSR issues
let gsap: typeof import('gsap').gsap
let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
let SplitText: any

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const statBarRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function initGSAP() {
      const { gsap: g } = await import('gsap')
      const { ScrollTrigger: ST } = await import('gsap/ScrollTrigger')
      g.registerPlugin(ST)
      gsap = g
      ScrollTrigger = ST

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)' } })

        // Group A: Badge → Headline (character stagger via SplitText fallback)
        tl.from(badgeRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })

        // Headline word-by-word reveal
        if (headlineRef.current) {
          const words = headlineRef.current.querySelectorAll('.word')
          if (words.length) {
            tl.from(words, { y: 60, opacity: 0, duration: 0.6, stagger: 0.06 }, '-=0.2')
          } else {
            tl.from(headlineRef.current, { y: 40, opacity: 0, duration: 0.7 }, '-=0.2')
          }
        }

        // Group B: Subheadline + CTA
        tl.from(subRef.current, { y: 30, opacity: 0, duration: 0.5 }, '-=0.3')
        tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')

        // Hero image parallax
        if (imageRef.current) {
          gsap.to(imageRef.current.querySelector('img'), {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }

        // Stat bar slides up as hero scrolls out (scroll-linked)
        if (statBarRef.current) {
          gsap.fromTo(
            statBarRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center top',
                end: 'bottom top',
                scrub: 0.5,
              },
            }
          )
        }
      }, sectionRef)
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-[#01426A] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with parallax wrapper */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85"
          alt="Aesthetics student performing a facial treatment in a professional clinical setting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay gradient: navy left, transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01426A]/95 via-[#01426A]/70 to-[#01426A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col justify-center flex-1 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-[700px]">
          {/* Badge row */}
          <div ref={badgeRef} className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <img src="/images/cidesco-badge.svg" alt="CIDESCO" className="h-5 w-auto" />
              <span className="text-xs font-semibold text-white tracking-widest uppercase">CIDESCO Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="text-xs font-semibold text-white tracking-widest uppercase">OSAP Eligible</span>
            </div>
          </div>

          {/* Headline — split into word spans for GSAP */}
          <h1
            ref={headlineRef}
            id="hero-heading"
            className="font-display text-white leading-[1.0] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
            aria-label="Train Where the Industry Recruits"
          >
            <span className="word inline-block overflow-hidden">Train</span>{' '}
            <span className="word inline-block overflow-hidden">Where</span>{' '}
            <span className="word inline-block overflow-hidden">the</span>{' '}
            <br className="hidden md:block" />
            <span className="word inline-block overflow-hidden text-[#B1C6D9]">Industry</span>{' '}
            <span className="word inline-block overflow-hidden">Recruits.</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-[520px]"
          >
            Ontario's most prestigious aesthetics school for 45 years. Graduate ready.
            Get hired first.
          </p>

          {/* CTA group */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply" className="btn btn-white">
              Start Your Application
            </Link>
            <Link href="/consultation" className="btn btn-outline-white">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stat bar — scrolls into view as hero exits */}
      <div
        ref={statBarRef}
        className="relative z-10 border-t border-white/10 bg-[#01426A]/80 backdrop-blur-sm"
        style={{ opacity: 0 }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6">
            {[
              { number: '45', label: 'Years training the industry' },
              { number: '3', label: 'Campuses across Ontario' },
              { number: 'CIDESCO', label: 'World standard accreditation' },
              { number: 'OSAP', label: 'Government funding eligible' },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-2 first:pl-0 last:pr-0">
                <p className="font-display text-white text-2xl lg:text-3xl font-semibold mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-white/50 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
