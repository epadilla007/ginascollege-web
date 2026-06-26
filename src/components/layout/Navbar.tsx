'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type DropdownItem = { label: string; href: string; description?: string }
type NavGroup = { label: string; items: DropdownItem[]; wide?: boolean }
type NavLink = { label: string; href: string }
type NavItem = NavGroup | NavLink

function isGroup(item: NavItem): item is NavGroup {
  return 'items' in item
}

const diplomaPrograms: DropdownItem[] = [
  { label: 'Medical Aesthetics', href: '/programs/medical-aesthetics', description: '12 months · CIDESCO pathway · OSAP' },
  { label: 'Hairstyling', href: '/programs/hairstyling', description: '12 months · Waterloo only' },
  { label: 'Advanced Aesthetics', href: '/programs/advanced-aesthetics', description: '10 months · OSAP eligible' },
  { label: 'Electrolysis & Light Technology', href: '/programs/electrolysis-light-technology', description: '8 months · High-earning specialty' },
]

const navItems: NavItem[] = [
  {
    label: 'About Us',
    items: [
      { label: "Why Gina's College", href: '/about' },
      { label: 'Who is Gina?', href: '/who-is-gina' },
      { label: 'Building a Foundation for Success', href: '/building-a-foundation-for-success' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'How to Apply',
    items: [
      { label: 'How to Apply', href: '/how-to-apply' },
      { label: 'Apply Online', href: '/apply' },
      { label: 'Financial Aid', href: '/financial-aid' },
    ],
  },
  {
    label: 'Our Courses',
    wide: true,
    items: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Certificate Programs', href: '/certificate-programs' },
      { label: 'CIDESCO Pathway', href: '/programs/medical-aesthetics' },
    ],
  },
  {
    label: 'Beauty Clinic',
    items: [
      { label: 'Beauty Clinic', href: '/beauty-clinic' },
      { label: 'Mississauga Spa Services', href: '/mississauga-spa-beauty-services' },
      { label: 'Waterloo Spa Services', href: '/waterloo-spa-beauty-services' },
      { label: 'Waterloo Hair Design', href: '/waterloo-hair-design-services' },
      { label: 'Ottawa Spa Services', href: '/ottawa-spa-beauty-services' },
    ],
  },
  {
    label: 'Gallery',
    items: [
      { label: "Gina's Campus Tour", href: '/campuses' },
      { label: 'Videos', href: '/videos' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  // Always frosted-white glass — readability on all pages/scroll positions
  const transparent = false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const linkCls = transparent
    ? 'text-white/90 hover:text-white'
    : 'text-[#1a1a1a] hover:text-[#01426A]'

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || pathname !== '/'
            ? 'bg-white/95 backdrop-blur-2xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-[#E9E9E9]/80'
            : 'bg-white/[0.55] backdrop-blur-2xl border-b border-white/30 shadow-[0_1px_16px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link href="/" aria-label="Gina's College — Home" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Gina's College of Advanced Aesthetics"
                width={188}
                height={67}
                priority
                className={`h-[42px] w-auto transition-all duration-300 ${transparent ? 'brightness-0 invert' : ''}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center" aria-label="Main navigation">
              {navItems.map((item) => {
                if (!isGroup(item)) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3.5 py-2 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap ${linkCls}`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap ${linkCls}`}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        className={`transition-transform duration-200 mt-[1px] ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      >
                        <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Dropdown panel */}
                    <div
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                      className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                        openDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className={`bg-white rounded-[6px] shadow-xl border border-[#E9E9E9] overflow-hidden py-1.5 ${item.wide ? 'min-w-[300px]' : 'min-w-[220px]'}`}>
                        {/* Our Courses gets a diploma section header */}
                        {item.label === 'Our Courses' && (
                          <div className="px-1.5 pb-1 mb-1 border-b border-[#E9E9E9]">
                            <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#01426A]/50">
                              Diploma Programs
                            </p>
                            {diplomaPrograms.map((prog) => (
                              <Link
                                key={prog.label}
                                href={prog.href}
                                className="block px-3 py-2 hover:bg-[#E9E9E9]/40 rounded transition-colors duration-100"
                              >
                                <span className="block text-[13px] text-[#333] group-hover:text-[#01426A]">{prog.label}</span>
                                {prog.description && (
                                  <span className="block text-[10px] text-[#000000]/35 mt-0.5">{prog.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                        {item.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-[13px] text-[#333] hover:text-[#01426A] hover:bg-[#E9E9E9]/40 transition-colors duration-100 whitespace-nowrap"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:block ml-4 flex-shrink-0">
              <Link
                href="/apply"
                className={`btn text-[12.5px] px-5 py-[11px] ${transparent ? 'btn-outline-white' : 'btn-primary'}`}
              >
                Request More Info
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden ml-4 w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-[22px] h-[1.5px] transition-all duration-300 origin-center ${transparent ? 'bg-white' : 'bg-[#01426A]'} ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] transition-all duration-200 ${transparent ? 'bg-white' : 'bg-[#01426A]'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] transition-all duration-300 origin-center ${transparent ? 'bg-white' : 'bg-[#01426A]'} ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 xl:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-[min(340px,90vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-[70px] border-b border-[#E9E9E9] flex-shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo.png" alt="Gina's College" width={188} height={67} className="h-8 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#01426A]" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav list */}
          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((item) => {
              if (!isGroup(item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#1a1a1a] hover:text-[#01426A] hover:bg-[#E9E9E9]/30 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              }
              const expanded = mobileExpanded === item.label
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#1a1a1a] hover:text-[#01426A] hover:bg-[#E9E9E9]/30 transition-colors"
                    aria-expanded={expanded}
                  >
                    {item.label}
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
                      <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded && (
                    <div className="bg-[#E9E9E9]/20 border-y border-[#E9E9E9]">
                      {item.label === 'Our Courses' && (
                        <>
                          <p className="pl-7 pt-2.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-[#01426A]/50">Diploma Programs</p>
                          {diplomaPrograms.map((prog) => (
                            <Link key={prog.label} href={prog.href} onClick={() => setMobileOpen(false)}
                              className="block pl-7 pr-5 py-2 text-[13px] text-[#444] hover:text-[#01426A] transition-colors">
                              {prog.label}
                            </Link>
                          ))}
                          <div className="mx-5 my-1.5 border-t border-[#E9E9E9]" />
                        </>
                      )}
                      {item.items.map((sub) => (
                        <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="block pl-7 pr-5 py-2.5 text-[13px] text-[#444] hover:text-[#01426A] transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="flex-shrink-0 px-5 py-4 border-t border-[#E9E9E9]">
            <Link href="/apply" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full justify-center text-[13px]">
              Request More Info
            </Link>
          </div>
        </div>
      </div>

      {/* Fixed nav spacer */}
      <div className="h-[70px]" aria-hidden="true" />
    </>
  )
}
