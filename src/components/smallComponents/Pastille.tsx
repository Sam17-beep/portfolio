import React from 'react'
import styles from '../../styles/smallComponents/Pastille.module.css'

interface PastilleProps {
  text: string
  children?: JSX.Element
  className?: string
}
const Pastille = ({ text, children, className }: PastilleProps) => {
  return (
    <div className={`${styles.pastille} ${className}`}>
      <p className={styles.font}>Pastille</p>
    </div>
  )
}

export default Pastille
