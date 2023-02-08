import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Container,
  SimpleGrid,
  CardHeader,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../others/data";

const ItemListContainer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [value, setValue] = useState(0);

  const category = ["Todas", "Comedor", "Oficina", "Sala", "Cocina"][value];
  const categories = ["Todas", "Comedor", "Oficina", "Sala", "Cocina"];
  console.log();

  return (
    <>
      <Flex m={50}>
        <Container maxW="xlg">
          <Tabs
            onChange={(val) => setValue(val)}
            align="end"
            variant="enclosed"
          >
            <TabList>
              {categories.map((cat, ind) => (
                <NavLink to={`/Categoria/${cat}`}>
                  <Tab
                    _selected={{ color: "white", bg: "blue.500" }}
                    key={{ ind }}
                  >
                    {cat}
                  </Tab>
                </NavLink>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  spacing={3}
                  templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
                >
                  {data.map((item) => {
                    return (
                      <Card
                        m={3}
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        maxW="400px"
                        key={item.id}
                      >
                        <Image
                          objectFit="cover"
                          maxW={{ base: "90%", sm: "200px" }}
                          src={item.img}
                          alt="Comedor de Madera"
                        />

                        <Stack>
                          <CardBody>
                            <Heading size="md">{item.head}</Heading>

                            <Text as="i" fontSize="md" color="red" py="2">
                              Stock: {item.stock}
                            </Text>
                          </CardBody>

                          <CardFooter>
                            <NavLink to={`/ItemDetailContainer/${item.id}`}>
                              <Button
                                variant="solid"
                                colorScheme="blue"
                                onClick={onToggle}
                              >
                                Detalles
                              </Button>
                            </NavLink>
                          </CardFooter>
                        </Stack>
                      </Card>
                    );
                  })}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {data
                    .filter((x) => x.category === category)
                    .map((item) => {
                      return (
                        <Card
                          m={3}
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                          maxW="400px"
                          key={item.id}
                        >
                          <Image
                            objectFit="cover"
                            maxW={{ base: "90%", sm: "200px" }}
                            src={item.img}
                            alt="Comedor de Madera"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">{item.head}</Heading>

                              <Text as="i" fontSize="md" color="red" py="2">
                                Stock: {item.stock}
                              </Text>
                            </CardBody>

                            <CardFooter>
                              <NavLink to={`/ItemDetailContainer/${item.id}`}>
                                <Button
                                  variant="solid"
                                  colorScheme="blue"
                                  onClick={onToggle}
                                >
                                  Detalles
                                </Button>
                              </NavLink>
                            </CardFooter>
                          </Stack>
                        </Card>
                      );
                    })}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {data
                    .filter((x) => x.category === category)
                    .map((item) => {
                      return (
                        <Card
                          m={3}
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                          maxW="400px"
                          key={item.id}
                        >
                          <Image
                            objectFit="cover"
                            maxW={{ base: "90%", sm: "200px" }}
                            src={item.img}
                            alt="Comedor de Madera"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">{item.head}</Heading>

                              <Text as="i" fontSize="md" color="red" py="2">
                                Stock: {item.stock}
                              </Text>
                            </CardBody>

                            <CardFooter>
                              <NavLink to={`/ItemDetailContainer/${item.id}`}>
                                <Button
                                  variant="solid"
                                  colorScheme="blue"
                                  onClick={onToggle}
                                >
                                  Detalles
                                </Button>
                              </NavLink>
                            </CardFooter>
                          </Stack>
                        </Card>
                      );
                    })}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {data
                    .filter((x) => x.category === category)
                    .map((item) => {
                      return (
                        <Card
                          m={3}
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                          maxW="400px"
                          key={item.id}
                        >
                          <Image
                            objectFit="cover"
                            maxW={{ base: "90%", sm: "200px" }}
                            src={item.img}
                            alt="Comedor de Madera"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">{item.head}</Heading>

                              <Text as="i" fontSize="md" color="red" py="2">
                                Stock: {item.stock}
                              </Text>
                            </CardBody>

                            <CardFooter>
                              <NavLink to={`/ItemDetailContainer/${item.id}`}>
                                <Button
                                  variant="solid"
                                  colorScheme="blue"
                                  onClick={onToggle}
                                >
                                  Detalles
                                </Button>
                              </NavLink>
                            </CardFooter>
                          </Stack>
                        </Card>
                      );
                    })}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {data
                    .filter((x) => x.category === category)
                    .map((item) => {
                      return (
                        <Card
                          m={3}
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                          maxW="400px"
                          key={item.id}
                        >
                          <Image
                            objectFit="cover"
                            maxW={{ base: "90%", sm: "200px" }}
                            src={item.img}
                            alt="Comedor de Madera"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">{item.head}</Heading>

                              <Text as="i" fontSize="md" color="red" py="2">
                                Stock: {item.stock}
                              </Text>
                            </CardBody>

                            <CardFooter>
                              <NavLink to={`/ItemDetailContainer/${item.id}`}>
                                <Button
                                  variant="solid"
                                  colorScheme="blue"
                                  onClick={onToggle}
                                >
                                  Detalles
                                </Button>
                              </NavLink>
                            </CardFooter>
                          </Stack>
                        </Card>
                      );
                    })}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </>
  );
};

export default ItemListContainer;
