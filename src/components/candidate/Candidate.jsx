import React from 'react'
import Image from "next/image"
import SCButton from '../SCButton/SCButton'
import styles from "./candidate.module.css"

const Candidate = ({ src, name, kode }) => {
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
                <h1> {name} </h1>
                <SCButton name={name} kode={String(kode).replace(",", "")}/>
            </div>
        </div>
    )
}

export default Candidate