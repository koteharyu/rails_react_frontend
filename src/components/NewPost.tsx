import { Heading, FormControl, FormLabel, Input, Box, Button, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, memo, useState, VFC, } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

export const NewPost: VFC = memo(() => {

  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [image, setImage] = useState<File>()

  const history = useHistory()

  const handlePostTitle = (e: ChangeEvent<HTMLInputElement>) => setNewPostTitle(e.target.value)
  const handlePostContent = (e: ChangeEvent<HTMLInputElement>) => setNewPostContent(e.target.value)
  const selectImage = (e: any) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('post[title]', newPostTitle)
    formData.append('post[content]', newPostContent)
    formData.append('post[image]', image)
    return formData
  }

  const sendFormData = async () => {
    const url = 'http://localhost:3001/posts'
    const data = await createFormData()
    console.log(data)
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      history.push('/')
    })
    .catch(e => {
      console.error(e)
    })
  }


  return (
    <>
      <Heading as="h1" color="teal" textAlign="center">NEW POST</Heading>
      <Box ml={6}>
        <Stack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="some content" value={newPostTitle} onChange={handlePostTitle} />
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Input type="text" placeholder="some content" value={newPostContent} onChange={handlePostContent} />
          </FormControl>
          <FormControl>
            <FormLabel>File</FormLabel>
            <Input type="file" onChange={(e) => selectImage(e)} />
            <Button onClick={sendFormData} bg="teal" color="white" mt={5}>Create</Button>
          </FormControl>
        </Stack>
      </Box>
    </>
  )
})
