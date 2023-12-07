import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUser } from '@clerk/nextjs'

// COMPONENTS
import Navbar from '@/components/layout/Navbar'
import Card from '@/components/blog/Card'

//STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import styles from '@/styles/Home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={UtilityStyles.container}>
        <h1 className={UtilityStyles.header}>Recent Blogs</h1>
        <div className={styles.blogcards_deck}>
          <Card/>
          <Card/>
          <Card/>

        </div>


      </main>
    </>
  )
}
