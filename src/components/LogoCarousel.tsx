const logos = [
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/1.png', alt: 'Partner 1' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/2.png', alt: 'Partner 2' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/3.png', alt: 'Partner 3' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/4.png', alt: 'Partner 4' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/5.png', alt: 'Partner 5' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/6.png', alt: 'Partner 6' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/7.png', alt: 'Partner 7' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/8.png', alt: 'Partner 8' },
  { src: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/9.png', alt: 'Partner 9' },
]

// Duplicate for seamless infinite loop
const doubled = [...logos, ...logos]

export default function LogoCarousel() {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 z-10">

      {/* Backed by — static logos */}
      <div className="flex flex-col items-center gap-2 mb-2">
        <p className="font-display text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold">
          Backed by
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/EF%20logo.png"
              alt="EF"
              className="h-[28px] w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Google%20logo.png"
              alt="Google Research"
              className="h-[28px] w-auto object-contain"
            />
            <span className="font-body text-[11px] text-white/70 font-medium tracking-wide">Research</span>
          </div>
        </div>
      </div>

      {/* In collaboration with label */}
      <p className="font-display text-[10px] tracking-[0.3em] uppercase text-white/80 font-bold">
        In collaboration with
      </p>

      {/* Carousel track */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling row */}
        <div className="flex items-center gap-16 carousel-track">
          {doubled.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ height: '86px' }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain transition-all duration-400 grayscale hover:grayscale-0"
                style={{ maxWidth: '257px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
