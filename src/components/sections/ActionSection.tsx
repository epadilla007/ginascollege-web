'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function ActionSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const items = content.querySelectorAll('.cta-animate')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        items.forEach((item, i) => {
          setTimeout(() => {
            ;(item as HTMLElement).style.opacity = '1'
            ;(item as HTMLElement).style.transform = 'translateY(0)'
          }, i * 100)
        })
        observer.disconnect()
      },
      { threshold: 0.08 }
    )

    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="overflow-hidden" aria-label="Book a free tour">
      <div className="flex flex-col lg:flex-row">

        {/* Left: editorial campus image — bleeds to left edge */}
        <div className="relative w-full lg:w-[45%] flex-shrink-0 min-h-[320px] lg:min-h-0 order-2 lg:order-1">
          <Image
            src="/images/campus/students-1.jpg"
            alt="Gina's College students in clinic"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Right-side blend into navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#01426A]/10 to-[#01426A] hidden lg:block" />
          {/* Top gradient for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#01426A] lg:hidden" />
        </div>

        {/* Right: navy content */}
        <div
          ref={contentRef}
          className="flex-1 bg-[#01426A] px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 order-1 lg:order-2 flex flex-col justify-center"
        >
          <p
            className="cta-animate eyebrow text-white/40 mb-5"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
          >
            Take the Next Step
          </p>

          <h2
            className="cta-animate font-serif italic font-light text-white leading-[0.95] mb-6"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 68px)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            Book a free tour<br />and career<br />consultation.
          </h2>

          <div className="w-10 h-[1px] bg-[#B08450]/60 mb-7 cta-animate"
            style={{ opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.17s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.17s' }}
          />

          <p
            className="cta-animate text-[15px] text-white/65 leading-relaxed mb-8 max-w-[400px]"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s' }}
          >
            Visit any of our three Ontario campuses. Meet our instructors, see our facilities, and
            find the program that matches your goals.
          </p>

          {/* Campus contacts */}
          <div
            className="cta-animate space-y-3 mb-8"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s' }}
          >
            {[
              { city: 'Mississauga', tel: '(905) 602-8891', addr: '7-3045 Southcreek Rd.' },
              { city: 'Waterloo', tel: '(519) 886-2998', addr: '385 Weber St. N.' },
              { city: 'Ottawa', tel: '(613) 789-7875', addr: '215 Dalhousie St.' },
            ].map((campus) => (
              <div key={campus.city} className="flex items-start gap-4 py-3 border-b border-white/[0.07]">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M6 0C3.24 0 1 2.24 1 5c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z" fill="#B08450" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">{campus.city}</p>
                  <p className="text-[12px] text-white/45">{campus.addr}</p>
                </div>
                <a
                  href={`tel:${campus.tel.replace(/\D/g, '')}`}
                  className="ml-auto text-[12px] text-white/45 hover:text-white transition-colors duration-200"
                >
                  {campus.tel}
                </a>
              </div>
            ))}
          </div>

          <div
            className="cta-animate flex flex-col sm:flex-row gap-3"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.36s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.36s' }}
          >
            <Link href="/contact" className="btn btn-white text-[14px] px-8 py-4">
              Contact Us
            </Link>
            <Link href="/apply" className="btn btn-outline-white text-[14px] px-8 py-4">
              Request More Info
            </Link>
          </div>

          <p
            className="cta-animate mt-5 text-[12px] text-white/55"
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.44s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.44s' }}
          >
            Mon–Fri, 9am–4:30pm &nbsp;·&nbsp; Toll-free: 1-888-886-2998
          </p>
        </div>

      </div>
    </section>
  )
}
