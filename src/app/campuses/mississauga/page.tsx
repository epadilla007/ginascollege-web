import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Mississauga Campus — Gina's College of Advanced Aesthetics",
  description:
    "Gina's College Mississauga. 7-3045 Southcreek Rd., Mississauga ON L4X 2E9. Diploma programs in medical aesthetics, electrolysis, and more. OSAP-eligible.",
}

const programs = [
  { name: 'Medical Aesthetics Diploma', href: '/programs/medical-aesthetics', tag: 'Diploma' },
  { name: 'Advanced Aesthetics Diploma', href: '/programs/advanced-aesthetics', tag: 'Diploma' },
  { name: 'Electrolysis & Light Technology Diploma', href: '/programs/electrolysis-light-technology', tag: 'Diploma' },
  { name: 'Nail Technology', href: '/programs/nail-technology', tag: 'Certificate' },
  { name: 'Makeup Artistry', href: '/programs/makeup-artistry', tag: 'Certificate' },
  { name: 'Waxing Specialist', href: '/programs/waxing', tag: 'Certificate' },
  { name: 'Microneedling', href: '/programs/microneedling', tag: 'Certificate' },
  { name: 'Chemical Peels', href: '/programs/chemical-peels', tag: 'Certificate' },
  { name: 'Lash Extensions', href: '/programs/lash-extensions', tag: 'Certificate' },
]

export default function MississaugaCampusPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <nav className="flex items-center gap-2 text-xs text-[#000000]/40 mb-8">
            <Link href="/campuses" className="hover:text-[#01426A] transition-colors">Campuses</Link>
            <span>/</span>
            <span className="text-[#000000]/60">Mississauga</span>
          </nav>
          <p className="eyebrow text-[#01426A]/80 mb-5">Campus</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Mississauga Campus
          </h1>
          <p className="text-[#000000]/60 leading-relaxed max-w-[560px]" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
            Our GTA campus, located just off the 427 corridor with easy access from Toronto, Etobicoke, and Brampton. Medical Aesthetics, Advanced Aesthetics, Electrolysis, and a full suite of certificate programs, taught by licensed instructors with active industry careers. OSAP-eligible. Free parking on site.
          </p>
        </div>
      </div>

      {/* Info + programs */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container max-w-[860px]">

          {/* Contact + hours grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-5 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}>
              <p className="text-sm font-medium text-[#000000]/45 mb-1.5">Address</p>
              <p className="text-sm text-[#000000]/70 leading-snug">
                7-3045 Southcreek Rd.<br />Mississauga ON L4X 2E9
              </p>
            </div>
            <div className="p-5 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}>
              <p className="text-sm font-medium text-[#000000]/45 mb-1.5">Phone</p>
              <a
                href="tel:+19056028891"
                className="text-sm text-[#01426A] font-semibold hover:underline"
              >
                (905) 602-8891
              </a>
            </div>
            <div className="p-5 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}>
              <p className="text-sm font-medium text-[#000000]/45 mb-1.5">Email</p>
              <a
                href="mailto:mississauga@ginascollege.com"
                className="text-sm text-[#01426A] font-semibold hover:underline break-all"
              >
                mississauga@<br />ginascollege.com
              </a>
            </div>
            <div className="p-5 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}>
              <p className="text-sm font-medium text-[#000000]/45 mb-1.5">Hours</p>
              <p className="text-sm text-[#000000]/70 leading-snug">
                Monday to Friday<br />9:00am to 4:30pm
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="border mb-12" style={{ borderColor: 'var(--color-cream-deep)', height: '360px' }}>
            <iframe
              title="Gina's College Mississauga — Map"
              src="https://www.google.com/maps?q=7-3045+Southcreek+Rd+Mississauga+ON+L4X+2E9&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h2
              className="font-serif italic text-[#01426A] mb-8"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
            >
              Programs at this campus.
            </h2>
            <div className="space-y-2">
              {programs.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="flex items-center justify-between p-4 border hover:border-[#C4856A] transition-colors duration-200 group"
                  style={{ borderColor: 'var(--color-cream-deep)' }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 ${
                        program.tag === 'Diploma'
                          ? 'bg-[#01426A] text-white'
                          : 'border text-[#01426A]/60'
                      }`}
                      style={program.tag !== 'Diploma' ? { borderColor: 'var(--color-cream-deep)' } : {}}
                    >
                      {program.tag}
                    </span>
                    <span className="font-medium text-[#000000]/80 group-hover:text-[#01426A] transition-colors">
                      {program.name}
                    </span>
                  </div>
                  <span className="text-[#01426A] text-sm font-semibold group-hover:underline shrink-0 ml-4">
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Navy CTA strip */}
      <div className="bg-[#01426A]">
        <div className="container max-w-[860px] py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Get Started</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Apply to Mississauga.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/apply" className="btn btn-white">Apply to This Campus</Link>
              <Link href="/consultation" className="btn btn-outline-white">Book a Campus Tour</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
