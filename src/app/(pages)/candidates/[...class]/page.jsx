import styles from "./votePage.module.css"
import React from 'react'
import Candidate from "@/components/candidate/Candidate"
import { validate_code, getPeople } from "@/backend/firebase"
import Burner from "@/components/Burned/Burner"

const people = await getPeople() 

const votePage = ({ params }) => {  

  return (
    <div className={styles.container}>
        <div className={styles.codeContainer}>
          <h1> din kode </h1>
          <p> { params.class } </p>
        </div>
        <div className={styles.candidates}>
          {people.map(cand => (
            <Candidate 
            src={"/" + cand + ".png"} 
            name={cand} 
            kode={params.class} 
            key={cand} 
            />
          ))}
        </div>  
        <div>
          <Burner kode={params.class} />
        </div>
    </div>
  )
}

export default votePage