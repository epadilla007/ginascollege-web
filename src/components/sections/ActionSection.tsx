'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function ActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            '.cta-animate',
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.15,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
          )
        }, sectionRef)
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-[#01426A]" aria-label="Book a free tour">
      <div className="container">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="cta-animate opacity-0 eyebrow text-white/50 mb-5">Take the Next Step</p>
          <h2 className="cta-animate opacity-0 font-display text-[clamp(28px,4vw,54px)] font-semibold text-white leading-tight mb-5">
            Contact us to book a free tour and personal career consultation!
          </h2>
          <p className="cta-animate opacity-0 text-[16px] text-white/70 leading-relaxed mb-10 max-w-[480px] mx-auto">
            Visit any of our three campuses in Mississauga, Waterloo, or Ottawa. Meet our instructors,
            see our facilities, and find the program that fits your goals.
          </p>

          {/* Campus info */}
          <div className="cta-animate opacity-0 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            {[
              { city: 'Mississauga', tel: '(905) 602-8891', addr: '7-3045 Southcreek Rd.' },
              { city: 'Waterloo', tel: '(519) 886-2998', addr: '385 Weber St. N.' },
              { city: 'Ottawa', tel: '(613) 789-7875', addr: '215 Dalhousie St.' },
            ].map((campus) => (
              <div key={campus.city} className="bg-white/8 rounded-[8px] border border-white/10 p-4">
                <p className="font-display text-[14px] font-semibold text-white mb-1">{campus.city}</p>
                <p className="text-[13px] text-white/55">{campus.addr}</p>
                <a href={`tel:${campus.tel.replace(/\D/g, '')}`} className="text-[13px] text-white/55 hover:text-white transition-colors">
                  {campus.tel}
                </a>
              </div>
            ))}
          </div>

          <div className="cta-animate opacity-0 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-white text-[14px] px-8 py-4">
              Contact Us
            </Link>
            <Link href="/apply" className="btn btn-outline-white text-[14px] px-8 py-4">
              Request More Info
            </Link>
          </div>

          <p className="cta-animate opacity-0 mt-6 text-[13px] text-white/40">
            Mon–Fri, 9am–4:30pm &nbsp;·&nbsp; Toll-free: 1-888-886-2998
          </p>
        </div>
      </div>
    </section>
  )
}
