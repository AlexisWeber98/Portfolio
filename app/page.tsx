import Image from 'next/image'
import styles from './page.module.css'
import Proyects from '@/components/Proyects/Proyects'

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      <Proyects/>
     </div>
    </main>
  )
}
