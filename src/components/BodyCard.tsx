import { memo, VFC } from "react";
import {Box,} from '@chakra-ui/react'

type Props = {
  weight: number
  createdAt: string
}

export const BodyCard: VFC<Props> = memo((props) => {

  const { weight, createdAt } = props
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          {weight}
        </Box>
        <Box display="flex" alignItems="baseline">
          {createdAt}
        </Box>
      </Box>
    </Box>
  )
})
