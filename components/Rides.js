import React, {useState, useEffect} from "react";
import { 
    Box,
    TabList, 
    TabPanels, 
    TabPanel, 
    Flex, 
    Button, 
    HStack,
    VStack,
    Text,
    Select,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, } from '@chakra-ui/react'
import { FilterIcon } from './icons';
import RideBox from './RideBox';
import { MdArrowDropDown } from "react-icons/md";
import { user } from "./data";
const Tabs = ({setCurrentTab, currentTab,  children}) => {
    return (
    <Text onClick={() => setCurrentTab(children.id)}
        cursor="pointer"
        color="white"
        fontWeight={currentTab === children.id ? "700" : "normal"}
        borderBottomColor="white"
        borderBottomWidth={currentTab === children.id ? "2px" : "none"}
    >{children.name}</Text>)
}

const Rides = ({usersRides}) => {
    const [currentTab, setCurrentTab] = useState(0)
    const [upcoming, setUpcoming] = useState(0)
    const [past, setPast] = useState(0)
    const [states, setStates] = useState(null)
    const [cities, setCities] = useState(null);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [filteredRides, setFilteredRides] = useState([]);


    const tabs = [
        {
            id : 0,
            name: "Nearest rides"
        },
        {
            id : 1,
            name: `${upcoming >= 1 ? `Upcoming rides (${upcoming})` : `Upcoming rides`}`
        },
        {
            id : 2,
            name:  `${past >= 1 ? `Past rides (${past})` : `Past rides`}`
        }
    ]


    useEffect(() => {
        var cities = []
        if (selectedState) {
        for (var i=0; i < usersRides.length; i++) {
            if (usersRides[i].state === selectedState) {
                if(cities.includes(usersRides[i].city) === false) {
                    cities.push(usersRides[i].city)
                }
            }
        }

        }
        else {
            for (var i=0; i < usersRides.length; i++) {
                if(cities.includes(usersRides[i].city) === false) {
                    cities.push(usersRides[i].city)
                }
            }
        }
        setSelectedCity('')
        setCities(cities)

    }, [selectedState])


    useEffect(() => {
        var past = 0
        var upcoming = 0
        var states = []
        var cities = []

        //This function sets past and upcoming ride data. and also states and city.
        for (var i=0; i < usersRides.length; i++) {
            var rideDate = new Date(usersRides[i].date*1000)
            var currentDate = Date.now()
            if (rideDate < currentDate) {
                past = past + 1
            }
            else {
                upcoming = upcoming + 1;
            }
            if(states.includes(usersRides[i].state) === false) {
                states.push(usersRides[i].state)
            }
            if(cities.includes(usersRides[i].city) === false) {
                cities.push(usersRides[i].city)
            }

        }
        setPast(past);
        setUpcoming(upcoming);
        setStates(states);
        setCities(cities)

    }, [])

    useEffect(() => {
        var rides = [] 

        if (currentTab === 0) {
            //This filters nearest rides


            var all_station_paths = [];
            for (var i=0; i < usersRides.length; i++ ) {
                //This loops through all station path in the userRides, filters the path above the user's
                //Station code, sorts it and save the values to all_station_paths without duplicate
                var filteredValue = usersRides[i].station_path.filter(path => path >= user.station_code)
                for (var l=0; l < filteredValue.length; l++) {
                    if (!all_station_paths.includes(filteredValue[l])) {
                        all_station_paths.push(filteredValue[l])
                    }
                }
            }
            all_station_paths = all_station_paths.sort()

            for (var p=0; p < all_station_paths.length; p++) {
                //This loops through all the stations path above the user's station code and get's
                // the nearest rides.
                for (var n=0; n < usersRides.length; n++) {
                    if (usersRides[n].station_path.includes(all_station_paths[p])) {
                        if (!rides.includes(usersRides[n])) {
                            rides.push(usersRides[n]);
                        }
                    }
                }
            }

        }
        else if (currentTab === 1) {
            //This filters upcoming rides
            var currentDate = Date.now()
            rides = usersRides.filter(rides => 
                {
                    var rideDate = new Date(rides.date * 1000)
                    return rideDate > currentDate;
                })
        }
        else if (currentTab === 2) {
            //This filters past rides
            var currentDate = Date.now()
            rides = usersRides.filter(rides => 
                {
                    var rideDate = new Date(rides.date * 1000)
                    return rideDate < currentDate;
                })
        }


        if (selectedCity) {
            // This filters the ride if a city has been selected
            rides = rides.filter(ride => ride.city === selectedCity)
            setFilteredRides(rides)

        }
        else if (selectedState) {
            // This filters the ride if a state has been selected
            rides = rides.filter(ride => ride.state === selectedState)
            setFilteredRides(rides)
        }
        else {
            setFilteredRides(rides)
        }

    }, [currentTab, selectedState, selectedCity ])

    return (
        <Box mt="40px" w="90%" mx="auto">
        <Flex justifyContent="space-between" alignContent="center">
        <HStack spacing="40px">{tabs.map((tab) => 
        <Tabs key={tab.id} currentTab={currentTab} setCurrentTab={setCurrentTab}>{tab}</Tabs>)}</HStack>


        <Popover placement='bottom'   >
        <PopoverTrigger>
        <Button _focus={{border: "none"}} leftIcon={<FilterIcon />} color="white" variant='none'>
    Filter
  </Button>
        </PopoverTrigger>
        <PopoverContent bgColor="#101010" w="228px" mx="20px"  _focus={{border: "none"}} px="5%" py="23px">
            <PopoverHeader  fontWeight='semibold' mb="5px" color="white">Filters</PopoverHeader>
            <PopoverBody>
            <Select _focus={{border: "none"}} border="none" icon={<MdArrowDropDown />} bgColor="secondary" color="white" placeholder='State' value={selectedState && selectedState} onChange={e => setSelectedState(e.target.value)} mb="12px">
            {states && states.map((state, index) => <option value={state} key={index} style={{color: "white", backgroundColor: "#232323"}}>{state}</option>)}
            </Select>
            <Select _focus={{border: "none"}} border="none" icon={<MdArrowDropDown />} bgColor="secondary" value={selectedCity && selectedCity} color="white" placeholder='City' onChange={e => setSelectedCity(e.target.value)}>
            {cities && cities.map((city, index) => <option value={city} key={index} style={{color: "white", backgroundColor: "#232323"}}>{city}</option>)}
            </Select>

            </PopoverBody>
        </PopoverContent>
        </Popover>
        </Flex>
        <VStack my="40px" spacing="13px">
            { filteredRides.length >= 1 ? filteredRides.map(ride => 
                <RideBox props={ride} key={ride.id}/>) :
                <Text color="white" mx="auto"> No Ride available at the moment</Text>
                }
        </VStack>
        </Box>
    )
}

export default Rides;