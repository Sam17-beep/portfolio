import React from 'react'
import styles from '../../../styles/Body/TitlePage.module.css'

interface TitlePageProps {}

const TitlePage = ({}: TitlePageProps) => {
  return (
    <div>
      <div className={styles.title}>Salut, salut,voici mon portfolio.</div>
    </div>
  )
}

export default TitlePage