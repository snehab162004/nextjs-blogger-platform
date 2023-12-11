import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'

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

// HOOKS
import  {useGetBlogsByUserId} from '@/hooks/useGetBlogsByUserId'


export default function Home() {
   const {data: blogs, isFetching: isFetchingBlogs, isError } =  useGetBlogsByUserId( {
    variables :{
      userId: '123'
    }
   })


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
