import Header from "@/components/Header"
import Rides from "@/components/Rides"
import { Box } from "@chakra-ui/react"
import {usersRides} from "@/components/data"

export default function Home({usersRides}) {
  return (
    <Box minH="100vh" >
      <Header />
      <Rides usersRides={usersRides}/>
    </Box>
  )
}


export async function getStaticProps() {
  return {
    props: {
      usersRides
    }
  }
}