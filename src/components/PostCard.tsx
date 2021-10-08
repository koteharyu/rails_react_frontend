import { memo, useState, VFC } from "react";
import { Box, Image, Badge, Button, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

type Props = {
  postTitle: string
  postContent: string
  postCreatedAt: string
  id: number
  getAllPosts: () => void
}

type Post = {
  id: number
  title: string
  content: string
  create_at: string
  updated_at: string
}

export const PostCard: VFC<Props> = memo((props) => {

  const { postTitle, postContent, postCreatedAt, id, getAllPosts } = props

  const history = useHistory()

  const [posts, setPosts] = useState<Post[] | null>(null)

  const editPost = () => {
    alert("edit post")
  }

  const deletePost = (id: number) => {
    const sure = window.confirm("are you sure?")
    if (sure) {
      axios.delete(`http://localhost:3001/posts/${id}`)
      .then( res => {
        getAllPosts()
      })
      .catch(e => console.error(e))
    }
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="https://bit.ly/2Z4KKcF" alt="dummt image" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {postTitle}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {postCreatedAt}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {postContent}
        </Box>

        <Flex justifyContent="center">
          <Box mr={6}>
            <Button onClick={editPost} bg="teal" color="white">Edit</Button>
          </Box>
          <Box>
            <Button onClick={() => deletePost(id)} bg="red" color="white">Delete</Button>
          </Box>
        </Flex>

      </Box>
    </Box>
  )

})
