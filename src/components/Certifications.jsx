import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBadgeCheck } from 'react-icons/hi'
import { 
  SiUdemy, SiFreecodecamp, SiCoursera, SiCisco, SiGoogle, SiMeta 
} from 'react-icons/si'

// Cybersecurity Certifications
import certIntroCyber from '../assets/certificates/introduction-to-cybersecurity.png'
import certGoogleFoundations from '../assets/certificates/Foundation of cybersecurity_page-0001.jpg'
import certGoogleRisks from '../assets/certificates/Manage security risks_page-0001.jpg'
import certGoogleNetworkSec from '../assets/certificates/Networks and network security_page-0001.jpg'
import certGoogleLinuxSec from '../assets/certificates/Linux and security_page-0001.jpg'
import certCourseraBitsBytes from '../assets/certificates/Coursera bits and bytes.jpg'
import certCourseraBitsBytesAdv from '../assets/certificates/Coursera bits and bytes_page-0001.jpg'
import certCourseraP2p from '../assets/certificates/coursera peer to peer .jpg'

// Web Development Certifications
import certFccRwd from '../assets/certificates/Screenshot .png'
import certMetaFrontend from '../assets/certificates/Frontend.jpg'
import certMetaReact from '../assets/certificates/React.jpg'

// Programming & Languages
import certUdemyPython from '../assets/certificates/Python.png'
import certScalerJava from '../assets/certificates/Java.jpg'

// DSA & Training Certifications
import certLpuDsa from '../assets/certificates/DSA certificate_page-0001.jpg'
import certCProg from '../assets/certificates/C.jpg'

const cybersecurityCerts = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    icon: <SiCisco className="text-2xl" />,
    image: certIntroCyber,
    desc: 'Learned cybersecurity fundamentals, cyber threats, attacks, and defensive security principles.',
    skills: ['Cybersecurity Fundamentals', 'Threat Awareness', 'Network Security', 'Security Principles'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Foundation of Cybersecurity',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleFoundations,
    desc: 'Built foundational understanding of organizational security, cyber risks, and security operations.',
    skills: ['Security Basics', 'Risk Management', 'Security Operations', 'Cybersecurity Principles'],
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Manage Security Risks',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleRisks,
    desc: 'Learned methods for identifying and managing cybersecurity risks and organizational threats.',
    skills: ['Risk Assessment', 'Threat Analysis', 'Security Policies', 'Incident Prevention'],
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Networks and Network Security',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleNetworkSec,
    desc: 'Learned networking concepts, protocols, and secure communication methods.',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Network Security', 'Firewalls'],
    color: 'from-red-500 to-rose-400',
    bg: 'bg-red-500/10'
  },
  {
    title: 'Linux and Security',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleLinuxSec,
    desc: 'Learned Linux system operations, permissions, command-line interface, and system security.',
    skills: ['Linux', 'CLI', 'File Permissions', 'System Security', 'Linux Administration'],
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-500/10'
  },
  {
    title: 'Bits and Bytes of Computer Networking',
    issuer: 'Google / Coursera',
    icon: <SiCoursera className="text-2xl" />,
    image: certCourseraBitsBytes,
    desc: 'Built strong understanding of computer networking concepts and internet architecture.',
    skills: ['Networking', 'OSI Model', 'TCP/IP', 'Routing', 'Switching'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Bits and Bytes of Computer Networking (Advanced)',
    issuer: 'Coursera',
    icon: <SiCoursera className="text-2xl" />,
    image: certCourseraBitsBytesAdv,
    desc: 'Explored advanced networking concepts and troubleshooting techniques.',
    skills: ['Network Troubleshooting', 'Networking Protocols', 'Internet Architecture', 'Communication Models'],
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500/10'
  },
  {
    title: 'Peer-to-Peer Protocols and LAN',
    issuer: 'Coursera',
    icon: <SiCoursera className="text-2xl" />,
    image: certCourseraP2p,
    desc: 'Learned peer-to-peer communication and local area networking concepts.',
    skills: ['LAN', 'Peer-to-Peer Networking', 'Network Communication', 'Distributed Systems'],
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10'
  }
]

const webDevCerts = [
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    icon: <SiFreecodecamp className="text-2xl" />,
    image: certFccRwd,
    desc: 'Learned responsive web design and mobile-first frontend development techniques.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    color: 'from-green-500 to-emerald-400',
    bg: 'bg-green-500/10'
  },
  {
    title: 'Meta Frontend Development',
    issuer: 'Meta',
    icon: <SiMeta className="text-2xl" />,
    image: certMetaFrontend,
    desc: 'Built frontend development skills using modern UI practices and component architecture.',
    skills: ['JavaScript', 'React Basics', 'Frontend Architecture', 'UI Development'],
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-blue-600/10'
  },
  {
    title: 'Meta React Specialization',
    issuer: 'Meta',
    icon: <SiMeta className="text-2xl" />,
    image: certMetaReact,
    desc: 'Developed scalable React applications using reusable components and hooks.',
    skills: ['React.js', 'Hooks', 'Context API', 'State Management'],
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10'
  }
]

