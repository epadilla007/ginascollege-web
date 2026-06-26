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
  'w-full px-4 py-3 border border-[#EDE3D6] rounded-none text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:border-[#C4856A] focus:ring-1 focus:ring-[#C4856A] transition-colors'

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      {/* Hero — cream bg */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[960px]">
          <p className="eyebrow text-[#01426A]/50 mb-5">Contact</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(52px, 6vw, 88px)' }}
          >
            Get in touch.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Questions about programs, admissions, OSAP, or the student clinic. Reach any campus
            directly or use the form below.
          </p>
        </div>
      </div>

      {/* Toll-free bar — full-bleed navy, no rounded corners */}
      <div className="bg-[#01426A]">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-1">Toll-Free</p>
              <a
                href="tel:+18888862998"
                className="font-serif italic text-white hover:underline"
                style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
              >
                1-888-886-2998 ext 208
              </a>
            </div>
            <p className="text-white/60 text-sm">Monday to Friday, 9am to 4:30pm</p>
          </div>
        </div>
      </div>

      {/* Campus cards — white section */}
      <div className="bg-white">
        <div className="container py-16 lg:py-24 max-w-[960px]">
          <div className="grid md:grid-cols-3 gap-5">
            {campuses.map((campus) => (
              <div
                key={campus.name}
                className="p-6 border hover:border-[#C4856A] transition-colors duration-200"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <h2
                  className="font-serif italic text-[#01426A] mb-5"
                  style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                >
                  {campus.name}
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#000000]/40 mb-1">Address</p>
                    <p className="text-sm text-[#000000]/70 leading-snug">{campus.address}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#000000]/40 mb-1">Phone</p>
                    <a href={campus.tel} className="text-sm text-[#01426A] font-semibold hover:underline">
                      {campus.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#000000]/40 mb-1">Email</p>
                    <a
                      href={`mailto:${campus.email}`}
                      className="text-sm text-[#01426A] font-semibold hover:underline break-all"
                    >
                      {campus.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#000000]/40 mb-1">Hours</p>
                    <p className="text-sm text-[#000000]/70">Mon to Fri, 9am to 4:30pm</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-white">
        <div className="container max-w-[960px]">
          <div style={{ borderTop: '1px solid var(--color-cream-deep)' }} />
        </div>
      </div>

      {/* Contact form — white section */}
      <div className="bg-white">
        <div className="container py-16 lg:py-24 max-w-[960px]">
          <div className="max-w-[640px]">
            <h2
              className="font-serif italic text-[#01426A] mb-3"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Send us a message.
            </h2>
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

              <button type="submit" className="btn btn-primary w-full">
                Send Message →
              </button>

              <p className="text-xs text-[#000000]/40 text-center">
                We will never share your information. An advisor will respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Navy CTA strip — full bleed, no rounded corners */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/35 mb-5">Have a question?</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Get in touch.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/apply" className="btn btn-white">Apply Now</Link>
              <Link href="/consultation" className="btn btn-outline-white">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
