import { m } from 'framer-motion'

const team = [
  {
    id: '01',
    name: 'Dawar J Deka',
    role: 'Founder, Erdős AI Lab',
    affiliation: 'IIT Bombay - Aerospace & Control Systems',
    image: '/images/team/dawar.jpg',
  },
  {
    id: '02',
    name: 'Dhruv Agarwal',
    role: 'A.I. Researcher',
    affiliation: 'Ex Google · Ex Visa',
    image: '/images/team/dhruv.jpg',
  },
  {
    id: '03',
    name: 'Nilesh Sarkar',
    role: 'LLM Researcher',
    affiliation: 'AI @ Moog Inc',
    image: '/images/team/nilesh.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white text-black py-40 px-8 md:px-20" id="team">

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
        className="max-w-6xl mx-auto mt-20 flex flex-row gap-8 justify-center"
      >
        {team.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col items-center text-center flex-1 max-w-[320px] cursor-default"
          >
            {/* Portrait */}
            <div className="overflow-hidden mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-[220px] h-[280px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
              />
            </div>

            {/* Info */}
            <span className="font-accent text-[9px] tracking-[0.3em] text-black/20">
              {member.id}
            </span>
            <h3 className="font-display font-normal text-black tracking-[-0.02em] leading-[1.1] mt-2 text-2xl">
              {member.name}
            </h3>
            <p className="font-accent text-[10px] tracking-[0.2em] uppercase text-black/40 mt-3">
              {member.role}
            </p>
            <p className="font-body font-light text-sm text-black/35 mt-1">
              {member.affiliation}
            </p>
          </div>
        ))}
      </m.div>
    </section>
  )
}
