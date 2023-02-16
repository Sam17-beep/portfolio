import React from 'react'
import './HackerText.css'

const HackerText = ({
  children,
  steps = 3,
  isLowerCase = false,
}: {
  children: string
  steps?: number
  isLowerCase?: boolean
}) => {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let text = children.toUpperCase()
  if (isLowerCase) {
    letters = 'abcdefghijklmnopqrstuvwxyz'
    text = children.toLowerCase()
  }

  const mouseOverhandler = (e: any) => {
    let interations: number = 0

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split('')
        .map((letter: string, index: number) => {
          if (index < interations) {
            return text[index]
          }
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join('')

      if (interations >= text.length) clearInterval(interval)
      interations += 1 / steps
    }, 30)
  }

  return (
    <span className="text-container" onMouseOver={mouseOverhandler}>
      {text}
    </span>
  )
}

export default HackerText
