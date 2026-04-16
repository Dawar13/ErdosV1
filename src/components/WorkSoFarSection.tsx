import { useRef, useState, useEffect } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { papers } from '../data/papers'
import type { Paper } from '../data/papers'

function Card({ paper }: { paper: Paper }) {
  const isProject = paper.type === 'project'
  return (
    <div
      className="liquid-glass rounded-2xl flex flex-col shrink-0"
      style={{ width: 'min(380px, 80vw)', padding: '1.5rem 2rem' }}
    >
      <p className="font-accent text-[9px] tracking-[0.3em] uppercase text-white/50 mb-5">
        {String(paper.id).padStart(2, '0')} — {isProject ? 'Project' : 'Paper'}
      </p>
      <h3 className="font-display text-xl text-white leading-[1.2] mb-5">
        {paper.title}
      </h3>
      <p className="font-body font-light text-sm text-white/75 leading-relaxed line-clamp-6">
        {paper.abstract}
      </p>

      <button
        onClick={() => window.open(paper.url, '_blank', 'noopener,noreferrer')}
        className="mt-8 w-full bg-white text-black font-accent text-[9px] tracking-[0.28em] uppercase py-3 hover:bg-white/85 active:bg-white/70 transition-colors duration-200 flex items-center justify-center gap-2"
        style={{ borderRadius: 0 }}
      >
        {isProject ? 'View on GitHub' : 'Read Paper'}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default function WorkSoFarSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })

  const [step, setStep] = useState(396) // fallback: 380px card + 16px gap
  useEffect(() => {
    const row = rowRef.current
    if (!row || row.children.length < 2) return
    const a = row.children[0] as HTMLElement
    const b = row.children[1] as HTMLElement
    setStep(b.offsetLeft - a.offsetLeft)

    const onResize = () => {
      const a2 = row.children[0] as HTMLElement
      const b2 = row.children[1] as HTMLElement
      setStep(b2.offsetLeft - a2.offsetLeft)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // With justify-center the middle card(s) start centered.
  // For 6 cards: shift by 2.5 steps each direction so first and last end at center.
  const half = (papers.length - 1) / 2
  const x = useTransform(scrollYProgress, [0, 1], [half * step, -half * step])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a]"
      style={{ height: `${200 + papers.length * 100}vh` }}
      id="research"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Full bleed image */}
        <img
          src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Our+work.png"
          alt="Erdős AI Lab"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 gap-4 md:gap-8 pb-12 pt-24 md:pt-0">
          <h2
            className="font-display font-normal text-white tracking-[-0.04em] leading-none text-center"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 5.5rem)' }}
          >
            Our Work So Far
          </h2>

          {/* Horizontally scrolling card row */}
          <div className="flex justify-center w-full">
            <m.div
              ref={rowRef}
              className="flex flex-row gap-8 items-stretch"
              style={{ x, willChange: 'transform' }}
            >
              {papers.map((paper) => (
                <Card key={paper.id} paper={paper} />
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
