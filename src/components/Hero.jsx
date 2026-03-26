import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiCode } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImg from '../assets/profile/photo.png'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Profile Image with Glowing Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-32 h-32 mb-8"
        >
          {/* Spinning Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-60 animate-[spin_8s_linear_infinite]" />
          
          {/* Spinning Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-[spin_8s_linear_infinite]" />
          
          {/* Inner Background & Image Container */}
          <div className="absolute inset-[3px] rounded-full bg-dark-900 z-10 overflow-hidden">
            <img 
              src={profileImg} 
              alt="Garima Singh" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-slate-300 font-medium">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-900 mb-6 leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Garima Singh</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-display font-medium mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              'Cybersecurity Enthusiast',
              2000,
              'Full Stack Developer',
              2000,
              'Problem Solver',
              2000,
              'CSE Student',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building secure and scalable digital solutions.
          Transforming ideas into impactful, real-world applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button onClick={scrollToProjects} className="btn-primary">
            <span className="flex items-center gap-2">
              <HiCode className="text-lg" />
              View Projects
            </span>
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex justify-center gap-5"
        >
          <a
            href="https://github.com/garimasingh9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon-blue transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/garima-singh-a5b369298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-neon-blue transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>


      </div>
    </section>
  )
}
