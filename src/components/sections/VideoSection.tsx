'use client'

import { useEffect, useRef } from 'react'

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.vid-animate')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        items.forEach((item, i) => {
          setTimeout(() => {
            ;(item as HTMLElement).style.opacity = '1'
            ;(item as HTMLElement).style.transform = 'translateY(0)'
          }, i * 120)
        })
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden"
      style={{ paddingTop: 'clamp(72px, 9vw, 120px)', paddingBottom: 'clamp(72px, 9vw, 120px)' }}
      aria-label="See us in action"
    >
      <div className="container">
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p
              className="vid-animate eyebrow text-[#01426A]/80 mb-4"
              style={{ opacity: 0, transform: 'translateY(18px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
            >
              Student Life
            </p>
            <h2
              className="vid-animate font-serif italic font-light text-[#01426A] leading-[0.97]"
              style={{
                fontSize: 'clamp(34px, 4.5vw, 64px)',
                opacity: 0,
                transform: 'translateY(18px)',
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.08s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.08s',
              }}
            >
              See us in action.
            </h2>
          </div>
          <p
            className="vid-animate text-[14px] text-[#888] max-w-[320px] lg:text-right leading-relaxed"
            style={{
              opacity: 0,
              transform: 'translateY(12px)',
              transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s',
            }}
          >
            Three campuses. Real clients. World-class instruction.
          </p>
        </div>

        {/* Video embed — full width, no artificial cap */}
        <div
          className="vid-animate relative overflow-hidden rounded-[12px] shadow-2xl border border-[#E9E9E9]"
          style={{
            aspectRatio: '16/9',
            opacity: 0,
            transform: 'translateY(28px)',
            transition: 'opacity 0.85s cubic-bezier(0.22,1,0.36,1) 0.22s, transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.22s',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/kWQ9UIaQqxg?rel=0&modestbranding=1&color=white"
            title="Gina's College of Advanced Aesthetics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Campus tour strip */}
        <div
          className="vid-animate mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          style={{
            opacity: 0,
            transform: 'translateY(14px)',
            transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.38s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.38s',
          }}
        >
          <div className="w-8 h-[1px] bg-[#B08450]/60 flex-shrink-0 hidden sm:block" />
          <p className="text-[13px] text-[#888]">
            Gina&apos;s College of Advanced Aesthetics — official school overview
          </p>
          <a
            href="https://www.youtube.com/watch?v=P4Jae65eIfY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-[#01426A] hover:text-[#C4856A] transition-colors duration-200 flex items-center gap-1.5 group"
          >
            Watch the Waterloo campus tour
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
