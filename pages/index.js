import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Truck Travelers</title>
        <meta name="description" content="A Food Truck Tracking Platform!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Truck Travelers!
        </h1>
        <Image className={styles.landingImage} src="/foodtruckbackground.jpg" alt="Background" objectFit="cover" objectPosition="center" width="429px" height='399px' />

        <p className={styles.description}>
          Please <Link href="/auth/login"><a><b>Sign In with Github</b></a></Link>
        </p>

        <p className={styles.description}>
          Here&apos;s some things you can do at Truck Travelers:
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Find!</h2>
            <p>Look up food trucks in your area and track where they go!</p>
          </a>

          <a className={styles.card}>
            <h2>Share!</h2>
            <p>Share your thoughts and photos with the truckie community!</p>
          </a>

          <a className={styles.card}>
            <h2>Review!</h2>
            <p>See what people are saying and write what <i>you</i> think!</p>
          </a>

          <a className={styles.card}>
            <h2>Promote!</h2>
            <p>
              <b>Owners</b> can share their truck location live so your customers always know
              where to find you next!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
