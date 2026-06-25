'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const brands = [
  { name: 'OPI', src: '/images/brands/opi.png' },
  { name: 'Swiss Med', src: '/images/brands/swiss-med.png' },
  { name: 'Diego dalla Palma', src: '/images/brands/ddp.png' },
  { name: 'RVB LAB', src: '/images/brands/rvblab.png' },
  { name: 'Naturmed', src: '/images/brands/naturmed.png' },
  { name: 'Footlogix', src: '/images/brands/footlogix.png' },
  { name: 'Bold Lashes', src: '/images/brands/bold-lashes.png' },
]

export function BrandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    // IntersectionObserver — works regardless of Lenis / ScrollTrigger proxy
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ opacity: 0, transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
      className="py-14 bg-white border-y border-[#E9E9E9]"
      aria-label="Brand partners"
    >
      <div className="container">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-[#999] mb-8">
          Our Brand Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-200 h-10">
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={40}
                className="object-contain w-auto h-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
