import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Flex,
  Box,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Counter from "./counter";

const ItemListContainer= () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const foto1 =
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  const foto2 =
    "https://tumueble.com.mx/wp-content/uploads/2021/07/muebles-para-oficina.jpg";
  const foto3 =
    "https://media.istockphoto.com/id/1329937916/es/foto/interior-del-comedor-dom%C3%A9stico-escandinavo.jpg?b=1&s=170667a&w=0&k=20&c=O4uAYX7vxXniFKjtFg5r_qNZ99YqoA2qJqSflQvq65I=";
  return (
    <>
      <Heading textAlign={"center"}>Ofertas</Heading>
      <Flex>
        <Spacer />
        <Box p="4">
          <Card maxW="sm">
            <CardBody>
              <Image
                src={foto1}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Sofa para Sala</Heading>
                <Text textAlign={["justify"]}>
                  Logra un ambiente elegante y relajado con el sofá Dovve, una
                  pieza atemporal que combina con cualquier tendencia, está
                  fabricado en madera de pino y tapizado en tela microfibra en
                  color gris oxford. Decora como siempre has deseado.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $1,500
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={(onOpen)}
                  key="b1"
                >
                  Comprar Ahora
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Agregar al Carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box p="4">
          <Card maxW="sm">
            <CardBody>
              <Image
                src={foto2}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Escritorio</Heading>
                <Text textAlign={["justify"]}>
                  Escritorio ideal para el hogar o la oficina hecho de melanina
                  de alta calidad, con diseño moderno y elegante, es perfecto
                  para claptop o computadora de escritotio, asi como componentes
                  para acomodo de papeleria varia, con gran espacio.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $1,250
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Comprar Ahora
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Agregar al Carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box p="4">
          <Card maxW="sm">
            <CardBody>
              <Image
                src={foto3}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Comedor</Heading>
                <Text textAlign={["justify"]}>
                  Este comedor de estilo contemporáneo, está fabricado con
                  cubierta de madera industrial y acabado fino, ideal para una
                  familia de seis personas con asientos tapizados en vinil, muy
                  bien acojinados con hule espuma, va perfecto con la decoración
                  moderna de tu hogar.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $4,500
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Comprar Ahora
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Agregar al Carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Spacer />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Counter foto={foto1}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ItemListContainer;
