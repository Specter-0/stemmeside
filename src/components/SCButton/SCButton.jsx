"use client";
import React from 'react'
import styles from "./SCButton.module.css"
import { vote, getPeople } from "@/backend/firebase.js"

const SCButton = ({ name, kode }) => {
    async function handleClick() {
        alert(await vote(name, kode))
        alert(await getPeople())
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => handleClick()}>
                Vote
            </button>
        </div>
    )
}

export default SCButton