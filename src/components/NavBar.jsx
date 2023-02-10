import { Container, Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Container maxW="100%" bg="white.100" color="#fff">
        This is the Box
      </Container>
      <Container maxW="100%" bg="pink.100" color="#262626">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Link to="/">
            <Image
              borderRadius="full"
              boxSize="90px"
              src="https://images.vexels.com/media/users/3/145753/isolated/lists/cc87af32e3beef17b5e349cec667bda5-bolsa-de-dinero-de-captura.png"
              alt="Don Baratón"
            ></Image>
          </Link>
          <Heading mb={4} fontFamily="cursive">
            Don Baratón
          </Heading>
          <Spacer />
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/productos"
                >
                  Ofertas
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/Oferts1"
                >
                  Super Ofertas
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/Oferts2"
                >
                  Mega Ofertas
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Spacer />
          <Box p="2">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
