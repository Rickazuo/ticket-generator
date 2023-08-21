import Image from 'next/image'
import styles from './page.module.css'
import GenerateTicket from './components/GenerateTicket/GenerateTicket'
import Ticket from './components/Ticket/Ticket'

export default function Home() {
  return (
    <main className={styles.main}>
        <GenerateTicket />
        <Ticket />
    </main>
  )
}
