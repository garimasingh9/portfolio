import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDownload, HiDocumentText } from 'react-icons/hi'
import { FaCode, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa'

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="resume" className="relative py-24 md:py-32 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon-purple/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Download my CV and explore my professional background
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card glow-border p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-2xl flex items-center justify-center text-neon-purple mb-8">
            <HiDocumentText className="text-4xl" />
          </div>

          <div className="space-y-4 mb-10 max-w-md mx-auto">
            <h3 className="text-2xl font-display font-bold text-white">Garima Singh</h3>
            <p className="text-neon-blue font-medium">CSE Student & Web Developer</p>

            <div className="pt-4 border-t border-white/5 flex flex-wrap justify-center gap-3 mt-6">
              <span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-lg">
                <FaCode className="text-neon-blue" /> Java, Python
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-lg">
                <FaShieldAlt className="text-neon-purple" /> Cybersecurity
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-lg">
                <FaProjectDiagram className="text-emerald-400" /> DSA
              </span>
            </div>
          </div>

          <motion.a
            href="/resume/garima-CV.pdf?t=20260327"
            target="_blank"
            rel="noopener noreferrer"
            download="Garima_Singh_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <span className="flex items-center gap-2">
              <HiDownload className="text-xl" />
              Download CV
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
