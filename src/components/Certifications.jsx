import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBadgeCheck } from 'react-icons/hi'
import { SiUdemy, SiFreecodecamp, SiCoursera } from 'react-icons/si'

import certPython from '../assets/certificates/Screenshot  (2).png'
import certRwd from '../assets/certificates/Screenshot .png'
import certNetworking from '../assets/certificates/Coursera bits and bytes.jpg'
import certP2p from '../assets/certificates/coursera peer to peer .jpg'

const certs = [
  { title: 'Python Bootcamp', issuer: 'Udemy', icon: <SiUdemy className="text-2xl" />, desc: 'Comprehensive Python programming covering OOP, file handling, and project-based learning.', color: 'from-purple-500 to-violet-500', bg: 'bg-purple-500/10', image: certPython },
  { title: 'Responsive Web Design', issuer: 'FreeCodeCamp', icon: <SiFreecodecamp className="text-2xl" />, desc: 'Mastered HTML5/CSS3 responsive design with Flexbox, Grid, and mobile-first development.', color: 'from-green-500 to-emerald-400', bg: 'bg-green-500/10', image: certRwd },
  { title: 'Networking Fundamentals', issuer: 'Coursera', icon: <SiCoursera className="text-2xl" />, desc: 'In-depth networking: OSI model, TCP/IP, subnetting, DNS, DHCP, and network security.', color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-500/10', image: certNetworking },
  { title: 'Peer-to-Peer Protocols', issuer: 'Coursera', icon: <SiCoursera className="text-2xl" />, desc: 'Distributed computing and P2P architectures including DHTs and blockchain fundamentals.', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-500/10', image: certP2p },
]

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Continuous learning through recognized platforms</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} className="glass-card glow-border group overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>{c.icon}</div>
                <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{c.title}</h3>
                <div className="flex items-center gap-1.5 mb-4"><HiBadgeCheck className="text-neon-blue text-sm" /><span className="text-sm text-slate-400">{c.issuer}</span></div>
                <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
