import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Who is Gina? — The Founder of Gina's College",
  description:
    "Gina DeCicco founded Gina's College of Advanced Aesthetics in 1979 after immigrating to Canada from Italy. Her story is why the school exists — and why it has never changed its values.",
}

export default function WhoIsGinaPage() {
  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[860px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-10">
          <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
          <span>/</span>
          <span>Who is Gina?</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Our Founder</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Who is Gina?
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed max-w-[620px]">
            Gina DeCicco built this school from a single conviction: that women deserve a real career,
            not a certificate. Everything Gina&#39;s College stands for traces back to her.
          </p>
        </div>

        {/* Her Story */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-5">Her story.</h2>
          <div className="space-y-4 text-[#000000]/60 text-lg leading-relaxed">
            <p>
              Gina grew up in Italy, where she began her training under an experienced aesthetician
              in Naples. She was not studying a hobby. She was learning a trade — one that demanded
              precision, attention to skin chemistry, and an honest understanding of how to make
              people feel their best.
            </p>
            <p>
              When she immigrated to Canada with her husband Ciro and their four children, she brought
              that training with her. She earned her Canadian aesthetician certification and began
              practising. She was good at it. And she noticed something: the education available to
              aspiring aestheticians in Canada did not match the industry they were entering.
            </p>
            <p>
              So in 1979, she built the school she wished had existed.
            </p>
          </div>
        </div>

        {/* Her Passion */}
        <div className="mb-14 p-8 rounded-[8px] border border-[#B1C6D9] bg-[#B1C6D9]/10">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-5">Her passion.</h2>
          <div className="space-y-4 text-[#000000]/60 leading-relaxed">
            <p>
              Gina&#39;s belief was not simply that aesthetics was a worthwhile career. It was that
              having a career — a real, skilled, well-paying trade — gives women independence.
              That belief shaped every decision she made in building the school.
            </p>
            <p>
              She structured programs around practical, hands-on training because that is how you
              produce graduates who can walk into a clinic on their first day and do the work. She
              kept class sizes small because she believed instructors should know every student&#39;s
              name, goals, and progress. She chose to train real clients in a student clinic because
              that is the only way to close the gap between a classroom and a career.
            </p>
            <p>
              None of that has changed. The philosophy she established in 1979 is still the operating
              model for the school today.
            </p>
          </div>
        </div>

        {/* Her Legacy */}
        <div className="mb-14">
          <h2 className="font-display text-[#01426A] text-2xl font-semibold mb-5">Her legacy in Canada.</h2>
          <div className="space-y-4 text-[#000000]/60 text-lg leading-relaxed">
            <p>
              What Gina built has now outlasted a generation of competitors. Three campuses across
              Ontario. CIDESCO international accreditation — one of the most rigorous credentials
              an aesthetics school can hold. Thousands of graduates working in some of the most
              respected clinics, spas, and medical practices in the country.
            </p>
            <p>
              The school is still family-owned. The people who run it today are still on the floor
              with students. The owners are visible, present, and accountable — exactly the way
              Gina intended.
            </p>
            <p>
              Her name is on the door because her values are still inside it.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '1979', label: 'Year Gina founded the school' },
            { value: '45+', label: 'Years of family ownership' },
            { value: 'CIDESCO', label: 'International accreditation' },
            { value: '3', label: 'Campuses across Ontario' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="p-6 rounded-[8px] border border-[#E9E9E9] bg-[#E9E9E9]/30 text-center"
            >
              <p className="font-display text-[#01426A] text-2xl font-semibold mb-1">{stat.value}</p>
              <p className="text-xs text-[#000000]/50 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-[#01426A] rounded-[8px] p-10 lg:p-14">
          <div className="max-w-[520px]">
            <h2 className="font-display text-white text-2xl font-semibold mb-3">
              See what she built.
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Learn more about the school, its values, and the programs Gina designed to give
              graduates a real foundation for a real career.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="btn btn-white text-sm">
                About Gina&#39;s College
              </Link>
              <Link href="/programs" className="btn btn-outline-white text-sm">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
