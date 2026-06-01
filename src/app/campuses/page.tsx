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
    <div className="min-h-screen bg-white pt-32 lg:pt-40 pb-24">
      <div className="container">

        {/* Header */}
        <div className="max-w-[640px] mb-16">
          <p className="eyebrow text-[#01426A] mb-4">Campuses</p>
          <h1
            className="font-display text-[#01426A] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Three campuses. One standard.
          </h1>
          <p className="text-[#000000]/60 text-lg leading-relaxed">
            Every Gina's campus runs the same curriculum, the same clinical hours, and the same
            instructor standards. The programs you earn at Mississauga are identical to the ones
            you earn in Waterloo or Ottawa.
          </p>
        </div>

        {/* Campus cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {campuses.map((campus) => (
            <div
              key={campus.href}
              className="flex flex-col rounded-[8px] border border-[#E9E9E9] overflow-hidden hover:border-[#B1C6D9] hover:shadow-lg transition-all duration-300"
            >
              {/* Campus name header */}
              <div className="bg-[#01426A] px-6 py-5">
                <h2 className="font-display text-white text-xl font-semibold">{campus.name}</h2>
              </div>

              {/* Contact details */}
              <div className="p-6 flex flex-col flex-1 gap-4">
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

                <div className="mt-auto pt-4 border-t border-[#E9E9E9]">
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

        {/* CTA strip */}
        <div className="bg-[#01426A] rounded-[8px] p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-white text-2xl lg:text-3xl font-semibold mb-2">
              Want to see a campus in person?
            </h2>
            <p className="text-white/60 text-sm">
              Book a free tour and meet the instructors before you decide.
            </p>
          </div>
          <Link href="/consultation" className="btn btn-white text-sm shrink-0 whitespace-nowrap">
            Book a Campus Tour
          </Link>
        </div>

      </div>
    </div>
  )
}
