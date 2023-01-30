import React from "react";
import { Heading } from "@chakra-ui/react";

const Home = ({greeting}) => {
  return (
    <>
      <Heading textAlign={"center"}>{greeting}</Heading>
    </>
  );
};

export default Home;
