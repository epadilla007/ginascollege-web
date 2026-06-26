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
    <div className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-[#01426A]/50 mb-5">Admissions</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            How to Apply.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Four steps. No entrance exam. An admissions advisor with you from the first call
            to the day you start class.
          </p>
        </div>
      </div>

      {/* Step cards */}
      <div className="bg-white">
        <div className="container max-w-[860px] py-16 lg:py-20">
          <div className="space-y-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-6 border"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <span className="font-serif italic text-[#C4856A] text-4xl shrink-0 leading-none mt-0.5">
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
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white">
        <div className="container max-w-[860px] pb-16 lg:pb-20">
          <h2
            className="font-serif text-[#01426A] font-semibold text-2xl mb-6"
          >
            What you&#39;ll need.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {requirements.map((req) => (
              <div
                key={req.label}
                className="p-5 border"
                style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
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
      </div>

      {/* Navy CTA strip — full bleed */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/35 mb-5">Get Started</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Start with a conversation.
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                A free 20-minute consultation with an admissions advisor is the fastest way to
                get clear on which program is right for you, which campus fits your life, and
                what financial aid options you qualify for.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/consultation" className="btn btn-white">Free Consultation</Link>
              <Link href="/apply" className="btn btn-outline-white">Start Application</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
