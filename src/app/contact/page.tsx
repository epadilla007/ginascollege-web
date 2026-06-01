import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Contact — Gina's College of Advanced Aesthetics",
  description:
    "Get in touch with any Gina's College campus. Mississauga, Waterloo, and Ottawa. Call, email, or fill out the contact form.",
}

const campuses = [
  {
    name: 'Mississauga',
    address: '7-3045 Southcreek Rd., Mississauga ON L4X 2E9',
    phone: '(905) 602-8891',
    tel: 'tel:+19056028891',
    email: 'mississauga@ginascollege.com',
  },
  {
    name: 'Waterloo',
    address: '385 Weber St. N., Waterloo ON N2J 3J2',
    phone: '(519) 886-2998',
    tel: 'tel:+15198862998',
    email: 'waterloo@ginascollege.com',
  },
  {
    name: 'Ottawa',
    address: '215 Dalhousie St., Ottawa ON K1N 7C9',
    phone: '(613) 789-7875',
    tel: 'tel:+16137897875',
    email: 'ottawa@ginascollege.com',
  },
]

const inputClass =
  'w-full px-4 py-3 border border-[#D4DDE5] rounded-[4px] text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#01426A] focus:ring-1 focus:ring-[#01426A] transition-colors'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[960px]">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow text-[#01426A] mb-4">Contact</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Get in touch.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[520px]">
            Questions about programs, admissions, OSAP, or the student clinic. Reach any campus
            directly or use the form below.
          </p>
        </div>

        {/* Toll-free */}
        <div className="mb-10 p-6 rounded-[8px] bg-[#01426A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Toll-Free</p>
            <a
              href="tel:+18888862998"
              className="font-display text-white text-2xl font-semibold hover:underline"
            >
              1-888-886-2998 ext 208
            </a>
          </div>
          <p className="text-white/60 text-sm">Monday to Friday, 9am to 4:30pm</p>
        </div>

        {/* Campus cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {campuses.map((campus) => (
            <div
              key={campus.name}
              className="p-6 rounded-[8px] border border-[#E9E9E9] hover:border-[#B1C6D9] transition-colors duration-200"
            >
              <h2 className="font-display text-[#01426A] text-lg font-semibold mb-4">{campus.name}</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm text-[#000000]/70 leading-snug">{campus.address}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Phone</p>
                  <a href={campus.tel} className="text-sm text-[#01426A] font-semibold hover:underline">
                    {campus.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${campus.email}`}
                    className="text-sm text-[#01426A] font-semibold hover:underline break-all"
                  >
                    {campus.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-sm text-[#000000]/70">Mon to Fri, 9am to 4:30pm</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E9E9E9] mb-14" />

        {/* Contact form */}
        <div className="max-w-[640px]">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-2">Send us a message.</h2>
          <p className="text-[#000000]/60 text-sm leading-relaxed mb-8">
            We respond within one business day. An admissions advisor will follow up with you directly.
          </p>

          <form className="space-y-6" action="/api/contact" method="POST">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#000000] mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={inputClass}
                  placeholder="First and last name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#000000] mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputClass}
                  placeholder="(905) 000-0000"
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
              <label htmlFor="message" className="block text-sm font-semibold text-[#000000] mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClass} resize-none`}
                placeholder="Ask about programs, OSAP, clinic bookings, start dates..."
              />
            </div>

            <button type="submit" className="btn btn-primary w-full text-base">
              Send Message →
            </button>

            <p className="text-xs text-[#000000]/40 text-center">
              We will never share your information. An advisor will respond within one business day.
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}
