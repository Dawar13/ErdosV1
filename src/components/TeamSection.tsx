import { m } from 'framer-motion'

const team = [
  {
    id: '01',
    name: 'Dawar J Deka',
    role: 'Founder, Erdős AI Lab',
    affiliation: 'IIT Bombay — Aerospace & Control Systems',
    bio: 'ICCCV, ICCAI author. Repeat founder. Building Erdős from first principles at the intersection of control theory and frontier AI.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dawar.png',
  },
  {
    id: '02',
    name: 'Dhruv Agarwal',
    role: 'A.I. Researcher',
    affiliation: 'Ex Google · Ex Visa',
    bio: 'Won 100k cloud funding from Google. Beat Anthropic\'s open recruitment challenge. Stanford ASES fellow.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dhruv.png',
  },
  {
    id: '03',
    name: 'Kartik',
    role: 'Researcher · Founder',
    affiliation: 'Tensor & Maxwell Corp · ICML 2026 Reviewer',
    bio: 'One of the youngest reviewers at ICML 2026. Building the OS for autonomous machines while most people his age are still figuring out their major.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Manglam.png',
  },
  {
    id: '04',
    name: 'Nilesh Sarkar',
    role: 'LLM Researcher',
    affiliation: 'AI @ Moog Inc',
    bio: 'Pushing large language models past their documented limits. Quietly.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Nilesh.png',
  },
  {
    id: '05',
    name: 'Hitesh Meena',
    role: 'Computational Biologist · Wetlab Head',
    affiliation: 'IIT Bombay — Electrical Engineering · iGEM IITB',
    bio: 'AIR 99 JEE Advanced. One of the youngest computational biology researchers at IIT Bombay — working across genomics, proteomics, structural biology, and synthetic biology. Led iGEM IIT Bombay\'s wetlab team of 18 to a Silver Medal in Paris. Engineered novel protein mutants. Runs AlphaFold before breakfast.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/hitesh%20(3).png',
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

      {/* Team cards */}
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row gap-6 justify-center flex-wrap"
      >
        {team.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col items-center text-center flex-1 min-w-[180px] max-w-[220px] cursor-default"
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

            {/* Info */}
            <h3 className="font-display font-normal text-black tracking-[-0.02em] leading-[1.1] text-xl">
              {member.name}
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-black/60 font-bold mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {member.role}
            </p>
            <p className="font-semibold text-xs text-black/50 mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {member.affiliation}
            </p>
            <p className="font-body font-normal text-[11px] text-black/45 mt-2 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </m.div>
    </section>
  )
}
