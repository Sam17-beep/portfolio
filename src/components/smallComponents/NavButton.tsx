import { useState } from 'react'
import styles from '../../styles/smallComponents/NavButton.module.css'

interface NavButtonProps {
  children: string
  open: boolean
  onClick: any
}

const NavButton = ({ children, open, onClick }: NavButtonProps) => {
  const clickHandler = () => {
    onClick()
  }

  return (
    <div className={styles.continer}>
      <div className={styles.button} onClick={clickHandler}>
        <p className={styles.buttonText}>{children}</p>
      </div>
      {open ? <div className={styles.color}></div> : <></>}
    </div>
  )
}

export default NavButton
