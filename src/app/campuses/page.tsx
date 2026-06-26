import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Campuses — Mississauga, Waterloo & Ottawa | Gina's College",
  description:
    "Three campuses across Ontario. Mississauga, Waterloo, and Ottawa. Each campus has a student clinic, licensed instructors, and full program offerings.",
}

const campuses = [
  {
    name: 'Mississauga',
    href: '/campuses/mississauga',
    address: '7-3045 Southcreek Rd., Mississauga ON L4X 2E9',
    phone: '(905) 602-8891',
    tel: 'tel:+19056028891',
    email: 'mississauga@ginascollege.com',
  },
  {
    name: 'Waterloo',
    href: '/campuses/waterloo',
    address: '385 Weber St. N., Waterloo ON N2J 3J2',
    phone: '(519) 886-2998',
    tel: 'tel:+15198862998',
    email: 'waterloo@ginascollege.com',
  },
  {
    name: 'Ottawa',
    href: '/campuses/ottawa',
    address: '215 Dalhousie St., Ottawa ON K1N 7C9',
    phone: '(613) 789-7875',
    tel: 'tel:+16137897875',
    email: 'ottawa@ginascollege.com',
  },
]

export default function CampusesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div style={{ backgroundColor: 'var(--color-cream)' }} className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container max-w-[960px]">
          <p className="eyebrow text-[#01426A]/80 mb-5">Campuses</p>
          <h1
            className="font-serif italic text-[#01426A] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(52px, 6vw, 88px)' }}
          >
            Three campuses. One standard.
          </h1>
          <p className="text-[#000000]/60 leading-relaxed max-w-[580px]" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
            Every Gina's campus runs the same curriculum, the same clinical hours, and the same
            instructor standards. The programs you earn at Mississauga are identical to the ones
            you earn in Waterloo or Ottawa.
          </p>
        </div>
      </div>

      {/* Campus cards */}
      <div className="bg-white py-20">
        <div className="container max-w-[960px]">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {campuses.map((campus) => (
              <div
                key={campus.href}
                className="flex flex-col border hover:border-[#C4856A] transition-colors duration-200"
                style={{ borderColor: 'var(--color-cream-deep)' }}
              >
                {/* Campus name header */}
                <div className="bg-[#01426A] px-6 py-5">
                  <h2 className="font-serif italic text-white text-xl">{campus.name}</h2>
                </div>

                {/* Contact details */}
                <div className="p-6 flex flex-col flex-1 gap-4" style={{ backgroundColor: 'var(--color-cream)' }}>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-[#000000]/70 leading-snug">{campus.address}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Phone</p>
                    <a
                      href={campus.tel}
                      className="text-sm text-[#01426A] hover:underline font-medium"
                    >
                      {campus.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${campus.email}`}
                      className="text-sm text-[#01426A] hover:underline font-medium break-all"
                    >
                      {campus.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#000000]/40 uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-sm text-[#000000]/70">Monday to Friday, 9am to 4:30pm</p>
                  </div>

                  <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--color-cream-deep)' }}>
                    <Link
                      href={campus.href}
                      className="text-sm font-semibold text-[#01426A] hover:underline"
                    >
                      View Campus Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navy CTA strip */}
          <div className="bg-[#01426A]">
            <div className="py-16 lg:py-20 px-10 lg:px-14">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="max-w-[560px]">
                  <p className="eyebrow text-white/60 mb-5">Visit Us</p>
                  <h2
                    className="font-serif italic text-white leading-[1.0]"
                    style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
                  >
                    Want to see a campus in person?
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Link href="/consultation" className="btn btn-white">Book a Campus Tour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
