import { useRef } from 'react'
import styles from '../../styles/smallComponents/ArrowButton.module.css'

interface ArrowButtonProps {
  className?: string
  // onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ className }) => {
  return (
    <div className={`${styles.arrowButton} ${className}`}>
      <svg
        viewBox="0 0 129 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          d="M126.315 76.047C128.034 77.7666 129 80.0987 129 82.5302C129 84.9618 128.034 87.2938 126.315 89.0134L71.295 144.034C69.5753 145.753 67.2433 146.718 64.8118 146.718C62.3802 146.718 60.0482 145.753 58.3286 144.034L3.30841 89.0134C1.63803 87.2839 0.713741 84.9676 0.734631 82.5632C0.75552 80.1589 1.71993 77.8589 3.42013 76.1587C5.12033 74.4585 7.42028 73.4941 9.82464 73.4732C12.229 73.4523 14.5454 74.3766 16.2748 76.047L55.6418 115.414L55.6418 9.17002C55.6418 6.73798 56.6079 4.40555 58.3276 2.68584C60.0473 0.966124 62.3797 -2.91206e-06 64.8118 -2.80576e-06C67.2438 -2.69945e-06 69.5763 0.966124 71.296 2.68584C73.0157 4.40555 73.9818 6.73798 73.9818 9.17002L73.9818 115.414L113.349 76.047C115.068 74.3279 117.4 73.3622 119.832 73.3622C122.263 73.3622 124.596 74.3279 126.315 76.047Z"
          fill="#2749FF"
        />
      </svg>
    </div>
  )
}

export default ArrowButton
