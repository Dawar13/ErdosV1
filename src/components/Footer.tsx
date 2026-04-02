export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ height: '55vh' }}>

      {/* Full bleed image */}
      <img
        src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/footer.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay - darker at bottom for credential legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Quote - upper third of image */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-8 pt-16 md:pt-20">
        <p
          className="font-display italic text-white leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3.8rem)' }}
        >
          "Information is the resolution of uncertainty."
        </p>
        <p className="font-accent text-[9px] tracking-[0.28em] uppercase text-white/35 mt-5">
          - Claude Shannon
        </p>
      </div>

      {/* Credentials - pinned to bottom of image */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 py-7">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-base md:text-lg text-white/60 tracking-tight">
            Erdős
          </span>
          <span className="font-accent text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-white/70 font-bold">
            © 2026 Erdős AI Lab. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  )
}
