"use client";
import React from 'react'
import styles from "./SCButton.module.css"
import { vote } from "@/backend/firebase.js"

const SCButton = ({ name, kode }) => {
    async function handleClick() {
        if (await vote(name, kode) === 1)  {
            window.location = "/"
        }
        else {
            alert("vote failed")
        }
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