import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ottawa Spa & Beauty Services — Student Clinic | Gina\'s College',
  description: 'Book spa and beauty services at Gina\'s College Ottawa. Diego dalla Palma facials, nail care, waxing and advanced esthetic treatments at student prices.',
}

export default function OttawaSpaBeautyServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Hero */}
        <p className="eyebrow text-[#01426A] mb-4">Ottawa Campus</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Spa services.<br />Student prices.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-4 max-w-[680px]">
          Gina's College Ottawa offers professional beauty services performed by advanced students under direct instructor supervision. Our Ottawa clinic uses Diego dalla Palma professional products.
        </p>
        <p className="text-[#000000]/60 text-base mb-16">
          <span className="font-semibold text-[#01426A]">Location:</span> 1765 St Laurent Blvd, Ottawa, ON
        </p>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-6">Services Offered</h2>
          <div className="space-y-4">

            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Diego dalla Palma Facials & Skin Treatments</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Professional skin care treatments using Diego dalla Palma products, customized to your skin type and concerns.
              </p>
            </div>

            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Nail Care (Manicure & Pedicure)</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Classic and gel manicures and pedicures performed by advanced nail care students.
              </p>
            </div>

            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Body Treatments</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Relaxing body treatments including wraps and massage services.
              </p>
            </div>

            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Waxing & Hair Removal</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Facial and body waxing services for smooth, long-lasting results.
              </p>
            </div>

            <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30">
              <p className="font-display text-[#01426A] text-lg font-semibold mb-1">Advanced Esthetic Treatments</p>
              <p className="text-[#000000]/60 text-base leading-relaxed">
                Advanced skin care and esthetic services performed by students in the final stages of their esthetics training.
              </p>
            </div>

          </div>
        </section>

        {/* Pricing Note */}
        <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 mb-12">
          <p className="text-[#000000]/60 text-sm leading-relaxed">
            Contact us to confirm current pricing and availability for Ottawa services. All services are performed by advanced students under direct instructor supervision.
          </p>
        </div>

        {/* CTA */}
        <section className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 text-center">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Book Your Appointment</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed mb-6">
            Contact our Ottawa campus to confirm service availability and pricing, and to schedule your appointment.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </section>

      </div>
    </main>
  )
}
