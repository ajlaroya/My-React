import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>NFTinity is open source!</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Check the source code on GitHub</p>
        </div>
        <a className={styles.btnPrimary} href="https://github.com/ajlaroya/My-React/tree/main/nft-marketplace" rel="noreferrer" target="_blank">Source Code</a>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download" className={styles.fullImg} />
        </div>
      </div>
    </div>
  )
}

export default Download