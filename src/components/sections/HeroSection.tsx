'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)' } })
          tl.fromTo(badgeRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.05 })
            .fromTo(headingRef.current, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 1.0 }, '-=0.3')
            .fromTo(bodyRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
            .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
            .fromTo(stripRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3')
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section className="relative overflow-hidden -mt-[70px] grain-bg" style={{ minHeight: '100svh' }} aria-label="Hero">
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <Image
          src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/banner1-590eafd6-1920w.png"
          alt="Gina's College of Advanced Aesthetics"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-dominant gradient — editorial split feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01426A]/82 via-[#01426A]/45 to-transparent" />
        {/* Bottom depth vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/50 via-transparent to-[#01426A]/10" />
      </div>

      {/* Gold accent stripe — left editorial rail */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-10"
        style={{ background: 'linear-gradient(to bottom, #B08450 0%, transparent 100%)' }} />

      {/* Content — left-aligned, max 680px wide */}
      <div className="relative z-10 container flex flex-col justify-end" style={{ minHeight: '100svh', paddingTop: '130px', paddingBottom: '80px' }}>
        <div className="max-w-[700px]">

          {/* Eyebrow */}
          <div ref={badgeRef} className="opacity-0 mb-8">
            <p className="eyebrow text-white/55">CIDESCO World-Standard School · Since 1979</p>
          </div>

          {/* Heading — extreme editorial scale */}
          <h1
            ref={headingRef}
            className="opacity-0 font-serif italic font-light text-white leading-[0.88]"
            style={{ fontSize: 'clamp(58px, 9vw, 138px)' }}
          >
            Follow your<br />passion<br />for beauty.
          </h1>

          {/* Gold rule */}
          <div className="mt-8 mb-7 w-14 h-[2px]" style={{ background: '#B08450', opacity: 0.6 }} />

          {/* Body copy */}
          <p
            ref={bodyRef}
            className="opacity-0 text-white/70 leading-relaxed max-w-[480px]"
            style={{ fontSize: '16px' }}
          >
            Ontario&apos;s top esthetician school — with campuses in Mississauga, Waterloo, and Ottawa.
            45 years training beauty professionals who lead the industry.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-3 mt-9">
            <Link href="/contact" className="btn btn-white text-[14px] px-7 py-4">
              Book a Free Info Session
            </Link>
            <Link href="/programs" className="btn btn-outline-white text-[14px] px-7 py-4">
              Browse Programs
            </Link>
          </div>
        </div>

        {/* Bottom info strip */}
        <div
          ref={stripRef}
          className="opacity-0 mt-14 pt-7 border-t border-white/12 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {[
            { label: 'Mississauga', detail: '(905) 602-8891' },
            { label: 'Waterloo', detail: '(519) 886-2998' },
            { label: 'Ottawa', detail: '(613) 789-7875' },
          ].map((campus) => (
            <div key={campus.label} className="flex items-center gap-2">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="text-[#B08450] flex-shrink-0">
                <path d="M6 0C3.24 0 1 2.24 1 5c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z" fill="currentColor" />
                <circle cx="6" cy="5" r="1.5" fill="white" />
              </svg>
              <span className="text-[13px] text-white/60 font-medium">{campus.label}</span>
              <span className="text-[12px] text-white/55">{campus.detail}</span>
            </div>
          ))}
          <span className="hidden sm:block w-[1px] h-4 bg-white/15" />
          <span className="text-[12px] text-white/55 tracking-[0.08em] uppercase">5,000+ Graduates</span>
        </div>
      </div>
    </section>
  )
}
