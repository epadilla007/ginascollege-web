'use client'

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

// Double array for seamless loop: animation moves -50% (one full set)
const doubled = [...brands, ...brands]

export function BrandsSection() {
  return (
    <section
      className="py-12 bg-white border-y border-[#E9E9E9] overflow-hidden"
      aria-label="Brand partners"
    >
      <div className="container mb-7">
        <p className="eyebrow text-[#01426A]/40 justify-center w-full text-center">
          Our Brand Partners
        </p>
      </div>

      {/* Edge fade mask */}
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        {/* Single track containing 2× logos; keyframe moves it -50% */}
        <div
          className="flex items-center gap-14"
          style={{
            width: 'max-content',
            animation: 'marquee 32s linear infinite',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running' }}
        >
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center h-9 w-[110px] flex-shrink-0 opacity-35 hover:opacity-70 transition-opacity duration-300"
              aria-hidden={i >= brands.length ? 'true' : undefined}
            >
              <Image
                src={brand.src}
                alt={i < brands.length ? brand.name : ''}
                width={110}
                height={36}
                className="object-contain w-auto h-full grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
