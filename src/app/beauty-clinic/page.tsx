import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beauty Clinic — Student Services at Professional Quality | Gina\'s College',
  description: 'Book affordable beauty treatments at Gina\'s College student clinics in Mississauga, Waterloo, and Ottawa. All services performed under instructor supervision.',
}

export default function BeautyClinicPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Hero */}
        <p className="eyebrow text-[#01426A] mb-4">Student Clinic</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Professional services.<br />Student prices.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-16 max-w-[680px]">
          Gina's College operates student clinics at each campus where students perform professional beauty services under direct instructor supervision. All treatments are performed by students in their final stages of training.
        </p>

        {/* Location Cards */}
        <section className="mb-20">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-8">Our Clinic Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Mississauga */}
            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 flex flex-col">
              <div className="mb-4">
                <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Mississauga Clinic</p>
                <p className="text-[#000000]/60 text-sm leading-relaxed">
                  90 Burnhamthorpe Rd W<br />
                  Mississauga, ON
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  href="/mississauga-spa-beauty-services"
                  className="btn btn-primary w-full text-center block"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Waterloo */}
            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 flex flex-col">
              <div className="mb-4">
                <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Waterloo Spa & Clinic</p>
                <p className="text-[#000000]/60 text-sm leading-relaxed">
                  305 King St W<br />
                  Waterloo, ON
                </p>
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-2">
                <Link
                  href="/waterloo-spa-beauty-services"
                  className="btn btn-primary w-full text-center block"
                >
                  Spa & Beauty Services
                </Link>
                <Link
                  href="/waterloo-hair-design-services"
                  className="btn btn-secondary w-full text-center block"
                >
                  Hair Design Services
                </Link>
              </div>
            </div>

            {/* Ottawa */}
            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 flex flex-col">
              <div className="mb-4">
                <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Ottawa Clinic</p>
                <p className="text-[#000000]/60 text-sm leading-relaxed">
                  1765 St Laurent Blvd<br />
                  Ottawa, ON
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  href="/ottawa-spa-beauty-services"
                  className="btn btn-primary w-full text-center block"
                >
                  View Services
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
              <p className="font-display text-[#01426A] text-3xl font-semibold mb-3">1</p>
              <p className="font-display text-[#01426A] text-lg font-semibold mb-2">Browse services</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Browse services and prices by location to find the treatment you're looking for.
              </p>
            </div>

            <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
              <p className="font-display text-[#01426A] text-3xl font-semibold mb-3">2</p>
              <p className="font-display text-[#01426A] text-lg font-semibold mb-2">Book your appointment</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Book online or call your nearest campus clinic to schedule a time that works for you.
              </p>
            </div>

            <div className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
              <p className="font-display text-[#01426A] text-3xl font-semibold mb-3">3</p>
              <p className="font-display text-[#01426A] text-lg font-semibold mb-2">Enjoy your treatment</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Enjoy professional-quality treatments at student prices, all under direct instructor supervision.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 text-center">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Ready to book?</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed mb-6">
            Book an appointment at any of our clinic locations.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book an Appointment
          </Link>
        </section>

      </div>
    </main>
  )
}
