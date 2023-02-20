import React, { useState } from "react";

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
  Container,
  FormErrorMessage,
  Image,
  CardFooter,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";

const Buys = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const format = (val) => `$` + val;

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(40%, 1fr))"
        m="50px"
      >
        <Card>
          <CardBody>
            <Text fontSize="3xl">Información de contacto</Text>
            <FormControl isInvalid={isError}>
              <FormLabel>Correo Electornico</FormLabel>
              <Input
                type="email"
                placeholder="Jhon_Done@mail.com"
                value={input}
                onChange={handleInputChange}
              />
              <FormHelperText>Nunca compartiremos tu correo</FormHelperText>
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Divider />
              <Text fontSize="3xl">Detalles de pago</Text>
              <FormLabel>Numero de Tarjeta</FormLabel>
              <Input
                type="text"
                placeholder="4556-6665-8545-6525"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Flex minWidth="max-content" alignItems="center" gap="5">
                <Box p="2">
                  <FormLabel>Fecha de expiracion (MM/YY)</FormLabel>
                  <Input
                    type="dateTime"
                    placeholder="11/27"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box p="2">
                  <FormLabel>CVC</FormLabel>
                  <Input
                    type="text"
                    placeholder="111"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
              </Flex>
              <Divider />
              <Text fontSize="3xl">Dirección de entrega</Text>
              <FormLabel>Dirección</FormLabel>
              <Input
                type="text"
                placeholder="Tu dirección"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Flex minWidth="max-content" alignItems="center" gap="3">
                <Box p="2">
                  <FormLabel>Ciudad</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ciudad"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box p="2">
                  <FormLabel>Estado/Provincia</FormLabel>
                  <Input
                    type="text"
                    placeholder="Estado"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
                <Box p="2">
                  <FormLabel>Codigo Postal</FormLabel>
                  <Input
                    type="number"
                    placeholder="C.P."
                    value={input}
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </Box>
              </Flex>
              <Button colorScheme="teal" float="lef" m="auto">
                Pagar
              </Button>
            </FormControl>
          </CardBody>
        </Card>
        <Card bg="#3e4757">
          <CardBody>
            <Text color="white">Importe:</Text>
            <Text fontSize="3xl" color="white">
              {format(1500)}
            </Text>
            <Card direction={{ base: "column", sm: "row" }} bg="transparent">
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "100px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />
              <Stack>
                <CardBody>
                  <Heading size="md" color="white">
                    Nombre Producto
                  </Heading>
                  <Flex minWidth="max-content" alignItems="center" gap="120">
                    <Box p="2">
                      <Text py="2" color="white">
                        color y tamaño
                      </Text>
                    </Box>
                    <Spacer />
                    <Box p="2">
                      <Text py="2" color="white">
                        {format(500)}
                      </Text>
                    </Box>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="2">
                <Text py="2" color="white">
                  Subtotal
                </Text>
              </Box>
              <Spacer />
              <Box p="2">
                <Text py="2" color="white">
                  {format(500)}
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="2">
                <Text py="2" color="white">
                  Costo de Envio
                </Text>
              </Box>
              <Spacer />
              <Box p="2">
                <Text py="2" color="white">
                  {format(500)}
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="2">
                <Text py="2" color="white">
                  IVA
                </Text>
              </Box>
              <Spacer />
              <Box p="2">
                <Text py="2" color="white">
                  {format(500)}
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="2">
                <Text py="2" fontSize="3xl"  color="white">
                  Total
                </Text>
              </Box>
              <Spacer />
              <Box p="2">
                <Text py="2" fontSize="3xl"  color="white">
                  {format(500)}
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Buys;
