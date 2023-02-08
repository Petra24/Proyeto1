import React from "react";
import { Heading, Box, Image, Center } from "@chakra-ui/react";

const Home = ({ greeting }) => {
  return (
    <>
      {/* <Heading textAlign={"center"}>{greeting}</Heading> */}
      <Center>
        <Box boxSize="xx1" m={150}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LdhM4dH-1xl_z5adzkutJFXKEhGGZIeBqA&usqp=CAU"
            alt="Don Baratón" w="500px"
          />
        </Box>
      </Center>
    </>
  );
};

export default Home;
