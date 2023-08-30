import Image from "next/image"
import styles from "./votePage.module.css"
import React from 'react'
import SCButton from "@/components/SCButton/SCButton"
import Candidate from "@/components/candidate/Candidate"

const votePage = ({ params }) => {
  return (
    <div className={styles.container}>
        <div className={styles.codeContainer}>
          <h1> din kode </h1>
          <p>{params.class}</p>
        </div>
        <div className={styles.candidates}>
          <Candidate src="/john.jpeg" name="john" key={params.class} />
          <Candidate src="/tech-support.jpeg" name="tech-support" key={params.class}/>
          <Candidate src="/john.jpeg" name="john" key={params.class}/>
          <Candidate src="/tech-support.jpeg" name="tech-support" key={params.class}/>
          <Candidate src="/john.jpeg" name="john" key={params.class}/>
          <Candidate src="/tech-support.jpeg" name="tech-support" key={params.class}/>
        </div>  
    </div>
  )
}

export default votePage