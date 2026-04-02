import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-7">
      <a
        href="#"
        className="font-display text-3xl text-white tracking-tight"
        style={{ opacity: scrolled ? 0.7 : 1, transition: 'opacity 0.4s' }}
      >
        Erdős
      </a>
      <div className="flex gap-10">
        {['Research', 'Papers', 'Write to Us'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-accent text-[10px] tracking-[0.28em] uppercase font-semibold text-white/60 hover:text-white/90 transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
