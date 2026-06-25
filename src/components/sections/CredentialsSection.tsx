'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '3', label: 'Campuses in Ontario' },
  { value: '5000+', label: 'Graduates' },
  { value: 'CIDESCO', label: 'World-Standard School' },
]

const credentials = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'CIDESCO World-Standard School',
    description:
      'The most prestigious international qualification in aesthetics. CIDESCO is the world-standard for beauty and spa therapy. We are proud to be a select CIDESCO school and Ontario\'s only career college offering CIDESCO diplomas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="6" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: '40+ Years of Excellence',
    description:
      'Since 1979 we\'ve been graduating the industry\'s top beauty professionals. We are registered as a Career College under the Ontario Career Colleges Act 2005.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="11" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="6" width="11" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Online & In-Person Training',
    description:
      'A blend of online virtual learning and in-person practical training on real clients — with small class sizes for convenient, personalized, flexible education.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C8 2 3 7 3 13c0 4 2.3 7.5 5.7 9.3L7 25l4.5-1.5L14 25l2.5-1.5L21 25l-1.7-2.7C22.7 20.5 25 17 25 13c0-6-5-11-11-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Student Beauty Clinic',
    description:
      'Our students gain the best practical experience by working on real clients in our student clinic. Book a service with our new talent today — affordable prices, professional results.',
    cta: { label: 'Book a Service', href: '/clinic' },
  },
]

export function CredentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const statsEl = statsRef.current
    if (!section || !statsEl) return

    const cards = section.querySelectorAll('.cred-card')
    const statItems = statsEl.querySelectorAll('.stat-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el === statsEl) {
            statItems.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1'
                ;(item as HTMLElement).style.transform = 'translateY(0)'
              }, i * 80)
            })
          } else {
            Array.from(cards).forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1'
                ;(card as HTMLElement).style.transform = 'translateY(0)'
              }, i * 100)
            })
          }
          observer.unobserve(el)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    observer.observe(statsEl)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Stats bar */}
      <div ref={statsRef} className="bg-[#01426A] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/15">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="stat-item flex flex-col items-center md:items-start md:px-8 first:pl-0 last:pr-0"
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <span className="font-display text-[clamp(26px,3vw,38px)] font-semibold text-white leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <section ref={sectionRef} className="section bg-[#F6F8FA]" aria-label="Why Gina's College stands out">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <div
                key={cred.title}
                className="cred-card bg-white rounded-[10px] p-7 border border-[#E9E9E9] flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, box-shadow 0.25s ease, translate 0.25s ease`,
                }}
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#01426A]/8 rounded-[8px] text-[#01426A]">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-[#01426A] mb-2 leading-tight">
                    {cred.title}
                  </h3>
                  <p className="text-[14px] text-[#555] leading-relaxed">{cred.description}</p>
                </div>
                {cred.cta && (
                  <Link
                    href={cred.cta.href}
                    className="mt-auto text-[13px] font-semibold text-[#01426A] inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    {cred.cta.label}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
