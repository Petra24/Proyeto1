import React from "react";
import {
  Container,
  Image,
  Box,
  Heading,
  Highlight,
  Flex,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <Image src={logo} display="block" margin="auto" w="50%" h="60%"/>
    </>
  );
};

export default Home;
