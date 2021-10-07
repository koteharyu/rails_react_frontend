import { memo, useEffect, useState, VFC } from "react";
import axios from 'axios'

type Post = {
  id: number
  title: string
  content: string
}

export const AllPosts: VFC = memo(() => {

const [posts, setPosts] = useState<Array<Post> | null>(null)

const getAllPosts = () => {
  axios.get('http://localhost:3001/posts')
    .then(res => {
      setPosts(res.data)
    })
    .catch((e) => console.error(e))
}

useEffect(() => {
  getAllPosts()
}, [posts])

  return (
    <>
      <p>Posts Index</p>
      {posts?.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
})
