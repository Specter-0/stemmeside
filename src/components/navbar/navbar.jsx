'use client';
import Link from 'next/link';
import React from 'react'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}> Stemme Side </Link>
    </div>
  )
}

export default Navbar