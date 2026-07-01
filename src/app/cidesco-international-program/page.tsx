import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "CIDESCO International Program | Gina's College of Advanced Aesthetics",
  description:
    "Gina's College is Ontario's only CIDESCO-accredited career college. The CIDESCO International Diploma is the world's most recognized qualification in aesthetics and beauty therapy.",
}

export default function CidescoProgramPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[860px]">
          <p className="eyebrow text-[#C4856A] mb-5">International Accreditation</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            CIDESCO International Program
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            If you are considering a career in aesthetics, choose the CIDESCO International Diploma
            Program — now offered at Gina&apos;s College of Advanced Aesthetics.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container max-w-[860px]">

          {/* Intro */}
          <div className="mb-14">
            <p className="text-[#000000]/70 text-lg leading-relaxed mb-6">
              The passion and commitment to the highest standards in the Gina&apos;s College
              education programs prepares students to take the International CIDESCO Examination. By
              passing this exam, beauty and aesthetics professionals earn the prestigious
              world-renowned CIDESCO International Beauty Therapist Diploma.
            </p>
            <p className="text-[#000000]/70 text-lg leading-relaxed">
              A CIDESCO Diploma is the world&apos;s most highly recognized qualification in the
              field of aesthetics and beauty therapy.
            </p>
          </div>

          {/* CIDESCO badge callout */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 mb-14 border"
            style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-cream-deep)' }}
          >
            <div className="shrink-0">
              <span className="inline-flex items-center justify-center border-2 border-[#C4856A] text-[#C4856A] px-8 py-4 text-sm font-bold uppercase tracking-widest text-center">
                CIDESCO<br />Certified
              </span>
            </div>
            <div>
              <p className="font-semibold text-[#01426A] mb-2">
                Ontario&apos;s only CIDESCO-accredited career college.
              </p>
              <p className="text-[#000000]/60 text-sm leading-relaxed">
                Gina&apos;s College is proud to be part of a reputable group of over 200 CIDESCO
                schools worldwide — each held to the same internationally acclaimed standards.
              </p>
            </div>
          </div>

          {/* What is CIDESCO */}
          <div className="mb-14">
            <h2
              className="font-serif italic text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              What is CIDESCO?
            </h2>
            <p className="text-[#000000]/70 leading-relaxed mb-5">
              CIDESCO is the world&apos;s foremost international beauty therapy association. The
              organization was founded in 1946, with its head office in Zurich, Switzerland. This
              international association of cosmetologists, aestheticians, and beauty technicians
              promotes aesthetics worldwide.
            </p>
            <p className="text-[#000000]/70 leading-relaxed mb-5">
              Since 1957, the CIDESCO qualification has established standards accepted across five
              continents. It unites members from many countries on both a national and international
              level. Today, CIDESCO is represented in over 33 countries and encourages the exchange
              of professional knowledge, new developments, and information. Yearly international
              congresses are held around the world, where professional aestheticians stay current on
              advancements and share ideas with peers.
            </p>
          </div>

          {/* International CIDESCO Schools */}
          <div className="mb-14">
            <h2
              className="font-serif italic text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              International CIDESCO Schools
            </h2>
            <p className="text-[#000000]/70 leading-relaxed mb-5">
              There are over 200 CIDESCO schools around the world. Each adheres to the
              internationally acclaimed CIDESCO standards, leading students to qualify for the
              prestigious CIDESCO Diploma. These schools&apos; aesthetics programs must teach the
              CIDESCO curriculum established by an international Education Committee, and are
              required to conform to high standards regarding their facilities, equipment, and
              treatment methods taught.
            </p>
            <p className="text-[#000000]/70 leading-relaxed mb-5">
              Schools approved by CIDESCO International must provide a training period of at least
              1,200 hours and follow the educational standards established by CIDESCO. Students
              undergo practical and theoretical examinations supervised by an International Examiner
              appointed by CIDESCO. Candidates for the diploma are obliged to be a member of their
              CIDESCO National Section.
            </p>
            <p className="text-[#000000]/70 leading-relaxed">
              Gina&apos;s College continues to offer an Advanced Aesthetics and Spa Beauty Therapy
              CIDESCO Diploma Course. This curriculum prepares our students for the international
              exam. The CIDESCO Diploma is awarded to candidates who have passed both practical and
              written examinations and have completed at least 600 hours of salon experience.
              CIDESCO Diploma holders also receive a CIDESCO Badge that is instantly recognized
              globally as a sign of excellence, expertise, knowledge, and professionalism.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-14">
            <h2
              className="font-serif italic text-[#01426A] mb-6"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              Advantages of being a CIDESCO Diploma holder
            </h2>
            <p className="text-[#000000]/70 leading-relaxed mb-6">
              This world-renowned qualification is the pinnacle of professionalism, opening doors to
              many prestigious career opportunities all over the world. Potential employers and
              clients recognize the value and skills that the CIDESCO achievement represents.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Recognized in over 33 countries worldwide',
                'Opens doors to international career opportunities',
                'Respected by employers in luxury spas and medical clinics',
                'CIDESCO Badge recognized as a global mark of excellence',
                'Access to yearly international CIDESCO congresses',
                'Foundation for building a premium, in-demand practice',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border"
                  style={{ borderColor: 'var(--color-cream-deep)', backgroundColor: 'var(--color-cream)' }}
                >
                  <span className="mt-0.5 shrink-0 text-[#C4856A] font-semibold text-sm">✓</span>
                  <p className="text-sm text-[#000000]/70 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* More info */}
          <div
            className="border-l-2 border-[#B1C6D9] pl-5 mb-10"
          >
            <p className="text-[#000000]/60 text-sm leading-relaxed">
              Broaden your horizons and discover a world of opportunities. Grow your business and
              become in-demand for employers and clients. CIDESCO is &ldquo;the world standard for
              beauty and spa therapy.&rdquo; You can also visit{' '}
              <a
                href="https://www.cidesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01426A] font-semibold hover:underline"
              >
                cidesco.com
              </a>{' '}
              for additional information.
            </p>
          </div>

        </div>
      </div>

      {/* Navy CTA strip */}
      <div className="bg-[#01426A]">
        <div className="container max-w-[860px] py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[520px]">
              <p className="eyebrow text-white/60 mb-5">Get Started</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
              >
                Start earning your CIDESCO Diploma today.
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Contact us to book a free campus tour and personal career consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/consultation" className="btn btn-white">Book a Free Info Session</Link>
              <Link href="/programs/medical-aesthetics" className="btn btn-outline-white">Medical Aesthetics Program</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
