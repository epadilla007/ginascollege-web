'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function FoundationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            [
              sectionRef.current?.querySelector('.foundation-text'),
              sectionRef.current?.querySelector('.foundation-image'),
            ],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
            }
          )
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="section bg-[#F6F8FA]" aria-label="Building a foundation for success">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className="foundation-text opacity-0">
            <p className="eyebrow text-[#01426A] mb-4">Our Approach</p>
            <h2 className="font-display text-[clamp(26px,3vw,44px)] font-semibold text-[#01426A] leading-tight mb-6">
              Building a Foundation for Success in Beauty and Aesthetics
            </h2>
            <p className="text-[16px] text-[#555] leading-relaxed mb-4">
              At Gina&apos;s College, we believe the best way to learn is by doing. That&apos;s why we dedicate
              70% of your program time to hands-on practical experience — not just theory.
            </p>
            <p className="text-[16px] text-[#555] leading-relaxed mb-8">
              You will work directly on real clients in our student beauty clinic, building the
              skills, speed, and confidence you need to succeed the moment you graduate.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-white rounded-[8px] border border-[#E9E9E9] p-5">
                <p className="font-display text-[36px] font-bold text-[#01426A] leading-none mb-1">70%</p>
                <p className="text-[13px] text-[#666]">Practical training time on real clients</p>
              </div>
              <div className="bg-white rounded-[8px] border border-[#E9E9E9] p-5">
                <p className="font-display text-[36px] font-bold text-[#01426A] leading-none mb-1">40+</p>
                <p className="text-[13px] text-[#666]">Years graduating beauty professionals</p>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary text-[14px] px-7 py-4">
              Learn About Our Approach
            </Link>
          </div>

          {/* Image column */}
          <div className="foundation-image opacity-0">
            <div className="relative rounded-[12px] overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/GinasCollege_Exterior2-713w.jpg"
                alt="Gina's College campus exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
