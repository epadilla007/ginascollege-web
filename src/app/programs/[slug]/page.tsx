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
    salary: '',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85',
    description: 'The most comprehensive medical aesthetics program in Ontario. Train in laser, chemical peels, microneedling, and advanced skin treatments.',
    overview: "Medical aesthetics is the fastest-growing segment of the beauty industry. This 12-month diploma puts you on the floor of our student spa from day one, working with real paying clients under professional supervision. By graduation, you hold a full diploma credential that opens the CIDESCO accreditation pathway — and med spas across Ontario actively recruit from this program.",
    outcomes: [
      'Full Medical Aesthetics diploma credential recognized across Ontario',
      'CIDESCO international accreditation pathway — recognized in 40+ countries',
      'Real paying client experience from week one in our student spa',
      'Hands-on training in laser, IPL, chemical peels, and microneedling',
      'Mentorship from licensed medical aesthetics professionals',
      '95%+ of graduates employed within 90 days of completing the program',
      'Financial aid may be available — ask an advisor about your eligibility',
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
    salary: '',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85',
    description: 'The full foundation diploma. Everything the industry expects from a certified aesthetician.',
    overview: "The Advanced Aesthetics Diploma is the credential that opens the door to a professional aesthetics career. Over 10 months, you build the full skill set — facials, waxing, body treatments, retail, and client management — while gaining hundreds of hours of real-client experience in our student spa.",
    outcomes: [
      'Full Advanced Aesthetics diploma credential recognized across Ontario',
      'Hundreds of real-client service hours logged in our student spa',
      'Complete training in facials, waxing, body treatments, and retail',
      'Foundation credential for the CIDESCO certification pathway',
      'Mentorship from industry-working instructors at every stage',
      'Career support connecting you with employers who recruit from our campuses',
      'Financial aid may be available — ask an advisor about your eligibility',
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
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Cut, colour, texture, and styling in a professional salon environment.',
    overview: "The Hairstyling Diploma trains you for a professional career in a salon or studio environment. Over 12 months you develop technical skills in cutting, colouring, and styling across all hair types — while building the client communication skills that make stylists build loyal books.",
    outcomes: [
      'Full Hairstyling diploma credential recognized across Ontario',
      'Real-client salon floor experience on paying clients throughout the program',
      'Technical training in cutting, colouring, texture services, and styling',
      'Provincial licensing exam preparation built into the curriculum',
      'Exclusive to the Waterloo campus — dedicated salon floor training space',
      'Career placement support connecting graduates with salons and studios',
      'Financial aid may be available — ask an advisor about your eligibility',
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
    salary: '',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85',
    description: 'Permanent hair removal via electrolysis, laser, and IPL. A high-earning specialization.',
    overview: "Electrolysis and light-based hair removal are among the most in-demand services in the aesthetics industry. This 8-month diploma gives you the technical foundation in electrolysis, laser, and IPL — along with the regulatory knowledge required to operate these devices professionally in Ontario.",
    outcomes: [
      'Full Electrolysis & Light Technology diploma credential',
      'Training in galvanic, thermolysis, blend, laser, and IPL methods',
      'Ontario regulatory compliance certification built into the program',
      'Hands-on client practice with professional-grade equipment',
      'One of the few schools in Ontario offering this full specialization',
      'High-demand field with a limited supply of qualified graduates',
      'Financial aid may be available — ask an advisor about your eligibility',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
    salary: '',
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
  // ─── SKIN CARE PROGRAMS ───────────────────────────────────────────────────
  'skin-care-specialist': {
    title: 'Skin Care Specialist Program',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'A comprehensive introduction to professional skin care — facials, extractions, masks, and client consultations.',
    overview: 'The Skin Care Specialist Program teaches the fundamentals of professional skin care: skin analysis, customized facial treatments, extractions, mask therapy, and client consultation. Graduates are ready to deliver results-driven skin care services in salons, spas, and clinics.',
    outcomes: ['Skin Care Specialist certificate', 'Hands-on facial technique', 'Skin analysis skills', 'Client consultation training'],
    curriculum: [
      { module: 'Skin Science', topics: ['Skin anatomy', 'Skin types and conditions', 'Contraindications'] },
      { module: 'Treatments', topics: ['Classic facials', 'Extractions', 'Mask therapy', 'Exfoliation'] },
      { module: 'Client Care', topics: ['Consultation skills', 'Retail recommendations', 'Sanitation standards'] },
    ],
    careers: ['Skin Care Specialist', 'Esthetician', 'Spa Therapist', 'Facial Specialist'],
  },
  'advanced-medical-skin-care-therapist-laser-technician': {
    title: 'Advanced Medical Skin Care Therapist & Laser Technician',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    description: 'Medical-grade skin care combined with laser and light technology training for advanced clinic roles.',
    overview: 'This combined program prepares you for advanced clinical roles in medical spas and aesthetic clinics. You gain expertise in medical-grade skin care treatments alongside laser and IPL technology — one of the most in-demand skill combinations in the aesthetics industry.',
    outcomes: ['Advanced skin care + laser combined credential', 'Medical spa readiness', 'IPL and laser hands-on training', 'Advanced client assessment skills'],
    curriculum: [
      { module: 'Advanced Skin Care', topics: ['Medical-grade peels', 'Advanced facials', 'Dermaplaning', 'Microneedling theory'] },
      { module: 'Laser Technology', topics: ['Laser physics', 'Hair removal', 'Photofacials', 'Safety protocols'] },
      { module: 'IPL Treatments', topics: ['IPL parameters', 'Vascular treatments', 'Pigmentation', 'Client consultations'] },
    ],
    careers: ['Medical Spa Technician', 'Laser Technician', 'Clinical Aesthetician', 'Skin Care Specialist'],
  },
  'advanced-medical-skin-care-therapist': {
    title: 'Advanced Medical Skin Care Therapist',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Advanced clinical skin care techniques for aestheticians moving into medical spa environments.',
    overview: 'Designed for experienced aestheticians who want to advance into medical spa and clinical settings. This program builds on core skin care skills with advanced techniques including medical-grade treatments, complex skin analysis, and professional client management in clinical environments.',
    outcomes: ['Advanced Medical Skin Care certificate', 'Clinical-grade treatment protocols', 'Complex skin condition management', 'Medical spa job readiness'],
    curriculum: [
      { module: 'Advanced Treatments', topics: ['Medical-grade peels', 'Advanced extractions', 'LED therapy', 'High-frequency'] },
      { module: 'Clinical Skills', topics: ['Treatment planning', 'Before-and-after documentation', 'Post-care protocols'] },
      { module: 'Business', topics: ['Medical spa operations', 'Client communication', 'Safety compliance'] },
    ],
    careers: ['Medical Spa Aesthetician', 'Clinical Skin Care Specialist', 'Advanced Esthetician'],
  },
  'mechanical-skin-exfoliation': {
    title: 'Mechanical Skin Exfoliation & Microdermabrasion',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Professional mechanical exfoliation and microdermabrasion techniques for skin renewal.',
    overview: 'This certificate covers mechanical exfoliation and microdermabrasion — two of the most popular skin-resurfacing services in modern spas and clinics. You will learn the technology, treatment protocols, client assessment, and post-care management for both services.',
    outcomes: ['Microdermabrasion certificate', 'Mechanical exfoliation technique', 'Skin resurfacing protocols', 'Contraindication management'],
    curriculum: [
      { module: 'Theory', topics: ['Skin anatomy', 'Exfoliation science', 'Device types'] },
      { module: 'Technique', topics: ['Diamond tip microdermabrasion', 'Crystal microderm', 'Treatment parameters'] },
      { module: 'Client Care', topics: ['Skin analysis', 'Pre and post care', 'Contra-indications'] },
    ],
    careers: ['Advanced Esthetician', 'Skin Resurfacing Specialist', 'Spa Technician'],
  },
  'new-facial-technologies': {
    title: 'New Facial Technologies',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Modern facial technology treatments including LED, ultrasound, and advanced devices.',
    overview: 'Stay ahead of the industry by mastering the latest facial technology devices used in high-end spas and clinics. This certificate covers LED therapy, ultrasound treatments, galvanic current, high-frequency, and other emerging facial technologies.',
    outcomes: ['Facial technology certificate', 'LED therapy training', 'Device operation skills', 'Treatment protocol development'],
    curriculum: [
      { module: 'Device Science', topics: ['LED wavelengths', 'Galvanic current', 'Ultrasound theory'] },
      { module: 'Application', topics: ['Treatment sequences', 'Device safety', 'Client prep'] },
      { module: 'Protocols', topics: ['Anti-aging protocols', 'Acne protocols', 'Brightening treatments'] },
    ],
    careers: ['Advanced Esthetician', 'Technology Specialist', 'Medical Spa Technician'],
  },
  'advanced-skin-care-nano-mesotherapy': {
    title: 'Advanced Skin Care – Nano Mesotherapy',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Nano-channel mesotherapy for targeted delivery of active ingredients into the skin.',
    overview: 'Nano mesotherapy uses nano-channel technology to deliver active serums and treatment cocktails deeper into the skin without needles. This certificate teaches you the technique, product knowledge, and protocols for this increasingly popular anti-aging and skin rejuvenation service.',
    outcomes: ['Nano Mesotherapy certificate', 'Nano-channel technique', 'Active ingredient knowledge', 'Protocol development'],
    curriculum: [
      { module: 'Theory', topics: ['Skin absorption science', 'Nano-channel technology', 'Active ingredients'] },
      { module: 'Technique', topics: ['Device application', 'Treatment maps', 'Serum selection'] },
      { module: 'Results', topics: ['Before-and-after assessment', 'Series planning', 'Client education'] },
    ],
    careers: ['Advanced Esthetician', 'Medical Spa Specialist', 'Anti-Aging Technician'],
  },
  'advanced-skin-care-aging': {
    title: 'Advanced Skin Care – Aging Skin',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Specialized treatments for aging skin conditions including wrinkles, loss of firmness, and dullness.',
    overview: 'Anti-aging is one of the most in-demand service categories in professional skin care. This certificate provides in-depth training on aging skin physiology, treatment options, and the latest techniques for addressing wrinkles, loss of firmness, pigmentation, and skin texture concerns.',
    outcomes: ['Aging Skin Specialist certificate', 'Anti-aging treatment protocols', 'Client assessment for mature skin', 'Treatment series planning'],
    curriculum: [
      { module: 'Aging Science', topics: ['Intrinsic and extrinsic aging', 'Skin structure changes', 'Key ingredients'] },
      { module: 'Treatments', topics: ['Anti-aging facials', 'Firming protocols', 'Brightening techniques'] },
      { module: 'Advanced Options', topics: ['Peel integration', 'Device therapies', 'Home care programs'] },
    ],
    careers: ['Anti-Aging Specialist', 'Medical Spa Aesthetician', 'Skin Care Therapist'],
  },
  'advanced-skin-care-oncology': {
    title: 'Advanced Skin Care – Oncology Skin Care',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Specialized skin care protocols for clients undergoing or recovering from cancer treatment.',
    overview: 'Oncology skin care requires a specialized approach — understanding the effects of cancer treatments on skin and how to safely deliver spa services to oncology clients. This certificate trains you to work safely and compassionately with this growing and underserved population.',
    outcomes: ['Oncology Skin Care certificate', 'Safe treatment protocols for cancer clients', 'Modified service delivery', 'Compassionate client communication'],
    curriculum: [
      { module: 'Oncology Basics', topics: ['Cancer treatments and skin effects', 'Chemotherapy and radiation side effects', 'Medical team collaboration'] },
      { module: 'Safe Protocols', topics: ['Contraindications in oncology', 'Modified facial techniques', 'Gentle product selection'] },
      { module: 'Client Support', topics: ['Communication skills', 'Emotional sensitivity', 'Documentation'] },
    ],
    careers: ['Oncology Esthetician', 'Medical Spa Specialist', 'Clinical Skin Care Therapist'],
  },
  'advanced-skin-care-sensitive-skin': {
    title: 'Advanced Skin Care – Sensitive Skin, Rosacea & Couperose',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Evidence-based treatments for sensitive skin, rosacea, and couperose conditions.',
    overview: 'Sensitive skin, rosacea, and couperose are among the most common conditions aestheticians encounter — and the most frequently undertreated. This certificate gives you the specialized knowledge to assess and treat these conditions safely and effectively.',
    outcomes: ['Sensitive Skin Specialist certificate', 'Rosacea treatment protocols', 'Vascular skin management', 'Product selection for reactive skin'],
    curriculum: [
      { module: 'Skin Conditions', topics: ['Rosacea types and triggers', 'Couperose and vascular reactivity', 'Barrier dysfunction'] },
      { module: 'Treatment', topics: ['Calming protocols', 'Reactive skin facials', 'Desensitization techniques'] },
      { module: 'Management', topics: ['Home care recommendations', 'Avoiding triggers', 'Medical referrals'] },
    ],
    careers: ['Sensitive Skin Specialist', 'Clinical Esthetician', 'Skin Care Therapist'],
  },
  'advanced-skin-care-chemical-peels': {
    title: 'Advanced Skin Care – Chemical Peels',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Advanced chemical peel application for skin resurfacing, renewal, and targeted results.',
    overview: 'Build on foundational peel knowledge with advanced formulations, combination protocols, and complex skin conditions. This certificate covers superficial to medium-depth peels with emphasis on customizing treatments for individual client needs.',
    outcomes: ['Advanced Chemical Peel certificate', 'Multi-acid peel protocols', 'Combination treatment design', 'Peel series planning'],
    curriculum: [
      { module: 'Advanced Chemistry', topics: ['TCA applications', 'Jessner solution', 'Enzyme peels', 'Mandelic acid'] },
      { module: 'Complex Cases', topics: ['Peels for pigmentation', 'Peels for acne', 'Post-peel reactions'] },
      { module: 'Treatment Design', topics: ['Series planning', 'Combination protocols', 'Home care bridges'] },
    ],
    careers: ['Advanced Esthetician', 'Chemical Peel Specialist', 'Medical Spa Technician'],
  },
  'advanced-skin-care-hyperpigmentation': {
    title: 'Advanced Skin Care – Hyperpigmentation & Brightening',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Targeted treatments for hyperpigmentation, melasma, and uneven skin tone.',
    overview: 'Hyperpigmentation is one of the most requested treatment categories in aesthetics. This certificate covers the science of pigmentation, the full range of treatment options, and how to build effective brightening protocols for different skin types and tones.',
    outcomes: ['Hyperpigmentation Specialist certificate', 'Melanin science knowledge', 'Brightening treatment protocols', 'Inclusive skin tone training'],
    curriculum: [
      { module: 'Pigmentation Science', topics: ['Melanogenesis', 'Melasma vs post-inflammatory', 'Fitzpatrick scale'] },
      { module: 'Treatments', topics: ['Brightening peels', 'Vitamin C protocols', 'Azelaic acid applications'] },
      { module: 'Results', topics: ['Treatment series', 'Maintenance planning', 'Sun protection education'] },
    ],
    careers: ['Brightening Specialist', 'Advanced Esthetician', 'Clinical Skin Care Therapist'],
  },
  'advanced-skin-care-acne': {
    title: 'Advanced Skin Care – Acne Solutions',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Comprehensive acne treatment protocols for all skin types and acne presentations.',
    overview: 'Acne is the most common skin condition in North America. This certificate gives you a comprehensive framework for assessing and treating acne across all presentations — from teenage breakouts to adult hormonal acne — using both treatment and lifestyle approaches.',
    outcomes: ['Acne Solutions Specialist certificate', 'Multi-type acne assessment', 'Treatment series planning', 'Home care and lifestyle guidance'],
    curriculum: [
      { module: 'Acne Science', topics: ['Acne causes and types', 'Hormonal acne', 'Comedone formation'] },
      { module: 'Treatments', topics: ['Extraction techniques', 'Acne peels', 'LED for acne', 'Salicylic protocols'] },
      { module: 'Client Management', topics: ['Treatment journeys', 'Home care bridges', 'Medical referrals'] },
    ],
    careers: ['Acne Specialist', 'Advanced Esthetician', 'Clinical Skin Care Therapist'],
  },
  'skin-care-level-1': {
    title: 'Skin Care Level 1 Fundamentals',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Online foundational theory in skin care science, skin types, and basic treatment knowledge.',
    overview: 'An accessible online introduction to skin care fundamentals. Learn the theory behind professional skin care — skin anatomy, skin types, conditions, ingredients, and basic treatment knowledge — at your own pace. This is the theory component that pairs with in-person practical training.',
    outcomes: ['Skin Care Level 1 certificate', 'Online flexible learning', 'Foundation for advanced programs', 'Skin anatomy and conditions knowledge'],
    curriculum: [
      { module: 'Skin Science', topics: ['Skin layers and function', 'Skin types', 'Common conditions'] },
      { module: 'Ingredients', topics: ['Active ingredients', 'Carrier systems', 'Product formulation basics'] },
      { module: 'Treatments Overview', topics: ['Facial services overview', 'Sanitation standards', 'Client consultation intro'] },
    ],
    careers: ['Skin Care Student', 'Esthetician-in-Training', 'Beauty Industry Professional'],
  },
  'laser-light-technology': {
    title: 'Laser & Light Technology Certificate',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    description: 'Hands-on laser and light technology training for hair removal, photofacials, and advanced skin treatments.',
    overview: 'This certificate fully prepares you to work as a laser technician in medical spas and beauty clinics. You will gain hands-on experience under instructor supervision performing laser hair removal, photofacials for aged skin, acne treatments, and vascular and pigmented lesion treatments.',
    outcomes: ['Laser & Light Technology certificate', 'Laser hair removal training', 'Photofacial technique', 'Medical spa employment readiness'],
    curriculum: [
      { module: 'Laser Science', topics: ['Laser physics', 'Nd:YAG and diode lasers', 'Tissue interaction', 'Safety'] },
      { module: 'Hair Removal', topics: ['Hair removal protocols', 'Fitzpatrick assessment', 'Treatment parameters'] },
      { module: 'Skin Treatments', topics: ['Photofacials', 'Vascular lesions', 'Pigmented lesions', 'Acne treatments'] },
    ],
    careers: ['Laser Technician', 'Medical Spa Specialist', 'IPL Technician', 'Clinic Consultant'],
  },
  'laser-hair-removal': {
    title: 'Laser Hair Removal Training Certification',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/laserlight-619w.jpg',
    description: 'Specialized laser hair removal training for clinic and medical spa employment.',
    overview: 'Focused specifically on laser hair removal — the most in-demand laser service. This certification covers laser physics, hair growth cycles, Fitzpatrick skin typing, treatment protocols, and safety procedures to prepare you for immediate employment.',
    outcomes: ['Laser Hair Removal certification', 'Fitzpatrick assessment skills', 'Treatment protocol knowledge', 'Safety certification'],
    curriculum: [
      { module: 'Theory', topics: ['Laser physics', 'Hair growth cycles', 'Skin typing', 'Contraindications'] },
      { module: 'Technique', topics: ['Fluence settings', 'Pulse duration', 'Treatment spacing'] },
      { module: 'Safety', topics: ['Eye protection', 'Adverse reactions', 'Informed consent'] },
    ],
    careers: ['Laser Hair Removal Technician', 'Medical Spa Technician', 'Clinic Specialist'],
  },
  // ─── PMU PROGRAMS ─────────────────────────────────────────────────────────
  'pmu-eyebrows-level-1': {
    title: 'PMU – Powdered Eyebrows Level 1 (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Online theory for powdered eyebrow permanent makeup — the foundation before in-person practical training.',
    overview: "Permanent makeup is growing in popularity and earning potential. Level 1 is the independent online component of the Powdered Eyebrows and Hairstroke program. You will learn the theory behind PMU, colour science, skin anatomy for permanent makeup, and how to create natural-looking brow results — at your own pace.",
    outcomes: ['PMU Powdered Eyebrows Level 1 certificate', 'Flexible online schedule', 'Colour theory and pigment knowledge', 'Prerequisite for Level 2 practical'],
    curriculum: [
      { module: 'PMU Theory', topics: ['What is permanent makeup', 'Pigment science', 'Skin anatomy for PMU'] },
      { module: 'Brow Design', topics: ['Brow mapping', 'Face shape analysis', 'Client consultation'] },
      { module: 'Safety', topics: ['Bloodborne pathogens', 'Sanitation', 'Informed consent'] },
    ],
    careers: ['PMU Artist (after Level 2)', 'Beauty Entrepreneur', 'Spa and Salon Specialist'],
  },
  'pmu-eyebrows-level-2': {
    title: 'PMU – Powdered Eyebrows Level 2 (Practical)',
    type: 'certificate',
    duration: 'In-person practical training',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Hands-on practical training in powdered eyebrow permanent makeup technique.',
    overview: 'The practical in-person component of the Powdered Eyebrows and Hairstroke PMU program. Level 1 online theory is a prerequisite. You will practice on practice skins and real models under instructor supervision, developing the hand control and technique to create professional results.',
    outcomes: ['PMU Powdered Eyebrows Level 2 certificate', 'Real model practice', 'Powder brow technique mastery', 'Ready to take paying clients'],
    curriculum: [
      { module: 'Machine Technique', topics: ['Machine settings', 'Needle selection', 'Pigment implantation'] },
      { module: 'Brow Execution', topics: ['Practice skin work', 'Model practice', 'Shading and depth'] },
      { module: 'Healing', topics: ['Post-treatment care', 'Colour retention', 'Touch-up planning'] },
    ],
    careers: ['PMU Brow Artist', 'Beauty Entrepreneur', 'Salon PMU Specialist'],
  },
  'pmu-lip-blush-level-1': {
    title: 'PMU – Lip Blush Level 1 (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Online theory for lip blush permanent makeup — colour science, lip anatomy, and design.',
    overview: 'Lip blush is one of the fastest-growing permanent makeup services. Level 1 covers the theory online — lip anatomy, colour science for lips, design principles, and client consultation — at your own pace before the in-person practical component.',
    outcomes: ['PMU Lip Blush Level 1 certificate', 'Lip colour theory', 'Design and mapping', 'Prerequisite for Level 2'],
    curriculum: [
      { module: 'Theory', topics: ['Lip anatomy', 'Pigment selection for lips', 'Colour theory'] },
      { module: 'Design', topics: ['Lip mapping', 'Symmetry correction', 'Shape design'] },
      { module: 'Preparation', topics: ['Client consultation', 'Contraindications', 'Pre-care instructions'] },
    ],
    careers: ['PMU Artist (after Level 2)', 'Lip Blush Specialist', 'Beauty Entrepreneur'],
  },
  'pmu-lip-blush-level-2': {
    title: 'PMU – Lip Blush Level 2 (Practical)',
    type: 'certificate',
    duration: 'In-person practical training',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Hands-on practical training in lip blush permanent makeup technique.',
    overview: 'The in-person practical component of the Lip Blush program. You will work on practice skins and real models under instructor guidance, developing the precision technique required for professional lip blush results. Level 1 online is a prerequisite.',
    outcomes: ['PMU Lip Blush Level 2 certificate', 'Practical lip technique', 'Model practice sessions', 'Client-ready skills'],
    curriculum: [
      { module: 'Technique', topics: ['Machine settings for lips', 'Implantation depth', 'Full saturation vs tint'] },
      { module: 'Execution', topics: ['Practice skin drills', 'Model work', 'Gradation and ombre'] },
      { module: 'Aftercare', topics: ['Healing stages', 'Colour loss', 'Touch-up scheduling'] },
    ],
    careers: ['Lip Blush Artist', 'PMU Specialist', 'Beauty Entrepreneur'],
  },
  'pmu-intralash-level-1': {
    title: 'PMU – Intralash Line Densification Level 1 (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Online theory for permanent lash line densification — the Intralash PMU technique.',
    overview: 'Intralash lash line densification creates the appearance of fuller, denser lashes by tattooing pigment between the lashes. Level 1 covers the theory — eye anatomy, pigment science, design principles, and safety — in a flexible online format.',
    outcomes: ['PMU Intralash Level 1 certificate', 'Eye anatomy knowledge', 'Lash line design theory', 'Online flexible learning'],
    curriculum: [
      { module: 'Theory', topics: ['Eye anatomy', 'Pigment for the eye area', 'Design and line work'] },
      { module: 'Safety', topics: ['Eye area risks', 'Contraindications', 'Sanitation standards'] },
      { module: 'Consultation', topics: ['Client assessment', 'Managing expectations', 'Pre-care instructions'] },
    ],
    careers: ['PMU Lash Line Artist (after Level 2)', 'Beauty Specialist', 'Spa PMU Provider'],
  },
  'pmu-intralash-level-2': {
    title: 'PMU – Intralash Line Densification Level 2 (Practical)',
    type: 'certificate',
    duration: 'In-person practical training',
    salary: '',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85',
    description: 'Hands-on practical training in the Intralash lash line densification PMU technique.',
    overview: 'The in-person practical component of the Intralash program. You will develop precise needle technique for the delicate eye area, working on practice skins and then real models under close instructor supervision. Level 1 online is required.',
    outcomes: ['PMU Intralash Level 2 certificate', 'Lash line precision technique', 'Eye area expertise', 'Real model practice'],
    curriculum: [
      { module: 'Technique', topics: ['Needle control for the eye area', 'Depth and pressure', 'Line consistency'] },
      { module: 'Execution', topics: ['Practice skin work', 'Model sessions', 'Correction techniques'] },
      { module: 'Healing', topics: ['Aftercare for lash line', 'Healing timelines', 'Touch-up protocols'] },
    ],
    careers: ['Lash Line Densification Artist', 'PMU Specialist', 'Medical Spa Technician'],
  },
  // ─── NAIL PROGRAMS ────────────────────────────────────────────────────────
  'intro-nail-enhancements': {
    title: 'Introduction to Nail Enhancements',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'A beginner-friendly introduction to professional nail enhancement services.',
    overview: 'The ideal starting point for nail professionals or those entering the nail industry for the first time. This course introduces nail enhancement fundamentals — sanitation, natural nail care, basic extensions, and product safety — before advancing to specialized techniques.',
    outcomes: ['Nail Enhancements Introduction certificate', 'Foundation nail enhancement skills', 'Sanitation and safety training', 'Preparation for advanced nail programs'],
    curriculum: [
      { module: 'Nail Fundamentals', topics: ['Nail anatomy', 'Sanitation', 'Product safety', 'Basic prep'] },
      { module: 'Introduction to Enhancements', topics: ['Forms and tips', 'Basic length', 'Basic filing and shaping'] },
    ],
    careers: ['Nail Technician', 'Nail Student', 'Salon Assistant'],
  },
  'gel-nail-enhancements': {
    title: 'Gel Nail Enhancements',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Professional gel nail extension application — builder gel, overlay, and nail forms.',
    overview: 'Gel nail enhancements are one of the most popular services in modern nail salons. This certificate teaches professional gel application technique — from nail prep and form application to overlay, shaping, and finishing — for natural-looking, long-lasting results.',
    outcomes: ['Gel Nail Enhancements certificate', 'Builder gel application', 'Gel overlay technique', 'Nail form and tip work'],
    curriculum: [
      { module: 'Gel Science', topics: ['Gel chemistry', 'LED vs UV curing', 'Product types'] },
      { module: 'Application', topics: ['Nail prep', 'Form application', 'Builder gel technique', 'Shaping'] },
      { module: 'Finishing', topics: ['Filing and buffing', 'Top coat application', 'Removal technique'] },
    ],
    careers: ['Nail Technician', 'Gel Nail Specialist', 'Salon Professional'],
  },
  'liquid-powder-nail-enhancements': {
    title: 'Liquid & Powder Nail Enhancements',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Traditional acrylic liquid and powder nail enhancement technique.',
    overview: 'Liquid and powder (acrylic) nail enhancements remain the most durable and widely used nail extension system. This certificate teaches proper monomer and polymer ratios, bead consistency, form application, sculpting, and finishing for professional acrylic nail results.',
    outcomes: ['L&P Nail Enhancements certificate', 'Acrylic bead consistency', 'Sculpting technique', 'Form and tip application'],
    curriculum: [
      { module: 'L&P Science', topics: ['Monomer and polymer chemistry', 'Ratios and consistency', 'Product safety'] },
      { module: 'Application', topics: ['Zone 1-3 application', 'Form work', 'C-curve', 'Pinching'] },
      { module: 'Finishing', topics: ['Filing protocol', 'Refill technique', 'Removal'] },
    ],
    careers: ['Acrylic Nail Technician', 'Nail Specialist', 'Salon Professional'],
  },
  'advanced-sculpting-acrylic': {
    title: 'Advanced Sculpting Acrylic (Including Electric Filing)',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Advanced acrylic sculpting and electric filing for speed, precision, and high-end nail results.',
    overview: 'Take your acrylic skills to the next level. This advanced certificate focuses on refined sculpting technique, creative nail shapes, and the efficient use of electric filing — the standard tool in professional nail studios. Designed for technicians ready to elevate their work.',
    outcomes: ['Advanced Sculpting Acrylic certificate', 'Electric file proficiency', 'Advanced nail shapes', 'Speed and efficiency'],
    curriculum: [
      { module: 'Advanced Sculpting', topics: ['Extreme shapes', 'High apex construction', 'Stiletto and coffin forms'] },
      { module: 'Electric Filing', topics: ['E-file safety', 'Bits and speeds', 'Backfill technique', 'Cuticle work'] },
      { module: 'Refinement', topics: ['Competition-level finish', 'Surface texture', 'Cuticle to free edge perfection'] },
    ],
    careers: ['Advanced Nail Technician', 'Nail Artist', 'Competition Nail Stylist'],
  },
  'advanced-sculpting-gel-nails': {
    title: 'Advanced Sculpting Gel Nail Enhancements (Including Electric Filing)',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Advanced gel sculpting and electric filing for professional-level nail artistry.',
    overview: 'Advanced gel sculpting elevates your nail work beyond basic gel application into professional-level artistry. This certificate covers advanced gel systems, complex nail shapes, electric file technique, and the finishing skills demanded in high-end nail studios.',
    outcomes: ['Advanced Gel Sculpting certificate', 'Complex gel nail shapes', 'Electric file technique', 'High-end salon readiness'],
    curriculum: [
      { module: 'Advanced Gel', topics: ['Hard gel systems', 'Polygel technique', 'Complex shapes'] },
      { module: 'Electric Filing', topics: ['E-file for gel', 'Bit selection', 'Surface refinement'] },
      { module: 'Artistry', topics: ['Nail art integration', 'Encapsulation', 'Competition finish'] },
    ],
    careers: ['Advanced Nail Technician', 'Gel Nail Specialist', 'Nail Artist'],
  },
  'manicure': {
    title: 'Manicure',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Professional manicure technique including classic, spa, and shellac manicure services.',
    overview: 'The professional manicure certificate covers the full range of hand and nail services offered in modern salons and spas. From classic manicures to paraffin spa treatments and gel polish application — everything you need to deliver complete manicure services.',
    outcomes: ['Manicure certificate', 'Classic and spa manicure', 'Gel polish application', 'Nail care fundamentals'],
    curriculum: [
      { module: 'Nail Care', topics: ['Sanitation', 'Nail shaping', 'Cuticle care'] },
      { module: 'Manicure Services', topics: ['Classic manicure', 'Spa manicure', 'Paraffin treatment'] },
      { module: 'Gel Polish', topics: ['Shellac/gel polish application', 'Curing technique', 'Removal'] },
    ],
    careers: ['Nail Technician', 'Manicurist', 'Salon Professional'],
  },
  'pedicure': {
    title: 'Pedicure',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85',
    description: 'Professional pedicure technique for foot health, nail care, and spa services.',
    overview: 'The professional pedicure certificate covers foot anatomy, proper nail and callus care, spa pedicure services, and foot massage technique. A foundational service in every salon and spa — and one of the most consistently requested by clients.',
    outcomes: ['Pedicure certificate', 'Foot health knowledge', 'Callus reduction technique', 'Spa pedicure delivery'],
    curriculum: [
      { module: 'Foot Fundamentals', topics: ['Foot anatomy', 'Common foot conditions', 'Contraindications'] },
      { module: 'Pedicure Services', topics: ['Soak and scrub', 'Callus reduction', 'Nail care', 'Polish application'] },
      { module: 'Massage', topics: ['Foot and lower leg massage', 'Pressure points', 'Relaxation techniques'] },
    ],
    careers: ['Pedicurist', 'Nail Technician', 'Spa Technician'],
  },
  // ─── LASH / BROW ──────────────────────────────────────────────────────────
  'bold-lash-extensions': {
    title: 'Bold Lash Extensions',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1583004442600-18f3e87fee18?w=1200&q=85',
    description: 'Volume and mega-volume lash extension application for full, dramatic looks.',
    overview: 'Bold lash extensions focus on volume and mega-volume techniques — the most in-demand lash service in the current market. You will learn to create fans, apply Russian volume lashes, and build dramatic yet customized looks for a wide range of client preferences.',
    outcomes: ['Bold Lash Extensions certificate', 'Volume fan creation', 'Mega-volume technique', 'Fan and density mapping'],
    curriculum: [
      { module: 'Volume Fans', topics: ['Pinching vs pickup method', 'Fan size and density', 'Consistency training'] },
      { module: 'Application', topics: ['Placement strategy', 'Map design', 'Isolation for volume'] },
      { module: 'Fills', topics: ['Lash health assessment', 'Fill ratios', 'Retention improvement'] },
    ],
    careers: ['Volume Lash Artist', 'Beauty Specialist', 'Lash Studio Technician'],
  },
  'lash-lift-brow-lamination': {
    title: 'Lash Lift, Brow Lamination, Lash & Brow Tinting',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1583004442600-18f3e87fee18?w=1200&q=85',
    description: 'Complete lash and brow enhancement services — lift, lamination, and tinting.',
    overview: 'Lash lifts and brow lamination are two of the most requested low-maintenance beauty services. This certificate teaches both services plus tinting — a powerful combination that lets you offer complete lash and brow enhancement without extensions.',
    outcomes: ['Lash Lift, Brow Lamination & Tinting certificate', 'Chemical processing knowledge', 'Lift and lamination technique', 'Tinting application'],
    curriculum: [
      { module: 'Lash Lift', topics: ['Rod selection', 'Chemical processing', 'Lift technique', 'Aftercare'] },
      { module: 'Brow Lamination', topics: ['Solution application', 'Brushing and setting', 'Shaping'] },
      { module: 'Tinting', topics: ['Oxidative tint application', 'Colour selection', 'Timing and removal'] },
    ],
    careers: ['Lash and Brow Specialist', 'Beauty Technician', 'Salon Professional'],
  },
  // ─── WAXING ───────────────────────────────────────────────────────────────
  'brazilian-waxing': {
    title: 'Brazilian Waxing Hair Removal',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=85',
    description: 'Professional Brazilian and bikini waxing technique — speed, comfort, and safety.',
    overview: 'Brazilian waxing is one of the highest-demand, highest-tip services in any spa or salon. This certificate teaches proper hard wax technique for the bikini and Brazilian area — including client draping, skin assessment, speed, and managing client comfort.',
    outcomes: ['Brazilian Waxing certificate', 'Hard wax proficiency', 'Speed and comfort technique', 'Client care skills'],
    curriculum: [
      { module: 'Fundamentals', topics: ['Wax types for Brazilian', 'Sanitation', 'Client draping'] },
      { module: 'Technique', topics: ['Brazilian technique', 'Speed waxing', 'Ingrown prevention'] },
      { module: 'Client Experience', topics: ['Managing discomfort', 'Pre and post care', 'Skin conditions'] },
    ],
    careers: ['Waxing Specialist', 'Spa Technician', 'Salon Hair Removal Specialist'],
  },
  'waxing-hair-removal': {
    title: 'Waxing Hair Removal',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=85',
    description: 'Full body waxing technique using hard and soft wax for face and body hair removal.',
    overview: 'Waxing is one of the most requested and profitable services in the beauty industry. This course teaches everything you need to become a successful wax technician — face and body waxing using the latest technology waxes, including speed waxing technique and a deep understanding of skin and hair growth.',
    outcomes: ['Waxing Hair Removal certificate', 'Hard and soft wax technique', 'Speed waxing skills', 'Hair growth and skin knowledge'],
    curriculum: [
      { module: 'Waxing Theory', topics: ['Wax types', 'Hair growth cycles', 'Skin assessment', 'Online theory component'] },
      { module: 'Face Waxing', topics: ['Brow waxing', 'Lip and chin', 'Full face'] },
      { module: 'Body Waxing', topics: ['Legs', 'Underarms', 'Back and chest', 'Speed technique'] },
    ],
    careers: ['Waxing Specialist', 'Spa Technician', 'Salon Professional'],
  },
  'science-of-hair-removal': {
    title: 'Science of Hair Removal',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&q=85',
    description: 'Online theory covering the science behind all hair removal modalities.',
    overview: 'A comprehensive online theory course covering the science behind every professional hair removal method — waxing, threading, laser, IPL, and electrolysis. Ideal as a standalone theory credential or as preparation for practical hair removal training.',
    outcomes: ['Science of Hair Removal certificate', 'All modalities covered', 'Online flexible learning', 'Foundation for practical programs'],
    curriculum: [
      { module: 'Hair Science', topics: ['Hair structure', 'Growth cycles', 'Follicle anatomy'] },
      { module: 'Modalities', topics: ['Waxing science', 'Laser and IPL theory', 'Electrolysis science', 'Threading and sugaring'] },
      { module: 'Safety', topics: ['Contraindications', 'Client assessment', 'Post-removal care'] },
    ],
    careers: ['Hair Removal Technician', 'Esthetician', 'Laser Technician'],
  },
  // ─── BODY TREATMENTS ──────────────────────────────────────────────────────
  'body-contouring-buttock-thighs': {
    title: 'Body Contouring: Buttock & Thighs',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85',
    description: 'Non-invasive body contouring treatments for toning, lifting, and sculpting the buttocks and thighs.',
    overview: 'This certificate covers PR Cell and deep-tissue massage technology for non-invasive contouring of the gluteal and thigh area. You will learn targeted treatment protocols for achieving toned, lifted glutes and firm, sculpted thighs — a growing service category in both spas and medispas.',
    outcomes: ['Body Contouring certificate', 'PR Cell device operation', 'Deep-tissue vacuum technique', 'Contouring protocol design'],
    curriculum: [
      { module: 'Body Contouring Science', topics: ['Subcutaneous fat', 'Lymphatic drainage', 'Tissue physiology'] },
      { module: 'Device Operation', topics: ['PR Cell technology', 'Vacuum massage', 'Pressure and depth settings'] },
      { module: 'Treatment Protocols', topics: ['Glute contouring sequence', 'Thigh lifting protocol', 'Treatment series'] },
    ],
    careers: ['Body Contouring Specialist', 'Medical Spa Technician', 'Spa Therapist'],
  },
  'body-contouring-cellulite': {
    title: 'Body Contouring: Cellulite Body Treatment',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85',
    description: 'Targeted treatments for cellulite reduction and skin smoothing on the body.',
    overview: 'Cellulite is one of the most common client concerns. This certificate teaches professional cellulite treatment — combining deep-tissue massage, vacuum therapy, and body wrap protocols to visibly improve skin texture and reduce the appearance of cellulite.',
    outcomes: ['Cellulite Treatment certificate', 'Vacuum therapy technique', 'Cellulite anatomy knowledge', 'Treatment series planning'],
    curriculum: [
      { module: 'Cellulite Science', topics: ['Cellulite grades and types', 'Contributing factors', 'Realistic outcomes'] },
      { module: 'Treatments', topics: ['Deep-tissue massage', 'Vacuum therapy', 'Body wraps for cellulite'] },
      { module: 'Protocols', topics: ['Treatment sequences', 'Series planning', 'Home care recommendations'] },
    ],
    careers: ['Body Contouring Specialist', 'Spa Therapist', 'Medical Spa Technician'],
  },
  'body-sculpting': {
    title: 'Body Sculpting Treatment Class',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85',
    description: 'Comprehensive body sculpting techniques for professional contouring services.',
    overview: 'A comprehensive body sculpting course covering manual and device-assisted techniques for body contouring. Learn to address common client body concerns with professional-grade treatments used in high-end spas and aesthetic clinics.',
    outcomes: ['Body Sculpting certificate', 'Multiple modality training', 'Client body assessment', 'Treatment planning'],
    curriculum: [
      { module: 'Sculpting Overview', topics: ['Body contouring modalities', 'Client assessment', 'Realistic outcomes'] },
      { module: 'Technique', topics: ['Manual sculpting massage', 'Device-assisted contouring', 'Wrapping and compression'] },
      { module: 'Protocols', topics: ['Full body protocol', 'Targeted area focus', 'Series and maintenance'] },
    ],
    careers: ['Body Sculpting Specialist', 'Spa Therapist', 'Medical Spa Technician'],
  },
  // ─── MAKEUP ───────────────────────────────────────────────────────────────
  'professional-makeup-design': {
    title: 'Professional Makeup Design',
    type: 'certificate',
    duration: 'Inquire for schedule',
    salary: '',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85',
    description: 'Professional makeup artistry using Italian professional makeup — bridal, editorial, film, and fashion.',
    overview: "The Professional Makeup Design program is ideal for creative individuals with a passion for beauty, fashion, and the latest trends. You will learn to analyze a client's face and create customized looks using Italian professional makeup. The program qualifies students for professional pricing and discounts with leading makeup brands including RVB LAB THE MAKE UP and MAC.",
    outcomes: ['Professional Makeup Design certificate', 'Italian professional makeup training', 'MAC and RVB LAB professional discount eligibility', 'Portfolio-ready skills'],
    curriculum: [
      { module: 'Makeup Fundamentals', topics: ['Face analysis', 'Foundation and colour matching', 'Skin prep'] },
      { module: 'Application Techniques', topics: ['Contouring and highlighting', 'Eye design', 'Lip techniques'] },
      { module: 'Specialty Looks', topics: ['Bridal', 'Editorial', 'Film and fashion', 'Special effects basics'] },
    ],
    careers: ['Makeup Artist', 'Bridal Makeup Specialist', 'Fashion Makeup Artist', 'Film and TV Artist'],
  },
  // ─── DERMAPLANING ─────────────────────────────────────────────────────────
  'dermaplaning-level-1': {
    title: 'Dermaplaning & Resurfacing Level 1 (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Online theory for professional dermaplaning — skin anatomy, blade science, and treatment protocols.',
    overview: 'Dermaplaning is a highly popular physical exfoliation service that removes dead skin cells and vellus hair using a surgical-grade scalpel. Level 1 covers the complete theory — skin science, blade technique, contraindications, and treatment protocol — in a flexible online format.',
    outcomes: ['Dermaplaning Level 1 certificate', 'Blade theory knowledge', 'Contraindication awareness', 'Prerequisite for Level 2'],
    curriculum: [
      { module: 'Skin Science', topics: ['Exfoliation science', 'Vellus hair anatomy', 'Skin healing'] },
      { module: 'Dermaplaning Theory', topics: ['Blade selection', 'Angle and pressure', 'Contraindications'] },
      { module: 'Treatment Planning', topics: ['Client consultation', 'Pre-care', 'Post-care protocols'] },
    ],
    careers: ['Advanced Esthetician (after Level 2)', 'Skin Care Specialist', 'Medical Spa Technician'],
  },
  'dermaplaning-level-2': {
    title: 'Dermaplaning & Resurfacing Level 2 (Practical)',
    type: 'certificate',
    duration: 'In-person practical training',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Hands-on practical training in dermaplaning technique on real clients.',
    overview: 'The in-person practical component of the Dermaplaning program. Under close instructor supervision, you will develop the blade control and treatment delivery skills required to perform professional dermaplaning services safely and effectively. Level 1 online is required.',
    outcomes: ['Dermaplaning Level 2 certificate', 'Blade technique mastery', 'Live client training', 'Ready to offer the service professionally'],
    curriculum: [
      { module: 'Blade Technique', topics: ['Holding and angle', 'Stroke patterns', 'Pressure control'] },
      { module: 'Live Treatment', topics: ['Practice skin', 'Model work under supervision', 'Full face protocol'] },
      { module: 'Integration', topics: ['Combination with peels', 'Post-treatment protocols', 'Resale and upselling'] },
    ],
    careers: ['Dermaplaning Specialist', 'Advanced Esthetician', 'Medical Spa Technician'],
  },
  // ─── MICRONEEDLING LEVELS ─────────────────────────────────────────────────
  'microneedling-level-1': {
    title: 'Microneedling Level 1 (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Online theory for professional microneedling — collagen induction science and protocols.',
    overview: 'Microneedling Level 1 is the online theory component of the full microneedling program. You will learn the science of collagen induction therapy, device technology, contraindications, and treatment protocols — at your own pace before moving to practical training.',
    outcomes: ['Microneedling Level 1 certificate', 'Collagen induction theory', 'Device knowledge', 'Prerequisite for Level 2'],
    curriculum: [
      { module: 'Science', topics: ['Wound healing response', 'Collagen induction', 'Skin anatomy for needling'] },
      { module: 'Devices', topics: ['Device types and needles', 'Depth settings', 'Sanitation protocols'] },
      { module: 'Planning', topics: ['Client assessment', 'Contraindications', 'Serum selection'] },
    ],
    careers: ['Advanced Esthetician (after Level 2)', 'Medical Spa Specialist', 'Skin Care Therapist'],
  },
  'microneedling-level-2': {
    title: 'Microneedling Level 2 (Practical)',
    type: 'certificate',
    duration: 'In-person practical training',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Hands-on practical microneedling technique on real clients under instructor supervision.',
    overview: 'The in-person practical component of the microneedling program. You will develop confidence and technique with the microneedling device, performing complete treatments under close instructor supervision. Level 1 online is a prerequisite.',
    outcomes: ['Microneedling Level 2 certificate', 'Hands-on device training', 'Full treatment protocol delivery', 'Client-ready skills'],
    curriculum: [
      { module: 'Technique', topics: ['Device handling', 'Glide technique', 'Depth per zone', 'Serum infusion'] },
      { module: 'Live Treatment', topics: ['Practice model sessions', 'Full face protocols', 'Combination treatments'] },
      { module: 'After Care', topics: ['Post-treatment instructions', 'Healing management', 'Series planning'] },
    ],
    careers: ['Microneedling Specialist', 'Medical Spa Technician', 'Advanced Esthetician'],
  },
  // ─── ONLINE / THEORY ──────────────────────────────────────────────────────
  'bloodborne-pathogens': {
    title: 'Bloodborne Pathogens (Online)',
    type: 'certificate',
    duration: 'Online learning',
    salary: '',
    image: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/medical-skin-care-face-with-multiple-tools-without-needle-scaled-619w.jpg',
    description: 'Required safety training covering bloodborne pathogen exposure, prevention, and compliance.',
    overview: 'Bloodborne Pathogens training is a mandatory safety requirement for all professionals working in environments with potential exposure — including aestheticians, PMU artists, and nail technicians. This online course meets industry safety standards and is required before practical training in many programs.',
    outcomes: ['Bloodborne Pathogens certificate', 'Exposure prevention knowledge', 'Compliance requirement met', 'Online completion at own pace'],
    curriculum: [
      { module: 'Pathogens', topics: ['HIV, HBV, HCV', 'Transmission routes', 'Risk in aesthetics environments'] },
      { module: 'Prevention', topics: ['Standard precautions', 'PPE use', 'Sharps handling', 'Sanitation'] },
      { module: 'Compliance', topics: ['Exposure control plan', 'Incident response', 'Documentation'] },
    ],
    careers: ['Required for: PMU Artists, Nail Technicians, Microneedling Specialists, Medical Spa Technicians'],
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#01426A]/80 via-[#01426A]/35 to-transparent" />
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
