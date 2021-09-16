import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'

export default function AnimationFramer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSecondBtn, setShowSecondBtn] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className={styles.button}
      >
        show
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div
              className={styles.card}
              onClick={() => setShowSecondBtn((prev) => !prev)}
            >
              <p>Animated Text</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSecondBtn && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ x: 100, opacity: 1 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div className={styles.card}>
              <p>Second Text</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
