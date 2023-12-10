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

//Config
import { useEffect, useState } from 'react'
import { axiosInstance as axios } from '@/config/axios'

// TYPES
import type {Blog} from '@/types.d'
import BlogCard from '@/components/blog/Card'



export default function Home() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isFetchingBlogs, setisFetchingBlogs] = useState(false)
    const [isError, setError] = useState('')

    useEffect(() => {
      setisFetchingBlogs(true)
      console.log('master key: ', `${process.env.NEXT_PUBLIC_JSONBIN_MASTER_KEY}`)
      console.log('access key: ', `${process.env.NEXT_PUBLIC_JSONBIN_ACCESS_KEY}`)
      axios({
        method: 'GET',
        url: `/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`
      })
      .then((res) => {
        setBlogs(res.data?.record?.Blogs)
    })
    .catch((error) => {
      alert(error?.message || 'Something went wrong ')
    }) 
    .finally(() => {
      setisFetchingBlogs(false)
    })
  }, [])


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
          {isFetchingBlogs ? (
            <>Fetching the blogs</>
          ) : isError ? (
            <>Error: `No blogs available`</>
          ) : blogs && blogs.length > 0 ? (
            blogs.map((blog: Blog) => (
              <Card
                image={blog?.image}
                title={blog?.title}
                content={blog?.content}
                updatedAt={blog?.updatedAt}
                id={blog?.id}
                key={blog?.id}
              />
            ))
          ) : (
            <>No blogs available</>
          )}
        </div>

      </main>
    </>
  )
}
