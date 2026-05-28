import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineLightningBolt, HiOutlineAcademicCap, HiOutlineTerminal } from 'react-icons/hi'
import { 
  SiReact, SiPython, SiJavascript, SiHtml5, SiSpringboot, SiWireshark, SiTailwindcss,
  SiHibernate, SiBootstrap, SiMongodb, SiPostgresql, SiNodedotjs, SiGit, SiDocker,
  SiLinux, SiKalilinux, SiBurpsuite, SiSplunk, SiMetasploit
} from 'react-icons/si'
import { 
  FaJava, FaShieldAlt, FaProjectDiagram, FaServer, FaCogs,
  FaDatabase, FaNetworkWired, FaLock, FaCube, FaLaptop, FaTerminal
} from 'react-icons/fa'

const coreStrengths = [
  { 
    name: 'Frontend Development', 
    icon: <SiReact className="text-3xl text-neon-blue group-hover:scale-110 transition-transform" />, 
    desc: 'Building responsive, accessible, and high-performance UI using React, Tailwind CSS, and Framer Motion.', 
    context: 'Showcased in FitTrack & WealthBridge' 
  },
  { 
    name: 'Cybersecurity Tools', 
    icon: <FaShieldAlt className="text-3xl text-neon-purple group-hover:scale-110 transition-transform" />, 
    desc: 'Network analysis, packet inspecting, and implementing secure communication protocols.', 
    context: 'Simulated in CyberSuite Ultimate' 
  },
  { 
    name: 'Problem Solving (DSA)', 
    icon: <FaProjectDiagram className="text-3xl text-emerald-400 group-hover:scale-110 transition-transform" />, 
    desc: 'Designing optimized algorithms and robust data structures for scalable backend processes.', 
    context: 'Applied across all core projects' 
  },
]

const programmingDevelopment = [
  { name: 'Java', icon: <FaJava className="text-red-500" />, level: 'Intermediate', context: 'Object-oriented programming & backend systems' },
  { name: 'Python', icon: <SiPython className="text-blue-500" />, level: 'Advanced', context: 'Scripting, security tools, and automation' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 'Advanced', context: 'Web applications & dynamic scripting' },
  { name: 'React.js', icon: <SiReact className="text-blue-400" />, level: 'Advanced', context: 'Modern dynamic frontend interfaces' },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, level: 'Intermediate', context: 'Robust enterprise backend APIs' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 'Advanced', context: 'Rapid responsive utility-first styling' },
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-orange-500" />, level: 'Advanced', context: 'Semantic layout & stylesheet design' },
  { name: 'SQL', icon: <FaDatabase className="text-blue-400" />, level: 'Intermediate', context: 'Relational database queries & schemas' },
  { name: 'REST APIs', icon: <FaServer className="text-slate-400" />, level: 'Intermediate', context: 'Secure web service communication' },
  { name: 'Hibernate/JPA', icon: <SiHibernate className="text-amber-600" />, level: 'Intermediate', context: 'Object-relational mapping for Java' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" />, level: 'Advanced', context: 'Responsive mobile-first component styling' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 'Intermediate', context: 'NoSQL document-oriented databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, level: 'Beginner', context: 'Robust open-source relational databases' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, level: 'Beginner', context: 'Asynchronous event-driven runtime environment' },
  { name: 'Git/GitHub', icon: <SiGit className="text-orange-600" />, level: 'Advanced', context: 'Version control & project collaboration' },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" />, level: 'Beginner', context: 'Containerization & microservices deployment' },
]

const cybersecurityNetworking = [
  { name: 'Linux', icon: <SiLinux className="text-slate-300" />, level: 'Intermediate', context: 'Unix-based administration & shell scripting' },
  { name: 'Kali Linux', icon: <SiKalilinux className="text-blue-400" />, level: 'Intermediate', context: 'Offensive security & penetration testing' },
  { name: 'Wireshark', icon: <SiWireshark className="text-blue-300" />, level: 'Intermediate', context: 'Packet capturing & deep protocol analysis' },
  { name: 'Nmap', icon: <FaTerminal className="text-slate-300" />, level: 'Intermediate', context: 'Network scanning & vulnerability discovery' },
  { name: 'Burp Suite', icon: <SiBurpsuite className="text-orange-500" />, level: 'Intermediate', context: 'Web application security testing & proxy' },
  { name: 'OWASP Top 10', icon: <FaShieldAlt className="text-red-400" />, level: 'Intermediate', context: 'Critical web application security risks awareness' },
  { name: 'Networking', icon: <FaNetworkWired className="text-blue-400" />, level: 'Intermediate', context: 'Computer network architecture & models' },
  { name: 'TCP/IP', icon: <FaNetworkWired className="text-indigo-400" />, level: 'Intermediate', context: 'Transmission control & internet protocols stack' },
  { name: 'DNS/DHCP', icon: <FaServer className="text-slate-400" />, level: 'Intermediate', context: 'Domain naming systems & network configurations' },
  { name: 'SIEM Basics', icon: <FaShieldAlt className="text-emerald-400" />, level: 'Beginner', context: 'Security information & event management foundations' },
  { name: 'Splunk', icon: <SiSplunk className="text-emerald-500" />, level: 'Beginner', context: 'Machine data searching, monitoring & analysis' },
  { name: 'Metasploit', icon: <SiMetasploit className="text-blue-500" />, level: 'Beginner', context: 'Exploitation framework & vulnerability scanning' },
  { name: 'System Hardening', icon: <FaLock className="text-yellow-400" />, level: 'Beginner', context: 'Securing OS configurations & reducing attack surface' },
  { name: 'Firewalls', icon: <FaShieldAlt className="text-orange-400" />, level: 'Beginner', context: 'Configuring access control & traffic filtering' },
  { name: 'Incident Response', icon: <FaShieldAlt className="text-cyan-400" />, level: 'Beginner', context: 'Identifying, containing & resolving security breaches' },
]

