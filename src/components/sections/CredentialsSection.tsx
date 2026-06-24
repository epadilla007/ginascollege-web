'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const credentials = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="17" stroke="#01426A" strokeWidth="1.5" />
        <path d="M10 18l5.5 5.5 10-11" stroke="#01426A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'CIDESCO World-Standard School',
    description:
      'The most prestigious international qualification in aesthetics. CIDESCO is the world-standard for beauty and spa therapy. We are proud to be a select CIDESCO school and Ontario\'s only career college offering CIDESCO diplomas.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="7" width="34" height="22" rx="3" stroke="#01426A" strokeWidth="1.5" />
        <path d="M12 18h12M18 12v12" stroke="#01426A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 7V5a2 2 0 012-2h20a2 2 0 012 2v2" stroke="#01426A" strokeWidth="1.5" />
      </svg>
    ),
    title: '40+ Years of Excellence',
    description:
      'Since 1979 we\'ve been graduating the industry\'s top beauty professionals. We are registered as a Career College under the Ontario Career Colleges Act 2005.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="15" height="20" rx="2" stroke="#01426A" strokeWidth="1.5" />
        <rect x="19" y="8" width="15" height="20" rx="2" stroke="#01426A" strokeWidth="1.5" />
        <path d="M17 18h2" stroke="#01426A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9.5" cy="18" r="2" stroke="#01426A" strokeWidth="1.2" />
        <circle cx="26.5" cy="18" r="2" stroke="#01426A" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Online & In-Person Training',
    description:
      'A blend of online virtual learning and in-person practical training on real clients — with small class sizes for convenient, personalized, flexible education.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3C10.82 3 5 8.82 5 16c0 5.2 2.94 9.72 7.26 12.02L10 33l6-2 2 2 2-2 6 2-2.26-4.98C27.06 25.72 31 21.2 31 16c0-7.18-5.82-13-13-13z" stroke="#01426A" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="16" r="3" stroke="#01426A" strokeWidth="1.2" />
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

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current?.querySelectorAll('.cred-card'),
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
              },
            }
          )
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-[#F6F8FA]" aria-label="Why Gina's College stands out">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="cred-card opacity-0 bg-white rounded-[8px] p-7 border border-[#E9E9E9] flex flex-col gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#B1C6D9]/20 rounded-[6px]">
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
                  className="mt-auto text-[13px] font-semibold text-[#01426A] underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  {cred.cta.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
