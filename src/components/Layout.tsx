import { Link, useLocation, Outlet } from 'react-router'
import { useState } from 'react'
import { BlobSmall } from './Blobs'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/booking', label: 'Book Now' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <header className="sticky top-0 z-50" style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <BlobSmall color="var(--primary)" className="absolute inset-0 w-full h-full" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-serif font-semibold text-sm">S</span>
            </div>
            <div>
              <div className="font-serif text-lg font-semibold leading-tight" style={{ color: 'var(--foreground)' }}>Serenova</div>
              <div className="text-xs font-light tracking-widest uppercase" style={{ color: 'var(--muted-foreground)' }}>Wellness Spa</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ color: pathname === to ? 'var(--primary)' : 'var(--muted-foreground)' }}
              >
                {label}
                {pathname === to && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--foreground)' }}
          >
            <div className="w-5 h-0.5 mb-1.5 transition-all duration-300 ease-in-out" style={{ backgroundColor: 'currentColor', transform: menuOpen ? 'rotate(45deg) translateY(14px)' : '' }} />
            <div className="w-5 h-0.5 mb-1.5 transition-all duration-300 ease-in-out" style={{ backgroundColor: 'currentColor', opacity: menuOpen ? 0 : 1 }} />
            <div className="w-5 h-0.5 transition-all duration-300 ease-in-out" style={{ backgroundColor: 'currentColor', transform: menuOpen ? 'rotate(-45deg) translateY(-14px)' : '' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-1"
                style={{ color: pathname === to ? 'var(--primary)' : 'var(--foreground)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Serenova Wellness Spa</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A sanctuary for rest, renewal, and gentle healing nestled in the heart of the forest.
            </p>
          </div>
          <div>
            <div className="font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--muted-foreground)' }}>Pages</div>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm hover:underline" style={{ color: 'var(--foreground)' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--muted-foreground)' }}>Hours</div>
            <div className="text-sm space-y-1" style={{ color: 'var(--foreground)' }}>
              <div>Mon–Fri: 9am – 7pm</div>
              <div>Saturday: 9am – 5pm</div>
              <div>Sunday: 10am – 4pm</div>
            </div>
          </div>
        </div>
        <div className="text-center py-4 text-xs" style={{ color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)' }}>
          © 2026 Serenova Wellness Spa. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
