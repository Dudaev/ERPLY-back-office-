import React, { useState } from 'react';
import styles from './Search.module.css'
import imgSearch from './icons/Search.svg';
import imgX from './icons/X.svg';
const Input = () => {
  const [input, setInput] = useState('')
  return (
    <div className={styles.container} >
        <div className={styles.searchWrapper}>
          <span className={styles.svgSearch}>
            <img src={imgSearch} alt=""/>
          </span>
          <span className={styles.svgX}>
            <img src={imgX} alt=""/>
          </span>
          <input className={styles.input} type="text" placeholder='Search' value={input} onChange={(event) => setInput(event.currentTarget.value)}/>
        </div>
    </div>
  )
}



export default Input