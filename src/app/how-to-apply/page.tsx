import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "How to Apply — Gina's College of Advanced Aesthetics",
  description:
    "Applying to Gina's College is straightforward. Book a free consultation, choose your program, submit your application, and confirm enrollment. OSAP-eligible diploma programs.",
}

const steps = [
  {
    step: '01',
    title: 'Book Your Free Career Consultation',
    body:
      "Start with a conversation. Our admissions advisors will walk you through program options, campus schedules, and financial aid. There is no pressure and no obligation.",
    action: { label: 'Book a Consultation', href: '/consultation' },
    phone: '1 (888) 886-2998 ext. 208',
  },
  {
    step: '02',
    title: 'Choose Your Program',
    body:
      'Explore our diploma and certificate programs across three Ontario campuses. Your admissions advisor will help you match the right program to your goals and schedule.',
    action: { label: 'View All Programs', href: '/programs' },
    phone: null,
  },
  {
    step: '03',
    title: 'Submit Your Application',
    body:
      "Complete the program application form. It's straightforward — no entrance exam, no portfolio required. Your advisor will confirm receipt and next steps within one business day.",
    action: { label: 'Start Application', href: '/apply' },
    phone: null,
  },
  {
    step: '04',
    title: 'Confirm Enrollment & Financial Aid',
    body:
      "Review your acceptance letter, explore OSAP options with our Financial Aid Officer, and secure your spot in the program. Once your enrollment is confirmed, you're in.",
    action: { label: 'Learn About OSAP', href: '/financing' },
    phone: null,
  },
]

const requirements = [
  { label: 'Age', detail: '18 years of age or older at program start' },
  { label: 'Residency', detail: 'Ontario resident (for OSAP eligibility)' },
  { label: 'Education', detail: 'Ontario Secondary School Diploma or equivalent, or mature student status' },
  { label: 'Interest', detail: 'A genuine interest in aesthetics, skincare, or the beauty industry' },
]

export default function HowToApplyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[860px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-10">
          <span>How to Apply</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Admissions</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            How to Apply
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[600px]">
            Four steps. No entrance exam. An admissions advisor with you from the first call
            to the day you start class.
          </p>
        </div>

        {/* Step cards */}
        <div className="space-y-4 mb-16">
          {steps.map((item) => (
            <div key={item.step} className="flex gap-5 p-6 rounded-[8px] border border-[#E9E9E9]">
              <span className="font-display text-[#01426A]/20 text-3xl font-bold shrink-0 leading-none mt-0.5">
                {item.step}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-[#000000] mb-1">{item.title}</p>
                <p className="text-sm text-[#000000]/60 leading-relaxed mb-3">{item.body}</p>
                {item.phone && (
                  <p className="text-xs text-[#000000]/45 mb-3">
                    Or call{' '}
                    <a
                      href="tel:18888862998"
                      className="text-[#01426A] font-medium hover:text-[#01426A]/70 transition-colors"
                    >
                      {item.phone}
                    </a>
                  </p>
                )}
                <Link
                  href={item.action.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#01426A] hover:text-[#01426A]/70 transition-colors"
                >
                  {item.action.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-6">
            What you&#39;ll need.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {requirements.map((req) => (
              <div
                key={req.label}
                className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-1.5">
                  {req.label}
                </p>
                <p className="text-sm text-[#000000]/65 leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#000000]/50 leading-relaxed">
            If you are unsure whether you qualify, contact admissions. Mature student pathways
            are available for applicants who do not hold a secondary school diploma.
          </p>
        </div>

        {/* CTA strip */}
        <div className="bg-[#01426A] rounded-[8px] p-10 lg:p-14">
          <div className="max-w-[520px]">
            <h2 className="font-display text-white text-2xl font-semibold mb-3">
              Start with a conversation.
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              A free 20-minute consultation with an admissions advisor is the fastest way to
              get clear on which program is right for you, which campus fits your life, and
              what financial aid options you qualify for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/consultation" className="btn btn-white text-sm">
                Book Free Consultation
              </Link>
              <Link href="/apply" className="btn btn-outline-white text-sm">
                Start Application
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
