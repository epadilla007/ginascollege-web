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
    <div className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-8">
            <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
            <span>/</span>
            <span>Success Stories</span>
          </div>
          <p className="eyebrow text-[#01426A]/80 mb-5">Graduate Stories</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Real graduates. Real careers.
          </h1>
          <p className="text-[#000000]/60 leading-relaxed max-w-[600px]" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
            Gina&#39;s College graduates go on to work in top medical spas, dermatology clinics, and
            luxury salons across Ontario and beyond. These are a few of their stories.
          </p>
        </div>
      </div>

      {/* Testimonial cards + stat card */}
      <div className="bg-white py-20">
        <div className="container max-w-[860px]">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-7 border flex flex-col border-l-4 border-l-[#C4856A]"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                <blockquote className="flex-1 mb-5">
                  <p className="font-serif italic text-[#000000]/65 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <footer>
                  <p className="font-semibold text-[#01426A] text-sm">{t.name}</p>
                  <p className="text-xs text-[#000000]/45 mt-0.5">{t.title}</p>
                </footer>
              </div>
            ))}

            {/* Stat card — fills even grid */}
            <div
              className="p-7 border flex flex-col justify-center"
              style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
            >
              <h3 className="font-serif italic text-[#01426A] text-2xl mb-3">
                95%+ employment rate.
              </h3>
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

          {/* Cream info box */}
          <div
            className="p-8 border mb-0"
            style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
          >
            <h2
              className="font-serif italic text-[#01426A] mb-4"
              style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
            >
              The clinic makes the difference.
            </h2>
            <p className="text-[#000000]/60 leading-relaxed">
              Approximately 70% of every diploma program is hands-on, in-clinic time with real clients.
              That is not a marketing claim — it is the reason graduates are confident and hireable
              on day one. By the time you complete a Gina&#39;s program, you have the hours and the
              evidence to prove your skills.
            </p>
          </div>
        </div>
      </div>

      {/* Navy CTA strip — full bleed */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Take the next step</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                Ready to write your own story?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/apply" className="btn btn-white">Apply Now</Link>
              <Link href="/consultation" className="btn btn-outline-white">Free Consultation</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
