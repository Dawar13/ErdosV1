import { useRef, useState, useEffect } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { papers } from '../data/papers'

function PaperCard({ paper }: { paper: typeof papers[0] }) {
  return (
    <div
      className="liquid-glass rounded-2xl flex flex-col shrink-0"
      style={{ width: 'min(420px, 85vw)', padding: '2rem 2.5rem' }}
    >
      <p className="font-accent text-[9px] tracking-[0.3em] uppercase text-white/25 mb-5">
        0{paper.id}
      </p>
      <h3 className="font-display text-xl text-white leading-[1.2] mb-5">
        {paper.title}
      </h3>
      <p className="font-body font-light text-sm text-white/55 leading-relaxed">
        {paper.abstract}
      </p>
    </div>
  )
}

export default function WorkSoFarSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })

  // Measure one card step (card width + gap) so the math adapts to actual layout.
  const [step, setStep] = useState(356) // fallback: 340px card + 16px gap
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

  // With justify-center on the parent, card 2 (middle) is at viewport center.
  // Shift right by +step -> card 1 centered.
  // Shift left  by -step -> card 3 centered.
  const x = useTransform(scrollYProgress, [0, 1], [step, -step])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a]"
      style={{ height: '300vh' }}
      id="papers"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Full bleed image */}
        <img
          src="https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Our+work.png"
          alt="Erdős AI Lab"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 gap-6 md:gap-10 pb-16 pt-20 md:pt-0">
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
              className="flex flex-row gap-4 items-stretch"
              style={{ x, willChange: 'transform' }}
            >
              {papers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
