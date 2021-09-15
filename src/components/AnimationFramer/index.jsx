import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AnimationFramer() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p>Text</p>
        </motion.div>
      )}
    </div>
  )
}
