import { useRef, useState } from 'react'
import { m, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion'

const PARAGRAPH =
  "We exist at the intersection of rigorous mathematics and unbounded curiosity. Erdős AI Lab is a collective of young researchers devoted to advancing the frontier of artificial intelligence - from continual learning and world models to brain-computer interfaces and neuromorphic computing. We believe the next decade of AI will not be won by scale alone, but by ideas. Sharp, original, uncompromising ideas. That is what Erdős is built for."

interface AnimatedWordProps {
  word: string
  progress: MotionValue<number>
  start: number
  end: number
  isErdos: boolean
}

function AnimatedWord({ word, progress, start, end, isErdos }: AnimatedWordProps) {
  const color = useTransform(progress, [start, end], ['#c8c8c8', isErdos ? '#2563EB' : '#0a0a0a'])
  const [italic, setItalic] = useState(false)

  useMotionValueEvent(color, 'change', (v) => {
    if (isErdos) {
      const brightness = parseInt(v.replace('#', ''), 16)
      setItalic(brightness < 0x888888)
    }
  })

  return (
    <m.span
      style={{ color }}
      className={isErdos && italic ? 'italic' : ''}
    >
      {word}
    </m.span>
  )
}

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })

  const words = PARAGRAPH.split(' ')
  const N = words.length

  return (
    <section ref={sectionRef} id="research" className="relative bg-white" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex items-start md:items-center justify-center px-5 md:px-16 pt-12 md:pt-0">
        <p
          className="manifesto-text font-display w-full max-w-[820px] leading-[1.2] tracking-[-0.02em] flex flex-wrap gap-x-[0.22em] gap-y-1 text-left"
          style={{ fontSize: 'clamp(2.1rem, 3.5vw, 3.8rem)' }}
        >
          {words.map((word, i) => {
            const start = (i / N) * 0.85
            const end = ((i + 1) / N) * 0.85
            const isErdos = word.startsWith('Erdős')
            return (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                start={start}
                end={end}
                isErdos={isErdos}
              />
            )
          })}
        </p>
      </div>
    </section>
  )
}
