import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Book a Free Consultation — Gina's College",
  description:
    "Book a free 15-minute consultation with a Gina's College admissions advisor. No commitment. Get your questions answered about programs, OSAP, and campus options.",
}

const inputClass =
  'w-full px-4 py-3 border border-[#EDE3D6] rounded-none text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#C4856A] focus:ring-1 focus:ring-[#C4856A] transition-colors'

const selectClass =
  'w-full px-4 py-3 border border-[#EDE3D6] rounded-none text-[#000000] bg-white focus:outline-none focus:border-[#C4856A] focus:ring-1 focus:ring-[#C4856A] transition-colors'

const whatToExpect = [
  {
    title: '15 minutes',
    body: 'No sales pitch. Just your questions answered.',
  },
  {
    title: 'No commitment',
    body: "You're not signing anything. This is a conversation.",
  },
  {
    title: 'Real advisor',
    body: 'Someone who knows every program inside and out.',
  },
]

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Free Consultation</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Get your questions answered. Free.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            A 15-minute call with an admissions advisor who knows every program inside out.
            Ask about OSAP, start dates, campus options, or what a career in aesthetics
            actually pays.
          </p>
        </div>
      </div>

      {/* Form section */}
      <div className="bg-white">
        <div className="container max-w-[800px] py-16 lg:py-20 pb-24">

          {/* What-to-expect cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {whatToExpect.map((item) => (
              <div
                key={item.title}
                className="p-6 border"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <p className="font-serif text-[#01426A] font-semibold text-lg mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-[#000000]/60 leading-snug">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Consultation form */}
          <form className="space-y-6" action="/api/consultation" method="POST">
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
                Which program are you most interested in?
              </label>
              <select
                id="program"
                name="program"
                className={selectClass}
              >
                <option value="">Not sure yet</option>
                <optgroup label="Diploma Programs">
                  <option value="medical-aesthetics">Medical Aesthetics Diploma</option>
                  <option value="advanced-aesthetics">Advanced Aesthetics Diploma</option>
                  <option value="hairstyling">Hairstyling Diploma</option>
                  <option value="electrolysis">Electrolysis &amp; Light Technology Diploma</option>
                </optgroup>
                <optgroup label="Certificate Programs">
                  <option value="nail-technology">Nail Technology</option>
                  <option value="makeup-artistry">Makeup Artistry</option>
                  <option value="other">Other / Not sure</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="campus" className="block text-sm font-semibold text-[#000000] mb-2">
                Which campus interests you?
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
              <label htmlFor="questions" className="block text-sm font-semibold text-[#000000] mb-2">
                What questions do you have? (optional)
              </label>
              <textarea
                id="questions"
                name="questions"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="OSAP eligibility, program start dates, career outcomes, anything else..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-full text-base">
              Book My Free Consultation
            </button>

            <p className="text-xs text-[#000000]/40 text-center">
              An admissions advisor will reach out within 24 hours to schedule a time.
              We will never share your information.
            </p>
          </form>

          {/* Alt CTA */}
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: 'var(--color-cream-deep)' }}>
            <p className="text-sm text-[#000000]/50 mb-4">
              Ready to take the next step?
            </p>
            <Link href="/apply" className="btn btn-secondary text-sm">
              Start Your Application
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
