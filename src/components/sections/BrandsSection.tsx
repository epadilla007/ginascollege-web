'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const brands = [
  { name: 'OPI', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/ginas-img15.png' },
  { name: 'Diego dalla Palma', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/DDP_Logo_new2018-copy_12.png' },
  { name: 'RVB LAB', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/ginas-img18.png' },
  { name: 'Naturmed', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/ginas-img16.png' },
  { name: 'Footlogix', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/ginas-img17.png' },
  { name: 'Bold Lashes', src: 'https://irp.cdn-website.com/ae4ce602/dms3rep/multi/ginas-img19.png' },
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
