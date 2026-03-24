import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const educationData = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: '2023 – Present',
    description:
      'Pursuing a degree with a focus on cybersecurity, full stack development, and data structures & algorithms. Actively involved in technical clubs and hackathons.',
    highlight: 'Ongoing',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    degree: 'Intermediate (PCM)',
    institution: 'Senior Secondary Education',
    location: 'India',
    period: 'Completed',
    description:
      'Completed senior secondary education with Physics, Chemistry, and Mathematics, achieving a strong academic performance.',
    highlight: '84.4%',
    color: 'from-neon-purple to-neon-pink',
  },
  {
    degree: 'Matriculation',
    institution: 'Secondary Education',
    location: 'India',
    period: 'Completed',
    description:
      'Built a solid academic foundation with excellent scores across all core subjects.',
    highlight: '85%',
    color: 'from-neon-pink to-orange-400',
  },
]

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent md:-translate-x-px" />

          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg shadow-neon-blue/30 -translate-x-1/2 z-10 mt-8" />

              {/* Content Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="glass-card p-6 group">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-4`}>
                    <HiAcademicCap />
                    {item.highlight}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {item.degree}
                  </h3>

                  <div className={`flex flex-wrap gap-4 text-sm text-slate-400 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker className="text-neon-blue" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiCalendar className="text-neon-purple" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
