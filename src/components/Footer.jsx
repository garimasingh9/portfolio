import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-xl gradient-text">&lt;GS /&gt;</a>
            <p className="text-sm text-slate-500 mt-2">Crafting secure & scalable digital solutions</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/garimasingh9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/garima-singh-a5b369298/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all"><FaLinkedin /></a>
            <a href="mailto:garima.singh17sep@gmail.com" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all"><HiMail /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Garima Singh. Built with <FaHeart className="inline text-neon-pink text-xs mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
