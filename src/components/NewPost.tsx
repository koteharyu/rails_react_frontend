import { Heading, FormControl, FormLabel, Input, Box, Button, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC, } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

export const NewPost: VFC = memo(() => {

  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")

  const history = useHistory()

  const createNewPost = () => {
    const data = { title: newPostTitle, content: newPostContent}
    axios.post('http://localhost:3001/posts', data)
    .then(res => {
      console.log(res.data)
      history.push("/")
    })
    .catch(e => console.error(e))
  }

  const handlePostTitle = (e: ChangeEvent<HTMLInputElement>) => setNewPostTitle(e.target.value)
  const handlePostContent = (e: ChangeEvent<HTMLInputElement>) => setNewPostContent(e.target.value)


  return (
    <>
      <Heading as="h1" color="teal" textAlign="center">NEW POST</Heading>
      <Box ml={6}>
        <Stack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="some content" value={newPostTitle} onChange={handlePostTitle} />
          </FormControl>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input type="text" placeholder="some content" value={newPostContent} onChange={handlePostContent} />
            <Button onClick={createNewPost}>Create</Button>
          </FormControl>
        </Stack>
      </Box>
    </>
  )
})
