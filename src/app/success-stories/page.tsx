import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Graduate Success Stories — Gina's College",
  description:
    "Real graduates. Real careers. Hear from Gina's College alumni who are now working as laser specialists, nail technicians, and aestheticians across Canada.",
}

const testimonials = [
  {
    quote:
      "I selected Gina's College after visiting other schools in the Ottawa area. The length of the program, class size and instructors had much to do with my selection. I am now presently employed as a laser specialist in one of the top medical spas in Ottawa. I would highly recommend Gina's College.",
    name: "Liz M.",
    title: "Laser Specialist, Ottawa",
  },
  {
    quote:
      "My experience could not have been better. I graduated at the top of my class — something I thought I would never achieve.",
    name: "Jessica T.",
    title: "Graduate",
  },
  {
    quote:
      "Our instructors were excellent and went well above to make our experience enjoyable and exceptional.",
    name: "Dawn N.",
    title: "Certified Nail Technician",
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[860px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-10">
          <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
          <span>/</span>
          <span>Success Stories</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Graduate Stories</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Real graduates. Real careers.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[600px]">
            Gina&#39;s College graduates go on to work in top medical spas, dermatology clinics, and
            luxury salons across Ontario and beyond. These are a few of their stories.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 flex flex-col border-l-4 border-l-[#01426A]"
            >
              <blockquote className="flex-1 mb-5">
                <p className="text-[#000000]/65 leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <footer>
                <p className="font-semibold text-[#01426A] text-sm">{t.name}</p>
                <p className="text-xs text-[#000000]/45 mt-0.5">{t.title}</p>
              </footer>
            </div>
          ))}

          {/* Call-to-action card — fills even grid */}
          <div className="p-5 rounded-[8px] border border-[#E9E9E9] bg-[#01426A]/5 flex flex-col justify-center">
            <p className="font-display text-[#01426A] text-xl font-semibold mb-2">
              95%+ employment rate.
            </p>
            <p className="text-sm text-[#000000]/60 leading-relaxed mb-5">
              The majority of Gina&#39;s College graduates are employed in their field within months
              of completing their program. Employers across Ontario know what a Gina&#39;s diploma means.
            </p>
            <Link
              href="/about"
              className="text-xs font-semibold text-[#01426A] hover:text-[#01426A]/70 transition-colors"
            >
              About the school &rarr;
            </Link>
          </div>
        </div>

        {/* What graduates say about the clinic experience */}
        <div className="mb-14 p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-4">
            The clinic makes the difference.
          </h2>
          <p className="text-[#000000]/60 leading-relaxed">
            Approximately 70% of every diploma program is hands-on, in-clinic time with real clients.
            That is not a marketing claim — it is the reason graduates are confident and hireable
            on day one. By the time you complete a Gina&#39;s program, you have the hours and the
            evidence to prove your skills.
          </p>
        </div>

        {/* CTA strip */}
        <div className="bg-[#01426A] rounded-[8px] p-10 lg:p-14">
          <div className="max-w-[520px]">
            <h2 className="font-display text-white text-2xl font-semibold mb-3">
              Ready to write your own story?
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Take the first step. Book a free career consultation or start your application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/apply" className="btn btn-white text-sm">
                Apply Now
              </Link>
              <Link href="/consultation" className="btn btn-outline-white text-sm">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
