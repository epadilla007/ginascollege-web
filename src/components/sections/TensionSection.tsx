'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const outcomeStats = [
  {
    number: '95%+',
    label: 'Graduate employment',
    detail: 'Graduates work in some of the highest-paying roles in the aesthetics industry.',
  },
  {
    number: '4 weeks',
    label: 'Avg. time to first job',
    detail: 'Based on graduate employment data across 3 campuses',
  },
  {
    number: '90 days',
    label: 'Avg. time to placement',
    detail: 'Most graduates secure industry roles within 90 days of graduation',
  },
]

const employers = ['Clarity MedSpa', 'Dermapure', 'Renew Medi Spa', 'Elmspa', 'Spa Bello']

export function TensionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

        // Headline reveal
        gsap.from(headlineRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Stats staggered
        if (statsRef.current) {
          const cards = statsRef.current.querySelectorAll('.stat-card')
          gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease,
            stagger: 0.12,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        }

        // Image parallax
        if (imageRef.current) {
          gsap.to(imageRef.current.querySelector('img'), {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
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
      className="section bg-white overflow-hidden"
      aria-labelledby="tension-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text content */}
          <div>
            <div ref={headlineRef}>
              <p className="eyebrow text-[#01426A] mb-4">Career outcomes</p>
              <h2
                id="tension-heading"
                className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Top med spas recruit from our campuses directly.
              </h2>
              <p className="text-[#000000]/65 text-lg leading-relaxed mb-8 max-w-[480px]">
                Employers like Clarity MedSpa and Dermapure come to Gina's because our graduates
                arrive with real client hours, not just classroom certificates. The average graduate
                is employed within 4 weeks of finishing.
              </p>

              {/* Where graduates work */}
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#000000]/40 mb-4">
                  Where our graduates work
                </p>
                <div className="flex flex-wrap gap-2">
                  {employers.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 bg-[#E9E9E9] rounded-full text-sm font-medium text-[#000000]/70"
                    >
                      {name}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 bg-[#E9E9E9] rounded-full text-sm font-medium text-[#000000]/40">
                    + dozens more
                  </span>
                </div>
              </div>

              <Link href="/apply" className="btn btn-primary">
                Start Your Application
              </Link>
            </div>
          </div>

          {/* Right: stats + image */}
          <div className="flex flex-col gap-6">
            {/* Stats cards */}
            <div ref={statsRef} className="grid gap-4">
              {outcomeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card flex items-start gap-6 p-6 rounded-[8px] border border-[#E9E9E9] bg-white hover:border-[#B1C6D9] transition-colors duration-200"
                >
                  <div className="shrink-0">
                    <p className="font-display text-[#01426A] font-semibold leading-none mb-1" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                      {stat.number}
                    </p>
                    <p className="text-sm font-semibold text-[#000000]">{stat.label}</p>
                  </div>
                  <p className="text-sm text-[#000000]/50 leading-snug pt-1">{stat.detail}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div ref={imageRef} className="relative h-56 rounded-[8px] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/GinasCollege_Exterior2-713w.jpg"
                alt="Gina's College campus — Mississauga, Waterloo, and Ottawa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#01426A]/15" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold text-sm">3 campuses across Ontario</p>
                <p className="text-white/60 text-xs">Mississauga · Waterloo · Ottawa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
