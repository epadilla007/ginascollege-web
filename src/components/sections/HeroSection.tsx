'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)' } })
          tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 })
            .fromTo(headingRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
            .fromTo(bodyRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
            .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/banner1-590eafd6-1920w.png"
          alt="Gina's College of Advanced Aesthetics"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — navy at bottom, semi-transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01426A]/60 via-[#01426A]/55 to-[#01426A]/85" />
      </div>

      {/* Content */}
      <div className="relative container py-24 md:py-32 lg:py-40 flex flex-col items-start justify-end min-h-[520px] md:min-h-[620px] lg:min-h-[700px]">

        {/* CIDESCO badge */}
        <div ref={badgeRef} className="opacity-0 mb-6 flex items-center gap-2">
          <Image
            src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/ginas-img3-132w.png"
            alt="CIDESCO International"
            width={40}
            height={40}
            className="w-9 h-9 object-contain rounded-full bg-white/10 p-1"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
            CIDESCO World-Standard School
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="opacity-0 font-display text-[clamp(38px,6vw,88px)] leading-[1.0] font-semibold text-white mb-6 max-w-[700px]"
        >
          Follow your passion<br className="hidden sm:block" /> for beauty!
        </h1>

        {/* Body */}
        <p
          ref={bodyRef}
          className="opacity-0 text-[16px] md:text-[18px] text-white/85 leading-relaxed max-w-[560px] mb-8 font-body"
        >
          Start your career in beauty with Gina&apos;s College of Advanced Aesthetics, the top beauty
          school in Ottawa, Mississauga, and Waterloo. With over 40 years of experience training top
          beauty professionals, we offer industry-leading courses to help you succeed.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-white text-[14px] px-7 py-4">
            Contact Us
          </Link>
          <Link href="/programs" className="btn btn-outline-white text-[14px] px-7 py-4">
            Browse Programs
          </Link>
        </div>

        {/* Quick campus row */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap gap-x-6 gap-y-2">
          {['Mississauga', 'Waterloo', 'Ottawa'].map((campus) => (
            <span key={campus} className="flex items-center gap-1.5 text-[13px] text-white/60">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="7" cy="5" r="1.2" fill="currentColor" />
              </svg>
              {campus}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
