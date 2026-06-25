import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Waterloo Hair Design Services — Student Salon | Gina\'s College',
  description: 'Affordable hair services at Gina\'s College Waterloo. Cuts, colour, highlights, ombre, perms and more. Student prices under professional supervision.',
}

export default function WaterlooHairDesignServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Hero */}
        <p className="eyebrow text-[#01426A] mb-4">Waterloo Campus</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Hair services.<br />Student prices.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-4 max-w-[680px]">
          Gina's College Waterloo offers a full range of hair design services performed by advanced hairstyling students under direct instructor supervision.
        </p>
        <p className="text-[#000000]/60 text-base mb-16">
          <span className="font-semibold text-[#01426A]">Location:</span> 305 King St W, Waterloo, ON
        </p>

        {/* Price List */}
        <div className="mb-16">

          {/* Cuts & Styling */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              CUTS & STYLING
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Cut & Blow Dry', price: '$22' },
                { name: 'Blow Dry Style', price: '$15' },
                { name: 'Updo / Special Occasion', price: '$45+' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colour */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              COLOUR
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Root Touch Up', price: '$40+' },
                { name: 'Full Colour', price: '$50+' },
                { name: 'Colour Correction', price: 'Consultation' },
                { name: 'Partial Highlights', price: '$55' },
                { name: 'Full Highlights', price: '$65+' },
                { name: 'Ombre / Balayage', price: '$75+' },
                { name: 'Toner', price: '$25+' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chemical Services */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              CHEMICAL SERVICES
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Perm', price: '$55+' },
                { name: 'Relaxer', price: '$50+' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Notes */}
        <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 mb-12">
          <p className="text-[#000000]/60 text-sm leading-relaxed mb-2">
            Prices vary based on hair length and complexity. Consultation required for colour correction services. All services performed by students under instructor supervision.
          </p>
          <p className="text-[#000000]/60 text-sm">
            Also at Waterloo:{' '}
            <Link href="/waterloo-spa-beauty-services" className="text-[#01426A] font-semibold underline underline-offset-2">
              Waterloo Spa & Beauty Services
            </Link>
          </p>
        </div>

        {/* CTA */}
        <section className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 text-center">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Book Your Appointment</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed mb-6">
            Ready for a fresh look? Book a hair design service at our Waterloo campus.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us to Book
          </Link>
        </section>

      </div>
    </main>
  )
}
