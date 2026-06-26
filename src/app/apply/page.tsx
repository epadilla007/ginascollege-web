import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply to Gina\'s College — Start Your Application',
  description:
    'Apply to one of Ontario\'s most prestigious aesthetics schools. OSAP-eligible diploma programs in Mississauga, Waterloo, and Ottawa.',
}

const inputClass =
  'w-full px-4 py-3 border border-[#EDE3D6] rounded-none text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#C4856A] focus:ring-1 focus:ring-[#C4856A] transition-colors'

const selectClass =
  'w-full px-4 py-3 border border-[#EDE3D6] rounded-none text-[#000000] bg-white focus:outline-none focus:border-[#C4856A] focus:ring-1 focus:ring-[#C4856A] transition-colors'

const signals = [
  'No application fee',
  'OSAP funding available',
  'Free campus tour included',
  'Admissions advisor assigned',
]

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero — split layout with image */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-28 lg:pt-36">
        <div className="container max-w-[1100px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div className="pb-12 lg:pb-16">
              <p className="eyebrow text-[#01426A]/80 mb-5">Admissions</p>
              <h1
                className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
                style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
              >
                Start your application.
              </h1>
              <p
                className="text-[#000000]/60 leading-relaxed max-w-[480px]"
                style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
              >
                No application fee. An admissions advisor will respond within 24 hours to walk you
                through the next steps.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&q=80"
                alt="Aesthetics student in professional clinic setting"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="bg-white">
        <div className="container max-w-[800px] py-16 lg:py-20 pb-24">

          {/* Trust signal badges */}
          <div className="flex flex-wrap gap-4 mb-12">
            {signals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-[#000000]/60">
                <span className="w-1.5 h-1.5 bg-[#C4856A] shrink-0" />
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
                  className={inputClass}
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
                  className={inputClass}
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
                className={inputClass}
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
                className={inputClass}
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
                className={selectClass}
              >
                <option value="" disabled>Select a program</option>
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
                className={selectClass}
              >
                <option value="">No preference</option>
                <option value="mississauga">Mississauga</option>
                <option value="waterloo">Waterloo</option>
                <option value="ottawa">Ottawa</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#000000] mb-2">
                Anything you&#39;d like us to know? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Questions about OSAP, start dates, career paths..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-full text-base">
              Submit Application →
            </button>

            <p className="text-xs text-[#000000]/40 text-center">
              By submitting this form, you agree to be contacted by a Gina&#39;s College admissions advisor.
              We will never share your information.
            </p>
          </form>

          {/* Alt CTA */}
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: 'var(--color-cream-deep)' }}>
            <p className="text-sm text-[#000000]/50 mb-4">
              Not ready to apply? Start with a free consultation.
            </p>
            <Link href="/consultation" className="btn btn-secondary text-sm">
              Book a Free Career Consultation
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
