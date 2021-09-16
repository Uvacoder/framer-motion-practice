import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './styles.module.css'

export default function ButtonFramer() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className={styles.container}>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className={styles.button}
      >
        Button Framer
      </motion.button>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ stdDeviation: isHovered ? 0 : 2, x: isHovered ? 30 : 0 }}
        whileTap={{ y: 10 }}
        className={styles.div}
      >
        Hovered Div
      </motion.div>
    </div>
  )
}
