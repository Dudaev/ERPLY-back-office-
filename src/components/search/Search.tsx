import React, { useState } from 'react';
import styles from './Search.module.css'
import imgSearch from './icons/Search.svg';
import imgX from './icons/X.svg';
const Input = () => {
  const [input, setInput] = useState('')
  const [svgX, setSvgX] = useState(false)
  return (
    <div className={styles.container} >
        <div className={styles.searchWrapper}>
          <span className={styles.svgSearch}>
            <img src={imgSearch} alt=""/>
          </span>
          { svgX && <span className={styles.svgX} onClick={() => setInput('')} >
            <img src={imgX} alt=""/>
          </span>}

          <input className={styles.input}
                 type="text"
                 placeholder='Search'
                 value={input}
                 onChange={(event) => setInput(event.currentTarget.value)}
                 onFocus={() => setSvgX(true)}
                 onBlur={() =>  setSvgX(false)}
                  />
        </div>
    </div>
  )
}



export default Input