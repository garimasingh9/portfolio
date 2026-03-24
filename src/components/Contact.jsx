import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <HiMail className="text-xl" />,
    label: 'Email',
    value: 'garima.singh17sep@gmail.com',
    href: 'mailto:garima.singh17sep@gmail.com',
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: 'LinkedIn',
    value: 'Garima Singh',
    href: 'https://www.linkedin.com/in/garima-singh-a5b369298/',
  },
  {
    icon: <FaGithub className="text-xl" />,
    label: 'GitHub',
    value: 'garimasingh9',
    href: 'https://github.com/garimasingh9',
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    label: 'WhatsApp',
    value: '+91 98707 12372',
    href: 'https://wa.me/919870712372',
  },
]

/**
 * Sanitize and validate a URL string.
 * - Trims whitespace and zero-width characters
 * - Ensures the URL starts with https:// (or mailto:)
 * Returns the cleaned URL or null if invalid.
 */
const sanitizeUrl = (rawUrl) => {
  if (!rawUrl) return null
  // Remove hidden whitespace and zero-width characters
  const url = rawUrl.trim().replace(/[\u200B-\u200D\uFEFF]/g, '')
  if (url.startsWith('mailto:') || url.startsWith('https://')) return url
  if (url.startsWith('http://')) return url.replace('http://', 'https://')
  return `https://${url}`
}

/**
 * Click handler with debug logging & window.open fallback.
 */
const handleLinkClick = (e, rawHref, label) => {
  const url = sanitizeUrl(rawHref)
  console.debug(`[Contact] Clicked "${label}" → ${url}`)

  if (!url) {
    e.preventDefault()
    console.error(`[Contact] Invalid URL for "${label}":`, rawHref)
    return
  }

  // For non-mailto links, use window.open as a reliable fallback
  if (!url.startsWith('mailto:')) {
    e.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) { setErrors(v); return }
    setErrors({})
    setSending(true)
    setTimeout(() => { setSending(false); setSubmitted(true); setForm({ name: '', email: '', message: '' }) }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind or just want to connect? Let&apos;s talk!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Let&apos;s build something amazing together</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const cleanHref = sanitizeUrl(item.href)
                return (
                  <a
                    key={item.label}
                    href={cleanHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, item.href, item.label)}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-neon-blue/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                      <div className="text-slate-300 font-medium">{item.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you! I&apos;ll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-neon-blue hover:underline text-sm">Send another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all resize-none" />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full btn-primary justify-center disabled:opacity-50">
                    <span className="flex items-center gap-2">{sending ? 'Sending...' : (<><HiPaperAirplane className="text-lg rotate-90" />Send Message</>)}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
