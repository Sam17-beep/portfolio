import React from 'react'
import NavButton from '../smallComponents/NavButton'
import styles from '../../styles/bigComponents/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBar} id="navBar">
      <button>Accueil</button>
      <button>Projets</button>
      <button>Expériences</button>
      <button>Contact</button>
    </div>
  )
}

export default NavBar
