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
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[800px]">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow text-[#01426A] mb-4">Student Clinic</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            The student clinic.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[600px]">
            Every student at Gina's College works on real paying clients in our student spa. This is
            not optional and it is not simulated. It is the core of how we train. Approximately 70%
            of every diploma program is practical, in-clinic time.
          </p>
        </div>

        {/* Book a service */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">Book a service.</h2>
          <p className="text-[#000000]/60 leading-relaxed mb-8">
            Our student clinic is open to the public. You get professional treatments at below-market
            prices. Every service is supervised by a licensed instructor who is on the floor at all
            times. The quality is verified before your appointment ends.
          </p>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-5 rounded-[8px] border border-[#E9E9E9] hover:border-[#B1C6D9] transition-colors duration-200"
              >
                <p className="font-semibold text-[#01426A] mb-1">{service.name}</p>
                <p className="text-sm text-[#000000]/55 leading-snug">{service.detail}</p>
              </div>
            ))}
          </div>

          {/* Price note */}
          <div className="p-5 rounded-[8px] bg-[#B1C6D9]/15 border border-[#B1C6D9]">
            <p className="text-sm text-[#000000]/70 leading-relaxed">
              <span className="font-semibold text-[#01426A]">Pricing.</span> Clinic services are
              priced well below market rates. Quality is supervised by licensed instructors who
              approve every step of your treatment.
            </p>
          </div>
        </div>

        {/* Why this matters for students */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
            Why this matters for students.
          </h2>
          <p className="text-[#000000]/60 leading-relaxed mb-4">
            Employers verify clinical hours. When you apply for your first position after graduation,
            the question they ask is not what you studied. It is how many real clients you have worked
            on and under what conditions.
          </p>
          <p className="text-[#000000]/60 leading-relaxed mb-4">
            Students who train on mannequins and models graduate with theoretical knowledge. Students
            who train on real clients in a supervised environment graduate with documented hours,
            actual feedback, and the confidence that comes from doing the work for real.
          </p>
          <p className="text-[#000000]/60 leading-relaxed">
            That is the difference between a Gina's graduate and someone who completed the same
            number of classroom hours somewhere else.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#01426A] rounded-[8px] p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-xl lg:text-2xl font-semibold mb-2">
              Book a clinic appointment.
            </h2>
            <p className="text-white/60 text-sm">
              Reach out through the contact page and we will get you scheduled.
            </p>
          </div>
          <Link href="/contact" className="btn btn-white text-sm shrink-0 whitespace-nowrap">
            Contact Us to Book
          </Link>
        </div>

      </div>
    </div>
  )
}
