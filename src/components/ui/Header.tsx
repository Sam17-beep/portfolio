import React from 'react'
import styles from '../../styles/Header.module.css'

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.font}>Sam Gre</div>
    </div>
  )
}

export default Header
