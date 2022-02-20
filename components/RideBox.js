import { Flex, Text, Box, Image, VStack, HStack} from "@chakra-ui/react";
import {user} from "./data";
import { format } from "date-fns";



const RideBox = ({props}) => {
    const { id, origin_station_code, station_path, date, map_url, state, city } =  {...props}

    const newdate = new Date(date*1000);
    var possible_path = []

    for (var i=0; i < station_path.length; i++) {
        if(station_path[i] >= user.station_code)[
            possible_path.push(station_path[i])
        ]
    }

    return (
        <Flex py="22px" h="198px" w="100%" px="2%" mx="auto" borderRadius="10px" bgColor="primary" justifyContent="space-between">
            <Flex >
            <Box>
                <Image h="148px" w="296px" src={map_url} />
            </Box>

            <VStack spacing="8px" direction="column" ml="44px" alignItems="flex-start">
                <Text color="white">Ride Id: <Text as={"span"} fontWeight="700">{id}</Text></Text>
                <Text color="white">Origin Station: <Text as={"span"} fontWeight="700">{origin_station_code}</Text></Text>
                <Text color="white">station_path: <Text as={"span"} fontWeight="700">[{station_path.toString()}]</Text></Text>
                <Text color="white">Date: <Text as={"span"} fontWeight="700">{format(newdate, 'do MMM y k:m')}</Text></Text>
                <Text color="white">Distance: <Text as={"span"} fontWeight="700">{possible_path[0] - user.station_code}</Text></Text>

            </VStack>
            </Flex>
            <HStack alignItems="flex-start" spacing="24px">
            <Box bgColor="black" py="4px" px="10px" borderRadius="16px"><Text color="white">{city}</Text></Box>
                <Box bgColor="black" py="4px" px="10px" borderRadius="16px"><Text color="white">{state}</Text></Box>
            </HStack>
        </Flex>
    )
}

export default RideBox