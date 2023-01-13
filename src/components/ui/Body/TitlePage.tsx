import React from 'react'
import styles from '../../../styles/Body/TitlePage.module.css'
import ArrowButton from '../../smallComponents/arrowButton'
import Pastille from '../../smallComponents/Pastille'

interface TitlePageProps {}

const TitlePage = ({}: TitlePageProps) => {
  return (
    <div>
      <h1 className={styles.title}>
        Salut, salut,
        <br />
        voici mon
        <br /> portfolio.
      </h1>
      <div className={styles.pastille}>
        <p className={styles.pastilleText}>Étudiant en génie logiciel</p>
      </div>
      <ArrowButton className={styles.arrowButton} />
    </div>
  )
}

export default TitlePage