const programmingCerts = [
  {
    title: '100 Days of Code: Python Bootcamp',
    issuer: 'Udemy',
    icon: <SiUdemy className="text-2xl" />,
    image: certUdemyPython,
    desc: 'Learned Python programming with hands-on project-based learning.',
    skills: ['Python', 'OOP', 'Automation', 'File Handling', 'Logic Building'],
    color: 'from-rose-500 to-red-500',
    bg: 'bg-rose-500/10'
  },
  {
    title: 'Java Course: Mastering the Fundamentals',
    issuer: 'Scaler Topics',
    icon: <HiBadgeCheck className="text-2xl text-blue-400" />,
    image: certScalerJava,
    desc: 'Built strong foundations in Java programming and object-oriented concepts.',
    skills: ['Java', 'OOP', 'Collections', 'Exception Handling'],
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-500/10'
  }
]

const dsaTrainingCerts = [
  {
    title: 'DSA Using C++',
    issuer: 'LPU Training Program',
    icon: <HiBadgeCheck className="text-2xl text-purple-400" />,
    image: certLpuDsa,
    desc: 'Completed training in data structures and algorithms with focus on efficient problem solving.',
    skills: ['DSA', 'Algorithms', 'C++', 'Time Complexity', 'Problem Solving'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'C Programming Fundamentals',
    issuer: 'Training Certificate',
    icon: <HiBadgeCheck className="text-2xl text-blue-400" />,
    image: certCProg,
    desc: 'Learned foundational programming concepts using C programming language.',
    skills: ['C Programming', 'Logic Building', 'Loops', 'Functions', 'Arrays'],
    color: 'from-blue-500 to-emerald-400',
    bg: 'bg-blue-500/10'
  }
]

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Continuous learning through recognized platforms</p>
        </motion.div>

        <div className="space-y-16">
          {/* Cybersecurity Certifications */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              Cybersecurity Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cybersecurityCerts.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div 
                      className="overflow-hidden rounded-lg mb-4 cursor-zoom-in relative group/img"
                      onClick={() => setSelectedImage(c.image)}
                    >
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white drop-shadow-md group-hover/img:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>{c.icon}</div>
                      <div>
                        <h4 className="text-base font-display font-bold text-white group-hover:text-neon-blue transition-colors leading-snug">{c.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5"><HiBadgeCheck className="text-neon-blue text-xs" /><span className="text-xs text-slate-400 font-medium">{c.issuer}</span></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{c.desc}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                      {c.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Web Development Certifications */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              Web Development Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webDevCerts.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div 
                      className="overflow-hidden rounded-lg mb-4 cursor-zoom-in relative group/img"
                      onClick={() => setSelectedImage(c.image)}
                    >
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white drop-shadow-md group-hover/img:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>{c.icon}</div>
                      <div>
                        <h4 className="text-base font-display font-bold text-white group-hover:text-neon-blue transition-colors leading-snug">{c.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5"><HiBadgeCheck className="text-neon-blue text-xs" /><span className="text-xs text-slate-400 font-medium">{c.issuer}</span></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{c.desc}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                      {c.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programming & Languages */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Programming & Languages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingCerts.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div 
                      className="overflow-hidden rounded-lg mb-4 cursor-zoom-in relative group/img"
                      onClick={() => setSelectedImage(c.image)}
                    >
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white drop-shadow-md group-hover/img:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>{c.icon}</div>
                      <div>
                        <h4 className="text-base font-display font-bold text-white group-hover:text-neon-blue transition-colors leading-snug">{c.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5"><HiBadgeCheck className="text-neon-blue text-xs" /><span className="text-xs text-slate-400 font-medium">{c.issuer}</span></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{c.desc}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                      {c.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DSA & Training Certifications */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DSA & Training Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dsaTrainingCerts.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div 
                      className="overflow-hidden rounded-lg mb-4 cursor-zoom-in relative group/img"
                      onClick={() => setSelectedImage(c.image)}
                    >
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <svg className="w-8 h-8 text-white drop-shadow-md group-hover/img:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>{c.icon}</div>
                      <div>
                        <h4 className="text-base font-display font-bold text-white group-hover:text-neon-blue transition-colors leading-snug">{c.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5"><HiBadgeCheck className="text-neon-blue text-xs" /><span className="text-xs text-slate-400 font-medium">{c.issuer}</span></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{c.desc}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                      {c.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-neon-blue transition-colors text-3xl p-2 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer z-50 border border-white/10"
              aria-label="Close Preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full Image */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate Full Preview"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
