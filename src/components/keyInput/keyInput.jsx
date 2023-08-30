"use client"
import { useState } from 'react'
import React from 'react'
import styles from "./keyInput.module.css"


const KeyInput = () => {
    const [key, setKey] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(key)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder='Key' 
                    value={key}
                    className={styles.input}
                    onChange={e => setKey(e.target.value)}
                />  
                <input type="submit"/>
            </form>
        </div>
    )
}

export default KeyInput