"use client"
import { useState } from 'react'
import React from 'react'
import styles from "./keyInput.module.css"
import { validate_code } from "../../backend/firebase"

let regexp_num = new RegExp("0-9") 
let regexp_letters = new RegExp("^0-9")

const KeyInput = () => {
    const [key, setKey] = useState()

    async function handleSubmit(event) {
        event.preventDefault();
        if (!await validate_code(key)) {
            alert("invalid code")
            return
        }

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