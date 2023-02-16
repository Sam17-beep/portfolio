import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import File from './File/File'

import styles from './Folder.module.css'

interface FolderProps {}

const Folder = ({}: FolderProps) => {
  const [open, setOpen] = useState([true, false, false, false])

  const fileHandler = (filesState: boolean[]) => {
    setOpen(filesState)
  }
  return (
    <div className={styles.container}>
      <NavBar setOpen={fileHandler} open={open} />
      <File open={open} />
    </div>
  )
}

export default Folder
