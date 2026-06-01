import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Accessibility — Gina's College",
  description: "Accessibility statement for the Gina's College website.",
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[700px]">

        <div className="mb-10">
          <p className="eyebrow text-[#01426A] mb-4">Accessibility</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Accessibility
          </h1>
        </div>

        <div className="prose prose-sm max-w-none text-[#000000]/65 leading-relaxed space-y-5">
          <p>
            Gina's College is committed to making this website accessible to all users, regardless
            of ability or the technology they use to access it.
          </p>
          <p>
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. This
            includes ensuring that all content is perceivable, operable, understandable, and robust
            for users who rely on assistive technologies.
          </p>
          <p>
            We are continuously working to improve the accessibility of this site. If you encounter
            any barriers or have difficulty accessing any part of this website, please contact us
            directly so we can address the issue promptly.
          </p>
          <p>
            You can reach our accessibility contact at{' '}
            <a
              href="mailto:admissions@ginascollege.com"
              className="text-[#01426A] hover:underline font-medium"
            >
              admissions@ginascollege.com
            </a>
            . Please describe the issue you encountered and the page where it occurred, and we will
            respond as quickly as possible.
          </p>
          <p>
            You may also contact us by phone at{' '}
            <a href="tel:+18888862998" className="text-[#01426A] hover:underline font-medium">
              1-888-886-2998 ext 208
            </a>
            , Monday through Friday, 9am to 4:30pm.
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
