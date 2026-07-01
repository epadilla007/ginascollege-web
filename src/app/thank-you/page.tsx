import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Thank You | Gina's College of Advanced Aesthetics",
  description: "Thank you for reaching out to Gina's College. An admissions advisor will be in touch with you shortly.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="container max-w-[640px] text-center">

          {/* Checkmark */}
          <div className="flex items-center justify-center mb-8">
            <span
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#C4856A] text-[#C4856A]"
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14l6 6L23 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <p className="eyebrow text-[#C4856A] mb-5">Message received</p>

          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
          >
            Thank you for reaching out.
          </h1>

          <p
            className="text-[#000000]/60 leading-relaxed mb-10"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            An admissions advisor will be in touch with you shortly. In the meantime, feel free
            to explore our programs or read about campus life at Gina&apos;s College.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn btn-primary">
              Explore programs
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back to home
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
