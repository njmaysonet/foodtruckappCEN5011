import styles from "./unauthenticated.module.css"
import { signIn } from "next-auth/react"

export default function Unauthenticated () {
    return (
        <div className={styles.main}>
            <p>You are not signed in.</p>
            <p> Please sign in with Github </p>
            <button onClick={() => signIn()}>Sign in with Github</button>
        </div>
    )
}