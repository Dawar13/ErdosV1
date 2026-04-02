import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { useInViewVideo } from '../hooks/useInViewVideo'

const WRITE_VIDEO_URL = 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Write+to+us.mp4'

function ApplyModal({ onClose }: { onClose: () => void }) {
  const { ref: videoRef } = useInViewVideo()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <m.div
      className="fixed inset-0 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src={WRITE_VIDEO_URL}
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Close */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[102] font-accent text-[10px] tracking-[0.28em] uppercase text-white/35 hover:text-white/70 transition-colors duration-300"
      >
        Close ✕
      </button>

      {/* Form */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="max-w-[600px] mx-auto pt-32 pb-24 px-6">
          <h2
            className="font-display font-normal text-white mb-16 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Apply to Erdős AI Labs
          </h2>

          <form className="flex flex-col gap-14" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: 'Name', placeholder: 'Your full name', type: 'input' },
              { label: 'Education', placeholder: 'Degree, institution, year', type: 'input' },
              { label: 'Background', placeholder: "Where you're coming from", type: 'textarea' },
              { label: 'Research Interests', placeholder: 'What obsesses you', type: 'textarea' },
              { label: 'Previous Work', placeholder: 'Papers, projects, anything relevant', type: 'textarea' },
              { label: 'Why you belong here', placeholder: 'Make us believe it', type: 'textarea', rows: 4 },
            ].map(({ label, placeholder, type, rows = 3 }) => (
              <div key={label}>
                <label className="text-[12px] tracking-[0.28em] uppercase text-white/75 font-semibold block mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {label}
                </label>
                {type === 'input' ? (
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full bg-transparent border-0 border-b border-white/12 text-white placeholder-white/15 pb-3 outline-none focus:border-white/30 transition-colors duration-300"
                    style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)' }}
                  />
                ) : (
                  <textarea
                    rows={rows}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-0 border-b border-white/12 text-white placeholder-white/15 pb-3 outline-none resize-none focus:border-white/30 transition-colors duration-300"
                    style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)' }}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-white text-black font-accent text-[10px] tracking-[0.3em] uppercase py-5 hover:bg-white/88 transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </m.div>
  )
}

export default function WriteToUsSection() {
  const { ref: videoRef } = useInViewVideo(WRITE_VIDEO_URL)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section
        className="relative h-screen overflow-hidden"
        id="write-to-us"
      >
        {/* Video loads lazily only when section is near viewport */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-black/35 z-[1]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/85 font-medium mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            For the ones who push limits.
          </p>

          <h2
            className="font-display font-normal text-white leading-[1.0] tracking-[-0.03em] max-w-[580px] mb-12"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)' }}
          >
            If you think at the edge<br />
            of what's known -<br />
            we want to hear from you.
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => window.open('mailto:dawardeka@iitb.ac.in')}
              className="liquid-glass rounded-full px-10 py-4 font-accent text-[9px] tracking-[0.28em] uppercase text-white hover:opacity-80 transition-opacity duration-300"
            >
              Write to Us
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="liquid-glass rounded-full px-10 py-4 font-accent text-[9px] tracking-[0.28em] uppercase text-white hover:opacity-80 transition-opacity duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && <ApplyModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
