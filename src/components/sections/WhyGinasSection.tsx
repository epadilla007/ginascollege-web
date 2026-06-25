'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const reasons = [
  {
    number: '01',
    title: 'International credibility',
    body: 'We are a select CIDESCO school — the only career college in Ontario offering CIDESCO diplomas, the world-standard qualification for beauty and aesthetics professionals.',
  },
  {
    number: '02',
    title: 'Years of experience',
    body: 'Since 1979, we have been graduating the industry\'s top beauty professionals. Over 40 years of proven results speak for themselves.',
  },
  {
    number: '03',
    title: 'Registered under Ontario Career Colleges Act',
    body: 'Our diploma programs are registered under the Ontario Career Colleges Act 2005, giving your credentials full provincial recognition.',
  },
  {
    number: '04',
    title: 'Cutting-edge curriculum',
    body: 'Our curriculum is continuously updated to reflect the latest techniques, technologies, and industry standards — so you graduate job-ready.',
  },
  {
    number: '05',
    title: 'Hands-on experience',
    body: 'Students spend 70% of their time on practical training, working on real clients in our student clinics across all three campuses.',
  },
  {
    number: '06',
    title: 'Expert instructors',
    body: 'Learn from passionate, professional instructors with deep industry backgrounds — people who have worked in the field and bring real-world insight to every class.',
  },
  {
    number: '07',
    title: 'Latest technologies',
    body: 'From advanced laser systems to medical-grade equipment, you train on the tools you will actually use in your professional career.',
  },
]

export function WhyGinasSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const imgEl = imageRef.current
    if (!section) return

    const items = section.querySelectorAll('.reason-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === section) {
            if (imgEl) {
              imgEl.style.opacity = '1'
              imgEl.style.transform = 'translateX(0)'
            }
            Array.from(items).forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1'
                ;(item as HTMLElement).style.transform = 'translateX(0)'
              }, i * 70)
            })
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#01426A]" aria-label="Why choose Gina's College">
      {/* Subtle diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(177,198,217,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left: heading + image */}
          <div className="lg:col-span-4 py-16 lg:py-24 lg:pr-12 flex flex-col">
            <p className="eyebrow text-white/40 mb-4">Why Choose Us</p>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-semibold text-white leading-[1.05] mb-6">
              Why Gina&apos;s College of Advanced Aesthetics Corporation
            </h2>
            <div className="w-10 h-[2px] bg-[#B1C6D9]/40 mb-8" />

            {/* Campus photo — reveal left */}
            <div
              ref={imageRef}
              className="flex-1 relative min-h-[220px] lg:min-h-[280px] rounded-[10px] overflow-hidden mt-auto"
              style={{
                opacity: 0,
                transform: 'translateX(-20px)',
                transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <Image
                src="/images/campus/students-2.jpg"
                alt="Gina's College students in training"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/60 to-transparent" />
            </div>
          </div>

          {/* Right: reasons list */}
          <div className="lg:col-span-8 py-16 lg:py-24 lg:pl-12 lg:border-l lg:border-white/10">
            <div className="space-y-0">
              {reasons.map((reason, i) => (
                <div
                  key={reason.number}
                  className={`reason-item flex gap-6 py-6 ${i < reasons.length - 1 ? 'border-b border-white/8' : ''}`}
                  style={{
                    opacity: 0,
                    transform: 'translateX(20px)',
                    transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s`,
                  }}
                >
                  <span className="font-display text-[12px] font-semibold text-[#B1C6D9]/40 tracking-wider flex-shrink-0 mt-[4px] w-7">
                    {reason.number}
                  </span>
                  <div className="group">
                    <h3 className="font-display text-[16px] font-semibold text-white mb-1.5 leading-tight group-hover:text-[#B1C6D9] transition-colors duration-200">
                      {reason.title}
                    </h3>
                    <p className="text-[13.5px] text-white/55 leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
