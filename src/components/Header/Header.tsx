import React from 'react'
import styles from './Header.module.css'

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p className={styles.font}>Sam Gre</p>
    </div>
  )
}

export default Header
