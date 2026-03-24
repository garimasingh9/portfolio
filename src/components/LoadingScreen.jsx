import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="loading-spinner" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid transparent',
              borderBottomColor: '#a855f7',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-display font-bold gradient-text mb-2">
            Garima Singh
          </h2>
          <p className="text-sm text-slate-500 tracking-widest uppercase">
            Loading Portfolio...
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
