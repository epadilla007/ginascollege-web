import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Who is Gina? — The Founder of Gina's College",
  description:
    "Gina DeCicco founded Gina's College of Advanced Aesthetics in 1979 after immigrating to Canada from Italy. Her story is why the school exists — and why it has never changed its values.",
}

export default function WhoIsGinaPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Cream hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <div className="flex items-center gap-2 text-xs text-[#000000]/40 mb-8">
            <Link href="/about" className="hover:text-[#01426A] transition-colors">About</Link>
            <span>/</span>
            <span>Who is Gina?</span>
          </div>
          <p className="eyebrow text-[#01426A]/50 mb-5">Our Founder</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Who is Gina?
          </h1>
          <p className="text-[#000000]/60 leading-relaxed max-w-[620px]" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
            Gina DeCicco built this school from a single conviction: that women deserve a real career,
            not a certificate. Everything Gina&#39;s College stands for traces back to her.
          </p>
        </div>
      </div>

      {/* Featured portrait — editorial full-width */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(300px, 45vw, 600px)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/FullSizeRender-3-1920w.jpg"
          alt="Gina DeCicco, founder of Gina's College"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Her Story */}
      <div className="bg-white pt-20 pb-10">
        <div className="container max-w-[860px]">
          <div className="mb-10">
            <h2
              className="font-serif italic text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Her story.
            </h2>
            <div className="space-y-5 text-[#000000]/60 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}>
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
        </div>
      </div>

      {/* Two-image editorial break */}
      <div className="bg-white pb-20">
        <div className="container max-w-[1060px]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden" style={{ height: 'clamp(240px, 28vw, 420px)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/wig-about-img122-1920w.png"
                alt="Gina's College ribbon cutting ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden" style={{ height: 'clamp(240px, 28vw, 420px)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/wig-about-img2-1920w.png"
                alt="Gina DeCicco in her early career"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Her Passion — cream info box */}
      <div className="bg-white pb-20">
        <div className="container max-w-[860px]">
          <div
            className="p-8 lg:p-12 border"
            style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
          >
            <h2
              className="font-serif italic text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Her passion.
            </h2>
            <div className="space-y-5 text-[#000000]/60 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}>
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
        </div>
      </div>

      {/* Her Legacy — split: text left, newspaper image right */}
      <div className="bg-white pb-20">
        <div className="container max-w-[1060px]">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
            <div>
              <h2
                className="font-serif italic text-[#01426A] mb-6"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                Her legacy in Canada.
              </h2>
              <div className="space-y-5 text-[#000000]/60 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}>
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
            <div className="relative overflow-hidden mt-2 lg:mt-10" style={{ height: 'clamp(280px, 30vw, 460px)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/wig-about-img3-1920w.png"
                alt="Newspaper clipping about Gina's College"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container py-0">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(196,133,106,0.2)' }}
          >
            {[
              { value: '1979', label: 'Year Gina founded the school' },
              { value: '45+', label: 'Years of family ownership' },
              { value: 'CIDESCO', label: 'International accreditation' },
              { value: '3', label: 'Campuses across Ontario' },
            ].map((stat) => (
              <div key={stat.value} className="py-10 px-8" style={{ backgroundColor: 'var(--color-cream)' }}>
                <span
                  className="stat-number block text-[#01426A]"
                  style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
                >
                  {stat.value}
                </span>
                <p className="text-sm font-medium text-[#000000]/50 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navy CTA strip — full bleed */}
      <div className="bg-[#01426A]">
        <div className="container py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/35 mb-5">The school she built</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                See what she built.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/about" className="btn btn-white">About Gina&#39;s College</Link>
              <Link href="/programs" className="btn btn-outline-white">Explore Programs</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
