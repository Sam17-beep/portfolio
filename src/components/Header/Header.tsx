import React from 'react'
import styles from './Header.module.css'
import HackerText from './HackerText/HackerText'

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p className={styles.font}>
        <HackerText isLowerCase={true}>Samuel Grenier</HackerText>
      </p>
    </div>
  )
}

export default Header
