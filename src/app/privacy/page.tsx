import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Privacy Policy — Gina's College",
  description: "Privacy policy for Gina's College of Advanced Aesthetics.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[700px]">

        <div className="mb-10">
          <p className="eyebrow text-[#01426A] mb-4">Legal</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-sm max-w-none text-[#000000]/65 leading-relaxed space-y-5">
          <p>
            This page is a placeholder. The full privacy policy for Gina's College of Advanced
            Aesthetics will be published here shortly.
          </p>
          <p>
            Gina's College is committed to protecting the privacy of prospective students, current
            students, alumni, and clinic clients. We collect personal information only for the
            purpose of delivering educational services, processing admissions, and communicating
            with people who have requested information from us.
          </p>
          <p>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes. Information collected through our website forms is used solely to
            respond to your inquiry and, where applicable, support your admissions process.
          </p>
          <p>
            If you have questions about how we handle your data before the full policy is published,
            please contact us directly.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-[#E9E9E9]">
          <Link href="/contact" className="btn btn-secondary text-sm">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  )
}
