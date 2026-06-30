'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stats = [
  { value: '45+', label: 'Years of Excellence', sub: 'Since 1979' },
  { value: '3', label: 'Campuses in Ontario', sub: 'Waterloo · Mississauga · Ottawa' },
  { value: '5,000+', label: 'Graduates', sub: 'Industry professionals' },
  { value: 'CIDESCO', label: 'World-Standard', sub: "Ontario's only career college" },
]

const credentials = [
  {
    num: '01',
    title: 'CIDESCO World-Standard School',
    description:
      "The world's most prestigious beauty qualification. We are the only career college in Ontario offering CIDESCO diplomas — the standard employers and clients worldwide recognize.",
  },
  {
    num: '02',
    title: '45 Years of Proven Results',
    description:
      "Since 1979 we've graduated the industry's top professionals. Registered under the Ontario Career Colleges Act 2005 — your credentials carry full provincial recognition.",
  },
  {
    num: '03',
    title: 'Flexible Online & In-Person Training',
    description:
      'A blend of virtual learning and hands-on practical training with real clients. Small class sizes mean personal attention and scheduling that works around your life.',
  },
  {
    num: '04',
    title: 'Student Beauty Clinic',
    description:
      'Our students gain real-world experience on real clients in our professional student clinics. Book a service and experience the next generation of beauty talent.',
    cta: { label: 'Book a Service', href: '/clinic' },
  },
]

export function CredentialsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const credsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const statsEl = statsRef.current
    const credsEl = credsRef.current
    if (!statsEl || !credsEl) return

    const statItems = statsEl.querySelectorAll('.stat-item')
    const credItems = credsEl.querySelectorAll('.cred-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === statsEl) {
            statItems.forEach((item, i) => {
              setTimeout(() => {
                ;(item as HTMLElement).style.opacity = '1'
                ;(item as HTMLElement).style.transform = 'translateY(0)'
              }, i * 90)
            })
          } else if (entry.target === credsEl) {
            credItems.forEach((item, i) => {
              setTimeout(() => {
                ;(item as HTMLElement).style.opacity = '1'
                ;(item as HTMLElement).style.transform = 'translateY(0)'
              }, i * 80)
            })
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(statsEl)
    observer.observe(credsEl)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Cream editorial stats band ─────────────────────────────────── */}
      <div ref={statsRef} style={{ backgroundColor: 'var(--color-cream)' }} className="overflow-hidden">
        <div className="container py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(196,133,106,0.15)' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`stat-item py-8 lg:py-10 px-6 lg:px-10`}
                style={{
                  backgroundColor: 'var(--color-cream)',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
                }}
              >
                <span
                  className="stat-number block text-[#01426A]"
                  style={{ fontSize: 'clamp(30px, 3.8vw, 54px)' }}
                >
                  {stat.value}
                </span>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#01426A]/70 mt-2 mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#01426A]/40 tracking-[0.06em]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Editorial credential blocks ────────────────────────────────── */}
      <section ref={credsRef} className="bg-white" aria-label="Why Gina's College">
        <div className="container py-16 lg:py-20">
          {/* Section label */}
          <p className="eyebrow text-[#01426A]/45 mb-10">What Sets Us Apart</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: '#E9E9E9' }}>
            {credentials.map((cred, i) => (
              <div
                key={cred.num}
                className={`cred-item flex gap-6 py-8 bg-white ${
                  i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
                }}
              >
                <span
                  className="font-serif italic font-light text-[#01426A]/18 flex-shrink-0 leading-none select-none"
                  style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
                  aria-hidden
                >
                  {cred.num}
                </span>
                <div className="pt-1">
                  <h3
                    className="font-serif font-medium text-[#01426A] mb-3 leading-[1.05]"
                    style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                  >
                    {cred.title}
                  </h3>
                  <p className="text-[14.5px] text-[#666] leading-relaxed">{cred.description}</p>
                  {cred.cta && (
                    <Link
                      href={cred.cta.href}
                      className="inline-flex items-center gap-2 mt-4 text-[13px] font-semibold text-[#C4856A] hover:text-[#01426A] transition-colors duration-200 group"
                    >
                      {cred.cta.label}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                        <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
