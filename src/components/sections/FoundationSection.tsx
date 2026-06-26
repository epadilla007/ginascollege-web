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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (textEl) {
          textEl.style.opacity = '1'
          textEl.style.transform = 'translateY(0)'
        }
        if (imgEl) {
          setTimeout(() => {
            imgEl.style.opacity = '1'
            imgEl.style.transform = 'translateX(0)'
          }, 180)
        }
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-[#F6F8FA]" aria-label="Building a foundation for success">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div
            className="foundation-text"
            style={{
              opacity: 0,
              transform: 'translateY(28px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <p className="eyebrow text-[#01426A]/60 mb-5">Our Approach</p>
            <h2 className="font-serif text-[clamp(32px,3.5vw,54px)] font-medium text-[#01426A] leading-[1.0] mb-6">
              Building a Foundation for Success in Beauty and Aesthetics
            </h2>
            <p className="text-[16px] text-[#555] leading-relaxed mb-4">
              At Gina&apos;s College, we believe the best way to learn is by doing. That&apos;s why we dedicate
              70% of your program time to hands-on practical experience — not just theory.
            </p>
            <p className="text-[16px] text-[#555] leading-relaxed mb-8">
              You will work directly on real clients in our student beauty clinic, building the
              skills, speed, and confidence you need to succeed the moment you graduate.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-white rounded-[10px] border border-[#E9E9E9] p-5 hover:shadow-md hover:border-[#B1C6D9] transition-all duration-300">
                <p className="font-serif italic text-[48px] font-light text-[#01426A] leading-none mb-1">70%</p>
                <p className="text-[13px] text-[#666]">Practical training time on real clients</p>
              </div>
              <div className="bg-white rounded-[10px] border border-[#E9E9E9] p-5 hover:shadow-md hover:border-[#B1C6D9] transition-all duration-300">
                <p className="font-serif italic text-[48px] font-light text-[#01426A] leading-none mb-1">40+</p>
                <p className="text-[13px] text-[#666]">Years graduating beauty professionals</p>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary text-[14px] px-7 py-4">
              Learn About Our Approach
            </Link>
          </div>

          {/* Image column */}
          <div
            className="foundation-image relative"
            style={{
              opacity: 0,
              transform: 'translateX(28px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.18s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.18s',
            }}
          >
            <div className="relative rounded-[14px] overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/campus/exterior-2.jpg"
                alt="Gina's College campus exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle colour grade */}
              <div className="absolute inset-0 bg-[#01426A]/10" />
            </div>

            {/* Floating badge — outside overflow:hidden */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-[10px] shadow-xl border border-[#E9E9E9] px-5 py-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-full bg-[#01426A]/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="#01426A" strokeWidth="1.4" />
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#01426A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#01426A] leading-tight">CIDESCO Certified</p>
                <p className="text-[11px] text-[#999]">World-standard school</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
