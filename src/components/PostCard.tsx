import { memo, VFC } from "react";
import { Box, Image, Badge } from '@chakra-ui/react'

type Props = {
  postTitle: string
  postContent: string
  postCreatedAt: string
}

export const PostCard: VFC<Props> = memo((props) => {

  const { postTitle, postContent, postCreatedAt } = props

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ opacity: ".6", cursor: "pointer"}}>
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
      </Box>
    </Box>
  )

})
