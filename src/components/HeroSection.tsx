import LogoCarousel from './LogoCarousel'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/hero+section+video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-sm tracking-[0.32em] uppercase text-white font-medium mb-10 animate-fade-rise" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Erdős AI Lab - Est. 2025
        </p>

        <h1
          className="font-display font-normal text-white leading-[1.05] tracking-[-0.03em] max-w-[480px] animate-fade-rise-d1"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          Thinking at the<br />
          edge of what's known.
        </h1>

        <p className="font-body font-medium text-sm text-white mt-3 leading-relaxed max-w-[300px] animate-fade-rise-d2">
          A collective of young researchers pushing the frontier of artificial intelligence.
        </p>
      </div>

      <LogoCarousel />
    </section>
  )
}
