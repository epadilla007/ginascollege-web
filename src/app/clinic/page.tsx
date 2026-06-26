import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Student Clinic — Real Clients, Supervised Training | Gina's College",
  description:
    "Book a discounted spa treatment at the Gina's College student clinic. Facials, waxing, manicures, makeup, and more, all performed by supervised students.",
}

const services = [
  { name: 'Facials', detail: 'Deep cleansing, hydrating, and anti-aging treatments.' },
  { name: 'Waxing', detail: 'Full body and facial waxing by trained students.' },
  { name: 'Manicures & Pedicures', detail: 'Classic and gel nail services.' },
  { name: 'Makeup Application', detail: 'Day, evening, and event looks.' },
  { name: 'Hair Services', detail: 'Cut, colour, and styling in a salon environment.' },
  { name: 'Electrolysis', detail: 'Permanent hair removal under licensed supervision.' },
]

export default function ClinicPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[800px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Student Clinic</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            The student clinic.
          </h1>
          <p className="text-[#000000]/60 leading-relaxed max-w-[600px]" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
            Every student at Gina&#39;s College works on real paying clients in our student spa. This is
            not optional and it is not simulated. It is the core of how we train. Approximately 70%
            of every diploma program is practical, in-clinic time.
          </p>
        </div>
      </div>

      {/* Book a service */}
      <div className="bg-white py-20">
        <div className="container max-w-[800px]">

          <div className="mb-16">
            <h2
              className="font-serif italic text-[#01426A] mb-5"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Book a service.
            </h2>
            <p className="text-[#000000]/60 leading-relaxed mb-8" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}>
              Our student clinic is open to the public. You get professional treatments at below-market
              prices. Every service is supervised by a licensed instructor who is on the floor at all
              times. The quality is verified before your appointment ends.
            </p>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="p-5 border hover:border-[#C4856A] transition-colors duration-200"
                  style={{ borderColor: 'var(--color-cream-deep)' }}
                >
                  <p className="font-semibold text-[#01426A] mb-1">{service.name}</p>
                  <p className="text-sm text-[#000000]/55 leading-snug">{service.detail}</p>
                </div>
              ))}
            </div>

            {/* Cream info box — pricing note */}
            <div
              className="p-8 border"
              style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
            >
              <h2
                className="font-serif italic text-[#01426A] mb-4"
                style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
              >
                Pricing.
              </h2>
              <p className="text-[#000000]/60 leading-relaxed">
                Clinic services are priced well below market rates. Quality is supervised by licensed
                instructors who approve every step of your treatment.
              </p>
            </div>
          </div>

          {/* Why this matters for students */}
          <div className="mb-0">
            <h2
              className="font-serif italic text-[#01426A] mb-5"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Why this matters for students.
            </h2>
            <div className="space-y-5 text-[#000000]/60 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}>
              <p>
                Employers verify clinical hours. When you apply for your first position after graduation,
                the question they ask is not what you studied. It is how many real clients you have worked
                on and under what conditions.
              </p>
              <p>
                Students who train on mannequins and models graduate with theoretical knowledge. Students
                who train on real clients in a supervised environment graduate with documented hours,
                actual feedback, and the confidence that comes from doing the work for real.
              </p>
              <p>
                That is the difference between a Gina&#39;s graduate and someone who completed the same
                number of classroom hours somewhere else.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Navy CTA strip — full bleed */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Student Clinic</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Book a clinic appointment.
              </h2>
              <p className="text-white/60 mt-4 leading-relaxed" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}>
                Reach out through the contact page and we will get you scheduled.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact" className="btn btn-white">Contact Us to Book</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
