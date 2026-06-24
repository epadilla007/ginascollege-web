'use client'

import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    question: 'What is a beauty school and what can I expect to learn?',
    answer:
      "A beauty school, like Gina's College of Advanced Aesthetics, is where you train for a professional career in the beauty industry. You will learn techniques in skincare, makeup, hair, nails, laser treatments, and more — depending on your chosen program. At Gina's, you spend 70% of your time in hands-on practical training, working on real clients in our student clinic.",
  },
  {
    question: "What's the difference between an esthetician and a cosmetologist?",
    answer:
      'An esthetician specializes in skincare — facials, waxing, peels, laser treatments, and related services. A cosmetologist typically has a broader scope that includes hair, nails, and skin. At Gina\'s College, our programs focus on advanced aesthetics, medical aesthetics, electrolysis, and hairstyling — giving you deep specialization in your chosen field.',
  },
  {
    question: 'Can I take classes online or do I need to come in person?',
    answer:
      "Gina's College offers a blend of online virtual learning and in-person practical training. Theoretical coursework can be completed online for flexibility, while practical skills are developed in-person at one of our three campuses in Mississauga, Waterloo, or Ottawa. Small class sizes ensure you always get personalized attention from your instructors.",
  },
  {
    question: 'What career opportunities are available after I graduate?',
    answer:
      "Graduates from Gina's College work in medical spas, salons, spas, dermatology clinics, plastic surgery offices, cruise ships, and their own businesses. With a CIDESCO international diploma, you are recognized worldwide. Our graduates have gone on to open their own spas, become laser specialists, medical aestheticians, and top-tier hairstylists across Canada and internationally.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-[#E9E9E9] last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-[17px] font-semibold text-[#01426A] leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#01426A]/20 flex items-center justify-center transition-transform duration-300 mt-[1px] ${isOpen ? 'bg-[#01426A] rotate-45' : 'bg-transparent'}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#fff' : '#01426A'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-[15px] text-[#555] leading-relaxed pb-5">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
          )
        })
      })
    )
    return () => ctx.revert?.()
  }, [])

  return (
    <section ref={sectionRef} className="opacity-0 section bg-[#F6F8FA]" aria-label="Frequently asked questions">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left heading */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-[#01426A] mb-4">FAQ</p>
            <h2 className="font-display text-[clamp(26px,3vw,42px)] font-semibold text-[#01426A] leading-tight">
              Questions we hear from students
            </h2>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 bg-white rounded-[10px] border border-[#E9E9E9] px-6 py-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
