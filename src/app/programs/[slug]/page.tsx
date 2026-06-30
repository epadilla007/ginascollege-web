import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'

const programs: Record<string, {
  title: string
  type: 'diploma' | 'certificate'
  duration: string
  salary: string
  image: string
  description: string
  overview: string
  outcomes: string[]
  curriculum: { module: string; topics: string[] }[]
  careers: string[]
}> = {
  'medical-aesthetics': {
    title: 'Medical Aesthetics',
    type: 'diploma',
    duration: '12 months',
    salary: '$55,000–$90,000+',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85',
    description: 'The most comprehensive medical aesthetics program in Ontario. Train in laser, chemical peels, microneedling, and advanced skin treatments.',
    overview: "Medical aesthetics is the fastest-growing segment of the beauty industry. This 12-month diploma puts you on the floor of our student spa from day one, working with real paying clients under professional supervision. By graduation, you hold a full diploma credential that qualifies you for CIDESCO tracking and OSAP funding — and med spas across Ontario actively recruit from this program.",
    outcomes: [
      'CIDESCO accreditation pathway',
      'OSAP-eligible — government funding available',
      'Real-client clinic training from week one',
      '$55,000–$90,000+ starting salary range',
      '95%+ employment rate within 90 days',
    ],
    curriculum: [
      {
        module: 'Skin Science',
        topics: ['Anatomy and physiology', 'Skin conditions and analysis', 'Ingredient science', 'Contraindications'],
      },
      {
        module: 'Advanced Treatments',
        topics: ['Chemical peels', 'Microneedling', 'Dermaplaning', 'LED therapy', 'High-frequency'],
      },
      {
        module: 'Laser & Light Technology',
        topics: ['Laser principles and safety', 'IPL treatments', 'Nd:YAG laser', 'Client consultations'],
      },
      {
        module: 'Business & Client Relations',
        topics: ['Consultation skills', 'Treatment planning', 'Retail and upselling', 'Health and safety regulations'],
      },
    ],
    careers: ['Medical Spa Aesthetician', 'Laser Technician', 'Skin Care Specialist', 'Clinical Aesthetician', 'Spa Director'],
  },
  'advanced-aesthetics': {
    title: 'Advanced Aesthetics',
    type: 'diploma',
    duration: '10 months',
    salary: '$40,000–$65,000',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85',
    description: 'The full foundation diploma. Everything the industry expects from a certified aesthetician.',
    overview: "The Advanced Aesthetics Diploma is the credential that opens the door to a professional aesthetics career. Over 10 months, you build the full skill set — facials, waxing, body treatments, retail, and client management — while gaining hundreds of hours of real-client experience in our student spa. OSAP-eligible.",
    outcomes: [
      'Full aesthetics diploma credential',
      'OSAP-eligible — government funding available',
      'Real-client clinic training',
      '$40,000–$65,000 starting salary range',
      'Foundation for CIDESCO certification pathway',
    ],
    curriculum: [
      {
        module: 'Skin Care Fundamentals',
        topics: ['Skin types and analysis', 'Basic facials and extractions', 'Exfoliation techniques', 'Mask therapy'],
      },
      {
        module: 'Body Treatments',
        topics: ['Body wraps and scrubs', 'Massage techniques', 'Cellulite treatments', 'Hydrotherapy basics'],
      },
      {
        module: 'Hair Removal',
        topics: ['Waxing (face and body)', 'Threading', 'Sugaring', 'Pre and post care'],
      },
      {
        module: 'Spa Operations',
        topics: ['Client consultations', 'Sanitation standards', 'Retail skills', 'Booking and client management'],
      },
    ],
    careers: ['Spa Aesthetician', 'Facial Specialist', 'Esthetician', 'Wellness Consultant', 'Spa Supervisor'],
  },
  'hairstyling': {
    title: 'Hairstyling',
    type: 'diploma',
    duration: '12 months',
    salary: '$35,000–$70,000+',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Cut, colour, texture, and styling in a professional salon environment.',
    overview: "The Hairstyling Diploma trains you for a professional career in a salon or studio environment. Over 12 months you develop technical skills in cutting, colouring, and styling across all hair types — while building the client communication skills that make stylists build loyal books. OSAP-eligible.",
    outcomes: [
      'Full hairstyling diploma credential',
      'OSAP-eligible — government funding available',
      'Real-client salon floor experience',
      '$35,000–$70,000+ earning range',
      'Provincial licensing exam preparation',
    ],
    curriculum: [
      {
        module: 'Cutting Techniques',
        topics: ['Sectioning and parting', 'Blunt cuts', 'Layering and graduation', 'Razor and texturizing'],
      },
      {
        module: 'Colour',
        topics: ['Colour theory', 'Single-process colour', 'Highlights and balayage', 'Colour correction basics'],
      },
      {
        module: 'Texture Services',
        topics: ['Perming techniques', 'Chemical relaxing', 'Keratin treatments', 'Scalp health'],
      },
      {
        module: 'Styling and Finishing',
        topics: ['Blowouts', 'Updos and formal styling', 'Extensions basics', 'Bridal styling'],
      },
    ],
    careers: ['Hair Stylist', 'Colourist', 'Salon Manager', 'Session Stylist', 'Bridal Stylist'],
  },
  'electrolysis-light-technology': {
    title: 'Electrolysis & Light Technology',
    type: 'diploma',
    duration: '8 months',
    salary: '$50,000–$80,000',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85',
    description: 'Permanent hair removal via electrolysis, laser, and IPL. A high-earning specialization.',
    overview: "Electrolysis and light-based hair removal are among the highest-paid services in the aesthetics industry. This 8-month diploma gives you the technical foundation in electrolysis, laser, and IPL — along with the regulatory knowledge required to operate these devices professionally in Ontario. OSAP-eligible.",
    outcomes: [
      'Electrolysis diploma credential',
      'OSAP-eligible — government funding available',
      'Regulatory compliance training',
      '$50,000–$80,000 starting salary range',
      'High-demand specialization with limited supply',
    ],
    curriculum: [
      {
        module: 'Electrolysis Fundamentals',
        topics: ['Galvanic and thermolysis methods', 'Blend technique', 'Needle insertions', 'Hair growth cycles'],
      },
      {
        module: 'Laser Science',
        topics: ['Laser-tissue interaction', 'Fitzpatrick skin typing', 'Nd:YAG and diode lasers', 'Safety protocols'],
      },
      {
        module: 'IPL Technology',
        topics: ['IPL principles', 'Treatment parameters', 'Contraindications', 'Client consultations'],
      },
      {
        module: 'Regulations & Business',
        topics: ['Ontario regulatory requirements', 'Informed consent', 'Business setup', 'Pricing services'],
      },
    ],
    careers: ['Electrolysis Specialist', 'Laser Technician', 'IPL Specialist', 'Clinic Owner', 'Medical Spa Technician'],
  },
  'nail-technology': {
    title: 'Nail Technology',
    type: 'certificate',
    duration: '3 months',
    salary: '$30,000–$55,000',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Manicures, pedicures, gel, acrylics, and nail art in a professional setting.',
    overview: "The Nail Technology Certificate covers the full range of nail services offered in modern salons and spas. In 3 months you develop proficiency in manicures, pedicures, gel polish, acrylic extensions, and nail art — with real-client practice included.",
    outcomes: ['Nail technology certificate', 'Real-client practice', 'Gel and acrylic training', 'Nail art fundamentals'],
    curriculum: [
      { module: 'Nail Care', topics: ['Manicures and pedicures', 'Cuticle care', 'Nail conditions'] },
      { module: 'Enhancement Services', topics: ['Acrylic extensions', 'Gel polish', 'Nail wraps'] },
      { module: 'Nail Art', topics: ['Stamping', 'Freehand design', 'Embellishments'] },
    ],
    careers: ['Nail Technician', 'Nail Artist', 'Salon Nail Specialist'],
  },
  'makeup-artistry': {
    title: 'Makeup Artistry',
    type: 'certificate',
    duration: '3 months',
    salary: '$30,000–$65,000',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85',
    description: 'Everyday, editorial, bridal, and special effects makeup techniques.',
    overview: "The Makeup Artistry Certificate trains you for professional makeup work across bridal, fashion, film, and lifestyle markets. Three months of hands-on technique covering colour theory, skin prep, and full application across diverse skin tones.",
    outcomes: ['Makeup artistry certificate', 'Portfolio development', 'Bridal specialty training', 'Colour theory mastery'],
    curriculum: [
      { module: 'Foundations', topics: ['Skin prep and primer', 'Foundation matching', 'Contouring'] },
      { module: 'Eye and Lip', topics: ['Eye shadow techniques', 'Liner application', 'Lip colour'] },
      { module: 'Specialty', topics: ['Bridal makeup', 'Editorial looks', 'Airbrush basics'] },
    ],
    careers: ['Makeup Artist', 'Bridal Makeup Specialist', 'Film and TV Artist', 'Retail Beauty Advisor'],
  },
  'waxing': {
    title: 'Waxing Specialist',
    type: 'certificate',
    duration: '6 weeks',
    salary: '$28,000–$50,000',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=85',
    description: 'Professional waxing techniques for face and body.',
    overview: "The Waxing Specialist Certificate covers all waxing techniques — hard wax, strip wax, face, and body — with a focus on speed, comfort, and safety. Six weeks of hands-on training.",
    outcomes: ['Waxing certificate', 'Hard and soft wax technique', 'Full body waxing'],
    curriculum: [
      { module: 'Waxing Fundamentals', topics: ['Wax types', 'Skin assessment', 'Sanitation'] },
      { module: 'Face Waxing', topics: ['Brows', 'Lip', 'Full face'] },
      { module: 'Body Waxing', topics: ['Legs', 'Underarms', 'Brazilian technique'] },
    ],
    careers: ['Waxing Specialist', 'Salon Hair Removal Technician', 'Spa Technician'],
  },
  'microneedling': {
    title: 'Microneedling',
    type: 'certificate',
    duration: '4 weeks',
    salary: '$45,000–$70,000',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&q=85',
    description: 'Collagen induction therapy for skin rejuvenation.',
    overview: "This focused 4-week certificate covers microneedling technique, contraindications, skin analysis, and post-care protocol. Ideal for aestheticians adding a high-value service.",
    outcomes: ['Microneedling certificate', 'Collagen induction theory', 'Contraindication management'],
    curriculum: [
      { module: 'Theory', topics: ['Collagen induction', 'Skin anatomy', 'Contraindications'] },
      { module: 'Technique', topics: ['Device settings', 'Needle depth', 'Serum application'] },
    ],
    careers: ['Advanced Aesthetician', 'Medical Spa Technician', 'Clinic Specialist'],
  },
  'chemical-peels': {
    title: 'Chemical Peels',
    type: 'certificate',
    duration: '4 weeks',
    salary: '$40,000–$70,000',
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=1200&q=85',
    description: 'Professional chemical exfoliation for skin renewal.',
    overview: "Four weeks covering superficial to medium-depth chemical peels. Client assessment, acid chemistry, application protocols, and aftercare management.",
    outcomes: ['Chemical peel certificate', 'Acid safety protocols', 'Client assessment skills'],
    curriculum: [
      { module: 'Chemistry', topics: ['AHA/BHA/TCA acids', 'pH science', 'Skin depth'] },
      { module: 'Application', topics: ['Client prep', 'Neutralisation', 'Post-care'] },
    ],
    careers: ['Advanced Aesthetician', 'Medical Spa Technician', 'Skin Care Specialist'],
  },
  'eyebrow-design': {
    title: 'Eyebrow Design',
    type: 'certificate',
    duration: '3 weeks',
    salary: '$30,000–$55,000',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Shaping, tinting, and lamination for full brow services.',
    overview: "Three weeks of hands-on brow design covering shaping, waxing, threading, tinting, and lamination. One of the most in-demand add-on services in any salon or spa.",
    outcomes: ['Eyebrow design certificate', 'Tinting and lamination', 'Shaping technique'],
    curriculum: [
      { module: 'Shaping', topics: ['Mapping', 'Waxing', 'Threading'] },
      { module: 'Colour', topics: ['Tinting', 'Henna brows', 'Colour theory'] },
      { module: 'Lamination', topics: ['Brow lamination technique', 'Aftercare'] },
    ],
    careers: ['Brow Artist', 'Spa Technician', 'Beauty Specialist'],
  },
  'lash-extensions': {
    title: 'Lash Extensions',
    type: 'certificate',
    duration: '3 weeks',
    salary: '$35,000–$60,000',
    image: 'https://images.unsplash.com/photo-1583004442600-18f3e87fee18?w=1200&q=85',
    description: 'Classic, hybrid, and volume lash extension application.',
    overview: "Three weeks covering classic, hybrid, and volume lash extensions. Isolation technique, adhesive science, and full lash mapping for different eye shapes.",
    outcomes: ['Lash extension certificate', 'Volume lash technique', 'Adhesive safety'],
    curriculum: [
      { module: 'Classic Lashes', topics: ['Isolation', '1:1 application', 'Curl and length mapping'] },
      { module: 'Volume Lashes', topics: ['Fan creation', 'Mega volume', 'Fill technique'] },
    ],
    careers: ['Lash Artist', 'Beauty Technician', 'Spa Specialist'],
  },
  'hot-stone-therapy': {
    title: 'Hot Stone Therapy',
    type: 'certificate',
    duration: '4 weeks',
    salary: '$30,000–$50,000',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85',
    description: 'Therapeutic massage using heated basalt stones.',
    overview: "Four weeks covering hot stone massage technique, stone placement, temperature management, and therapeutic benefits. A premium spa service that commands higher prices.",
    outcomes: ['Hot stone therapy certificate', 'Stone placement protocol', 'Heat safety management'],
    curriculum: [
      { module: 'Theory', topics: ['Basalt stone science', 'Contraindications', 'Benefits'] },
      { module: 'Technique', topics: ['Stone placement', 'Massage sequences', 'Full body routine'] },
    ],
    careers: ['Spa Therapist', 'Massage Practitioner', 'Wellness Consultant'],
  },
  'reflexology': {
    title: 'Reflexology',
    type: 'certificate',
    duration: '6 weeks',
    salary: '$30,000–$50,000',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=85',
    description: 'Foot, hand, and ear reflexology for holistic wellness.',
    overview: "Six weeks covering the principles and practice of reflexology. Foot, hand, and auricular reflexology with full charting and client consultation skills.",
    outcomes: ['Reflexology certificate', 'Zone therapy technique', 'Holistic wellness knowledge'],
    curriculum: [
      { module: 'Theory', topics: ['Reflex zones', 'Anatomy', 'Holistic principles'] },
      { module: 'Technique', topics: ['Foot reflexology', 'Hand reflexology', 'Auricular points'] },
    ],
    careers: ['Reflexologist', 'Holistic Therapist', 'Wellness Practitioner'],
  },
  'hydrotherapy': {
    title: 'Hydrotherapy',
    type: 'certificate',
    duration: '4 weeks',
    salary: '$30,000–$50,000',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85',
    description: 'Water-based therapeutic treatments for spa environments.',
    overview: "Four weeks covering hydrotherapy modalities including vichy shower, flotation, steam, and hydrotherapy tubs. A sought-after specialty in resort and medical spas.",
    outcomes: ['Hydrotherapy certificate', 'Water treatment protocols', 'Spa operations knowledge'],
    curriculum: [
      { module: 'Water Therapy', topics: ['Vichy shower technique', 'Steam therapy', 'Contrast bathing'] },
      { module: 'Applications', topics: ['Body wraps', 'Flotation', 'Therapeutic protocol'] },
    ],
    careers: ['Spa Therapist', 'Hydrotherapy Technician', 'Resort Spa Specialist'],
  },
  'aromatherapy': {
    title: 'Aromatherapy',
    type: 'certificate',
    duration: '4 weeks',
    salary: '$28,000–$48,000',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&q=85',
    description: 'Essential oil science and therapeutic application.',
    overview: "Four weeks covering essential oil chemistry, blending, and therapeutic applications including massage, diffusion, and topical treatments. Ideal as an add-on credential for spa professionals.",
    outcomes: ['Aromatherapy certificate', 'Essential oil blending', 'Safe application protocols'],
    curriculum: [
      { module: 'Essential Oils', topics: ['Chemistry basics', 'Carrier oils', 'Safety'] },
      { module: 'Application', topics: ['Blending ratios', 'Massage application', 'Diffusion'] },
    ],
    careers: ['Aromatherapist', 'Wellness Consultant', 'Spa Therapist'],
  },
  'mens-grooming': {
    title: "Men's Grooming",
    type: 'certificate',
    duration: '4 weeks',
    salary: '$30,000–$55,000',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=85',
    description: 'Barbering, beard design, and grooming services for men.',
    overview: "Four weeks covering the full range of men's grooming services: clipper cuts, scissors over comb, beard design, straight razor shaves, and skin care for men. The male grooming market has grown significantly — this certificate opens a high-demand service segment.",
    outcomes: ["Men's grooming certificate", 'Straight razor technique', 'Beard design'],
    curriculum: [
      { module: 'Cuts', topics: ['Clipper technique', 'Scissors over comb', 'Fades'] },
      { module: 'Beard', topics: ['Beard shaping', 'Straight razor shave', 'Beard care'] },
    ],
    careers: ["Men's Grooming Specialist", 'Barber', 'Salon Stylist'],
  },
}

