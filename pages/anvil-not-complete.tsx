import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const AnvilComplete: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Not Quite Complete...</p>
      <Link href="/anvil-complete">
        <a className={styles.card}>
          <h2>Complete Anvil &rarr;</h2>
        </a>
      </Link>
    </div>
  )
}

export default AnvilComplete;
