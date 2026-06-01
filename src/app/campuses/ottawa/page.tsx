import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ottawa Campus — Gina's College of Advanced Aesthetics",
  description:
    "Gina's College Ottawa. 215 Dalhousie St., Ottawa ON K1N 7C9. Diploma programs in medical aesthetics, electrolysis, and certificate programs.",
}

const programs = [
  { name: 'Medical Aesthetics Diploma', href: '/programs/medical-aesthetics', tag: 'Diploma' },
  { name: 'Advanced Aesthetics Diploma', href: '/programs/advanced-aesthetics', tag: 'Diploma' },
  { name: 'Electrolysis & Light Technology Diploma', href: '/programs/electrolysis-light-technology', tag: 'Diploma' },
  { name: 'Nail Technology', href: '/programs/nail-technology', tag: 'Certificate' },
  { name: 'Makeup Artistry', href: '/programs/makeup-artistry', tag: 'Certificate' },
  { name: 'Waxing Specialist', href: '/programs/waxing', tag: 'Certificate' },
  { name: 'Chemical Peels', href: '/programs/chemical-peels', tag: 'Certificate' },
  { name: 'Lash Extensions', href: '/programs/lash-extensions', tag: 'Certificate' },
]

export default function OttawaCampusPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[860px]">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#000000]/40 mb-10">
          <Link href="/campuses" className="hover:text-[#01426A] transition-colors">Campuses</Link>
          <span>/</span>
          <span className="text-[#000000]/60">Ottawa</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow text-[#01426A] mb-4">Campus</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Ottawa Campus
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[560px]">
            Located in the Byward Market area. Medical aesthetics, electrolysis, and certificate
            programs for students in the National Capital Region.
          </p>
        </div>

        {/* Contact + hours grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
            <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-2">Address</p>
            <p className="text-sm text-[#000000]/70 leading-snug">
              215 Dalhousie St.<br />Ottawa ON K1N 7C9
            </p>
          </div>
          <div className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
            <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-2">Phone</p>
            <a
              href="tel:+16137897875"
              className="text-sm text-[#01426A] font-semibold hover:underline"
            >
              (613) 789-7875
            </a>
          </div>
          <div className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
            <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-2">Email</p>
            <a
              href="mailto:ottawa@ginascollege.com"
              className="text-sm text-[#01426A] font-semibold hover:underline break-all"
            >
              ottawa@<br />ginascollege.com
            </a>
          </div>
          <div className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
            <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-2">Hours</p>
            <p className="text-sm text-[#000000]/70 leading-snug">
              Monday to Friday<br />9:00am to 4:30pm
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-[8px] overflow-hidden border border-[#E9E9E9] mb-12" style={{ height: '360px' }}>
          <iframe
            title="Gina's College Ottawa — Map"
            src="https://www.google.com/maps?q=215+Dalhousie+St+Ottawa+ON+K1N+7C9&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Programs */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-6">
            Programs at this campus.
          </h2>
          <div className="space-y-3">
            {programs.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="flex items-center justify-between p-4 rounded-[8px] border border-[#E9E9E9] hover:border-[#01426A] hover:bg-[#01426A]/[0.02] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      program.tag === 'Diploma'
                        ? 'bg-[#01426A] text-white'
                        : 'bg-[#E9E9E9] text-[#000000]/60'
                    }`}
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

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#E9E9E9]">
          <Link href="/apply" className="btn btn-primary">
            Apply to This Campus
          </Link>
          <Link href="/consultation" className="btn btn-secondary">
            Book a Campus Tour
          </Link>
        </div>

      </div>
    </div>
  )
}
