import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sexual Violence & Harassment Policy | Gina\'s College',
  description: 'Gina\'s College Sexual Violence and Sexual Harassment Policy as per Bill 132 as Amended, January 12, 2023.',
}

export default function SexualViolenceAndHarassmentPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">College Policy</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-3"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Sexual Violence and Harassment Policy
        </h1>
        <p className="text-[#000000]/40 text-base mb-6">
          As per Bill 132 as Amended — January 12, 2023
        </p>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12">
          Gina's College of Advanced Aesthetics is committed to creating and maintaining a learning and working environment that is free from sexual violence and sexual harassment. This policy applies to all students, staff, instructors, administrators, and visitors of Gina's College.
        </p>

        {/* Policy Sections */}
        <div className="space-y-10">

          {/* Our Commitment */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Our Commitment
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              Gina's College takes all forms of sexual violence and sexual harassment seriously. Any complaint of sexual violence or sexual harassment will be investigated promptly, fairly, and with respect for the privacy and dignity of all involved.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Definitions
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
                <h3 className="font-display text-[#01426A] text-lg font-semibold mb-2">
                  Sexual Violence
                </h3>
                <p className="text-[#000000]/60 text-base leading-relaxed">
                  Any sexual act or act targeting a person's sexuality, gender identity, or gender expression — whether physical or psychological in nature — that is committed, threatened, or attempted against a person without their consent. This includes sexual assault, sexual harassment, stalking, indecent exposure, voyeurism, and cyber sexual violence.
                </p>
              </div>
              <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
                <h3 className="font-display text-[#01426A] text-lg font-semibold mb-2">
                  Sexual Harassment
                </h3>
                <p className="text-[#000000]/60 text-base leading-relaxed">
                  Engaging in a course of vexatious comment or conduct against a person because of their sex, sexual orientation, gender identity, or gender expression, when the person knows or ought to know that the comment or conduct is unwanted.
                </p>
              </div>
            </div>
          </div>

          {/* Reporting */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Reporting
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              Students, staff, or instructors who experience or witness sexual violence or sexual harassment are encouraged to report it. Reports can be made to the college's designated contact person. All reports will be treated with confidentiality to the extent possible.
            </p>
          </div>

          {/* Support Resources */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Support Resources
            </h2>
            <ul className="space-y-3">
              {[
                'Students who have experienced sexual violence have access to support regardless of whether they make a formal complaint',
                'External support resources are available in each community',
                'Students are encouraged to contact the college directly for referrals to local support services',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01426A] flex-shrink-0" />
                  <span className="text-[#000000]/60 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Review */}
          <div>
            <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
              Policy Review
            </h2>
            <p className="text-[#000000]/60 text-lg leading-relaxed">
              This policy is reviewed annually and updated as required to reflect changes in legislation and best practices.
            </p>
          </div>

        </div>

        {/* Blue Info Box */}
        <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 mt-12 mb-10">
          <p className="text-[#01426A] text-lg leading-relaxed">
            For questions about this policy or to make a report, contact Gina's College directly. All inquiries are treated with confidentiality.
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
