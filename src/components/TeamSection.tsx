import { m } from 'framer-motion'

const team = [
  {
    id: '01',
    name: 'Dawar J Deka',
    role: 'Founder, Erdős AI Lab',
    affiliation: 'IIT Bombay - Aerospace & Control Systems',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dawar.png',
  },
  {
    id: '02',
    name: 'Dhruv Agarwal',
    role: 'A.I. Researcher',
    affiliation: 'Ex Google · Ex Visa',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dhruv.png',
  },
  {
    id: '03',
    name: 'Nilesh Sarkar',
    role: 'LLM Researcher',
    affiliation: 'AI @ Moog Inc',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Nilesh.png',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white text-black py-16 md:py-24 px-6 md:px-20" id="team">

      {/* Section headline */}
      <m.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-normal text-black tracking-[-0.04em] leading-none text-center"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
      >
        Meet the Team
      </m.h2>

      {/* Team cards - all three in one row */}
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-6 justify-center"
      >
        {team.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col items-center text-center flex-1 cursor-default"
          >
            {/* Portrait */}
            <div className="overflow-hidden mb-3">
              <img
                src={member.image}
                alt={member.name}
                className="w-[140px] h-[180px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
              />
            </div>

            {/* Info - tight spacing */}
            <h3 className="font-display font-normal text-black tracking-[-0.02em] leading-[1.1] text-xl">
              {member.name}
            </h3>
            <p className="font-accent text-[10px] tracking-[0.2em] uppercase text-black/60 font-bold mt-1">
              {member.role}
            </p>
            <p className="font-body font-semibold text-sm text-black/50 mt-0.5">
              {member.affiliation}
            </p>
          </div>
        ))}
      </m.div>
    </section>
  )
}
