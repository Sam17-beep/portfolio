import React from 'react'
import styles from '../../styles/Body.module.css'
import TitlePage from './Body/TitlePage'
import Folder from './Body/Folder'

interface BodyProps {}
const Body = ({}: BodyProps) => {
  return (
    <div className={styles.body}>
      <TitlePage />
      <Folder />
    </div>
  )
}

export default Body