export async function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const program = programs[slug]
  if (!program) return { title: "Program Not Found | Gina's College" }

  return {
    title: `${program.title} ${program.type === 'diploma' ? 'Diploma' : 'Certificate'} | Gina's College Ontario`,
    description: program.description,
  }
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const program = programs[slug]
  if (!program) notFound()

  const isOSAP = program.type === 'diploma'

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `https://ginascollege.com/programs/${slug}#course`,
    name: `${program.title} ${program.type === 'diploma' ? 'Diploma' : 'Certificate'}`,
    description: program.description,
    url: `https://ginascollege.com/programs/${slug}`,
    timeRequired: program.duration,
    provider: {
      '@type': 'EducationalOrganization',
      '@id': 'https://ginascollege.com/#organization',
      name: "Gina's College of Advanced Aesthetics",
      url: 'https://ginascollege.com',
    },
    educationalCredentialAwarded: program.type === 'diploma'
      ? `${program.title} Diploma — Financial aid available`
      : `${program.title} Certificate`,
    occupationalCategory: program.careers.join(', '),
    ...(program.salary && {
      salaryUponCompletion: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Average starting salary',
        currency: 'CAD',
        description: program.salary,
      },
    }),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'In person',
      location: [
        { '@type': 'Place', name: "Gina's College — Mississauga", address: { '@type': 'PostalAddress', addressLocality: 'Mississauga', addressRegion: 'ON', addressCountry: 'CA' } },
        { '@type': 'Place', name: "Gina's College — Waterloo", address: { '@type': 'PostalAddress', addressLocality: 'Waterloo', addressRegion: 'ON', addressCountry: 'CA' } },
        { '@type': 'Place', name: "Gina's College — Ottawa", address: { '@type': 'PostalAddress', addressLocality: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' } },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id={`course-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero — image with gradient overlay, keep structure, update font + badges */}
      <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/90 via-[#01426A]/50 to-[#01426A]/20" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 container">
          <div className="max-w-[720px]">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white uppercase tracking-wider">
                {program.type === 'diploma' ? 'Diploma Program' : 'Certificate Program'}
              </span>
              {isOSAP && (
                <span className="px-3 py-1 bg-[#01426A] border border-white/30 text-xs font-semibold text-white uppercase tracking-wider">
                  Financial Aid Available
                </span>
              )}
            </div>
            <h1
              className="font-serif italic text-white leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            >
              {program.title}
            </h1>
            <p className="text-white/80 text-lg max-w-[540px]">{program.description}</p>
          </div>
        </div>
      </div>

      {/* Stats bar — cream gap-px band */}
      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(196,133,106,0.2)' }}>
            {[
              { label: 'Duration', value: program.duration },
              { label: 'Earning potential', value: 'Top-tier roles' },
              { label: 'Credential', value: program.type === 'diploma' ? 'Diploma' : 'Certificate' },
              { label: 'Funding', value: isOSAP ? 'Financial aid available' : 'Flexible options' },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
                <p className="text-sm font-medium text-[#01426A]/65 mb-1">{stat.label}</p>
                <p className="font-serif italic text-[#01426A] font-semibold leading-snug" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          {/* Left column */}
          <div>
            {/* Overview */}
            <div className="mb-12">
              <h2
                className="font-serif italic text-[#01426A] mb-4"
                style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
              >
                About this program
              </h2>
              <p className="text-[#000000]/65 text-lg leading-relaxed">{program.overview}</p>
            </div>

            {/* Outcomes */}
            <div className="mb-12">
              <h2
                className="font-serif italic text-[#01426A] mb-6"
                style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
              >
                What you get
              </h2>
              <div className="space-y-3">
                {program.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="9" stroke="#01426A" strokeWidth="1.5" />
                      <path
                        d="M6.5 10l2.5 2.5 4.5-4.5"
                        stroke="#01426A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[#000000]/75 leading-snug">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mb-12">
              <h2
                className="font-serif italic text-[#01426A] mb-6"
                style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
              >
                What you will learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.curriculum.map((mod) => (
                  <div
                    key={mod.module}
                    className="p-6 border"
                    style={{ borderColor: 'var(--color-cream-deep)' }}
                  >
                    <h3 className="font-serif text-[#01426A] font-semibold text-base mb-3">
                      {mod.module}
                    </h3>
                    <ul className="space-y-1.5">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="text-sm text-[#000000]/60 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#C4856A] shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div>
              <h2
                className="font-serif italic text-[#01426A] mb-4"
                style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
              >
                Where graduates work
              </h2>
              <div className="flex flex-wrap gap-2">
                {program.careers.map((career) => (
                  <span
                    key={career}
                    className="px-4 py-2 border text-sm font-medium text-[#000000]/70"
                    style={{ borderColor: 'var(--color-cream-deep)' }}
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — sticky CTA card */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="border overflow-hidden" style={{ borderColor: 'var(--color-cream-deep)' }}>
              <div className="bg-[#01426A] p-6 text-white">
                <p className="font-serif italic font-semibold text-xl mb-1">{program.title}</p>
                <p className="text-white/60 text-sm">{program.duration} &middot; {program.type === 'diploma' ? 'Diploma' : 'Certificate'}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#000000]/50">Career outlook</span>
                  <span className="font-semibold text-[#01426A]">High-demand field</span>
                </div>
                {isOSAP && (
                  <div className="flex items-center gap-2 p-3" style={{ backgroundColor: 'var(--color-cream)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="#C4856A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-xs font-semibold text-[#01426A]">Financial assistance may be available for those who qualify.</p>
                  </div>
                )}
                <Link href="/apply" className="btn btn-primary w-full text-sm">
                  Start Your Application
                </Link>
                <Link href="/consultation" className="btn btn-secondary w-full text-sm">
                  Book a Free Consultation
                </Link>
                <p className="text-xs text-[#000000]/40 text-center">
                  No application fee. Response within 24 hours.
                </p>
              </div>
            </div>

            {/* Back to programs */}
            <div className="mt-4 text-center">
              <Link
                href="/programs"
                className="text-sm text-[#000000]/50 hover:text-[#01426A] transition-colors"
              >
                ← Back to all programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA — full-bleed navy, no rounded corners */}
      <div className="bg-[#01426A]">
        <div className="container py-16 text-center">
          <p className="eyebrow text-white/60 mb-5 mx-auto" style={{ textAlign: 'center' }}>Ready to begin?</p>
          <h2 className="font-serif italic text-white mb-3" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
            Ready to start?
          </h2>
          <p className="text-white/60 mb-8 max-w-[400px] mx-auto">
            Applications take 5 minutes. An admissions advisor will reach out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply" className="btn btn-white">
              Start Your Application
            </Link>
            <Link href="/consultation" className="btn btn-outline-white">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
