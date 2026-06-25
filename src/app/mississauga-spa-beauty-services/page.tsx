import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mississauga Spa & Beauty Services — Student Clinic | Gina\'s College',
  description: 'Book spa treatments at Gina\'s College Mississauga. Facials, nails, body treatments, hair removal, laser/IPL and electrolysis. Student prices, professional quality.',
}

export default function MississaugaSpaBeautyServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Hero */}
        <p className="eyebrow text-[#01426A] mb-4">Mississauga Campus</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Spa services.<br />Student prices.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-4 max-w-[680px]">
          All treatments are performed by advanced students under direct instructor supervision at Gina's College Mississauga campus. Book your appointment and experience professional-quality care at a fraction of the cost.
        </p>
        <p className="text-[#000000]/60 text-base mb-16">
          <span className="font-semibold text-[#01426A]">Location:</span> 90 Burnhamthorpe Rd W, Mississauga, ON
        </p>

        {/* Price List */}
        <div className="mb-16">

          {/* Facials */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              FACIALS
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Mini Facial', price: '$25' },
                { name: 'Facial Treatment', price: '$50' },
                { name: 'Back Facial', price: '$45' },
                { name: 'Lash Lift & Tint', price: '$65' },
                { name: 'Lash Tint', price: '$25' },
                { name: 'Brow Tint', price: '$25' },
                { name: 'Brow Wax', price: '$20' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nails */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              NAILS
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Manicure', price: '$20' },
                { name: 'Pedicure', price: '$30' },
                { name: 'Gel Manicure', price: '$40' },
                { name: 'Gel Polish Removal', price: '$10' },
                { name: 'Acrylic Full Set', price: '$60' },
                { name: 'Nail Fill', price: '$40' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Body Treatments */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              BODY TREATMENTS
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Swedish Massage (30 min)', price: '$45' },
                { name: 'Swedish Massage (60 min)', price: '$75' },
                { name: 'Body Wrap', price: '$65' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hair Removal */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              HAIR REMOVAL
            </h2>
            <div className="space-y-0">
              {[
                { name: 'Upper Lip', price: '$12' },
                { name: 'Chin', price: '$15' },
                { name: 'Full Face', price: '$45' },
                { name: 'Underarm', price: '$25' },
                { name: 'Bikini', price: '$30' },
                { name: 'Brazilian', price: '$55' },
                { name: 'Half Leg', price: '$35' },
                { name: 'Full Leg', price: '$50' },
                { name: 'Half Arm', price: '$30' },
                { name: 'Full Arm', price: '$45' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Laser / IPL & Photo Facials */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              LASER / IPL & PHOTO FACIALS
            </h2>
            <div className="space-y-0">
              {[
                { name: 'IPL Treatment (Face)', price: '$125' },
                { name: 'Photo Facial', price: '$115' },
                { name: 'Vascular Treatment', price: '$100+' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Electrolysis */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              ELECTROLYSIS
            </h2>
            <div className="space-y-0">
              {[
                { name: '15 min', price: '$30' },
                { name: '30 min', price: '$55' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Note */}
        <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 mb-12">
          <p className="text-[#000000]/60 text-sm leading-relaxed">
            Prices are subject to change. All services performed by students under instructor supervision. Please call ahead to confirm availability.
          </p>
        </div>

        {/* CTA */}
        <section className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 text-center">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Book Your Appointment</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed mb-6">
            Ready to experience professional-quality services at student prices?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us to Book
          </Link>
        </section>

      </div>
    </main>
  )
}
