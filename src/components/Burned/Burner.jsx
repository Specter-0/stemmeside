"use client";
import React from 'react'
import styles from './Burner.module.css'
import { burn_vote } from '@/backend/firebase';

const Burner = ( { kode } ) => {

    async function burn() {
        console.log(await burn_vote(kode))
        window.location = "/"
    }

    return (
        <div className={styles.container}>
            <button className={styles.Burner} onClick={() => { burn() }}>
                BURN VOTE
            </button>
        </div>
    )
}

export default Burner