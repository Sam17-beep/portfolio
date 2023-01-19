import React from 'react'
import styles from '../../styles/smallComponents/NavButton.module.css'

interface NavButtonProps {
  children: string
}

const NavButton = ({ children }: NavButtonProps) => {
  return <button className={styles.button}>{children}</button>
}

export default NavButton
