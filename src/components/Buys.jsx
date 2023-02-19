import React from "react";

import {
  Stack,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Center,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  Portal,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio,
  RadioGroup,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";

const Buys = () => {
  return (
    <>
      {/* <Center>
        <Flex minWidth="max-content" gap="2">
          <Box p="2" marginTop={50} marginEnd={5}>
            <Popover>
              <PopoverTrigger>
                <Button leftIcon={<ArrowBackIcon />}></Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody></PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <ButtonGroup size="sm">
                      <Link to="/productos">
                        <Button colorScheme="blue">Button</Button>
                      </Link>
                      <Link to="/">
                        <Button colorScheme="blue">Button</Button>
                      </Link>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>

          <Box p="2" marginTop={50}>
            <Stack spacing="4">
              <Card size="lg">
                <CardBody>
                  <Accordion>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            1. Seleccione dirección de envio
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <FormControl>
                          <RadioGroup defaultValue="1">
                            <Stack>
                              <Radio value="1" colorScheme="green">
                                Radio
                              </Radio>
                              <Radio value="2" colorScheme="green">
                                Radio
                              </Radio>
                              <Radio value="3" colorScheme="green">
                                Radio
                              </Radio>
                              <Link to="/address">
                                <Text color="#00b4d8" fontSize="sm">
                                  <AddIcon
                                    boxSize={3}
                                    color="#00b4d8"
                                    marginEnd={2}
                                  />
                                  Agregar Dirección
                                </Text>
                              </Link>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            2. Seleciona un método de pago
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <FormControl>
                          <RadioGroup defaultValue="1">
                            <Stack>
                              <Radio value="1" colorScheme="green">
                                Radio
                              </Radio>
                              <Radio value="2" colorScheme="green">
                                Radio
                              </Radio>
                              <Radio value="3" colorScheme="green">
                                Radio
                              </Radio>
                              <Link to="/address">
                                <Text color="#00b4d8" fontSize="sm">
                                  <AddIcon
                                    boxSize={3}
                                    color="#00b4d8"
                                    marginEnd={2}
                                  />
                                  Agregar Tarjeta de Credito o Debito
                                </Text>
                              </Link>
                            </Stack>
                            <Divider />
                            <h2>Otros métodos de pago</h2>
                            <Link to="/otherPay">
                              <Text color="#00b4d8" fontSize="sm">
                                <AddIcon
                                  boxSize={3}
                                  color="#00b4d8"
                                  marginEnd={2}
                                />
                                Agregar nuevo vale de despensa
                              </Text>
                            </Link>
                          </RadioGroup>
                        </FormControl>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            3. Revisar artículos y envío
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="4">
                          {["sm", "sm", "sm"].map((size) => (
                            <Card key={size} size={size}>
                              <CardHeader>
                                <Heading size="sm"> {size}</Heading>
                              </CardHeader>
                              <CardBody>
                                <Text>size = {size}</Text>
                              </CardBody>
                            </Card>
                          ))}
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </CardBody>
              </Card>
            </Stack>
          </Box>

          <Box p="2" marginTop={50}>
            <Stack spacing="4">
              <Card size="sm">
                <CardHeader>
                  <Heading size="md"> sm</Heading>
                </CardHeader>
                <CardBody>
                  <Text>size = sm</Text>
                </CardBody>
              </Card>
            </Stack>
          </Box>
        </Flex>
      </Center> */}
      <Center>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card >
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
          <Card >
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Buys;
