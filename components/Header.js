import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { user } from "./data"

const Header = () => {
    return (
        <Flex bgColor="#101010" px="43px" py="20px" justifyContent="space-between">
            <Image src="./images/logo.png"/>
            <Flex alignItems="center">
                <Text fontWeight="700" pr="25px" color="white">{user.name}</Text>
                <Box w="44px" h="44px">
                    <Image src={user.profile_key} />
                </Box>
            </Flex>

        </Flex>
    )
}

export default Header;