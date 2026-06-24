'use client'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current?.querySelectorAll('.reason-item'),
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.08,
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
    <section ref={sectionRef} className="section bg-[#01426A]" aria-label="Why choose Gina's College">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: heading sticky-ish */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-white/50 mb-4">Why Choose Us</p>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-semibold text-white leading-tight">
              Why Gina&apos;s College of Advanced Aesthetics Corporation
            </h2>
            <div className="mt-6 w-10 h-[2px] bg-white/25" />
          </div>

          {/* Right: reasons list */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {reasons.map((reason, i) => (
                <div
                  key={reason.number}
                  className={`reason-item opacity-0 flex gap-6 py-7 ${i < reasons.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <span className="font-display text-[13px] font-semibold text-white/30 tracking-wider flex-shrink-0 mt-[3px] w-8">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-white mb-1.5 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] text-white/65 leading-relaxed">{reason.body}</p>
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
