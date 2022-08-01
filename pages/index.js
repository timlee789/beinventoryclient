import styles from '../styles/Home.module.css'
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.container}>

    <main className={styles.main}>
      <h2>Beauty Elements</h2>
    <h3>INVENTORY MANAGEMENT</h3>
        <Image src='https://bijouxhair.com/tim/whatsnew/main.jpg' width='380px' height='456px' alt='bijouxhair'></Image>
       
       
      </main>

     
    </div>
  )
}
