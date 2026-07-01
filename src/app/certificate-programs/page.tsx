import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificate Programs — 40+ Courses | Gina\'s College',
  description:
    'Over 40 certificate programs in skin care, PMU, nails, lash & brow, waxing, body treatments, makeup, and more. Short courses for beauty professionals across Ontario.',
}

const categories = [
  {
    name: 'Skin Care',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    imageAlt: "Skin care treatments at Gina's College",
    programs: [
      { title: 'Skin Care Specialist', slug: 'skin-care-specialist', description: 'Full skin care training for working aestheticians.' },
      { title: 'Skin Care Level 1', slug: 'skin-care-level-1', description: 'Entry-level skin care fundamentals and client protocols.' },
      { title: 'Advanced Medical Skin Care Therapist', slug: 'advanced-medical-skin-care-therapist', description: 'Advanced therapist credential for medical aesthetics settings.' },
      { title: 'Advanced Medical Skin Care Therapist + Laser', slug: 'advanced-medical-skin-care-therapist-laser-technician', description: 'Full therapist credential with laser technician add-on.' },
      { title: 'Mechanical Skin Exfoliation', slug: 'mechanical-skin-exfoliation', description: 'Microdermabrasion and mechanical exfoliation techniques.' },
      { title: 'New Facial Technologies', slug: 'new-facial-technologies', description: 'Ultrasound, microcurrent, and LED facial devices.' },
      { title: 'Advanced Skin Care — Nano Mesotherapy', slug: 'advanced-skin-care-nano-mesotherapy', description: 'Nano-channel delivery for active serums and peptides.' },
      { title: 'Advanced Skin Care — Aging Skin', slug: 'advanced-skin-care-aging', description: 'Protocols targeting anti-aging skin concerns.' },
      { title: 'Advanced Skin Care — Oncology', slug: 'advanced-skin-care-oncology', description: 'Skin care adapted for clients in cancer treatment.' },
      { title: 'Advanced Skin Care — Sensitive Skin', slug: 'advanced-skin-care-sensitive-skin', description: 'Treating reactive and sensitized skin types.' },
      { title: 'Advanced Skin Care — Chemical Peels', slug: 'advanced-skin-care-chemical-peels', description: 'Chemical peel application, depths, and post-care.' },
      { title: 'Advanced Skin Care — Hyperpigmentation', slug: 'advanced-skin-care-hyperpigmentation', description: 'Correcting uneven skin tone and post-inflammatory dark spots.' },
      { title: 'Advanced Skin Care — Acne', slug: 'advanced-skin-care-acne', description: 'Acne management protocols for clinical and spa settings.' },
      { title: 'Laser & Light Technology', slug: 'laser-light-technology', description: 'Laser and light device theory, operation, and safety.' },
      { title: 'Laser Hair Removal', slug: 'laser-hair-removal', description: 'Laser hair removal technique, skin typing, and safety.' },
      { title: 'Dermaplaning Level 1', slug: 'dermaplaning-level-1', description: 'Dermaplaning introduction, blade safety, and skin prep.' },
      { title: 'Dermaplaning Level 2', slug: 'dermaplaning-level-2', description: 'Advanced dermaplaning with treatment add-ons.' },
      { title: 'Microneedling Level 1', slug: 'microneedling-level-1', description: 'Microneedling fundamentals and protocol design.' },
      { title: 'Microneedling Level 2', slug: 'microneedling-level-2', description: 'Advanced microneedling with PRP and active ingredient delivery.' },
    ],
  },
  {
    name: 'Permanent Makeup (PMU)',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    imageAlt: "Permanent makeup training at Gina's College",
    programs: [
      { title: 'PMU Eyebrows Level 1', slug: 'pmu-eyebrows-level-1', description: 'Introduction to microblading and powder brow techniques.' },
      { title: 'PMU Eyebrows Level 2', slug: 'pmu-eyebrows-level-2', description: 'Advanced brow PMU, colour theory, and corrections.' },
      { title: 'PMU Lip Blush Level 1', slug: 'pmu-lip-blush-level-1', description: 'Lip blush fundamentals, colour mapping, and application.' },
      { title: 'PMU Lip Blush Level 2', slug: 'pmu-lip-blush-level-2', description: 'Advanced lip blush, neutralization, and corrections.' },
      { title: 'PMU Intralash Level 1', slug: 'pmu-intralash-level-1', description: 'Intralash liner technique introduction and fundamentals.' },
      { title: 'PMU Intralash Level 2', slug: 'pmu-intralash-level-2', description: 'Advanced intralash application and corrections.' },
    ],
  },
  {
    name: 'Nail Technology',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80',
    imageAlt: "Nail technology programs at Gina's College",
    programs: [
      { title: 'Manicure', slug: 'manicure', description: 'Classic manicure techniques and professional polish services.' },
      { title: 'Pedicure', slug: 'pedicure', description: 'Pedicure protocols including callus care and soak treatments.' },
      { title: 'Intro to Nail Enhancements', slug: 'intro-nail-enhancements', description: 'Introduction to nail extension materials and application methods.' },
      { title: 'Gel Nail Enhancements', slug: 'gel-nail-enhancements', description: 'Gel extension application, soaking, and design.' },
      { title: 'Liquid & Powder Nail Enhancements', slug: 'liquid-powder-nail-enhancements', description: 'Acrylic liquid-powder nail system fundamentals.' },
      { title: 'Advanced Sculpting — Acrylic', slug: 'advanced-sculpting-acrylic', description: 'Sculpted acrylic nail artistry and structures.' },
      { title: 'Advanced Sculpting — Gel Nails', slug: 'advanced-sculpting-gel-nails', description: 'Advanced sculpting using builder and hard gel.' },
    ],
  },
  {
    name: 'Lash & Brow',
    image: 'https://images.unsplash.com/photo-1583001308018-97a4e4e6de06?w=700&q=80',
    imageAlt: "Lash and brow programs at Gina's College",
    programs: [
      { title: 'Bold Lash Extensions', slug: 'bold-lash-extensions', description: 'Classic and volume lash extension application technique.' },
      { title: 'Lash Lift & Brow Lamination', slug: 'lash-lift-brow-lamination', description: 'Lash lift, lash tint, and brow lamination in one course.' },
    ],
  },
  {
    name: 'Waxing & Hair Removal',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80',
    imageAlt: "Waxing and hair removal at Gina's College",
    programs: [
      { title: 'Brazilian Waxing', slug: 'brazilian-waxing', description: 'Brazilian and bikini wax techniques for salon professionals.' },
      { title: 'Waxing & Hair Removal', slug: 'waxing-hair-removal', description: 'Full body waxing protocols and pre-treatment skin assessment.' },
      { title: 'Science of Hair Removal', slug: 'science-of-hair-removal', description: 'Biology of hair growth cycles and the science of removal methods.' },
    ],
  },
  {
    name: 'Body Treatments',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&q=80',
    imageAlt: "Body treatment programs at Gina's College",
    programs: [
      { title: 'Body Contouring — Buttocks & Thighs', slug: 'body-contouring-buttock-thighs', description: 'Non-invasive contouring technologies for buttocks and thighs.' },
      { title: 'Body Contouring — Cellulite', slug: 'body-contouring-cellulite', description: 'Cellulite reduction technologies and treatment protocols.' },
      { title: 'Body Sculpting', slug: 'body-sculpting', description: 'Comprehensive body sculpting modalities for spas and clinics.' },
    ],
  },
  {
    name: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80',
    imageAlt: "Makeup artistry programs at Gina's College",
    programs: [
      { title: 'Professional Makeup Design', slug: 'professional-makeup-design', description: 'Complete professional makeup artistry for editorial, bridal, and media.' },
    ],
  },
  {
    name: 'Online & Theory',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80',
    imageAlt: "Online certificate courses at Gina's College",
    programs: [
      { title: 'Bloodborne Pathogens', slug: 'bloodborne-pathogens', description: 'Bloodborne pathogen certification required for esthetic professionals.' },
    ],
  },
]

