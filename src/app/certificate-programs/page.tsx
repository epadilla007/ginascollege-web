import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Certificate Programs — 40+ Courses | Gina\'s College',
  description:
    'Over 40 certificate programs in nail care, skin treatments, makeup, massage, hair removal, lashes, permanent makeup and more. Short courses for beauty professionals.',
}

const categories = [
  {
    name: 'Nail Services',
    programs: [
      'Manicure & Pedicure',
      'Nail Technology',
      'Advanced Nail Technology (Acrylics & Gel)',
      'Nail Art',
    ],
  },
  {
    name: 'Skin Care & Facials',
    programs: [
      'Facial',
      'Advanced Facial',
      'European Facial',
      'Back Facial',
      'Microdermabrasion',
      'Ultrasound Facial',
      'Microcurrent Facial',
      'High Frequency Facial',
      'Galvanic Treatment',
      'LED Light Therapy',
      'Chemical Peels',
      'Dermaplaning',
      'Microneedling',
      'Advanced Skin Analysis',
    ],
  },
  {
    name: 'Makeup',
    programs: [
      'Makeup Artistry',
      'Airbrush Makeup',
      'Special Effects Makeup',
    ],
  },
  {
    name: 'Body Treatments',
    programs: [
      'Body Wrap & Exfoliation',
      'Swedish Massage',
      'Hot Stone Massage',
      'Reflexology',
      'Indian Head Massage',
      'Lymphatic Drainage',
      'Cupping Therapy',
      'Aromatherapy',
    ],
  },
  {
    name: 'Hair Removal',
    programs: [
      'Waxing (Face & Body)',
      'Brazilian Waxing',
      'Threading',
      'Sugaring',
      'Electrolysis',
      'Laser Hair Removal / IPL',
    ],
  },
  {
    name: 'Lashes & Brows',
    programs: [
      'Lash Extensions',
      'Lash Lift & Tint',
      'Brow Lamination',
      'Brow Threading',
      'Brow Tinting',
      'Microblading',
      'Permanent Makeup (PMU)',
      'Ombre Powder Brows',
      'Hairstrokes (Nano Brows)',
    ],
  },
  {
    name: 'Specialized',
    programs: [
      'Spray Tanning',
      'Ear Candling (Thermal Auricular Therapy)',
      'Scalp Treatments',
      'Holistic Health',
      'Nutrition & Wellness',
    ],
  },
]

export default function CertificatePrograms() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container max-w-[900px]">

        {/* Header */}
        <p className="eyebrow text-[#01426A] mb-4">Certificate Programs</p>
        <h1
          className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
        >
          40+ specialized certificate programs.
        </h1>
        <p className="text-[#000000]/60 text-lg leading-relaxed mb-12 max-w-[660px]">
          Gina&apos;s College offers over 40 certificate programs for professionals looking to add
          specific skills or for students who want focused training in a particular area. Most
          programs can be completed in days or weeks.
        </p>

        {/* Program Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#01426A]/60 mb-3">
                {category.name}
              </h3>
              <ul className="grid grid-cols-1 gap-0">
                {category.programs.map((program) => (
                  <li
                    key={program}
                    className="text-[#000000]/70 text-sm py-1.5 border-b border-[#E9E9E9]"
                  >
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-[#000000]/50 text-sm leading-relaxed mb-12 border-l-2 border-[#B1C6D9] pl-4">
          Certificate programs are available at select campuses. Contact us to confirm program
          availability, start dates, and pricing at your preferred location.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/apply" className="btn btn-primary">
            Request Info
          </Link>
          <Link href="/diploma-programs" className="btn btn-secondary">
            View Diploma Programs
          </Link>
        </div>

      </div>
    </main>
  )
}
