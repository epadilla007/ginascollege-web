import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diploma Programs — OSAP-Eligible Beauty Diplomas | Gina\'s College',
  description: 'Four OSAP-eligible diploma programs in Medical Aesthetics, Hairstyling, Advanced Aesthetics, and Electrolysis. Registered under the Ontario Career Colleges Act.',
}

const programs = [
  {
    title: 'Medical Aesthetics Diploma',
    description:
      'The most comprehensive aesthetics program at Gina\'s College. Covers advanced skin analysis, facial treatments, chemical peels, microneedling, dermaplaning, LED light therapy, electrolysis, laser/IPL treatments, and more. CIDESCO International Diploma eligible.',
    length: 'Approx. 52 weeks',
    href: '/programs/medical-aesthetics',
  },
  {
    title: 'Hairstyling Diploma',
    description:
      'Full hairstyling diploma covering cutting, colouring, chemical services, client consultation, and salon business skills. Graduates are eligible to write the Red Seal provincial exam.',
    length: 'Approx. 40 weeks',
    href: '/programs/hairstyling',
  },
  {
    title: 'Advanced Aesthetics Diploma',
    description:
      'Advanced training in skin care, body treatments, nail technology, and business operations. Covers the full scope of esthetic practice with clinic-based training throughout.',
    length: 'Approx. 40 weeks',
    href: '/programs/advanced-aesthetics',
  },
  {
    title: 'Electrolysis & Light Technology Diploma',
    description:
      'Specialist diploma in permanent hair removal techniques including electrolysis, laser, and IPL. Graduates are qualified to operate light-based devices in clinical and spa settings.',
    length: 'Approx. 40 weeks',
    href: '/programs/electrolysis-light-technology',
  },
]

export default function DiplomaPrograms() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Diploma Programs</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Career-ready diploma programs.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12 max-w-[660px]">
          Gina&apos;s College offers four diploma programs approved under the Ontario Career Colleges
          Act, 2005. Diploma programs are OSAP-eligible and include extensive hands-on clinic time
          — approximately 70% of each program is practical.
        </p>

        {/* Program Cards */}
        <div className="grid gap-6 mb-12">
          {programs.map((program) => (
            <div
              key={program.href}
              className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">
                    {program.title}
                  </h2>
                  <p className="text-[#000000]/60 text-base leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <p className="text-sm font-medium text-[#01426A]/70">
                    Program length: <span className="text-[#01426A]">{program.length}</span>
                  </p>
                </div>
                <div className="sm:pt-1 sm:pl-6 flex-shrink-0">
                  <Link
                    href={program.href}
                    className="btn btn-secondary text-sm whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blue Info Box */}
        <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 mb-12">
          <p className="text-[#01426A] text-base leading-relaxed">
            All diploma programs at Gina&apos;s College are registered under the Ontario Career
            Colleges Act, 2005 and are OSAP-eligible. Speak with an admissions advisor to confirm
            current eligibility.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/apply" className="btn btn-primary">
            Apply Now
          </Link>
          <Link href="/certificate-programs" className="btn btn-secondary">
            View Certificate Programs
          </Link>
          <Link href="/financial-aid" className="btn btn-secondary">
            Financial Aid
          </Link>
        </div>

      </div>
    </main>
  )
}
