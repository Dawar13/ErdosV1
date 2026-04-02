const logos = [
  { src: '/images/logos/1.png', alt: 'Partner 1' },
  { src: '/images/logos/2.png', alt: 'Partner 2' },
  { src: '/images/logos/3.png', alt: 'Partner 3' },
  { src: '/images/logos/4.png', alt: 'Partner 4' },
  { src: '/images/logos/5.png', alt: 'Partner 5' },
  { src: '/images/logos/6.png', alt: 'Partner 6' },
  { src: '/images/logos/7.png', alt: 'Partner 7' },
  { src: '/images/logos/8.png', alt: 'Partner 8' },
  { src: '/images/logos/9.png', alt: 'Partner 9' },
]

// Duplicate for seamless infinite loop
const doubled = [...logos, ...logos]

export default function LogoCarousel() {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 z-10">
      {/* Label */}
      <p className="font-display text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold">
        In collaboration with
      </p>

      {/* Carousel track */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)' }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)' }}
        />

        {/* Scrolling row */}
        <div className="flex items-center gap-16 carousel-track">
          {doubled.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ height: '78px' }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain transition-all duration-400 grayscale hover:grayscale-0"
                style={{ maxWidth: '234px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
