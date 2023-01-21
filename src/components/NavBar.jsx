import { Container, Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const NavBar = ({ nav }) => {
  const items = "../components/ItemListContainer";
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading mb={4}>Don Baratón</Heading>
          </Box>
          <Spacer />
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {nav ? (href = "#") : (href = { items })}Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Docs</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
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
