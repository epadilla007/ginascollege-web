import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply to Gina\'s College — Start Your Application',
  description:
    'Apply to one of Ontario\'s most prestigious aesthetics schools. OSAP-eligible diploma programs in Mississauga, Waterloo, and Ottawa.',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40">
      <div className="container max-w-[800px] pb-24">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow text-[#01426A] mb-4">Admissions</p>
          <h1 className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            Start your application.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[540px]">
            No application fee. An admissions advisor will respond within 24 hours to walk you through the next steps.
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            'No application fee',
            'OSAP funding available',
            'Free campus tour included',
            'Admissions advisor assigned',
          ].map((signal) => (
            <div key={signal} className="flex items-center gap-2 text-sm text-[#000000]/60">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L9 3" stroke="#01426A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {signal}
            </div>
          ))}
        </div>

        {/* Application form */}
        <form className="space-y-6" action="/api/apply" method="POST">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-[#000000] mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-[#000000] mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#000000] mb-2">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#000000] mb-2">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
              placeholder="(905) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-[#000000] mb-2">
              Program of interest <span className="text-red-500">*</span>
            </label>
            <select
              id="program"
              name="program"
              required
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] bg-white focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
            >
              <option value="" disabled selected>Select a program</option>
              <optgroup label="Diploma Programs">
                <option value="medical-aesthetics">Medical Aesthetics Diploma</option>
                <option value="advanced-aesthetics">Advanced Aesthetics Diploma</option>
                <option value="hairstyling">Hairstyling Diploma</option>
                <option value="electrolysis">Electrolysis &amp; Light Technology Diploma</option>
              </optgroup>
              <optgroup label="Certificate Programs">
                <option value="nail-technology">Nail Technology</option>
                <option value="makeup-artistry">Makeup Artistry</option>
                <option value="waxing">Waxing</option>
                <option value="other">Other / Not sure yet</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="campus" className="block text-sm font-semibold text-[#000000] mb-2">
              Preferred campus
            </label>
            <select
              id="campus"
              name="campus"
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] bg-white focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
            >
              <option value="">No preference</option>
              <option value="mississauga">Mississauga</option>
              <option value="waterloo">Waterloo</option>
              <option value="ottawa">Ottawa</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#000000] mb-2">
              Anything you'd like us to know? (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors resize-none"
              placeholder="Questions about OSAP, start dates, career paths..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-full text-base">
            Submit Application →
          </button>

          <p className="text-xs text-[#000000]/40 text-center">
            By submitting this form, you agree to be contacted by a Gina's College admissions advisor.
            We will never share your information.
          </p>
        </form>

        {/* Alternatively */}
        <div className="mt-12 pt-8 border-t border-[#E9E9E9] text-center">
          <p className="text-sm text-[#000000]/50 mb-4">
            Not ready to apply? Start with a free consultation.
          </p>
          <Link href="/consultation" className="btn btn-secondary text-sm">
            Book a Free Career Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
