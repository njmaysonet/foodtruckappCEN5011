import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Unauthenticated from '../../components/unauthenticated'
import styles from '../../styles/Login.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { data: session } = useSession()

    const handleClick = (e,path) => {
    }

    if (session) {
    return (
      <Layout>
        <div className={styles.main}>
            <p>You are signed in as <b>{session.user.email}</b></p> <br />
            <Link href="/profile" passHref>
                <button className={styles.button} onClick={() => handleClick()}>Go to Profile</button>
            </Link>
            <br />
            <Link href="/map" passHref>
              <button className={styles.button} onClick={() => handleClick()}>Truck Map</button>
            </Link>
            <br />
            <Link href="/truckowner" passHref>
              <button className={styles.button} onClick={() => handleClick()}>Owner Registration</button>
            </Link>
            <br />
            <button className={styles.button} onClick={() => signOut()}>Sign Out</button>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
        <div className={styles.main}>
            <p>You are not signed in.</p>
            <p> Please sign in with Github </p>
            <button className={styles.button} onClick={() => signIn()}>Sign in with Github</button>
        </div>
    </Layout>
  )
}