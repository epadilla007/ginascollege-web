'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    title: 'Medical Aesthetics',
    href: '/programs/medical-aesthetics',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    alt: 'Medical Aesthetics program at Gina\'s College',
    description: 'Advanced skin treatments, laser technology, and medical-grade procedures.',
  },
  {
    title: 'Hairstyling',
    href: '/programs/hairstyling',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/9-21-619w.jpg',
    alt: 'Hairstyling program at Gina\'s College',
    description: 'Cutting, colouring, styling, and the business of running a successful salon.',
  },
  {
    title: 'Electrolysis & Light Technology',
    href: '/programs/electrolysis-light-technology',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    alt: 'Electrolysis and Light Technology program at Gina\'s College',
    description: 'Permanent hair removal, laser, and light-based skin treatments.',
  },
]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            '.prog-card',
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.15,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
            }
          )
        }, sectionRef)
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-white" aria-label="Featured Programs">
      <div className="container">
        {/* Header */}
        <div className="max-w-[600px] mb-12">
          <p className="eyebrow text-[#01426A] mb-3">Our Courses</p>
          <h2 className="font-display text-[clamp(30px,4vw,52px)] font-semibold text-[#01426A] leading-tight">
            The Top Courses at Our Esthetician School
          </h2>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {programs.map((prog) => (
            <Link
              key={prog.title}
              href={prog.href}
              className="prog-card opacity-0 group block bg-white rounded-[8px] border border-[#E9E9E9] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-[19px] font-semibold text-[#01426A] mb-2 group-hover:text-[#0a5a8a] transition-colors">
                  {prog.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">{prog.description}</p>
                <span className="text-[13px] font-semibold text-[#01426A] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
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
