"use client"
import { useState } from 'react'
import React from 'react'
import styles from "./keyInput.module.css"
import { validate_code } from "../../backend/firebase"

const KeyInput = () => {
    const [key, setKey] = useState()

    async function handleSubmit(event) {
        event.preventDefault();
        if (!await validate_code(key.toLowerCase())) {
            alert("invalid code")
            return
        }
        window.location = "/candidates/" + String(key.match(/\D/gi)).replaceAll(",", "").toLowerCase() + "/" + String(key.match(/\d/gi)).replaceAll(",", "").toLowerCase()
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    type="text" 
                    placeholder='Key' 
                    maxlength="11"
                    minLength="9"
                    value={key}
                    className={styles.input}
                    onChange={e => setKey(e.target.value)}
                />  
                <input className={styles.submit} type="submit"/>
            </form>
        </div>
    )
}

export default KeyInput