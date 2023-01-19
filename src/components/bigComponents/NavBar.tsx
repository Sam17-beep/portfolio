import React from 'react'
import NavButton from '../smallComponents/NavButton'
import styles from '../../styles/bigComponents/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBar} id="navBar">
      <NavButton>Accueil</NavButton>
      <NavButton>Projets</NavButton>
      <NavButton>Expériences</NavButton>
      <NavButton>Contact</NavButton>
    </div>
  )
}

export default NavBar
