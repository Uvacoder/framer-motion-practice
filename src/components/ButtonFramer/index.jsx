import { motion } from 'framer-motion'

export default function ButtonFramer() {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Button Framer
      </motion.button>
    </div>
  )
}
