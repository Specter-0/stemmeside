"use client";
import React from 'react'
import styles from "./SCButton.module.css"
import { vote } from "@/backend/firebase.js"

const SCButton = ({ name, key }) => {
    async function handleClick() {
        await vote(name, key)
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