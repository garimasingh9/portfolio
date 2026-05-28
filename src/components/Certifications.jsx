import { motion } from 'framer-motion'
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

// Web Development Certifications
import certFccRwd from '../assets/certificates/Screenshot .png'
import certMetaFrontend from '../assets/certificates/Frontend.jpg'
import certMetaReact from '../assets/certificates/React.jpg'

// Programming & Languages
import certUdemyPython from '../assets/certificates/Python.png'
import certScalerJava from '../assets/certificates/Java.jpg'

// DSA & Training Certifications
import certLpuDsa from '../assets/certificates/DSA certificate_page-0001.jpg'
import certCourseraBitsBytes from '../assets/certificates/Coursera bits and bytes.jpg'
import certCourseraP2p from '../assets/certificates/coursera peer to peer .jpg'

const cybersecurityCerts = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    icon: <SiCisco className="text-2xl" />,
    image: certIntroCyber,
    desc: 'Learned core cybersecurity concepts including threats, attacks, security principles, and basic defense strategies.',
    skills: ['Cybersecurity Fundamentals', 'Network Security', 'Threat Awareness', 'Security Best Practices'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Foundation of Cybersecurity',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleFoundations,
    desc: 'Built foundational knowledge of cybersecurity principles, risk management, and organizational security practices.',
    skills: ['Security Principles', 'Risk Management', 'Security Operations', 'Cybersecurity Basics'],
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Manage Security Risks',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleRisks,
    desc: 'Explored methods for identifying, analyzing, and managing cybersecurity risks in organizations.',
    skills: ['Risk Assessment', 'Threat Analysis', 'Security Policies', 'Incident Prevention'],
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Networks and Network Security',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleNetworkSec,
    desc: 'Learned networking fundamentals and security concepts including secure communication protocols and network protection.',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Network Security', 'Firewalls', 'Wireshark Basics'],
    color: 'from-red-500 to-rose-400',
    bg: 'bg-red-500/10'
  },
  {
    title: 'Linux and Security',
    issuer: 'Google',
    icon: <SiGoogle className="text-2xl" />,
    image: certGoogleLinuxSec,
    desc: 'Learned Linux system fundamentals, permissions, command-line operations, and system security concepts.',
    skills: ['Linux Commands', 'File Permissions', 'CLI', 'System Security', 'Linux Administration'],
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-500/10'
  }
]

const webDevCerts = [
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    icon: <SiFreecodecamp className="text-2xl" />,
    image: certFccRwd,
    desc: 'Mastered responsive web design concepts using HTML5 and CSS3 with mobile-first development practices.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid', 'UI/UX Basics'],
    color: 'from-green-500 to-emerald-400',
    bg: 'bg-green-500/10'
  },
  {
    title: 'Meta Frontend Development',
    issuer: 'Meta',
    icon: <SiMeta className="text-2xl" />,
    image: certMetaFrontend,
    desc: 'Learned frontend development fundamentals including modern UI development and component-based architecture.',
    skills: ['React Basics', 'JavaScript', 'Frontend Architecture', 'Responsive UI'],
    color: 'from-blue-600 to-indigo-500',
    bg: 'bg-blue-600/10'
  },
  {
    title: 'Meta React Specialization',
    issuer: 'Meta',
    icon: <SiMeta className="text-2xl" />,
    image: certMetaReact,
    desc: 'Developed React applications using reusable components, hooks, state management, and frontend optimization techniques.',
    skills: ['React.js', 'Hooks', 'Context API', 'Component Architecture', 'Frontend Optimization'],
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10'
  }
]

const programmingCerts = [
  {
    title: '100 Days of Code: Python',
    issuer: 'Udemy',
    icon: <SiUdemy className="text-2xl" />,
    image: certUdemyPython,
    desc: 'Learned Python programming through hands-on projects covering automation, OOP, file handling, and application development.',
    skills: ['Python', 'OOP', 'Automation', 'File Handling', 'Logic Building'],
    color: 'from-rose-500 to-red-500',
    bg: 'bg-rose-500/10'
  },
  {
    title: 'Java: Mastering Fundamentals',
    issuer: 'Scaler Topics',
    icon: <HiBadgeCheck className="text-2xl text-blue-400" />,
    image: certScalerJava,
    desc: 'Built strong foundations in Java programming including object-oriented programming and problem-solving concepts.',
    skills: ['Java', 'OOP', 'Exception Handling', 'Collections', 'Core Programming'],
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
    desc: 'Completed foundational training in data structures and algorithms using C++ with focus on problem-solving techniques.',
    skills: ['Data Structures', 'Algorithms', 'C++', 'Problem Solving', 'Time Complexity'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Bits & Bytes of Networking',
    issuer: 'Google / Coursera',
    icon: <SiCoursera className="text-2xl" />,
    image: certCourseraBitsBytes,
    desc: 'Learned computer networking fundamentals, protocols, communication models, and internet architecture.',
    skills: ['Networking Basics', 'OSI Model', 'TCP/IP', 'Routing', 'Network Troubleshooting'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Peer-to-Peer & LAN Protocols',
    issuer: 'Coursera',
    icon: <SiCoursera className="text-2xl" />,
    image: certCourseraP2p,
    desc: 'Explored peer-to-peer communication, LAN technologies, and distributed networking concepts.',
    skills: ['LAN', 'Peer-to-Peer Networking', 'Network Communication', 'Distributed Systems'],
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10'
  }
]

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

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
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
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
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
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
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
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
                <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glow-border group overflow-hidden flex flex-col h-full">
                  <div className={`h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img src={c.image} alt={c.title} className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
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
    </section>
  )
}
