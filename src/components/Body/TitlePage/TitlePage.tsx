import { useRef } from 'react'
import styles from './TitlePage.module.css'
import ArrowButton from './ArrowButton/ArrowButton'
import HackerText from './HackerText/HackerText'
interface TitlePageProps {
  arrowClick: Function
}

const TitlePage = ({ arrowClick }: TitlePageProps) => {
  const arrowButtonClickHandler = () => {
    arrowClick()
  }
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          Salut, salut, <br />
          voici mon <br />
          portfolio.
        </p>
        <div className={styles.pastille}>
          <p className={styles.pastilleText}>
            <HackerText isLowerCase={true} steps={1}>
              Étudiant en génie logiciel
            </HackerText>
          </p>
        </div>
      </div>
      <div onClick={arrowButtonClickHandler}>
        <ArrowButton className={styles.arrowButton} />
      </div>
    </>
  )
}

export default TitlePage
