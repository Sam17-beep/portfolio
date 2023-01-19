import { useRef } from 'react'
import styles from '../../../styles/Body/TitlePage.module.css'
import ArrowButton from '../../smallComponents/ArrowButton'
interface TitlePageProps {}

const TitlePage = ({}: TitlePageProps) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          Salut, salut, <br />
          voici mon <br />
          portfolio.
        </p>
        <div className={styles.pastille}>
          <p className={styles.pastilleText}>Étudiant en génie logiciel</p>
        </div>
      </div>
      <ArrowButton
        className={styles.arrowButton}
        // onClick={() => {
        //   console.log('2')
        // }}
      />
    </>
  )
}

export default TitlePage
