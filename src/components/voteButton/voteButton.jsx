"use client"
import React from 'react'
import styles from "./voteButton.module.css"
import Link from 'next/link'

const VoteButton = ({ url, text }) => {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <button className={styles.button}>
            {text}
        </button>
      </Link>
    </div>
  )
}

export default VoteButton