import { Container, Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading mb={4}>
              <Link to="/">Don Baratón</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Principal</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/ItemListContainer">
                  Ofertas
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/Oferts1">Super Ofertas</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/Oferts2">Mega Ofertas</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Spacer />
          <Box>
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
