'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function FoundationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const textEl = section.querySelector('.foundation-text') as HTMLElement | null
    const imgEl = section.querySelector('.foundation-image') as HTMLElement | null
    const statsEls = section.querySelectorAll('.foundation-stat')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (textEl) {
          textEl.style.opacity = '1'
          textEl.style.transform = 'translateY(0)'
        }
        statsEls.forEach((el, i) => {
          setTimeout(() => {
            ;(el as HTMLElement).style.opacity = '1'
            ;(el as HTMLElement).style.transform = 'translateY(0)'
          }, 200 + i * 100)
        })
        if (imgEl) {
          setTimeout(() => {
            imgEl.style.opacity = '1'
            imgEl.style.transform = 'translateX(0)'
          }, 150)
        }
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
      className="overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
      aria-label="Building a foundation for success"
    >
      <div className="flex flex-col lg:flex-row">

        {/* Left: text content — padded like container */}
        <div className="flex-1 px-6 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 lg:max-w-[55%]">
          <div
            className="foundation-text max-w-[540px]"
            style={{
              opacity: 0,
              transform: 'translateY(28px)',
              transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="eyebrow text-[#01426A]/80 mb-5">Our Approach</p>
            <h2
              className="font-serif font-medium text-[#01426A] leading-[0.97] mb-7"
              style={{ fontSize: 'clamp(32px, 3.8vw, 58px)' }}
            >
              Building a Foundation<br />for Success in Beauty
            </h2>
            <p className="text-[15.5px] text-[#555] leading-relaxed mb-4">
              At Gina&apos;s College, we believe the best way to learn is by doing. That&apos;s why we dedicate
              70% of your program time to hands-on practical experience — not theory.
            </p>
            <p className="text-[15.5px] text-[#555] leading-relaxed mb-10">
              You will work directly on real clients in our student beauty clinic, building the
              skills, speed, and confidence you need from day one in the industry.
            </p>

            {/* Stats — editorial, not cards */}
            <div className="flex gap-12 mb-10 border-t border-[#C4856A]/20 pt-8">
              <div
                className="foundation-stat"
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <p
                  className="stat-number text-[#01426A]"
                  style={{ fontSize: 'clamp(48px, 5vw, 80px)' }}
                >
                  70%
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#01426A]/55 mt-1">
                  Practical training time
                </p>
              </div>
              <div
                className="foundation-stat w-[1px] bg-[#C4856A]/20 self-stretch"
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
                }}
              />
              <div
                className="foundation-stat"
                style={{
                  opacity: 0,
                  transform: 'translateY(16px)',
                  transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
                }}
              >
                <p
                  className="stat-number text-[#01426A]"
                  style={{ fontSize: 'clamp(48px, 5vw, 80px)' }}
                >
                  40+
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#01426A]/55 mt-1">
                  Years of experience
                </p>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary text-[14px] px-8 py-4">
              Our Approach
            </Link>
          </div>
        </div>

        {/* Right: image bleeds to the right edge of the viewport */}
        <div
          className="foundation-image relative w-full lg:w-[45%] flex-shrink-0"
          style={{
            minHeight: '400px',
            opacity: 0,
            transform: 'translateX(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.15s',
          }}
        >
          <Image
            src="/images/campus/exterior-2.jpg"
            alt="Gina's College campus"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Left-side cream blend */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, var(--color-cream) 0%, transparent 12%)' }}
          />
          {/* CIDESCO floating badge */}
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-[10px] shadow-xl border border-[#E9E9E9] px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#01426A]/10 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#01426A" strokeWidth="1.3" />
                <path d="M5 8l2.2 2.2 4-4" stroke="#01426A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#01426A]">CIDESCO Certified</p>
              <p className="text-[10.5px] text-[#999] mt-0.5">World-standard school</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
