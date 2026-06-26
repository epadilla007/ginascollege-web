import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beauty Clinic — Student Services at Professional Quality | Gina\'s College',
  description: 'Book affordable beauty treatments at Gina\'s College student clinics in Mississauga, Waterloo, and Ottawa. All services performed under instructor supervision.',
}

export default function BeautyClinicPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[900px]">
          <p className="eyebrow text-[#01426A]/50 mb-5">Student Clinic</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Professional services.<br />Student prices.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Gina&#39;s College operates student clinics at each campus where students perform professional beauty services under direct instructor supervision. All treatments are performed by students in their final stages of training.
          </p>
        </div>
      </div>

      {/* Services + Pricing by Campus */}
      <section className="bg-white py-20">
        <div className="container max-w-[960px]">
          <h2
            className="font-serif italic text-[#01426A] mb-14"
            style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          >
            Services &amp; Pricing by Campus
          </h2>

          {/* Mississauga */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-6 flex-wrap">
              <h3 className="font-serif italic text-[#01426A]" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                Mississauga Clinic
              </h3>
              <p className="text-xs text-[#000000]/40 font-medium">7-3045 Southcreek Rd., Mississauga ON</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'rgba(196,133,106,0.15)' }}>
              {([
                { service: 'Basic Facial', price: '$35' },
                { service: 'Deep Cleansing Facial', price: '$45' },
                { service: 'Anti-Aging Facial', price: '$55' },
                { service: 'Chemical Peel', price: '$50' },
                { service: 'Microneedling', price: '$65' },
                { service: 'Eyebrow Wax', price: '$10' },
                { service: 'Full Leg Wax', price: '$35' },
                { service: 'Underarm Wax', price: '$15' },
                { service: 'Manicure', price: '$20' },
                { service: 'Pedicure', price: '$30' },
                { service: 'Gel Manicure', price: '$32' },
                { service: 'Lash Extensions — Classic', price: '$55' },
              ] as { service: string; price: string }[]).map((item) => (
                <div key={item.service} className="flex items-center justify-between px-5 py-3.5 bg-white">
                  <span className="text-sm text-[#000000]/70">{item.service}</span>
                  <span className="text-sm font-semibold text-[#01426A]">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#000000]/40">Prices are approximate student clinic rates and may vary by session.</p>
          </div>

          {/* Waterloo */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-6 flex-wrap">
              <h3 className="font-serif italic text-[#01426A]" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                Waterloo Spa &amp; Clinic
              </h3>
              <p className="text-xs text-[#000000]/40 font-medium">385 Weber St. N., Waterloo ON</p>
            </div>
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-2">Spa &amp; Beauty</p>
              <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'rgba(196,133,106,0.15)' }}>
                {([
                  { service: 'Basic Facial', price: '$35' },
                  { service: 'Deep Cleansing Facial', price: '$45' },
                  { service: 'Anti-Aging Facial', price: '$55' },
                  { service: 'Chemical Peel', price: '$50' },
                  { service: 'Eyebrow Wax', price: '$10' },
                  { service: 'Full Leg Wax', price: '$35' },
                  { service: 'Manicure', price: '$20' },
                  { service: 'Pedicure', price: '$30' },
                  { service: 'Lash Extensions — Classic', price: '$55' },
                ] as { service: string; price: string }[]).map((item) => (
                  <div key={item.service} className="flex items-center justify-between px-5 py-3.5 bg-white">
                    <span className="text-sm text-[#000000]/70">{item.service}</span>
                    <span className="text-sm font-semibold text-[#01426A]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-2 mt-4">Hair Design</p>
              <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'rgba(196,133,106,0.15)' }}>
                {([
                  { service: "Women's Haircut & Style", price: '$30' },
                  { service: "Men's Haircut", price: '$20' },
                  { service: 'Colour — Single Process', price: '$55' },
                  { service: 'Highlights — Partial', price: '$65' },
                  { service: 'Blowout', price: '$30' },
                  { service: 'Updo / Special Occasion', price: '$40' },
                ] as { service: string; price: string }[]).map((item) => (
                  <div key={item.service} className="flex items-center justify-between px-5 py-3.5 bg-white">
                    <span className="text-sm text-[#000000]/70">{item.service}</span>
                    <span className="text-sm font-semibold text-[#01426A]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-[#000000]/40">Hair design services available at Waterloo campus only. Prices are approximate student clinic rates.</p>
          </div>

          {/* Ottawa */}
          <div>
            <div className="flex items-baseline gap-4 mb-6 flex-wrap">
              <h3 className="font-serif italic text-[#01426A]" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                Ottawa Clinic
              </h3>
              <p className="text-xs text-[#000000]/40 font-medium">215 Dalhousie St., Ottawa ON</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'rgba(196,133,106,0.15)' }}>
              {([
                { service: 'Basic Facial', price: '$35' },
                { service: 'Deep Cleansing Facial', price: '$45' },
                { service: 'Anti-Aging Facial', price: '$55' },
                { service: 'Chemical Peel', price: '$50' },
                { service: 'Eyebrow Wax', price: '$10' },
                { service: 'Full Leg Wax', price: '$35' },
                { service: 'Manicure', price: '$20' },
                { service: 'Pedicure', price: '$30' },
                { service: 'Lash Extensions — Classic', price: '$55' },
              ] as { service: string; price: string }[]).map((item) => (
                <div key={item.service} className="flex items-center justify-between px-5 py-3.5 bg-white">
                  <span className="text-sm text-[#000000]/70">{item.service}</span>
                  <span className="text-sm font-semibold text-[#01426A]">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#000000]/40">Prices are approximate student clinic rates and may vary by session.</p>
          </div>

        </div>
      </section>

      {/* How It Works — cream bg */}
      <section style={{ backgroundColor: 'var(--color-cream)' }} className="py-20">
        <div className="container max-w-[900px]">
          <h2
            className="font-serif italic text-[#01426A] mb-10"
            style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div
              className="p-8 border"
              style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
            >
              <p className="font-serif italic text-[#C4856A] mb-3" style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: 1 }}>1</p>
              <h3 className="font-serif text-[#01426A] text-lg mb-2">Browse services</h3>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Browse services and prices by location to find the treatment you&#39;re looking for.
              </p>
            </div>

            <div
              className="p-8 border"
              style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
            >
              <p className="font-serif italic text-[#C4856A] mb-3" style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: 1 }}>2</p>
              <h3 className="font-serif text-[#01426A] text-lg mb-2">Book your appointment</h3>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Book online or call your nearest campus clinic to schedule a time that works for you.
              </p>
            </div>

            <div
              className="p-8 border"
              style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
            >
              <p className="font-serif italic text-[#C4856A] mb-3" style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: 1 }}>3</p>
              <h3 className="font-serif text-[#01426A] text-lg mb-2">Enjoy your treatment</h3>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Enjoy professional-quality treatments at student prices, all under direct instructor supervision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Navy CTA strip — full bleed */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/35 mb-5">Student Clinic</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Ready to book?
              </h2>
            </div>
            <div className="shrink-0">
              <Link href="/contact" className="btn btn-white">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
