import { m } from 'framer-motion'

const teamRow1 = [
  {
    name: 'Dawar J Deka',
    role: 'Founder, Erdős AI Lab',
    affiliation: 'IIT Bombay',
    bio: 'Aerospace engineer turned AI researcher. Founded Erdős to build a research collective that operates at the actual frontier.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dawar.png',
  },
  {
    name: 'Chidvilas',
    role: 'Incoming Quantitative Researcher',
    affiliation: 'Jump Trading',
    bio: "IIT Bombay Institute Rank 1. JEE Advanced AIR-1 '23. Simon Marais '24 winner. Where mathematics meets markets.",
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Chidvilas.png',
  },
  {
    name: 'Mangalam Kartik',
    role: 'AI Researcher · Founder',
    affiliation: 'Tensor & Maxwell Corp',
    bio: 'One of the youngest reviewers at ICML 2026. Building machine intelligence infrastructure for robotics and autonomous systems.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Manglam.png',
  },
  {
    name: 'Tanisqe Mandhane',
    role: 'Quant Finance · Deep ML',
    affiliation: 'Jane Street',
    bio: 'JEE Advanced AIR-29. Researcher at the intersection of quantitative finance and deep machine learning.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Tanisqe.png',
  },
  {
    name: 'Sunny Gupta',
    role: 'Federated & Decentralized AI',
    affiliation: 'Ex Google DeepMind · Ex IBM · Ex Samsung R&D',
    bio: 'Researching privacy-preserving federated intelligence, multi-agent systems, and edge AI. Thinking about what intelligence looks like when it has no central point of failure.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Sunny%20Gupta.png',
  },
]

const teamRow2 = [
  {
    name: 'Dhruv Agarwal',
    role: 'AI Researcher',
    affiliation: 'Ex Google · Ex Visa',
    bio: 'Stanford ASES Fellow. Won $100K cloud funding from Google. Beat Anthropic\'s open recruitment challenge. Currently working on multi-agent orchestration systems.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Dhruv.png',
  },
  {
    name: 'Harshith Pendela',
    role: 'RL Engineer',
    affiliation: 'IIT Bombay',
    bio: 'Working on multi-agent reinforcement learning, robotic learning systems, and world model architectures.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Harshith.png',
  },
  {
    name: 'Nilesh Sarkar',
    role: 'LLM Researcher',
    affiliation: 'Ex Moog Inc',
    bio: 'Researching and deploying large language models in high-stakes applied engineering environments.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Nilesh.png',
  },
  {
    name: 'Hitesh Meena',
    role: 'Computational Biologist',
    affiliation: 'IIT Bombay',
    bio: 'JEE Advanced AIR-99. Among the youngest computational biology researchers at IIT Bombay — spanning genomics, proteomics, and structural biology. Led iGEM IITB wetlab to Silver in Paris.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/hitesh%20(3).png',
  },
  {
    name: 'Matam Kushaal',
    role: 'Incoming AI and Systems Researcher',
    affiliation: 'Samsung Korea',
    bio: 'Working at the intersection of system architecture, deep learning, and edge AI. Focused on vision-language-action models and deploying intelligence at the edge.',
    image: 'https://erdos-ai-lab-media.s3.eu-north-1.amazonaws.com/Kushaal%20M.png',
  },
]

function MemberCard({ member }: { member: typeof teamRow1[0] }) {
  return (
    <div className="group flex flex-col items-center text-center cursor-default flex-1">
      {/* Portrait */}
      <div className="overflow-hidden mb-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-[130px] h-[170px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
          onError={(e) => { (e.target as HTMLElement).style.display = 'none' }}
        />
      </div>

      {/* Info */}
      <h3 className="font-display font-normal text-black tracking-[-0.02em] leading-[1.1] text-lg">
        {member.name}
      </h3>
      <p className="text-[9px] tracking-[0.2em] uppercase text-black/70 font-bold mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {member.role}
      </p>
      <p className="font-medium text-xs text-black/60 mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {member.affiliation}
      </p>
      <p className="font-body font-normal text-[11px] text-black/55 mt-2 leading-relaxed max-w-[200px]">
        {member.bio}
      </p>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="bg-white text-black py-20 md:py-40 px-6 md:px-20" id="team">

      {/* Section headline */}
      <m.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-normal text-black tracking-[-0.04em] leading-none text-center mb-16 md:mb-20"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
      >
        Meet the Team
      </m.h2>

      {/* Row 1 — 5 founding researchers */}
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-4 justify-between"
      >
        {teamRow1.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </m.div>

      {/* Row 2 — 4 founding researchers */}
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="max-w-5xl mx-auto mt-10 md:mt-14 flex flex-col md:flex-row gap-8 md:gap-6 justify-center"
      >
        {teamRow2.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </m.div>

    </section>
  )
}
