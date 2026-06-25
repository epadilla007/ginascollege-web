import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ontario Career Colleges Act — Regulatory Information | Gina\'s College',
  description: 'Gina\'s College is registered under the Ontario Career Colleges Act, 2005, regulated by the Ontario Ministry of Colleges and Universities.',
}

export default function OntarioCareerCollegesActPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Regulatory Information</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Ontario Career Colleges Act, 2005
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12">
          Gina's College of Advanced Aesthetics is a registered career college operating under the Ontario Career Colleges Act, 2005. This page provides information about the Act and how it protects students enrolled at Gina's College.
        </p>

        {/* Sections */}
        <div className="space-y-10">

          {/* What the Act Covers */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              What the Act Covers
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              Gina's College is registered under the Ontario Career Colleges Act, 2005 (the Act), which is administered by the Superintendent of Career Colleges under the Ministry of Colleges and Universities. The Act governs the operation of private career colleges in Ontario and sets out the rights and protections available to students.
            </p>
          </div>

          {/* Student Protections */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Student Protections under the Act
            </h2>
            <ul className="space-y-3">
              {[
                'The right to a written contract before your program begins',
                'The right to a cooling-off period (2 business days) to cancel your contract',
                'Fee protection through the Student Protection Fund, which may provide refunds if a college closes unexpectedly',
                'Clear disclosure of program approval status, costs, and refund policies',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01426A] flex-shrink-0" />
                  <span className="text-[#000000]/60 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Approval */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Program Approval
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              All programs offered at Gina's College are approved under the Act. Approved programs meet the Ministry's standards for curriculum, instructors, and facilities. Approval status is reviewed regularly.
            </p>
          </div>

          {/* More Information */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              More Information
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              For more information about the Ontario Career Colleges Act and your rights as a student, visit{' '}
              <a
                href="https://www.ontario.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01426A] underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                ontario.ca
              </a>{' '}
              or contact the Ministry of Colleges and Universities.
            </p>
          </div>

        </div>

        {/* Blue Info Box */}
        <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 mt-12 mb-10">
          <p className="text-[#01426A] text-lg leading-relaxed">
            Gina's College is committed to full compliance with the Ontario Career Colleges Act, 2005. If you have questions about our registration, program approval status, or student protections, contact us directly.
          </p>
        </div>

        {/* CTA */}
        <div>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

      </div>
    </main>
  )
}
