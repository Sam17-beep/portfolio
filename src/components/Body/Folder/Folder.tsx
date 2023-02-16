import React from 'react'
import NavBar from './NavBar/NavBar'
import File from './File/File'

import styles from './Folder.module.css'

interface FolderProps {}

const Folder = ({}: FolderProps) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <File />
    </div>
  )
}

export default Folder
