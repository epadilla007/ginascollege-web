import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Aesthetics Programs — Diploma & Certificate | Gina\'s College Ontario',
  description:
    'OSAP-eligible diploma and certificate programs in medical aesthetics, hairstyling, nail technology, and more. 3 campuses across Ontario.',
}

const diplomaPrograms = [
  {
    title: 'Medical Aesthetics',
    duration: '12 months',
    salary: '$55,000–$90,000+',
    href: '/programs/medical-aesthetics',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Laser, chemical peels, microneedling. Full medical aesthetics curriculum, all included.',
  },
  {
    title: 'Advanced Aesthetics',
    duration: '10 months',
    salary: '$40,000–$65,000',
    href: '/programs/advanced-aesthetics',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    description: 'The full foundation diploma. Everything the industry expects from a certified aesthetician.',
  },
  {
    title: 'Hairstyling',
    duration: '12 months',
    salary: '$35,000–$70,000+',
    href: '/programs/hairstyling',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/9-21-619w.jpg',
    description: 'Cut, colour, texture, and styling in a professional salon environment.',
  },
  {
    title: 'Electrolysis & Light Technology',
    duration: '8 months',
    salary: '$50,000–$80,000',
    href: '/programs/electrolysis-light-technology',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    description: 'Permanent hair removal via electrolysis, laser, and IPL. A high-earning specialization.',
  },
]

const certificatePrograms = [
  { title: 'Nail Technology', href: '/programs/nail-technology', duration: '3 months' },
  { title: 'Makeup Artistry', href: '/programs/makeup-artistry', duration: '3 months' },
  { title: 'Waxing Specialist', href: '/programs/waxing', duration: '6 weeks' },
  { title: 'Microneedling', href: '/programs/microneedling', duration: '4 weeks' },
  { title: 'Chemical Peels', href: '/programs/chemical-peels', duration: '4 weeks' },
  { title: 'Eyebrow Design', href: '/programs/eyebrow-design', duration: '3 weeks' },
  { title: 'Lash Extensions', href: '/programs/lash-extensions', duration: '3 weeks' },
  { title: 'Hot Stone Therapy', href: '/programs/hot-stone-therapy', duration: '4 weeks' },
  { title: 'Reflexology', href: '/programs/reflexology', duration: '6 weeks' },
  { title: 'Hydrotherapy', href: '/programs/hydrotherapy', duration: '4 weeks' },
  { title: 'Aromatherapy', href: '/programs/aromatherapy', duration: '4 weeks' },
  { title: 'Men\'s Grooming', href: '/programs/mens-grooming', duration: '4 weeks' },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero — cream bg */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[960px]">
          <p className="eyebrow text-[#01426A]/50 mb-5">Programs</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(52px, 6vw, 88px)' }}
          >
            Find your path.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Diploma programs are full credentials that qualify you for OSAP and CIDESCO tracking.
            Certificate programs are shorter specializations — ideal for professionals adding skills.
          </p>
        </div>
      </div>

      {/* Diploma programs — white section */}
      <div className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-10">
            <h2
              className="font-serif italic text-[#01426A]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Diploma Programs
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4856A] border border-[#C4856A] px-3 py-1">
              OSAP Eligible
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {diplomaPrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col border hover:border-[#C4856A] transition-colors duration-300"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {p.title === 'Medical Aesthetics' && (
                    <span className="absolute top-3 right-3 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C4856A] border border-[#C4856A]">
                      CIDESCO
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-[#01426A] text-xl leading-snug">{p.title}</h3>
                    <span className="shrink-0 text-xs text-[#000000]/40 font-medium whitespace-nowrap">{p.duration}</span>
                  </div>
                  <p className="text-sm text-[#000000]/55 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#01426A]">{p.salary} avg.</span>
                    <span className="text-sm font-semibold text-[#01426A] group-hover:underline">View program →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CIDESCO callout — cream strip */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <p className="eyebrow text-[#C4856A] mb-2">International Accreditation</p>
              <p
                className="font-serif italic text-[#01426A] leading-snug mb-3"
                style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
              >
                Ontario&#39;s only CIDESCO-accredited career college.
              </p>
              <p className="text-sm text-[#000000]/55 leading-relaxed max-w-[540px]">
                CIDESCO is the world&#39;s most prestigious international beauty therapy qualification, recognized in over 40 countries. Graduates of our Medical Aesthetics diploma can apply directly for CIDESCO certification, opening doors to careers from Toronto to Tokyo.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center justify-center border-2 border-[#C4856A] text-[#C4856A] px-6 py-3 text-xs font-bold uppercase tracking-widest text-center">
                CIDESCO<br />Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate programs — white section */}
      <div className="bg-white">
        <div className="container pb-16 lg:pb-24">
          <h2
            className="font-serif italic text-[#01426A] mb-10"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
          >
            Certificate Programs
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificatePrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group p-5 border hover:border-[#C4856A] transition-colors duration-300"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <h3 className="font-serif text-[#01426A] text-sm mb-1 group-hover:underline">{p.title}</h3>
                <p className="text-xs text-[#000000]/40">{p.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navy CTA strip — full bleed, no rounded corners */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/35 mb-5">Ready to begin?</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Not sure which program is right for you?
              </h2>
              <p className="text-white/60 text-sm mt-4">
                A free 15-minute consultation with an admissions advisor covers everything.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/consultation" className="btn btn-white">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
