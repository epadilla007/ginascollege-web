import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Beauty & Aesthetics Blog — Gina's College",
  description:
    "Industry insights, career advice, and student stories from Gina's College of Advanced Aesthetics.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow text-[#01426A] mb-4">Blog</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Beauty &amp; Aesthetics Blog.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[520px]">
            Industry insights, career advice, and student stories from Gina's College.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="flex flex-col items-center justify-center py-20 px-8 rounded-[8px] border-2 border-[#01426A] text-center">
          <div className="w-12 h-12 rounded-full bg-[#01426A]/10 flex items-center justify-center mb-5">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 5v6l4 2"
                stroke="#01426A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="11" cy="11" r="9" stroke="#01426A" strokeWidth="1.5" />
            </svg>
          </div>
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Coming soon.</h2>
          <p className="text-[#000000]/55 leading-relaxed max-w-[420px]">
            We are working on content that is actually useful for people considering a career in
            aesthetics. Articles, career guides, and student perspectives. Check back shortly.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link href="/programs" className="text-sm font-semibold text-[#01426A] hover:underline">
            Browse programs in the meantime →
          </Link>
        </div>

      </div>
    </div>
  )
}
