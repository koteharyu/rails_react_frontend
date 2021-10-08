import { Flex, Heading, Box, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useHistory } from 'react-router-dom'

export const Header: VFC = memo(() => {

  const history = useHistory()
  const goToTop = () => history.push("/")
  const goToPostsIndex = () => history.push("/")
  const goToPostsNew = () => history.push("/posts/new")

  return (
    <>
      <Flex bg="cyan.300" justify="space-between" alignItems="center" p={4}>
        <Flex as="a">
          <Heading as="h1" onClick={goToTop} _hover={{ cursor: "pointer " }} >BASIC CRUD</Heading>
        </Flex>
        <Flex>
          <Box mr={7}>
            <Link _hover={{ cursor: "pointer "}} onClick={goToPostsIndex}>All Posts</Link>
          </Box>
          <Box mx={10}>
            <Link _hover={{ cursor: "pointer " }} onClick={goToPostsNew}>New Post</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  )
  })
