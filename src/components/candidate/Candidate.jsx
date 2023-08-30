import React from 'react'
import Image from "next/image"
import SCButton from '../SCButton/SCButton'
import styles from "./candidate.module.css"

const Candidate = ({ src, name, key }) => {
  return (
    <div className={styles.container}>
        <div className={styles.candidate}>
            <Image 
            src={src}
            alt={name}
            width={250} 
            height={250} 
            className={styles.portrait}
            />
            <SCButton name={name} key={key}/>
        </div>
    </div>
  )
}

export default Candidate