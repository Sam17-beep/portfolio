import React from 'react'
import styles from '../../styles/smallComponents/NavButton.module.css'

interface NavButtonProps {
  children: string
}

const NavButton = ({ children }: NavButtonProps) => {
  return (
    <div className={styles.button}>
      <p className={styles.buttonText}>{children}</p>
    </div>
  )
}

export default NavButton
