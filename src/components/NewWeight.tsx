import { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Button, Heading, FormControl, Input, FormLabel, Divider} from '@chakra-ui/react'
import axios from "axios";
import { useHistory } from "react-router-dom";

export const NewWeight: VFC = memo(() => {

  const history = useHistory()

  const [weight, setWeight] = useState<any>()
  const onChangeWeight = (e: any) => setWeight(e.target.value)

  const createFormData = () => {
    const formData = new FormData()
    formData.append('body[weight]', weight)
    return formData
  }

  const submitWeight = () => {
    const data = createFormData()
    axios.post('http://localhost:3001/bodies', data)
    .then(() => history.push('/bodies'))
  }

  return (
    <Box>
      <Heading textAlign="center">Registe Your Weight</Heading>
      <Divider mt={10} />
      <Box width="50%" m="auto">
        <FormControl>
          <FormLabel>kg</FormLabel>
          <Input type="number" value={weight} onChange={onChangeWeight} />
          <Button onClick={submitWeight}>Submit</Button>
        </FormControl>
      </Box>
    </Box>
  )
})
