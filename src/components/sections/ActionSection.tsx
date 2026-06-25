'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function ActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.cta-animate')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        Array.from(items).forEach((item, i) => {
          setTimeout(() => {
            (item as HTMLElement).style.opacity = '1'
            ;(item as HTMLElement).style.transform = 'translateY(0)'
          }, i * 100)
        })
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#01426A]" aria-label="Book a free tour">
      {/* Background campus photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/campus/students-1.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01426A] via-[#01426A]/80 to-[#01426A]/60" />
      </div>

      <div className="relative container section">
        <div className="max-w-[680px] mx-auto text-center">
          <p
            className="cta-animate eyebrow text-white/50 mb-5"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
          >
            Take the Next Step
          </p>
          <h2
            className="cta-animate font-display text-[clamp(28px,4vw,54px)] font-semibold text-white leading-tight mb-5"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s' }}
          >
            Contact us to book a free tour and personal career consultation!
          </h2>
          <p
            className="cta-animate text-[16px] text-white/70 leading-relaxed mb-10 max-w-[480px] mx-auto"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s' }}
          >
            Visit any of our three campuses in Mississauga, Waterloo, or Ottawa. Meet our instructors,
            see our facilities, and find the program that fits your goals.
          </p>

          {/* Campus info */}
          <div
            className="cta-animate grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s' }}
          >
            {[
              { city: 'Mississauga', tel: '(905) 602-8891', addr: '7-3045 Southcreek Rd.' },
              { city: 'Waterloo', tel: '(519) 886-2998', addr: '385 Weber St. N.' },
              { city: 'Ottawa', tel: '(613) 789-7875', addr: '215 Dalhousie St.' },
            ].map((campus) => (
              <div key={campus.city} className="bg-white/8 rounded-[10px] border border-white/10 p-4 backdrop-blur-sm hover:bg-white/12 transition-colors duration-200">
                <p className="font-display text-[14px] font-semibold text-white mb-1">{campus.city}</p>
                <p className="text-[13px] text-white/55">{campus.addr}</p>
                <a href={`tel:${campus.tel.replace(/\D/g, '')}`} className="text-[13px] text-white/55 hover:text-white transition-colors">
                  {campus.tel}
                </a>
              </div>
            ))}
          </div>

          <div
            className="cta-animate flex flex-col sm:flex-row gap-3 justify-center"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s' }}
          >
            <Link href="/contact" className="btn btn-white text-[14px] px-8 py-4">
              Contact Us
            </Link>
            <Link href="/apply" className="btn btn-outline-white text-[14px] px-8 py-4">
              Request More Info
            </Link>
          </div>

          <p
            className="cta-animate mt-6 text-[13px] text-white/40"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s' }}
          >
            Mon–Fri, 9am–4:30pm &nbsp;·&nbsp; Toll-free: 1-888-886-2998
          </p>
        </div>
      </div>
    </section>
  )
}
