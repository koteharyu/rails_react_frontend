import { memo, useEffect, useState, VFC } from "react";
// import { Line } from 'react-chartjs-2';
import axios from "axios";
import { Wrap, WrapItem  } from '@chakra-ui/react'
import { BodyCard } from "./BodyCard";

type Response = {
  bodies: {}
  weights: {}
  created_ats: {}
}

type Body = {
  id: number
  weight: number
  created_at: string
}

type Weight = {
  weight: number
}

type CreatedAt = {
  created_at: string
}

export const AllWeights: VFC = memo(() => {

  // const [response, setResponse] = useState<Response>()
  // const [lineData, setLineData] = useState({})
  const [bodies, setBodies] = useState<Array<Body> | null>(null)


  const getAllBodies = () => {
    axios.get('http://localhost:3001/bodies')
    .then((res) => {
      setBodies(res.data)
      // const response: Response = res.data
      // const weights = response.weights
      // const createtAd = response.created_ats
    })
    .catch((e) => console.error(e))
  }

  useEffect(() => {
    getAllBodies()
  },[])

  return (
    <>
      <Wrap mt={6}>
        {bodies?.map((body) => (
          <WrapItem key={body.id}>
            <BodyCard weight={body.weight} createdAt={body.created_at} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
