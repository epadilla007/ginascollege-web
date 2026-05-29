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
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    description: 'Cut, colour, texture, and styling in a professional salon environment.',
  },
  {
    title: 'Electrolysis & Light Technology',
    duration: '8 months',
    salary: '$50,000–$80,000',
    href: '/programs/electrolysis-light-technology',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
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
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-[640px] mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Programs</p>
          <h1 className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            Find your path.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed">
            Diploma programs are full credentials that qualify you for OSAP and CIDESCO tracking.
            Certificate programs are shorter specializations — ideal for professionals adding skills.
          </p>
        </div>

        {/* Diploma programs */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-[#01426A] text-2xl font-semibold">Diploma Programs</h2>
            <span className="px-3 py-1 bg-[#01426A] text-white text-xs font-semibold rounded-full">OSAP Eligible</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {diplomaPrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-[8px] overflow-hidden border border-[#E9E9E9] hover:border-[#B1C6D9] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-[#01426A] text-xl font-semibold leading-snug">{p.title}</h3>
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

        {/* Certificate programs */}
        <div>
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-8">Certificate Programs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificatePrograms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group p-5 rounded-[8px] border border-[#E9E9E9] hover:border-[#01426A] transition-colors duration-200"
              >
                <h3 className="font-semibold text-[#01426A] text-sm mb-1 group-hover:underline">{p.title}</h3>
                <p className="text-xs text-[#000000]/40">{p.duration}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-20 bg-[#01426A] rounded-[8px] p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-2xl lg:text-3xl font-semibold mb-2">
              Not sure which program is right for you?
            </h2>
            <p className="text-white/60 text-sm">A free 15-minute consultation with an admissions advisor covers everything.</p>
          </div>
          <Link href="/consultation" className="btn btn-white text-sm shrink-0 whitespace-nowrap">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
