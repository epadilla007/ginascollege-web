'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const diplomaPrograms = [
  {
    name: 'Medical Aesthetics',
    href: '/programs/medical-aesthetics',
    desc: 'Laser, peels, microneedling. The highest-earning role.',
    duration: '12 months',
  },
  {
    name: 'Advanced Aesthetics',
    href: '/programs/advanced-aesthetics',
    desc: 'The full foundation diploma. CIDESCO-tracked.',
    duration: '10 months',
  },
  {
    name: 'Hairstyling',
    href: '/programs/hairstyling',
    desc: 'Cut, colour, texture. Available at Waterloo campus.',
    duration: '12 months',
  },
  {
    name: 'Electrolysis & Light Technology',
    href: '/programs/electrolysis-light-technology',
    desc: 'Permanent hair removal. Specialized and well-paying.',
    duration: '8 months',
  },
]

const certificateHighlights = [
  'Microneedling',
  'Chemical Peels',
  'Nail Technology',
  'Makeup Artistry',
  'Lash Extensions',
  'Eyebrow Design',
]

const aboutLinks = [
  { name: "Why Gina's", href: '/about' },
  { name: 'Who is Gina?', href: '/who-is-gina' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Careers', href: '/careers' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobilePrograms, setMobilePrograms] = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const programsHoverRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const aboutHoverRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    if (!programsOpen && !aboutOpen) return
    const handle = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('[data-megamenu]')) setProgramsOpen(false)
      if (!target.closest('[data-aboutmenu]')) setAboutOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [programsOpen, aboutOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handle = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  // Programs megamenu hover handlers
  const openMega = useCallback(() => {
    if (programsHoverRef.current) clearTimeout(programsHoverRef.current)
    setProgramsOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    programsHoverRef.current = setTimeout(() => setProgramsOpen(false), 120)
  }, [])

  const keepMegaOpen = useCallback(() => {
    if (programsHoverRef.current) clearTimeout(programsHoverRef.current)
  }, [])

  // About dropdown hover handlers
  const openAbout = useCallback(() => {
    if (aboutHoverRef.current) clearTimeout(aboutHoverRef.current)
    setAboutOpen(true)
  }, [])

  const closeAbout = useCallback(() => {
    aboutHoverRef.current = setTimeout(() => setAboutOpen(false), 120)
  }, [])

  const keepAboutOpen = useCallback(() => {
    if (aboutHoverRef.current) clearTimeout(aboutHoverRef.current)
  }, [])

  return (
    <>
      {/* Backdrop — desktop only */}
      {(programsOpen || aboutOpen) && (
        <div
          className="fixed inset-0 z-40 hidden lg:block"
          onMouseDown={() => { setProgramsOpen(false); setAboutOpen(false) }}
        />
      )}

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
            <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/logo.png"
                alt="Gina's College of Advanced Aesthetics"
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">

              {/* Programs megamenu trigger */}
              <div
                data-megamenu
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200',
                    scrolled ? 'text-[#01426A]' : 'text-white',
                    'hover:opacity-75'
                  )}
                  aria-expanded={programsOpen}
                  aria-haspopup="true"
                  onClick={() => setProgramsOpen((o) => !o)}
                >
                  Programs
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={cn('transition-transform duration-200', programsOpen && 'rotate-180')}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Megamenu panel */}
                <div
                  onMouseEnter={keepMegaOpen}
                  onMouseLeave={closeMega}
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-white rounded-[10px] shadow-2xl border border-[#E9E9E9] overflow-hidden',
                    'transition-all duration-200 origin-top',
                    programsOpen
                      ? 'opacity-100 scale-y-100 pointer-events-auto'
                      : 'opacity-0 scale-y-95 pointer-events-none'
                  )}
                >
                  <div className="grid grid-cols-[1fr_200px]">

                    {/* Left: diploma programs */}
                    <div className="p-6 border-r border-[#E9E9E9]">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-4">
                        Diploma Programs
                      </p>
                      <div className="space-y-1">
                        {diplomaPrograms.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="group flex items-start gap-3 p-3 rounded-[6px] hover:bg-[#E9E9E9]/60 transition-colors duration-150"
                            onClick={() => setProgramsOpen(false)}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="text-sm font-semibold text-[#01426A] group-hover:text-[#01426A]">
                                  {p.name}
                                </p>
                                <span className="text-[10px] text-[#000000]/35 font-medium shrink-0">
                                  {p.duration}
                                </span>
                              </div>
                              <p className="text-xs text-[#000000]/50 leading-snug">{p.desc}</p>
                            </div>
                            <svg
                              className="shrink-0 mt-1 text-[#01426A]/30 group-hover:text-[#01426A] transition-colors"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#E9E9E9]">
                        <Link
                          href="/programs"
                          className="text-xs font-semibold text-[#01426A] hover:text-[#01426A]/70 transition-colors"
                          onClick={() => setProgramsOpen(false)}
                        >
                          Browse all certificate programs &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Right: certificates + CTA */}
                    <div className="p-6 bg-[#E9E9E9]/30 flex flex-col">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#01426A]/50 mb-3">
                        Certificate Courses
                      </p>
                      <div className="space-y-1.5 flex-1">
                        {certificateHighlights.map((cert) => (
                          <Link
                            key={cert}
                            href={`/programs/${cert.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                            className="block text-xs text-[#000000]/60 hover:text-[#01426A] transition-colors leading-snug"
                            onClick={() => setProgramsOpen(false)}
                          >
                            {cert}
                          </Link>
                        ))}
                        <Link
                          href="/programs"
                          className="block text-xs text-[#01426A]/50 hover:text-[#01426A] transition-colors"
                          onClick={() => setProgramsOpen(false)}
                        >
                          + more
                        </Link>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#E9E9E9]">
                        <Link
                          href="/apply"
                          className="block w-full text-center px-4 py-2.5 bg-[#01426A] text-white text-xs font-semibold rounded-[4px] hover:bg-[#012d4a] transition-colors"
                          onClick={() => setProgramsOpen(false)}
                        >
                          Apply Now
                        </Link>
                        <Link
                          href="/consultation"
                          className="block w-full text-center px-4 py-2 text-[#01426A] text-xs font-medium hover:underline mt-1"
                          onClick={() => setProgramsOpen(false)}
                        >
                          Free consultation &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div className="bg-[#01426A] px-6 py-2.5 flex items-center gap-6">
                    {['CIDESCO Accredited', 'OSAP Eligible', '3 Campuses', '45+ Years'].map((item) => (
                      <span key={item} className="text-[11px] text-white/60 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* About dropdown trigger */}
              <div
                data-aboutmenu
                className="relative"
                onMouseEnter={openAbout}
                onMouseLeave={closeAbout}
              >
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200',
                    scrolled ? 'text-[#01426A]' : 'text-white',
                    'hover:opacity-75'
                  )}
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  onClick={() => setAboutOpen((o) => !o)}
                >
                  About
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={cn('transition-transform duration-200', aboutOpen && 'rotate-180')}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* About dropdown panel */}
                <div
                  onMouseEnter={keepAboutOpen}
                  onMouseLeave={closeAbout}
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[200px] bg-white rounded-[10px] shadow-2xl border border-[#E9E9E9] overflow-hidden',
                    'transition-all duration-200 origin-top',
                    aboutOpen
                      ? 'opacity-100 scale-y-100 pointer-events-auto'
                      : 'opacity-0 scale-y-95 pointer-events-none'
                  )}
                >
                  <div className="py-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-[#01426A] font-medium hover:bg-[#E9E9E9]/60 transition-colors duration-150"
                        onClick={() => setAboutOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink href="/campuses" scrolled={scrolled}>Campuses</NavLink>
              <NavLink href="/clinic" scrolled={scrolled}>Beauty Clinic</NavLink>
              <NavLink href="/blog" scrolled={scrolled}>Blog</NavLink>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/consultation"
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  scrolled ? 'text-[#01426A] hover:text-[#01426A]/70' : 'text-white/80 hover:text-white'
                )}
              >
                Free Consultation
              </Link>
              <Link href="/apply" className="btn btn-primary text-sm">
                Apply Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className={cn(
                'lg:hidden p-2 rounded-md transition-colors',
                scrolled ? 'text-[#01426A]' : 'text-white'
              )}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
          <div
            className={cn(
              'lg:hidden overflow-hidden transition-all duration-300',
              menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="bg-white border-t border-[#E9E9E9] pb-6">

              {/* Programs accordion */}
              <button
                className="flex items-center justify-between w-full px-0 py-4 text-sm font-semibold text-[#01426A] border-b border-[#E9E9E9]"
                onClick={() => setMobilePrograms((o) => !o)}
              >
                Programs
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={cn('transition-transform duration-200', mobilePrograms && 'rotate-180')}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {mobilePrograms && (
                <div className="py-3 pl-4 space-y-1 border-b border-[#E9E9E9]">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#01426A]/40 mb-2">
                    Diploma Programs
                  </p>
                  {diplomaPrograms.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block py-2 text-sm text-[#01426A] font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {p.name}
                      <span className="ml-2 text-[10px] text-[#000000]/35">{p.duration}</span>
                    </Link>
                  ))}
                  <Link
                    href="/programs"
                    className="block py-2 text-xs font-semibold text-[#01426A]/60"
                    onClick={() => setMenuOpen(false)}
                  >
                    Browse all programs &rarr;
                  </Link>
                </div>
              )}

              {/* About accordion */}
              <button
                className="flex items-center justify-between w-full px-0 py-4 text-sm font-semibold text-[#01426A] border-b border-[#E9E9E9]"
                onClick={() => setMobileAbout((o) => !o)}
              >
                About
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={cn('transition-transform duration-200', mobileAbout && 'rotate-180')}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {mobileAbout && (
                <div className="py-3 pl-4 space-y-1 border-b border-[#E9E9E9]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-[#01426A] font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              <MobileLink href="/campuses" onClick={() => setMenuOpen(false)}>Campuses</MobileLink>
              <MobileLink href="/clinic" onClick={() => setMenuOpen(false)}>Beauty Clinic</MobileLink>
              <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>Blog</MobileLink>
              <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</MobileLink>

              <div className="pt-5 space-y-3">
                <Link
                  href="/apply"
                  className="btn btn-primary w-full text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  href="/consultation"
                  className="btn btn-secondary w-full text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
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

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-4 text-sm font-medium text-[#01426A] border-b border-[#E9E9E9]"
      onClick={onClick}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}
