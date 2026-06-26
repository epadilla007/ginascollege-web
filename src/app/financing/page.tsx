import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "OSAP & Financial Aid — Gina's College Ontario",
  description:
    "Gina's College is OSAP-eligible. Learn how to fund your aesthetics, hairstyling, or medical aesthetics diploma with government financial aid. 3 campuses across Ontario.",
}

const faqs = [
  {
    q: "Is Gina's College OSAP-eligible?",
    a: "Yes. All four diploma programs at Gina's College qualify for OSAP funding. Gina's College is a registered private career college under the Ontario Career Colleges Act, 2005 — a requirement for OSAP eligibility that many aesthetics schools do not meet.",
  },
  {
    q: "How much OSAP can I receive?",
    a: "The amount depends on your income, family income, and program length. Full-time diploma students typically receive a mix of grants (which don't need to be repaid) and loans. An admissions advisor can walk you through the expected range for your specific program.",
  },
  {
    q: "Can I apply for OSAP before I apply to Gina's College?",
    a: "You need to apply to Gina's College first and receive an acceptance letter before submitting your OSAP application. Once accepted, your admissions advisor will provide your program's school code and help you complete the OSAP application.",
  },
  {
    q: "Are certificate programs OSAP-eligible?",
    a: "OSAP covers diploma programs. Most certificate programs at Gina's College are shorter (weeks, not months) and fall outside OSAP's minimum program length threshold. Your admissions advisor can confirm eligibility for any specific certificate program.",
  },
  {
    q: "What if I don't qualify for OSAP?",
    a: "Gina's College offers flexible payment plans. You can pay tuition on a monthly basis rather than in one lump sum. An admissions advisor will help you find a payment structure that works.",
  },
  {
    q: "What other financial support is available?",
    a: "Some students qualify for Second Career, Canada Training Credit, and other provincial programs depending on employment history and circumstances. The Financial Aid Officer at each campus can review your situation and identify programs you may qualify for.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Cream Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Financial Aid</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            OSAP covers your diploma. Here is how.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Gina's College is a registered private career college under the Ontario Career
            Colleges Act, 2005. That registration is what makes our diploma programs
            OSAP-eligible — and why most aesthetics schools in Ontario cannot say the same.
          </p>
        </div>
      </div>

      {/* Key Facts */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container max-w-[860px]">

          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {[
              {
                stat: 'OSAP Eligible',
                label: 'All 4 diploma programs',
                detail: 'Medical Aesthetics, Advanced Aesthetics, Hairstyling, Electrolysis & Light Technology',
              },
              {
                stat: 'Registered',
                label: 'Ontario Career Colleges Act',
                detail: 'Registered since 1979. Audited annually by the Superintendent of Career Colleges.',
              },
              {
                stat: 'Flexible',
                label: 'Monthly payment plans',
                detail: 'For students who need options beyond OSAP.',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="p-6 border"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <p className="font-serif italic text-[#01426A] text-2xl mb-1">{item.stat}</p>
                <p className="text-sm font-semibold text-[#000000] mb-2">{item.label}</p>
                <p className="text-xs text-[#000000]/50 leading-snug">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* How to apply for OSAP */}
          <div className="mb-14">
            <h2
              className="font-serif text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              How to apply for OSAP
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Apply to Gina\'s College',
                  body: 'Submit your application and receive your acceptance letter. You need this before starting your OSAP application.',
                },
                {
                  step: '02',
                  title: 'Get your school and program codes',
                  body: 'Your admissions advisor will give you the OSAP institution code and program code for your diploma.',
                },
                {
                  step: '03',
                  title: 'Apply at osap.gov.on.ca',
                  body: 'Complete your OSAP application online. Applications typically open several months before the program start date.',
                },
                {
                  step: '04',
                  title: 'Receive your funding assessment',
                  body: 'OSAP will send a Notice of Assessment showing your grant and loan amounts. Funds are deposited directly to the school and to you, depending on the allocation.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 p-6 border"
                  style={{ borderColor: 'var(--color-cream-deep)' }}
                >
                  <span className="font-serif italic text-[#C4856A] text-4xl shrink-0 leading-none mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-[#000000] mb-1">{item.title}</p>
                    <p className="text-sm text-[#000000]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-14">
            <h2
              className="font-serif text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 border"
                  style={{ borderColor: 'var(--color-cream-deep)' }}
                >
                  <p className="font-semibold text-[#000000] mb-2">{faq.q}</p>
                  <p className="text-sm text-[#000000]/65 leading-relaxed">{faq.a}</p>
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
              <p className="eyebrow text-white/60 mb-5">Financial Aid</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Speak with a Financial Aid Officer.
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Each campus has a dedicated Financial Aid Officer who can review your OSAP eligibility,
                walk you through payment plan options, and answer questions about Second Career
                and other government programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/apply" className="btn btn-white">Start Your Application</Link>
              <Link href="/consultation" className="btn btn-outline-white">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Contact Mini-Cards */}
      <div className="bg-white py-12">
        <div className="container max-w-[860px]">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                campus: 'Mississauga',
                email: 'mississauga@ginascollege.com',
                phone: '(905) 602-8891',
              },
              {
                campus: 'Waterloo',
                email: 'waterloo@ginascollege.com',
                phone: '(519) 886-2998',
              },
              {
                campus: 'Ottawa',
                email: 'ottawa@ginascollege.com',
                phone: '(613) 789-7875',
              },
            ].map((c) => (
              <div
                key={c.campus}
                className="p-5 border"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <p className="font-semibold text-[#01426A] text-sm mb-2">{c.campus}</p>
                <a
                  href={`tel:${c.phone.replace(/\D/g, '')}`}
                  className="block text-sm text-[#000000]/60 hover:text-[#01426A] transition-colors"
                >
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="block text-xs text-[#000000]/40 hover:text-[#01426A] transition-colors mt-1"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
