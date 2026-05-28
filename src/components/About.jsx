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
                I&apos;m <span className="text-neon-blue font-semibold">Garima Singh</span>, an Information Technology student passionate about full stack development and cybersecurity.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                I specialize in building secure, scalable, and modern web applications using Java, Spring Boot, React.js, SQL, and frontend technologies while continuously exploring cybersecurity concepts such as Linux, networking, web security, and penetration testing.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                With strong foundations in data structures, problem-solving, and software engineering, I enjoy creating real-world projects that combine functionality, performance, and security.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My goal is to grow as a secure software developer by combining development expertise with cybersecurity knowledge to build impactful and reliable digital solutions.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-slate-500 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">8+</div>
                  <div className="text-sm text-slate-500 mt-1">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
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
