"use client"
import { useState } from 'react'
import React from 'react'
import styles from "./keyInput.module.css"
import { validate_code } from "../../backend/firebase"

const KeyInput = () => {
    const [key, setKey] = useState()

    async function handleSubmit(event) {
        event.preventDefault();
        if (!await validate_code(key)) {
            alert("invalid code")
            return
        }
        /*
        else if (!await check_code_in_use(key)) {
            alert("code is in use")
            return
        }
        */
        window.location = "/candidates/" + String(key.match(/\D/gi)).replaceAll(",", "")+ "/" + String(key.match(/\d/gi)).replaceAll(",", "")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Key' 
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