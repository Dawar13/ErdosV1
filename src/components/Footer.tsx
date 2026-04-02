export default function Footer() {
  return (
    <footer className="flex flex-col">

      {/* Image + quote block */}
      <div className="relative w-full overflow-hidden" style={{ height: '55vh' }}>
        <img
          src="/images/footer.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Quote */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p
            className="font-display italic text-white leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
          >
            "Information is the resolution of uncertainty."
          </p>
          <p className="font-accent text-[9px] tracking-[0.28em] uppercase text-white/35 mt-6">
            - Claude Shannon
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-black py-8 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-lg text-white/60 tracking-tight">
            Erdős
          </span>
          <span className="font-accent text-[9px] tracking-[0.18em] uppercase text-white/20">
            © 2025 Erdős AI Lab. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  )
}
