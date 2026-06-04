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
    body: 'Every role here — instructor, advisor, or clinic staff — connects directly to a student's future. You are not supporting a product. You are part of someone's career launch.',
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

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[860px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-10">
          <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
          <span>/</span>
          <span>Careers</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Join the Team</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Work at Gina&#39;s College
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[600px]">
            We are always looking for passionate, experienced professionals to join our team as
            instructors, admissions advisors, and clinic staff across our three Ontario campuses.
          </p>
        </div>

        {/* How to apply */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-5">
            How to get in touch.
          </h2>
          <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E9E9E9]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-1">Roles we hire for</p>
                <p className="text-sm text-[#000000]/60">Aesthetics Instructors &bull; Hairstyling Instructors &bull; Admissions Advisors &bull; Student Clinic Coordinators &bull; Administrative Staff</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact card */}
        <div className="mb-14 p-6 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-full bg-[#01426A] flex items-center justify-center mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[#000000] mb-1">Send your resume</p>
            <a
              href="mailto:careers@ginascollege.com"
              className="text-[#01426A] text-sm font-medium hover:text-[#01426A]/70 transition-colors"
            >
              careers@ginascollege.com
            </a>
            <p className="text-xs text-[#000000]/45 mt-1">
              Include the role you are interested in and your preferred campus location.
            </p>
          </div>
        </div>

        {/* Why work here */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-6">
            Why Gina&#39;s.
          </h2>
          <div className="space-y-5">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 w-7 h-7 rounded-full bg-[#01426A] flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l2.5 2.5L8 3"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#000000] mb-1">{reason.title}</p>
                  <p className="text-[#000000]/60 leading-relaxed text-sm">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="bg-[#01426A] rounded-[8px] p-10 lg:p-14">
          <div className="max-w-[520px]">
            <h2 className="font-display text-white text-2xl font-semibold mb-3">
              Join a school that has been doing this for 45 years.
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Send your resume and introduction to{' '}
              <a
                href="mailto:careers@ginascollege.com"
                className="text-white underline hover:text-white/80 transition-colors"
              >
                careers@ginascollege.com
              </a>
              . We look forward to hearing from you.
            </p>
            <Link href="/about" className="btn btn-white text-sm">
              Learn About the School
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
