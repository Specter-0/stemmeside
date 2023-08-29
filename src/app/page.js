import Image from 'next/image'
import styles from './page.module.css'
import { Test, getPeople, vote } from '../backend/firebase'


export default function Home() {
  vote("Sigurd", "stemmer@mail.com");
  return (
    <div></div>
  )
}
