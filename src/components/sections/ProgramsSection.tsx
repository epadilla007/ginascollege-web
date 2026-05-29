'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    title: 'Medical Aesthetics',
    tag: 'Diploma Program',
    duration: '12 months',
    highlight: "The industry's highest-earning role.",
    description:
      'Laser treatments, chemical peels, microneedling. Everything included — no add-on upsells after graduation. Graduate as a certified medical aesthetician.',
    outcomes: ['Laser specialist', 'Medi-spa technician', 'Clinic director'],
    salary: '$55,000–$90,000+',
    href: '/programs/medical-aesthetics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imageAlt: 'Student performing laser treatment in clinical setting',
    featured: true,
  },
  {
    title: 'Advanced Aesthetics',
    tag: 'Diploma Program',
    duration: '10 months',
    highlight: 'The full foundation.',
    description:
      'Everything the industry expects from a certified aesthetician. Facials, waxing, body treatments, makeup, and more. CIDESCO-tracked.',
    outcomes: ['Aesthetician', 'Spa therapist', 'Skincare specialist'],
    salary: '$40,000–$65,000',
    href: '/programs/advanced-aesthetics',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    imageAlt: 'Aesthetics student performing a facial',
    featured: false,
  },
  {
    title: 'Hairstyling',
    tag: 'Diploma Program',
    duration: '12 months',
    highlight: 'Creative, client-facing, and in constant demand.',
    description:
      'Cut, colour, texture, and styling. Trained in a professional salon environment with real clients from day one.',
    outcomes: ['Hair stylist', 'Colourist', 'Salon owner'],
    salary: '$35,000–$70,000+',
    href: '/programs/hairstyling',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    imageAlt: 'Student performing a precision haircut',
    featured: false,
  },
  {
    title: 'Electrolysis & Light Technology',
    tag: 'Diploma Program',
    duration: '8 months',
    highlight: 'Specialized, well-paying, and growing fast.',
    description:
      'Permanent hair removal using electrolysis, laser, and intense pulsed light. One of the highest-paying specializations in the industry.',
    outcomes: ['Electrologist', 'Laser technician', 'IPL specialist'],
    salary: '$50,000–$80,000',
    href: '/programs/electrolysis-light-technology',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    imageAlt: 'Laser treatment specialist at work',
    featured: false,
  },
]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll('.program-card')
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease,
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })

          // Scale-recede exit as proof section enters
          gsap.to(cards, {
            scale: 0.97,
            opacity: 0.4,
            ease: ease,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'bottom 60%',
              end: 'bottom top',
              scrub: 0.5,
            },
          })
        }
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="section bg-white"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="eyebrow text-[#01426A] mb-4">Diploma programs</p>
            <h2
              id="programs-heading"
              className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Choose your specialization.
            </h2>
          </div>
          <Link
            href="/programs"
            className="text-sm font-semibold text-[#01426A] hover:text-[#01426A]/70 transition-colors whitespace-nowrap"
          >
            Browse all certificate programs →
          </Link>
        </div>

        {/* Program cards grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <Link
              key={program.href}
              href={program.href}
              className={`program-card group relative flex flex-col rounded-[8px] overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                program.featured
                  ? 'border-[#01426A] md:col-span-2 lg:col-span-1'
                  : 'border-[#E9E9E9] hover:border-[#B1C6D9]'
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${program.featured ? 'h-64 lg:h-72' : 'h-52'}`}>
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/80 via-transparent to-transparent" />

                {/* Tag + duration */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-white/90 text-[#01426A] text-xs font-semibold rounded-full">
                    {program.tag}
                  </span>
                  <span className="px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {program.duration}
                  </span>
                </div>

                {/* Salary — bottom of image */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs text-white/70 font-medium">Avg. salary</span>
                  <p className="font-display text-white font-semibold text-lg">{program.salary}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 bg-white">
                <p className="text-xs font-semibold text-[#01426A]/50 mb-1 uppercase tracking-wider">
                  {program.highlight}
                </p>
                <h3 className="font-display text-[#01426A] text-2xl font-semibold mb-3 leading-snug">
                  {program.title}
                </h3>
                <p className="text-[#000000]/60 text-sm leading-relaxed mb-5 flex-1">
                  {program.description}
                </p>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {program.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="px-2.5 py-1 bg-[#E9E9E9] text-[#000000]/60 text-xs font-medium rounded-full"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#01426A] group-hover:gap-3 transition-all duration-200">
                  View program details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
