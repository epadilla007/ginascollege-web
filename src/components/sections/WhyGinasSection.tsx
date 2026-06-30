'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const reasons = [
  {
    number: '01',
    title: 'International credibility',
    body: 'A select CIDESCO school — the only career college in Ontario offering CIDESCO diplomas. The world-standard employers and clients everywhere recognize.',
  },
  {
    number: '02',
    title: '45 years of proven results',
    body: "Since 1979, graduating the industry's top beauty professionals. Over four decades of results speak louder than any ranking.",
  },
  {
    number: '03',
    title: 'Registered under Ontario Career Colleges Act',
    body: 'Diploma programs registered under the OCCA 2005 — full provincial recognition that follows your career everywhere in Ontario.',
  },
  {
    number: '04',
    title: 'Curriculum updated annually',
    body: 'We track the latest techniques, technologies, and industry standards so you graduate ready for the job market — not five years behind it.',
  },
  {
    number: '05',
    title: '70% hands-on practical training',
    body: 'Students spend 70% of program time doing — not watching. Real clients. Real results. Real confidence when you graduate.',
  },
  {
    number: '06',
    title: 'Expert instructors with working experience',
    body: 'Learn from people who have worked in the field. Instructors bring genuine industry knowledge into every class, not just textbook theory.',
  },
  {
    number: '07',
    title: 'Medical-grade equipment',
    body: 'From advanced laser systems to the same devices used in professional clinics — you train on what you will actually use in your career.',
  },
]

export function WhyGinasSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.reason-item')
    const imgEl = imgRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (imgEl) {
          imgEl.style.opacity = '1'
          imgEl.style.transform = 'translateX(0)'
        }
        items.forEach((item, i) => {
          setTimeout(() => {
            ;(item as HTMLElement).style.opacity = '1'
            ;(item as HTMLElement).style.transform = 'translateX(0)'
          }, i * 65)
        })
        observer.disconnect()
      },
      { threshold: 0.08 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#01426A]"
      aria-label="Why choose Gina's College"
    >
      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(177,198,217,0.06) 0%, transparent 70%)' }}
      />

      <div className="flex flex-col lg:flex-row">

        {/* Left: full-bleed campus image */}
        <div
          ref={imgRef}
          className="relative w-full lg:w-[38%] flex-shrink-0"
          style={{
            minHeight: '360px',
            opacity: 0,
            transform: 'translateX(-24px)',
            transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <Image
            src="/images/campus/students-2.jpg"
            alt="Gina's College students in training"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
          {/* Right-side fade into navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#01426A]/10 to-[#01426A]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/40 to-transparent lg:hidden" />
        </div>

        {/* Right: content */}
        <div
          className="flex-1 px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24"
        >
          {/* Heading */}
          <p className="eyebrow text-white/60 mb-5">Why Choose Us</p>
          <h2
            className="font-serif italic font-light text-white leading-[0.95] mb-4"
            style={{ fontSize: 'clamp(34px, 4vw, 60px)' }}
          >
            Why Gina&apos;s College<br />of Advanced Aesthetics
          </h2>
          <div className="w-8 h-[1px] bg-[#B08450]/50 mb-10" />

          {/* Reasons list */}
          <div>
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                className={`reason-item flex gap-5 py-5 ${
                  i < reasons.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
                style={{
                  opacity: 0,
                  transform: 'translateX(20px)',
                  transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s`,
                }}
              >
                <span
                  className="font-serif italic font-light text-[#B08450] flex-shrink-0 leading-none mt-[3px]"
                  style={{ fontSize: '18px', width: '28px' }}
                >
                  {reason.number}
                </span>
                <div>
                  <h3 className="font-serif text-[17px] font-medium text-white mb-1.5 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] text-white/70 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
