import React from 'react'
import NavBar from '../../bigComponents/NavBar'
import File from '../../bigComponents/File'

import styles from '../../../styles/Body/Folder.module.css'

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
