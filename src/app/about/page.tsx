import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Gina's College — 45 Years of Training the Industry",
  description:
    "Founded in 1979 by an aesthetician who believed real training meant real clients. Three generations, three campuses, and one philosophy that has not changed.",
}

const stats = [
  { value: '1979', label: 'Year founded' },
  { value: '3', label: 'Campuses across Ontario' },
  { value: 'CIDESCO', label: 'Internationally accredited' },
  { value: '95%+', label: 'Graduate employment rate' },
]

const reasons = [
  {
    title: 'Owners teach on the floor.',
    body: "This is not a school where ownership is a wall. The people who built this school are still in the clinic with students every day. You see them. They see you.",
  },
  {
    title: 'Programs updated annually.',
    body: 'Every year we ask employers what they are hiring for and what graduates are missing. That feedback shapes every intake. You train for the industry that exists right now.',
  },
  {
    title: 'Students are known by name.',
    body: "Gina's has never scaled to the point where a student is anonymous. You are not a number here. Instructors know your progress, your goals, and your gaps.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero — cream bg */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[960px]">
          <p className="eyebrow text-[#01426A]/50 mb-5">Our Story</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(52px, 6vw, 88px)' }}
          >
            45 years of training the industry.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Gina's College of Advanced Aesthetics was founded in 1979 by Gina, an aesthetician who
            believed that real training meant real clients. Three generations of the same family later,
            the school is still privately owned and the owners are still on the floor with students
            every day.
          </p>
        </div>
      </div>

      {/* Stats band — gap-px grid */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container py-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(196,133,106,0.2)' }}>
            {stats.map((stat) => (
              <div key={stat.value} className="py-10 px-8" style={{ backgroundColor: 'var(--color-cream)' }}>
                <span
                  className="stat-number block text-[#01426A]"
                  style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
                >
                  {stat.value}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#01426A]/60 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who is Gina? — white section */}
      <div className="bg-white">
        <div className="container py-16 lg:py-24 max-w-[960px]">
          <h2
            className="font-serif italic text-[#01426A] mb-6"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
          >
            Who is Gina?
          </h2>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Gina built the school on one idea: that hands-on training with real clients produces
            aestheticians who are genuinely ready for the industry. That philosophy still drives
            everything. Approximately 70% of every program is practical, in-clinic time. When you
            graduate, you have the hours to prove it.
          </p>
        </div>
      </div>

      {/* Why family-owned matters — white section */}
      <div className="bg-white">
        <div className="container pb-16 lg:pb-24 max-w-[960px]">
          <h2
            className="font-serif italic text-[#01426A] mb-10"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
          >
            Why family-owned matters.
          </h2>
          <div className="space-y-10">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-8">
                <div className="shrink-0">
                  <span
                    className="font-serif italic text-[#C4856A] leading-none"
                    style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-[#000000] mb-2">{reason.title}</p>
                  <p className="text-[#000000]/60 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registered Career College — cream section */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container py-16 lg:py-24 max-w-[960px]">
          <h2
            className="font-serif italic text-[#01426A] mb-6"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
          >
            Registered Career College.
          </h2>
          <div className="max-w-[680px] space-y-4">
            <p className="text-[#000000]/60 leading-relaxed">
              Gina's College is registered under the Ontario Career Colleges Act, 2005 and regulated by
              the Ontario Ministry of Colleges and Universities. Registration means your credential is
              recognized by employers and government programs across Ontario.
            </p>
            <p className="text-[#000000]/60 leading-relaxed">
              Diploma programs at Gina's College are OSAP-eligible. If you qualify for Ontario Student
              Assistance Program funding, you can apply it directly toward tuition. Your admissions
              advisor can walk you through the process before you commit to anything.
            </p>
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
                Start your career.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/apply" className="btn btn-white">Apply Now</Link>
              <Link href="/consultation" className="btn btn-outline-white">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
