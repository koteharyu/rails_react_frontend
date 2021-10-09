import { memo, useCallback, useEffect, useState, VFC } from "react";
import axios from 'axios'
import { PostCard } from "./PostCard";
import { Heading, Box, Wrap, WrapItem } from '@chakra-ui/react'

type Post = {
  id: number
  title: string
  content: string
  created_at: string
  image: {
    url: string
  }
}

export const AllPosts: VFC = memo(() => {

  const [posts, setPosts] = useState<Array<Post> | null>(null)

  const getAllPosts = useCallback(() => {
    axios.get('http://localhost:3001/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch((e) => console.error(e))
  },[])

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      <Box textAlign="center">
        <Heading color="gray.600">ALL POSTS</Heading>
      </Box>
      <Wrap p={{ base: 4, md: 10}}>
        {posts?.map((post) => (
          <WrapItem key={post.id}>
            <PostCard id={post.id} postTitle={post.title} postContent={post.content} postCreatedAt={post.created_at} imageUrl={post.image.url} getAllPosts={getAllPosts} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
