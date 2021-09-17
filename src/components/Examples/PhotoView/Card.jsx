import styles from './styles.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Card({ src /** @param {string} src */ }) {
  return (
    <div className={styles.card}>
      <AnimatePresence>
        <motion.img
          draggable={false}
          className={styles.image}
          whileTap={{
            scale: 1.3,
            transition: { duration: 0.2 },
            zIndex: 2,
            borderRadius: '10px',
            width: '200px',
            height: '200px',
            position: 'absolute',
            inset: 0,
          }}
          src={src}
          alt="Random Lorem Picsu"
          title={src}
        />
      </AnimatePresence>
    </div>
  )
}
