import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Terms of Use — Gina's College",
  description: "Terms of use for the Gina's College website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[700px]">

        <div className="mb-10">
          <p className="eyebrow text-[#01426A] mb-4">Legal</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Terms of Use
          </h1>
        </div>

        <div className="prose prose-sm max-w-none text-[#000000]/65 leading-relaxed space-y-5">
          <p>
            This page is a placeholder. The full terms of use for the Gina's College website will
            be published here shortly.
          </p>
          <p>
            By using this website, you agree that the content provided is for informational purposes
            only. Program details, tuition fees, and start dates are subject to change. Please
            contact an admissions advisor for the most current information before making any
            enrollment decisions.
          </p>
          <p>
            All content on this website, including text, images, and design, is the property of
            Gina's College of Advanced Aesthetics and may not be reproduced without written
            permission.
          </p>
          <p>
            If you have questions in the meantime, please reach out through the contact page.
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
