import React from 'react'
import styles from '../../styles/Body.module.css'
import TitlePage from './Body/TitlePage'
import Folder from './Body/Folder'

interface BodyProps {}
const Body = ({}: BodyProps) => {
  const arrowClickHandler = () => {
    const element = document.getElementById('folder')
    element?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className={styles.body}>
      <TitlePage arrowClick={arrowClickHandler} />
      <div id="folder">
        <Folder />
      </div>
    </div>
  )
}

export default Body
