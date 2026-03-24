import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiShieldCheck, HiCode, HiLightningBolt, HiAcademicCap } from 'react-icons/hi'

const highlights = [
  {
    icon: <HiShieldCheck className="text-2xl" />,
    title: 'Cybersecurity',
    desc: 'Hands-on expertise with industry-standard security tools and vulnerability analysis.',
  },
  {
    icon: <HiCode className="text-2xl" />,
    title: 'Full Stack Dev',
    desc: 'Building responsive, scalable web applications with modern frameworks.',
  },
  {
    icon: <HiLightningBolt className="text-2xl" />,
    title: 'Problem Solving',
    desc: 'Strong DSA foundation with a passion for competitive programming challenges.',
  },
  {
    icon: <HiAcademicCap className="text-2xl" />,
    title: 'Continuous Learner',
    desc: 'Always expanding knowledge through certifications and real-world projects.',
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                I&apos;m <span className="text-neon-blue font-semibold">Garima Singh</span>, a Computer Science Engineering student at{' '}
                <span className="text-neon-purple font-semibold">Lovely Professional University</span>, driven by a deep passion for cybersecurity and full stack web development.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                With strong foundations in data structures and algorithms, I thrive on solving complex problems and building secure, 
                scalable digital solutions. My journey spans from developing interactive web applications to performing 
                vulnerability assessments using industry-leading tools like Wireshark, Burp Suite, and Metasploit.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I believe in learning by doing — every project I build is an opportunity to push boundaries, 
                explore new technologies, and create impact. Whether it&apos;s crafting a fitness tracker, a cybersecurity 
                toolkit, or an AI-powered financial platform, I approach each challenge with curiosity and precision.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-slate-500 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">6+</div>
                  <div className="text-sm text-slate-500 mt-1">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-slate-500 mt-1">Certifications</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
