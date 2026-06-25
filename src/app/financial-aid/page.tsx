import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Financial Aid — OSAP & Funding Options | Gina\'s College',
  description:
    'Fund your Gina\'s College education through OSAP, Better Jobs Ontario, WSIB, RESP, student loans, or the Lifelong Learning Plan. Talk to an advisor before you apply.',
}

const fundingOptions = [
  {
    title: 'OSAP — Ontario Student Assistance Program',
    description:
      'OSAP is the most common funding source for Gina\'s College students. Diploma programs at Gina\'s are OSAP-eligible, which means you can apply Ontario government grants and loans toward your tuition. The amount you receive depends on your income, family income, and living expenses.',
    who: 'Ontario residents enrolled in an eligible diploma program.',
    note: 'Certificate programs are not OSAP-eligible. Contact admissions to confirm your program\'s eligibility.',
  },
  {
    title: 'Better Jobs Ontario (formerly Second Career)',
    description:
      'If you have been laid off and are looking to retrain in a new field, Better Jobs Ontario may cover your tuition costs. The program is designed for laid-off workers retraining for jobs in high-demand fields — and aesthetics and hairstyling qualify.',
    who: 'Ontario residents who have been laid off and are pursuing employment in an in-demand occupation.',
  },
  {
    title: 'WSIB Training Support',
    description:
      'Workers who have been injured on the job and are retraining through the Workplace Safety and Insurance Board may be eligible to have training costs covered. If you are currently receiving WSIB benefits, speak with your case worker before applying to Gina\'s.',
    who: 'Workers injured on the job currently receiving WSIB support.',
  },
  {
    title: 'RESP — Registered Education Savings Plan',
    description:
      'If you or a family member has an RESP, funds can be used toward tuition at Gina\'s College. The key requirement is that the program must be at least 13 consecutive weeks long — diploma programs at Gina\'s qualify.',
    who: 'Students with an existing RESP. The subscriber (usually a parent) must authorize the withdrawal.',
  },
  {
    title: 'Student Bank Loans',
    description:
      'Private student lines of credit and personal loans from Canadian banks are another option for funding tuition. Most major banks offer student lines of credit with competitive interest rates. Unlike OSAP, these are not tied to specific program eligibility criteria.',
    who: 'Anyone who can qualify for a bank loan or student line of credit.',
  },
  {
    title: 'Lifelong Learning Plan (LLP)',
    description:
      'If you have an RRSP, you can withdraw up to $10,000 per year (maximum $20,000 total) under the Canada Revenue Agency\'s Lifelong Learning Plan to fund full-time education. The funds must be repaid over 10 years.',
    who: 'Canadian residents with an RRSP enrolled in a qualifying educational program.',
  },
]

export default function FinancialAid() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Financial Aid</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          There are more ways to fund your education than you think.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12 max-w-[660px]">
          Gina&apos;s College has helped students access government funding, employer programs, and
          savings plans for over 45 years. Here is a breakdown of the main options available to
          Ontario students.
        </p>

        {/* Funding Option Cards */}
        <div className="grid gap-6 mb-12">
          {fundingOptions.map((option) => (
            <div
              key={option.title}
              className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30"
            >
              <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">
                {option.title}
              </h2>
              <p className="text-[#000000]/60 text-base leading-relaxed mb-4">
                {option.description}
              </p>
              <p className="text-sm text-[#000000]/60 mb-1">
                <span className="font-semibold text-[#01426A]">Who qualifies: </span>
                {option.who}
              </p>
              {option.note && (
                <p className="text-sm text-[#000000]/50 mt-3 border-l-2 border-[#B1C6D9] pl-3">
                  {option.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Blue Info Box */}
        <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 mb-12">
          <p className="text-[#01426A] text-base leading-relaxed">
            The best way to understand your options is to talk to one of our admissions advisors.
            We help students figure out their funding before they commit to anything.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/apply" className="btn btn-primary">
            Speak with an Admissions Advisor
          </Link>
          <Link href="/diploma-programs" className="btn btn-secondary">
            View Diploma Programs
          </Link>
        </div>

      </div>
    </main>
  )
}
