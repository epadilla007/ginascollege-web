'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    title: 'Medical Aesthetics',
    href: '/programs/medical-aesthetics',
    image: 'https://images.pexels.com/photos/5659056/pexels-photo-5659056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Medical Aesthetics program at Gina\'s College',
    description: 'Advanced skin treatments, laser technology, and medical-grade procedures.',
    tag: 'Diploma',
  },
  {
    title: 'Hairstyling',
    href: '/programs/hairstyling',
    image: 'https://images.pexels.com/photos/3065208/pexels-photo-3065208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Hairstyling program at Gina\'s College',
    description: 'Cutting, colouring, styling, and the business of running a successful salon.',
    tag: 'Diploma',
  },
  {
    title: 'Electrolysis & Light Technology',
    href: '/programs/electrolysis-light-technology',
    image: 'https://images.pexels.com/photos/19242408/pexels-photo-19242408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Electrolysis and Light Technology program at Gina\'s College',
    description: 'Permanent hair removal, laser, and light-based skin treatments.',
    tag: 'Diploma',
  },
]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.prog-card')
    const header = section.querySelector('.prog-header')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (header) {
          (header as HTMLElement).style.opacity = '1'
          ;(header as HTMLElement).style.transform = 'translateY(0)'
        }
        Array.from(cards).forEach((card, i) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = '1'
            ;(card as HTMLElement).style.transform = 'translateY(0)'
          }, 120 + i * 120)
        })
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-white" aria-label="Featured Programs">
      <div className="container">
        {/* Header */}
        <div
          className="prog-header max-w-[600px] mb-14"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <p className="eyebrow text-[#01426A] mb-3">Our Courses</p>
          <h2 className="font-display text-[clamp(30px,4vw,52px)] font-semibold text-[#01426A] leading-tight">
            The Top Courses at Our Esthetician School
          </h2>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {programs.map((prog, i) => (
            <Link
              key={prog.title}
              href={prog.href}
              className="prog-card group block bg-white rounded-[12px] border border-[#E9E9E9] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400"
              style={{
                opacity: 0,
                transform: 'translateY(36px)',
                transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-600"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/50 via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#01426A] text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                  {prog.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-[19px] font-semibold text-[#01426A] mb-2 group-hover:text-[#0a5a8a] transition-colors leading-tight">
                  {prog.title}
                </h3>
                <p className="text-[13.5px] text-[#666] leading-relaxed mb-5">{prog.description}</p>
                <span className="text-[13px] font-semibold text-[#01426A] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Browse all CTA */}
        <div className="text-center">
          <Link href="/programs" className="btn btn-secondary text-[14px] px-8 py-4">
            Browse All Classes
          </Link>
        </div>
      </div>
    </section>
  )
}
