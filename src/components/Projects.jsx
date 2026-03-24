import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'FitTrack',
    subtitle: 'Fitness Workout Planner',
    description:
      'A comprehensive web application designed to help users plan, track, and optimize their fitness routines. Features an intelligent workout generator, science-backed calorie calculator using the Mifflin–St Jeor equation, and an interval timer with music integration for immersive workout sessions.',
    features: [
      'Smart workout generator with muscle-group targeting',
      'Calorie calculator (Mifflin–St Jeor equation)',
      'Interval timer with background music support',
      'Responsive, clean UI across all devices',
      'Workout history & progress tracking',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
    gradient: 'from-green-500 to-emerald-400',
    emoji: '💪',
    github: 'https://github.com/garimasingh9/fittrack-fitness-planner.git',
  },
  {
    title: 'CyberSuite Ultimate',
    subtitle: 'Security Analyzer Toolkit',
    description:
      'A web-based cybersecurity toolkit that simulates real-world network security operations. Offers interactive modules for packet analysis, port scanning, and HTTP traffic inspection — all wrapped in a sleek, dashboard-style interface designed for aspiring security professionals.',
    features: [
      'Packet analyzer simulation with protocol inspection',
      'Port scanner with service detection',
      'HTTP request/response inspector',
      'Interactive cybersecurity dashboard UI',
      'Real-time data visualization & analytics',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Network APIs'],
    gradient: 'from-red-500 to-orange-400',
    emoji: '🛡️',
    github: 'https://github.com/garimasingh9/CyberSuite-Ultimate.git',
  },
  {
    title: 'WealthBridge',
    subtitle: 'AI-Powered Financial Platform',
    description:
      'An intelligent financial awareness platform that empowers users to take control of their finances. WealthBridge leverages AI to provide personalized savings strategies, investment education, and expense tracking — making financial literacy accessible and engaging for everyone.',
    features: [
      'AI-driven smart financial recommendations',
      'Interactive financial dashboard with charts',
      'Expense tracking & budget management',
      'Investment education & portfolio insights',
      'Beginner-friendly onboarding experience',
    ],
    tech: ['React', 'JavaScript', 'Chart.js', 'Spring-boot', 'Vite'],
    gradient: 'from-blue-500 to-purple-500',
    emoji: '💰',
    github: 'https://github.com/garimasingh9/WealthBridge.git',
    live: 'https://wealth-bridge-nine.vercel.app/',
  },
]

const handleLinkOpen = (url) => {
  if (url && typeof url === 'string' && url.trim() !== '') {
    window.open(url.trim(), '_blank', 'noopener,noreferrer')
  }
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card glow-border overflow-hidden group flex flex-col relative z-20 pointer-events-auto"
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-8 md:p-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex flex-col mb-6 relative z-30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{project.emoji}</span>
            <div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400">{project.subtitle}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-2 relative z-50">
            <button
              onClick={() => window.open(project.github, "_blank")}
              className="relative z-50 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 text-slate-300 hover:text-neon-blue hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all text-sm font-medium cursor-pointer pointer-events-auto"
              aria-label={`${project.title} GitHub`}
            >
              <FaGithub className="text-lg pointer-events-none" />
              <span className="pointer-events-none">View Code</span>
            </button>
            {project.live && (
              <button
                onClick={() => window.open(project.live, "_blank")}
                className="relative z-50 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 text-slate-300 hover:text-neon-purple hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all text-sm font-medium cursor-pointer pointer-events-auto"
                aria-label={`${project.title} Live Demo`}
              >
                <HiExternalLink className="text-lg pointer-events-none" />
                <span className="pointer-events-none">Live Demo</span>
              </button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-slate-300 bg-white/5 border border-white/5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="relative py-24 md:py-32 z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications built with passion and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
