import { memo, VFC } from "react";
import { Box, Image, Badge, Button, Flex, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { EditPostModal } from "./EditPostModal";

type Props = {
  postTitle: string
  postContent: string
  postCreatedAt: string
  id: number
  imageUrl: string
  getAllPosts: () => void
}

export const PostCard: VFC<Props> = memo((props) => {

  const { postTitle, postContent, postCreatedAt, id, imageUrl, getAllPosts } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  const editPost = () => onOpen()

  const deletePost = (id: number) => {
    const sure = window.confirm("are you sure?")
    if (sure) {
      axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        getAllPosts()
      })
      .catch(e => console.error(e))
    }
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image style={{ width: "100%", height: "160px"}} src={imageUrl} alt="dummt image" />

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
            <EditPostModal isOpen={isOpen} onClose={onClose} postTitle={postTitle} postContent={postContent} postCreatedAt={postCreatedAt} id={id} getAllPosts={getAllPosts} imageUrl={imageUrl} />
          </Box>
          <Box>
            <Button onClick={() => deletePost(id)} bg="red" color="white">Delete</Button>
          </Box>
        </Flex>

      </Box>
    </Box>
  )

})
