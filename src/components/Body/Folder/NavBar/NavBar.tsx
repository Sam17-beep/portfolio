import {} from 'react'
import NavButton from './NavButton/NavButton'
import styles from './NavBar.module.css'

interface NavBarProps {
  setOpen: Function
  open: boolean[]
}
const NavBar = ({ setOpen, open }: NavBarProps) => {
  const projetsClickHandler = () => {
    setOpen([true, false, false])
  }
  const experiencesClickHandler = () => {
    setOpen([false, true, false])
  }
  const contactClickHandler = () => {
    setOpen([false, false, true])
  }

  return (
    <div className={styles.navBar} id="navBar">
      <NavButton open={open[0]} onClick={projetsClickHandler}>
        Projets
      </NavButton>
      <NavButton open={open[1]} onClick={experiencesClickHandler}>
        Expériences
      </NavButton>
      <NavButton open={open[2]} onClick={contactClickHandler}>
        Contact
      </NavButton>
    </div>
  )
}

export default NavBar