export default function CertificateProgramsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero header */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[960px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Certificate Programs</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
          >
            40+ certificate programs.
          </h1>
          <p
            className="text-[#000000]/60 leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
          >
            Short, focused programs for professionals adding a new skill or students who want
            specialized training. Most courses take days to weeks, not months.
          </p>
        </div>
      </div>

      {/* Category sections */}
      <div className="bg-white">
        {categories.map((category, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={category.name}
              className="border-b"
              style={{ borderColor: 'var(--color-cream-deep)' }}
            >
              <div className="container max-w-[1060px] py-14 lg:py-20">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image — col-start-2 on odd rows to swap sides */}
                  <div
                    className={`relative overflow-hidden rounded-[4px] ${
                      isEven ? '' : 'lg:col-start-2'
                    }`}
                    style={{ aspectRatio: '4/3' }}
                  >
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#01426A]/05" />
                  </div>

                  {/* Program list */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <h2
                      className="font-serif italic text-[#01426A] mb-8"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                    >
                      {category.name}
                    </h2>
                    <div>
                      {category.programs.map((program, pi) => (
                        <div
                          key={program.slug}
                          className={`py-3.5 ${pi < category.programs.length - 1 ? 'border-b' : ''}`}
                          style={{ borderColor: 'var(--color-cream-deep)' }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-[#000000]/85 text-[15px] leading-snug mb-0.5">
                                {program.title}
                              </p>
                              <p className="text-sm text-[#000000]/50 leading-snug">
                                {program.description}
                              </p>
                            </div>
                            <Link
                              href={`/programs/${program.slug}`}
                              className="shrink-0 text-xs font-semibold text-[#01426A] hover:underline whitespace-nowrap pt-0.5"
                            >
                              Read more →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Note */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container max-w-[960px] py-10">
          <p className="text-sm text-[#000000]/50 leading-relaxed border-l-2 border-[#B1C6D9] pl-4">
            Certificate programs are available at select campuses. Contact us to confirm program
            availability, start dates, and tuition at your preferred location.
          </p>
        </div>
      </div>

      {/* Navy CTA strip */}
      <div className="bg-[#01426A]">
        <div className="container max-w-[960px] py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <p className="eyebrow text-white/60 mb-5">Get Started</p>
              <h2
                className="font-serif italic text-white leading-[1.0]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
              >
                Not sure which program fits?
              </h2>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Book a free 15-minute call with an admissions advisor. They&apos;ll help you find
                the right program for your career goals and schedule.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/consultation" className="btn btn-white">Book a Free Consultation</Link>
              <Link href="/diploma-programs" className="btn btn-outline-white">View Diploma Programs</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
