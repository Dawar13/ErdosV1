import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Papers', href: '#papers' },
  { label: 'Write to Us', href: '#write-to-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-7">
        <a
          href="#"
          className="font-display text-3xl text-white tracking-tight"
          style={{ opacity: scrolled ? 0.7 : 1, transition: 'opacity 0.4s' }}
        >
          Erdős
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-accent text-[10px] tracking-[0.28em] uppercase font-semibold text-white/60 hover:text-white/90 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Menu"
        >
          <span
            className="block w-5 h-[1.5px] bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[1.5px] bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold text-white/70 hover:text-white transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