const computerScienceFundamentals = [
  { name: 'DSA', icon: <FaProjectDiagram className="text-emerald-400" />, level: 'Intermediate', context: 'Data structures & algorithm optimization' },
  { name: 'OOP', icon: <FaCube className="text-indigo-400" />, level: 'Advanced', context: 'Object-oriented programming patterns & concepts' },
  { name: 'DBMS', icon: <FaDatabase className="text-blue-400" />, level: 'Intermediate', context: 'Database management systems & database design' },
  { name: 'Operating Systems', icon: <FaLaptop className="text-slate-300" />, level: 'Intermediate', context: 'OS architectures, memory management & processes' },
  { name: 'Computer Networks', icon: <FaNetworkWired className="text-cyan-400" />, level: 'Intermediate', context: 'Networking layers, topology & routing concepts' },
]

const currentlyLearning = [
  { name: 'Advanced React & Next.js', icon: <SiReact className="text-blue-400" />, desc: 'Context API, performance optimization & scalable frontend architecture' },
  { name: 'Ethical Hacking & Pentesting', icon: <FaShieldAlt className="text-purple-400" />, desc: 'OWASP, Burp Suite, vulnerability assessment & security testing' },
  { name: 'Cloud & DevOps', icon: <FaCogs className="text-slate-300" />, desc: 'AWS, Docker, CI/CD pipelines & deployment fundamentals' },
  { name: 'Blue Team & SIEM', icon: <SiSplunk className="text-emerald-500" />, desc: 'Splunk, log analysis, threat hunting & incident response basics' },
  { name: 'Linux & Active Directory Security', icon: <SiLinux className="text-yellow-500" />, desc: 'Privilege escalation, authentication & system security concepts' },
]

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="relative py-24 md:py-32 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical arsenal and functional expertise
          </p>
        </motion.div>

        {/* Core Strengths */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineLightningBolt className="text-2xl text-neon-blue" />
            <h3 className="text-2xl font-display font-bold text-white">Core Strengths</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-8 group hover:border-neon-blue/30 transition-all flex flex-col h-full"
              >
                <div className="mb-6">{strength.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{strength.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{strength.desc}</p>
                <div className="text-xs font-semibold uppercase tracking-wider text-neon-purple mt-auto bg-neon-purple/5 px-3 py-2 rounded-lg border border-neon-purple/10 inline-block w-max">
                  {strength.context}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineTerminal className="text-2xl text-neon-purple" />
            <h3 className="text-2xl font-display font-bold text-white">Technical Arsenal</h3>
          </div>

          <div className="space-y-12">
            {/* Programming & Development */}
            <div>
              <h4 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                Programming & Development
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {programmingDevelopment.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + (index % 4) * 0.05 }}
                    className="relative group glass-card p-5 flex items-center gap-4 hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all cursor-default"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">{skill.name}</h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{skill.level}</p>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-[200px] text-center px-3 py-2 bg-slate-800 text-slate-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 hidden sm:block">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cybersecurity & Networking */}
            <div>
              <h4 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
                Cybersecurity & Networking
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cybersecurityNetworking.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + (index % 4) * 0.05 }}
                    className="relative group glass-card p-5 flex items-center gap-4 hover:border-neon-purple/40 hover:bg-neon-purple/5 transition-all cursor-default"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">{skill.name}</h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{skill.level}</p>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-[200px] text-center px-3 py-2 bg-slate-800 text-slate-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 hidden sm:block">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Computer Science Fundamentals */}
            <div>
              <h4 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Computer Science Fundamentals
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {computerScienceFundamentals.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + (index % 4) * 0.05 }}
                    className="relative group glass-card p-5 flex items-center gap-4 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all cursor-default"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">{skill.name}</h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{skill.level}</p>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-[200px] text-center px-3 py-2 bg-slate-800 text-slate-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 hidden sm:block">
                      {skill.context}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineAcademicCap className="text-2xl text-emerald-400" />
            <h3 className="text-2xl font-display font-bold text-white">Currently Learning</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card px-6 py-5 flex items-start gap-4 hover:border-emerald-400/30 transition-all border-dashed border-white/10 hover:bg-emerald-400/5 group"
              >
                <div className="text-2xl mt-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</div>
                <div>
                  <h4 className="text-white font-medium text-base mb-1">{item.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
