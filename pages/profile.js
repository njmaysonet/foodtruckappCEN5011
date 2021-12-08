import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import style from "../styles/Profile.module.css"
import { signOut } from "next-auth/react"
import Unauthenticated from "../components/unauthenticated"
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Profile() {
    const { data, error } = useSWR('/api/profile/profile', fetcher)

    if(error) return <div>failed to load</div>
    if(!data) return <div>loading...</div>
    return (
    <div className={style.container}>
        <Layout>
            <body>
                <Image className={style.profileImage} alt={data.name} src={data.image} width="200px" height="200px"/>
                <br />
                <p> Hello! <b>{data.name}</b> </p>
                <p> Your email is registered as: <b>{data.email}</b></p>
            </body>
            <br/>
            <div>
                <footer className={style.footer}>
                    <Link href="auth/login" passHref>
                        <button className={style.button}>Main Menu</button>
                    </Link>
                    <br />
                    <br />
                    <button className={style.button} onClick={() => signOut()}>Sign out</button>
                </footer>
            </div>
        </Layout> 
    </div>
    )
}