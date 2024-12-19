import { BackgroundImage } from '@mantine/core'
import styles from './hero.module.css'

export default function Hero({
  children,
  src,
}: {
  children: React.ReactNode
  src: string
}) {
  return (
    <BackgroundImage src={src} className={styles.hero}>
      {children}
    </BackgroundImage>
  )
}
