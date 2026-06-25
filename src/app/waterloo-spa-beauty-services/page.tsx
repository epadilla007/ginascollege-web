import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Waterloo Spa & Beauty Services — Student Clinic | Gina\'s College',
  description: 'Book spa treatments at Gina\'s College Waterloo. Facials, nails, waxing, hair removal, and laser treatments at student prices.',
}

export default function WaterlooSpaBeautyServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Hero */}
        <p className="eyebrow text-[#01426A] mb-4">Waterloo Campus</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          Spa services.<br />Student prices.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-4 max-w-[680px]">
          All treatments are performed by advanced students under direct instructor supervision at Gina's College Waterloo campus.
        </p>
        <p className="text-[#000000]/60 text-base mb-16">
          <span className="font-semibold text-[#01426A]">Location:</span> 305 King St W, Waterloo, ON
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
                { name: 'Body Wrap', price: '$65' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hair Removal / Waxing */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              HAIR REMOVAL / WAXING
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
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Laser Treatments */}
          <div className="mb-10">
            <h2 className="font-display text-[#01426A] text-xl font-semibold mb-4 pb-2 border-b border-[#E9E9E9]">
              LASER TREATMENTS
            </h2>
            <div className="space-y-0">
              {[
                { name: 'IPL Treatment (Face)', price: '$125' },
                { name: 'Photo Facial', price: '$115' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-baseline py-2 border-b border-[#E9E9E9]/60">
                  <span className="text-[#000000]/80">{item.name}</span>
                  <span className="font-semibold text-[#01426A] ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Note + Hair Design Link */}
        <div className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 mb-12">
          <p className="text-[#000000]/60 text-sm leading-relaxed mb-3">
            All services performed by students under instructor supervision. Prices are subject to change — please call ahead to confirm availability.
          </p>
          <p className="text-[#000000]/60 text-sm">
            Also at Waterloo:{' '}
            <Link href="/waterloo-hair-design-services" className="text-[#01426A] font-semibold underline underline-offset-2">
              Waterloo Hair Design Services
            </Link>
          </p>
        </div>

        {/* CTA */}
        <section className="p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10 text-center">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-3">Book Your Appointment</h2>
          <p className="text-[#000000]/60 text-lg leading-relaxed mb-6">
            Experience professional-quality services at student prices at our Waterloo campus.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us to Book
          </Link>
        </section>

      </div>
    </main>
  )
}
