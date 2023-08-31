import styles from "./votePage.module.css"
import React from 'react'
import Candidate from "@/components/candidate/Candidate"
import { validate_code } from "@/backend/firebase"

const votePage = ({ params }) => {  
  return (
    <div className={styles.container}>
        <div className={styles.codeContainer}>
          <h1> din kode </h1>
          <p>{params.class}</p>
        </div>
        <div className={styles.candidates}>
          <Candidate src="/john.jpeg" name="Sigurd" kode={params.class} />
          <Candidate src="/tech-support.jpeg" name="tech-support" kode={params.class}/>
          <Candidate src="/john.jpeg" name="john" kode={params.class}/>
          <Candidate src="/tech-support.jpeg" name="tech-support" kode={params.class}/>
          <Candidate src="/john.jpeg" name="john" kode={params.class}/>
          <Candidate src="/tech-support.jpeg" name="tech-support" kode={params.class}/>
        </div>  
    </div>
  )
}

export default votePage