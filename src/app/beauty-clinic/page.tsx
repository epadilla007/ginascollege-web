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

      {/* Clinic Locations */}
      <section className="bg-white py-20">
        <div className="container max-w-[900px]">
          <h2
            className="font-serif italic text-[#01426A] mb-10"
            style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          >
            Our Clinic Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Mississauga */}
            <div
              className="p-6 border flex flex-col"
              style={{ borderColor: 'var(--color-cream-deep)' }}
            >
              <div className="mb-4">
                <h3 className="font-serif text-[#01426A] text-lg mb-1">Mississauga Clinic</h3>
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
            <div
              className="p-6 border flex flex-col"
              style={{ borderColor: 'var(--color-cream-deep)' }}
            >
              <div className="mb-4">
                <h3 className="font-serif text-[#01426A] text-lg mb-1">Waterloo Spa &amp; Clinic</h3>
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
                  Spa &amp; Beauty Services
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
            <div
              className="p-6 border flex flex-col"
              style={{ borderColor: 'var(--color-cream-deep)' }}
            >
              <div className="mb-4">
                <h3 className="font-serif text-[#01426A] text-lg mb-1">Ottawa Clinic</h3>
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
