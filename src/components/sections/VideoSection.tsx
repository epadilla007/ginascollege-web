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
        Array.from(items).forEach((item, i) => {
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
    <section ref={sectionRef} className="section bg-white" aria-label="See us in action">
      <div className="container">
        <div className="max-w-[860px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <p
              className="vid-animate eyebrow text-[#01426A]/60 mb-4"
              style={{
                opacity: 0,
                transform: 'translateY(18px)',
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              Student Life
            </p>
            <h2
              className="vid-animate font-serif italic text-[clamp(32px,4vw,56px)] font-light text-[#01426A] leading-[1.0]"
              style={{
                opacity: 0,
                transform: 'translateY(18px)',
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
              }}
            >
              See us in action.
            </h2>
          </div>

          {/* Video embed */}
          <div
            className="vid-animate relative rounded-[14px] overflow-hidden shadow-2xl border border-[#E0E8F0]"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s',
              aspectRatio: '16/9',
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/kWQ9UIaQqxg?rel=0&modestbranding=1&color=white"
              title="Gina's College of Advanced Aesthetics"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Caption */}
          <p
            className="vid-animate text-center text-[14px] text-[#999] mt-5 leading-relaxed"
            style={{
              opacity: 0,
              transform: 'translateY(14px)',
              transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s',
            }}
          >
            Inside Gina&apos;s College — three campuses, real clients, world-class instruction.
          </p>
        </div>
      </div>
    </section>
  )
}
