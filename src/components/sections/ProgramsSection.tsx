'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    title: 'Medical Aesthetics',
    href: '/programs/medical-aesthetics',
    image: 'https://images.pexels.com/photos/3985299/pexels-photo-3985299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: "Medical Aesthetics at Gina's College",
    description: 'Advanced skin treatments, laser technology, and medical-grade procedures.',
    tag: 'Diploma Program',
    feature: true,
  },
  {
    title: 'Hairstyling',
    href: '/programs/hairstyling',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=2',
    alt: "Hairstyling at Gina's College",
    description: 'Cutting, colouring, styling, and building a successful career behind the chair.',
    tag: 'Diploma Program',
    feature: false,
  },
  {
    title: 'Electrolysis & Light Technology',
    href: '/programs/electrolysis-light-technology',
    image: 'https://images.pexels.com/photos/7578516/pexels-photo-7578516.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=2',
    alt: "Electrolysis and Light Technology at Gina's College",
    description: 'Permanent hair removal, laser, and advanced light-based skin treatments.',
    tag: 'Diploma Program',
    feature: false,
  },
]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const header = section.querySelector('.prog-header') as HTMLElement | null
    const cards = section.querySelectorAll('.prog-card')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (header) {
          header.style.opacity = '1'
          header.style.transform = 'translateY(0)'
        }
        cards.forEach((card, i) => {
          setTimeout(() => {
            ;(card as HTMLElement).style.opacity = '1'
            ;(card as HTMLElement).style.transform = 'translateY(0) scale(1)'
          }, 100 + i * 100)
        })
        observer.disconnect()
      },
      { threshold: 0.08 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const [feature, ...secondary] = programs

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden" aria-label="Featured Programs">
      <div className="container py-20 lg:py-28">

        {/* Header */}
        <div
          className="prog-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
        >
          <div>
            <p className="eyebrow text-[#01426A]/80 mb-4">Our Courses</p>
            <h2
              className="font-serif font-medium text-[#01426A] leading-[0.97]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 68px)' }}
            >
              Start your career<br className="hidden sm:block" /> in beauty.
            </h2>
          </div>
          <Link href="/programs" className="flex-shrink-0 text-[13px] font-semibold text-[#01426A] inline-flex items-center gap-2 hover:text-[#C4856A] transition-colors duration-200 group">
            Browse all programs
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Asymmetric magazine grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4" style={{ minHeight: '560px' }}>

          {/* Feature card — spans 7 columns, full height */}
          <Link
            href={feature.href}
            className="prog-card lg:col-span-7 group relative overflow-hidden rounded-[10px] block"
            style={{
              minHeight: '480px',
              opacity: 0,
              transform: 'translateY(32px) scale(0.98)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            <Image
              src={feature.image}
              alt={feature.alt}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            {/* Dark overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/90 via-[#01426A]/30 to-transparent" />
            {/* Tag */}
            <span className="absolute top-5 left-5 bg-[#B08450] text-[#000000] text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-sm">
              {feature.tag}
            </span>
            {/* Text — anchored to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <h3
                className="font-serif italic font-light text-white leading-[0.95] mb-3 group-hover:text-[#B1C6D9] transition-colors duration-300"
                style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
              >
                {feature.title}
              </h3>
              <p className="text-[14px] text-white/65 leading-relaxed mb-5 max-w-[360px]">
                {feature.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-200">
                Explore program
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Two stacked secondary cards — span 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-3 lg:gap-4">
            {secondary.map((prog, i) => (
              <Link
                key={prog.title}
                href={prog.href}
                className="prog-card group relative overflow-hidden rounded-[10px] flex-1 block"
                style={{
                  minHeight: '220px',
                  opacity: 0,
                  transform: 'translateY(32px) scale(0.98)',
                  transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.12}s`,
                }}
              >
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/85 via-[#01426A]/25 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.10em] px-2.5 py-1 rounded-sm border border-white/30">
                  {prog.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="font-serif italic font-light text-white leading-[0.97] mb-1.5 group-hover:text-[#B1C6D9] transition-colors duration-300"
                    style={{ fontSize: 'clamp(24px, 2.5vw, 34px)' }}
                  >
                    {prog.title}
                  </h3>
                  <p className="text-[13px] text-white/55">{prog.description}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
