import React from 'react'
import styles from './Body.module.css'
import TitlePage from './TitlePage/TitlePage'
import Folder from './Folder/Folder'

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
