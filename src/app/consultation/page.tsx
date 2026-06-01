import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Book a Free Consultation — Gina's College",
  description:
    "Book a free 15-minute consultation with a Gina's College admissions advisor. No commitment. Get your questions answered about programs, OSAP, and campus options.",
}

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40">
      <div className="container max-w-[800px] pb-24">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow text-[#01426A] mb-4">Free Consultation</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Let's talk about your future.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[540px]">
            A free 15-minute call with an admissions advisor. Ask anything — programs, OSAP,
            start dates, campus locations, or what a career in aesthetics actually looks like.
          </p>
        </div>

        {/* What to expect */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
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
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30"
            >
              <p className="font-display text-[#01426A] font-semibold text-lg mb-2">
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
              Which program are you most interested in?
            </label>
            <select
              id="program"
              name="program"
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] bg-white focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
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
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] bg-white focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors"
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
              className="w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors resize-none"
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

        {/* Alternative — apply directly */}
        <div className="mt-12 pt-8 border-t border-[#E9E9E9] text-center">
          <p className="text-sm text-[#000000]/50 mb-4">
            Ready to take the next step?
          </p>
          <Link href="/apply" className="btn btn-secondary text-sm">
            Start Your Application
          </Link>
        </div>
      </div>
    </div>
  )
}
