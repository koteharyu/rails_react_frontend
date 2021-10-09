import { ChangeEvent, memo, useState, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react"
import axios from "axios";
import { useHistory } from "react-router-dom";

type Props = {
  isOpen: boolean
  onClose: () => void
  postTitle: string
  postContent: string
  postCreatedAt: string
  id: number
  getAllPosts: () => void
}

export const EditPostModal: VFC<Props> = memo((props) => {

  const { isOpen, onClose, postTitle, postContent, id, getAllPosts } = props

  const history = useHistory()

  const [newPostTitle, setNewPostTitle] = useState(postTitle)
  const [newPostContent, setNewPostContent] = useState(postContent)

  const handlePostTitle = (e: ChangeEvent<HTMLInputElement>) => setNewPostTitle(e.target.value)
  const handlePostContent = (e: ChangeEvent<HTMLInputElement>) => setNewPostContent(e.target.value)

  const createFormData = () => {
    const formData = new FormData()
    formData.append('post[title]', newPostTitle)
    formData.append('post[content]', newPostContent)
    return formData
  }

  const updatePost = () => {
    const data = createFormData()
    axios.patch(`http://localhost:3001/posts/${id}`, data)
    .then(() => {
      onClose()
      getAllPosts()
    })
    .catch((e) => console.error(e))
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post??</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>
                  Title
                </FormLabel>
                <Input value={newPostTitle} onChange={handlePostTitle} />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Content
                </FormLabel>
                <Input value={newPostContent} onChange={handlePostContent} />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={updatePost}>Update</Button>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
})
