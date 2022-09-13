import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/SignUp";

export const Homepage = () => {
    // const history = useHistory();

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("userInfo"));

    //     if (user) history.push("/chats");
    // }, [history]);

    return (
        <Container maxW="md" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={1}
                bg="white"
                w="100%"
                m="15px 0 10px 0"
                borderWidth="1px"
            >
                <Text fontSize="2xl" fontFamily="Work sans" textAlign={"center"}>
                    Chatify
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderWidth="1px">
                <Tabs isFitted variant='enclosed' colorScheme="teal">
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default Homepage;