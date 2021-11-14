import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import PostListItem from '../components/PostListItem'
import { fetchPosts } from '../data/api'
import { useAppContext } from '../data/context'

export default function Home() {
  // const [posts, setPosts] = React.useState([])

  const {state,dispatch} = useAppContext()

  // React.useEffect(() => {
  //   const posts = fetchPosts();
  //   setPosts(posts)

  // }, [])

  if (!state.posts || state.posts.length == 0){
    // dispatch('init')
    return <div>loading...</div>
  } 
  return (
    <div className="grid place-items-center p-32 bg-gray-300 min-h-screen">
      <div className="max-w-xl grid bg-gray-200 p-8 rounded-lg gap-4"> 
      {state.posts && state.posts.map((post) =>
        <PostListItem title={post.title} body={post.body} userId={post.userId} id={post.id} key={post.id} />
        )
      }
      </div>
    </div>
  )
}
