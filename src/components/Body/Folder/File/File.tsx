import React from 'react'
import styles from './File.module.css'
import AccueilFile from './AccueilFile/AccueilFile'
import ProjetsFile from './ProjetsFile/ProjetsFile'
import ExperienceFile from './ExperienceFile/ExperienceFile'
import ContactFile from './ContactFile/ContactFile'

interface FileProps {
  open: boolean[]
}
const File = ({ open }: FileProps) => {
  const files = [
    <AccueilFile />,
    <ProjetsFile />,
    <ExperienceFile />,
    <ContactFile />,
  ]
  return <div className={styles.file}>{files[open.indexOf(true)]}</div>
}

export default File
