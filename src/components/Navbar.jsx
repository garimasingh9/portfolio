import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiOutlineEye, HiOutlineDownload, HiChevronDown } from 'react-icons/hi'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display font-bold text-xl gradient-text hover:opacity-80 transition-opacity"
        >
          &lt;GS /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="nav-link text-sm font-medium tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <div className="relative">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="btn-primary text-sm py-2 px-5 group"
            >
              <span>Resume</span>
              <HiChevronDown className={`inline-block ml-1 transition-transform duration-300 ${resumeOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-48 bg-dark-900 border border-white/10 rounded-lg shadow-xl shadow-black/50 p-2 flex flex-col gap-1 glass-card"
                >
                  <a
                    href="/resume/garima-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 text-slate-200 hover:text-neon-blue hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] group/item"
                  >
                    <span className="text-sm font-medium">View</span>
                    <HiOutlineEye className="text-lg text-slate-400 group-hover/item:text-neon-blue group-hover/item:scale-110 transition-all" />
                  </a>
                  <a
                    href="/resume/garima-CV.pdf"
                    download
                    onClick={() => setResumeOpen(false)}
                    className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 text-slate-200 hover:text-neon-blue hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] group/item"
                  >
                    <span className="text-sm font-medium">Download</span>
                    <HiOutlineDownload className="text-lg text-slate-400 group-hover/item:text-neon-blue group-hover/item:scale-110 transition-all" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-slate-300 hover:text-neon-blue transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-slate-300 hover:text-neon-blue transition-colors text-base font-medium"
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-3">
              <a
                href="/resume/garima-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary text-sm py-2.5 px-5 flex justify-center items-center gap-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              >
                <HiOutlineEye className="text-lg" />
                <span>View Resume</span>
              </a>
              <a
                href="/resume/garima-CV.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-sm py-2.5 px-5 flex justify-center items-center gap-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <HiOutlineDownload className="text-lg" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
