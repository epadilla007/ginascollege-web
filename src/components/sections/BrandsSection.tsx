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
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
            }
          )
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="opacity-0 py-14 bg-white border-y border-[#E9E9E9]" aria-label="Brand partners">
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
