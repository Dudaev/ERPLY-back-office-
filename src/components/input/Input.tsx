import React, { useState } from 'react';
import styles from './Input.module.css'
import ImageX from './icons/X.svg';
import ImageWarning from './icons/Warning.svg';
const Input = () => {
  const [input, setInput] = useState('')
  const [svgX, setSvgX] = useState(false)
  const [svgError, setSvgError] = useState(false)
  return (
    <div className={styles.container} >
    <div >
      {svgX && <span className={styles.svgX} onClick={() => setInput('')}>
        <img src={ImageX} alt=""/>
      </span>}
      {svgError && <span className={styles.svg}>
        <img src={ImageWarning} alt=""/>
      </span>}
      <input className={styles.input} placeholder='Name' type="text"
             value={input} onBlur={() => setSvgX(false) } onFocus={() => setSvgX(true)}
             onChange={(event) => setInput(event.currentTarget.value) }
             />
    </div>
    </div>
  )
}

export default Input