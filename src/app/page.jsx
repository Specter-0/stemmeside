import Image from 'next/image'
import styles from './page.module.css'
import { Test, getPeople, vote } from '../backend/firebase'
import VoteButton from '@/components/voteButton/voteButton'


export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <VoteButton url="/verify" text="VOTE"/>
      </div>
    </div>
  )
}
