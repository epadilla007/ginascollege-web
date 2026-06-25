import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building a Foundation for Success — Our Training Philosophy | Gina\'s College',
  description: 'Gina\'s College believes real training means real clients. 70% of every program is hands-on clinic time. Learn how we prepare graduates for careers in aesthetics.',
}

const stats = [
  { value: '70%', label: 'Practical clinic time' },
  { value: '45+', label: 'Years of training graduates' },
  { value: '95%+', label: 'Graduate employment rate' },
  { value: '3', label: 'Campuses across Ontario' },
]

const pillars = [
  {
    heading: '70% Practical Training',
    body: 'Every Gina\'s College program is built around the belief that confidence comes from hours in the clinic — not from sitting in a classroom. When you graduate, you have the hands-on experience employers are looking for, not just theory.',
  },
  {
    heading: 'Real Clients. Real Experience.',
    body: 'Students at Gina\'s College work with real clients throughout their training. By the time you graduate from a diploma program, you have logged hundreds of clinic hours and performed treatments on real people, not mannequins.',
  },
  {
    heading: 'Instructor-Led, Not Lecture-Based',
    body: 'Our instructors are working professionals who teach on the clinic floor alongside students. You are not watching a demonstration — you are performing the treatment with an expert beside you.',
  },
  {
    heading: 'Industry-Updated Annually',
    body: 'Every year we review our curriculum against what employers are asking for. If a new technique is being requested in spas and salons, it gets added to the programs. You train for the industry that exists now, not the one from five years ago.',
  },
]

export default function BuildingAFoundationForSuccessPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Our Approach</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Building a foundation for success.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-14">
          At Gina's College, we believe that training for the beauty and aesthetics industry means learning by doing. Approximately 70% of every program is hands-on, in-clinic time.
        </p>

        {/* Pillars */}
        <div className="space-y-8 mb-16">
          {pillars.map((pillar) => (
            <div key={pillar.heading} className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
                {pillar.heading}
              </h2>
              <p className="text-[#000000]/60 text-lg leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-[#01426A] font-semibold leading-none mb-2"
                style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
              >
                {stat.value}
              </p>
              <p className="text-[#000000]/50 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href="/programs" className="btn btn-primary">
            Explore Programs
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Book a Campus Tour
          </Link>
        </div>

      </div>
    </main>
  )
}
