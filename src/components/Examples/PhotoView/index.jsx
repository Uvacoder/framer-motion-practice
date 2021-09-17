import Card from './Card'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function PhotoView() {
  const getRandomPhoto = () => {
    const randomId = Math.floor(Math.random() * 1000)
    const baseUrl = `https://picsum.photos/id/${randomId}/200/200`
    return baseUrl
  }

  return (
    <div className={styles.photoviewer}>
      <h1>PhotoViewer</h1>
      <motion.div className={styles.container}>
        <Card src={getRandomPhoto()} />
        <Card src={getRandomPhoto()} />
        <Card src={getRandomPhoto()} />
        <Card src={getRandomPhoto()} />
      </motion.div>
    </div>
  )
}
