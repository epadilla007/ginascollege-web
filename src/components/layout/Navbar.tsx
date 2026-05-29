'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const diplomaPrograms = [
  { name: 'Medical Aesthetics', href: '/programs/medical-aesthetics', desc: 'Laser, peels, microneedling' },
  { name: 'Advanced Aesthetics', href: '/programs/advanced-aesthetics', desc: 'The full foundation diploma' },
  { name: 'Hairstyling', href: '/programs/hairstyling', desc: 'Creative and client-facing' },
  { name: 'Electrolysis & Light Technology', href: '/programs/electrolysis-light-technology', desc: 'Specialized and growing fast' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E9E9E9]'
          : 'bg-transparent'
      )}
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/logo.svg"
              alt="Gina's College of Advanced Aesthetics"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Programs mega-menu */}
            <div className="relative" onMouseLeave={() => setProgramsOpen(false)}>
              <button
                className={cn(
                  'flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200',
                  scrolled ? 'text-[#01426A]' : 'text-white',
                  'hover:opacity-70'
                )}
                onMouseEnter={() => setProgramsOpen(true)}
                aria-expanded={programsOpen}
              >
                Programs
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn('transition-transform duration-200', programsOpen && 'rotate-180')}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown */}
              {programsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-lg shadow-xl border border-[#E9E9E9] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/60 mb-4">
                    Diploma Programs
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {diplomaPrograms.map((program) => (
                      <Link
                        key={program.href}
                        href={program.href}
                        className="group p-3 rounded-md hover:bg-[#E9E9E9] transition-colors duration-150"
                        onClick={() => setProgramsOpen(false)}
                      >
                        <p className="text-sm font-semibold text-[#01426A] group-hover:text-[#01426A]">
                          {program.name}
                        </p>
                        <p className="text-xs text-[#000000]/50 mt-0.5">{program.desc}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E9E9E9]">
                    <Link
                      href="/programs"
                      className="text-sm font-medium text-[#01426A] hover:underline"
                      onClick={() => setProgramsOpen(false)}
                    >
                      Browse all certificate programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/campuses" scrolled={scrolled}>Campuses</NavLink>
            <NavLink href="/clinic" scrolled={scrolled}>Student Clinic</NavLink>
            <NavLink href="/about" scrolled={scrolled}>About</NavLink>
          </div>

          {/* CTA — always visible */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="btn btn-primary text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-md',
              scrolled ? 'text-[#01426A]' : 'text-white'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E9E9E9] pb-6">
            <div className="flex flex-col divide-y divide-[#E9E9E9]">
              <MobileSection label="Diploma Programs">
                {diplomaPrograms.map((p) => (
                  <Link key={p.href} href={p.href} className="block py-2 text-sm text-[#01426A]" onClick={() => setMenuOpen(false)}>
                    {p.name}
                  </Link>
                ))}
                <Link href="/programs" className="block py-2 text-sm font-medium text-[#01426A]" onClick={() => setMenuOpen(false)}>
                  All certificate programs →
                </Link>
              </MobileSection>
              <MobileLink href="/campuses" onClick={() => setMenuOpen(false)}>Campuses</MobileLink>
              <MobileLink href="/clinic" onClick={() => setMenuOpen(false)}>Student Clinic</MobileLink>
              <MobileLink href="/about" onClick={() => setMenuOpen(false)}>About</MobileLink>
            </div>
            <div className="pt-4 px-0">
              <Link href="/apply" className="btn btn-primary w-full text-sm" onClick={() => setMenuOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string
  children: React.ReactNode
  scrolled: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium tracking-wide transition-colors duration-200',
        scrolled ? 'text-[#01426A] hover:text-[#01426A]/70' : 'text-white hover:text-white/70'
      )}
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="block py-4 text-sm font-medium text-[#01426A]" onClick={onClick}>
      {children}
    </Link>
  )
}

function MobileSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-3">{label}</p>
      {children}
    </div>
  )
}
