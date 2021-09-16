import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimationFramer() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setIsVisible((prev) => !prev)}>show</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <p>Animated Text</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
