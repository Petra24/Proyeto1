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
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  //useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
//import Modals from "../others/Modals"
import { NumericFormat } from "react-number-format";
import Item from "./Item";

const ItemListContainer = ({ match }) => {
  //const { isOpen, onToggle, onClose } = useDisclosure();
  const productos = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      head: "Sofa para Sala",
      desc: "Logra un ambiente elegante y relajado con el sofá Dovve, una pieza atemporal que combina con cualquier tendencia, está fabricado en madera de pino y tapizado en tela microfibra en color gris oxford. Decora como siempre has deseado.",
      stock: 50,
      cost: 1500,
    },
    {
      id: 2,
      img: "https://tumueble.com.mx/wp-content/uploads/2021/07/muebles-para-oficina.jpg",
      head: "Escritorio",
      desc: "Escritorio ideal para el hogar o la oficina hecho de melanina de alta calidad, con diseño moderno y elegante, es perfecto para claptop o computadora de escritotio, asi como componentes para acomodo de papeleria varia, con gran espacio.",
      stock: 30,
      cost: 1250,
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1329937916/es/foto/interior-del-comedor-dom%C3%A9stico-escandinavo.jpg?b=1&s=170667a&w=0&k=20&c=O4uAYX7vxXniFKjtFg5r_qNZ99YqoA2qJqSflQvq65I=",
      head: "Comedor",
      desc: "Este comedor de estilo contemporáneo, está fabricado con cubierta de madera industrial y acabado fino, ideal para una familia de seis personas con asientos tapizados en vinil, muy bien acojinados con hule espuma, va perfecto con la decoración moderna de tu hogar.",
      stock: 70,
      cost: 4500,
    },
  ];

  const producto = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("No hay productos");
    }
  });

  producto
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Heading textAlign={"center"}>Ofertas</Heading>
      <Flex>
        {productos.map((item) => {
          return (
            <Stack spacing={5} direction="row" key={item.id}>
              <Spacer />
              <Box p="3">
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={item.img}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.head}</Heading>
                      <Text textAlign={["justify"]}>{item.desc}</Text>
                      <NumericFormat
                        value={item.cost}
                        allowLeadingZeros
                        thousandSeparator=","
                        prefix={"$"}
                      />
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Link to='/ItemListContainer/Item'>
                        <Button variant="solid" colorScheme="blue">
                          {/* onClick={onToggle} */}
                          Comprar Ahora
                        </Button>
                      </Link>
                      <Button variant="ghost" colorScheme="blue">
                        Agregar al Carrito
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Box>
              <Spacer />
            </Stack>
          );
        })}
      </Flex>
      {/* <Modals isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export default ItemListContainer;
