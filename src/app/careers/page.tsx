import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Careers at Gina's College — Join Our Team",
  description:
    "Gina's College is always looking for passionate instructors, admissions advisors, and clinic staff. 45 years of purpose-driven education. Three Ontario campuses.",
}

const reasons = [
  {
    title: '45 years of reputation.',
    body: "When you work at Gina's College, you work somewhere graduates are proud to name. The school has been in the industry long enough to have trained the instructors of other schools.",
  },
  {
    title: 'Purpose-driven work.',
    body: "Every role here — instructor, advisor, or clinic staff — connects directly to a student's future. You are not supporting a product. You are part of someone's career launch.",
  },
  {
    title: 'A real student clinic.',
    body: 'Instructors work in an active clinic alongside students and real clients every day. If you want to keep your skills sharp while you teach, this is where to do it.',
  },
  {
    title: 'CIDESCO-accredited environment.',
    body: 'Working in a CIDESCO-accredited school means your professional development stays current. The standard we hold students to, we hold ourselves to as well.',
  },
]

const numerals = ['01', '02', '03', '04']

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Cream Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-8">
            <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
            <span>/</span>
            <span>Careers</span>
          </div>
          <p className="eyebrow text-[#01426A]/80 mb-5">Join the Team</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Work at Gina&#39;s College
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            We are always looking for passionate, experienced professionals to join our team as
            instructors, admissions advisors, and clinic staff across our three Ontario campuses.
          </p>
        </div>
      </div>

      {/* How to get in touch */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container max-w-[860px]">

          <div className="mb-14">
            <h2
              className="font-serif text-[#01426A] mb-5"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              How to get in touch.
            </h2>
            <div
              className="p-6 border"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderColor: 'var(--color-cream-deep)',
              }}
            >
              <p className="text-[#000000]/65 leading-relaxed mb-4">
                Send your resume to{' '}
                <a
                  href="mailto:careers@ginascollege.com"
                  className="text-[#01426A] font-semibold hover:text-[#01426A]/70 transition-colors"
                >
                  careers@ginascollege.com
                </a>
                . Tell us about your experience, the role you are interested in, and which campus
                location works for you. We review every application and respond within five business days.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 pt-4 border-t"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#01426A]/70 mb-1">Roles we hire for</p>
                  <p className="text-sm text-[#000000]/60">Aesthetics Instructors &bull; Hairstyling Instructors &bull; Admissions Advisors &bull; Student Clinic Coordinators &bull; Administrative Staff</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Gina's */}
          <div className="mb-14">
            <h2
              className="font-serif text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              Why Gina&#39;s.
            </h2>
            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-5">
                  <span className="font-serif italic text-[#C4856A] text-4xl shrink-0 leading-none mt-0.5">
                    {numerals[i]}
                  </span>
                  <div>
                    <p className="font-semibold text-[#000000] mb-1">{reason.title}</p>
                    <p className="text-[#000000]/60 leading-relaxed text-sm">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Navy CTA Strip */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Careers</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Join a school that has been doing this for 45 years.
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Send your resume and introduction to{' '}
                <a
                  href="mailto:careers@ginascollege.com"
                  className="text-white underline hover:text-white/80 transition-colors"
                >
                  careers@ginascollege.com
                </a>
                . We look forward to hearing from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/about" className="btn btn-white">Learn About the School</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
