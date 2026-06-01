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
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Hero */}
        <div className="mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Our Story</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            45 years of training the industry.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[600px]">
            Gina's College of Advanced Aesthetics was founded in 1979 by Gina, an aesthetician who
            believed that real training meant real clients. Three generations of the same family later,
            the school is still privately owned and the owners are still on the floor with students
            every day.
          </p>
        </div>

        {/* Who is Gina? */}
        <div className="mb-16">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">Who is Gina?</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed">
            Gina built the school on one idea: that hands-on training with real clients produces
            aestheticians who are genuinely ready for the industry. That philosophy still drives
            everything. Approximately 70% of every program is practical, in-clinic time. When you
            graduate, you have the hours to prove it.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 text-center"
            >
              <p className="font-display text-[#01426A] text-2xl font-semibold mb-1">{stat.value}</p>
              <p className="text-xs text-[#000000]/50 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why family-owned matters */}
        <div className="mb-16">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-8">
            Why family-owned matters.
          </h2>
          <div className="space-y-6">
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
                  <p className="text-[#000000]/60 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registered Career College */}
        <div className="mb-16 p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
            Registered Career College.
          </h2>
          <p className="text-[#000000]/60 leading-relaxed mb-4">
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

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E9E9E9]">
          <Link href="/apply" className="btn btn-primary">
            Start Your Application
          </Link>
          <Link href="/consultation" className="btn btn-secondary">
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </div>
  )
}
