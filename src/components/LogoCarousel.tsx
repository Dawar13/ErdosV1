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
      {/* Label */}
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
