import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { useSWR } from 'swr'
import React from 'react'
import PostListItem from '../components/PostListItem'
// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const data = await (fetch('https://jsonplaceholder.typicode.com/posts'))
      const posts = await data.json()
      setPosts(posts)
    }
    fetchData();


  }, [])

  if (!posts || posts.length == 0) return <div>loading...</div>
  return (
    <>
      {posts.map((post) =>
        <PostListItem title={post.title} body={post.body} userId={post.userId} id={post.id} key={post.id} />
      )
      }
    </>
  )
}
