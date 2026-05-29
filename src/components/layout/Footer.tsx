import Link from 'next/link'

const programs = [
  { name: 'Medical Aesthetics', href: '/programs/medical-aesthetics' },
  { name: 'Advanced Aesthetics', href: '/programs/advanced-aesthetics' },
  { name: 'Hairstyling', href: '/programs/hairstyling' },
  { name: 'Electrolysis & Light Technology', href: '/programs/electrolysis-light-technology' },
  { name: 'All Programs', href: '/programs' },
]

const campuses = [
  { name: 'Mississauga', href: '/campuses/mississauga' },
  { name: 'Waterloo', href: '/campuses/waterloo' },
  { name: 'Ottawa', href: '/campuses/ottawa' },
]

const company = [
  { name: 'About', href: '/about' },
  { name: 'Student Clinic', href: '/clinic' },
  { name: 'Blog', href: '/blog' },
  { name: 'Apply', href: '/apply' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#01426A] text-white">
      <div className="container">
        {/* Top: CTA strip */}
        <div className="py-16 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-white/50 mb-2">Ready to start?</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">
              Your career starts with one step.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/apply" className="btn btn-white text-sm whitespace-nowrap">
              Start Your Application
            </Link>
            <Link href="/consultation" className="btn btn-outline-white text-sm whitespace-nowrap">
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/images/logo-white.svg" alt="Gina's College" className="h-10 w-auto mb-6" />
            <p className="text-sm text-white/60 leading-relaxed max-w-[220px]">
              Ontario's most prestigious aesthetics school. Training industry professionals since 1979.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com/ginascollege" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://facebook.com/ginascollege" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://tiktok.com/@ginascollege" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/50 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" /></svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Programs</p>
            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Campuses</p>
            <ul className="space-y-3">
              {campuses.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">School</p>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gina's College of Advanced Aesthetics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="text-xs text-white/40 hover:text-white/70 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
