import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Stack,
  Card,
  CardBody,
  Text,
  Heading,
  Flex,
  Box,
  Divider,
  Image,
  Spacer,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContex";

const ViewBuys = () => {
  const [cart, setCart] = useContext(CartContext);
  const format = (val) => `$` + val;

  const deleteId = cart.map((item) => {
    return item.id;
  });

  const valor = cart.map((x) => {
    return x.cost;
  });

  const cantidad = cart.map((x) => {
    return x.quantity;
  });

  let cantidadTotal = [];
  for (let i = 0; i < valor.length; i++) {
    const cant = valor[i] * cantidad[i];
    cantidadTotal.push(cant);
  }

  const importe = cantidadTotal.reduce((acu, curr) => acu + curr, 0);

  const iva = importe * 0.16;

  let envio = 0;
  if (importe <= 15000) {
    envio = 3000;
  } else if (importe > 15001 || importe < 25000) {
    envio = 7500;
  } else {
    envio = 10000;
  }

  const data = {
    importe: importe,
    iva: iva,
    envio: envio,
    cantTotal: importe + iva + envio,
  };

  return (
    <>
      <Text color="white">Importe:</Text>;
      {
        <Text fontSize="3xl" color="white">
          {format(
            importe.toLocaleString("es-Es", {
              style: "currency",
              currency: "mxn",
            })
          )}
        </Text>
      }
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <Stack direction="row" p={4}>
              <Card
                direction={{ base: "column", sm: "row" }}
                bg="none"
                w="100%"
                border="none"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "100px" }}
                  src={item.img}
                  alt={item.head}
                />
                <Stack>
                  <CardBody>
                    <Heading size="md" color="white">
                      {item.head}
                    </Heading>
                    <UnorderedList>
                      {item.resume.map((item, index) => (
                        <ListItem key={index} color="white">
                          {item}
                        </ListItem>
                      ))}
                    </UnorderedList>
                    <Text align="right" color="white">
                      Cantidad: {item.quantity}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Divider orientation="vertical" />
              <Card direction={{ base: "column", sm: "row" }} bg="transparent">
                <CardBody>
                  <Text m={5} fontSize="1.1em" color="white" align="center">
                    {format(
                      (item.cost * item.quantity).toLocaleString("es-Es", {
                        style: "currency",
                        currency: "mxn",
                      })
                    )}
                  </Text>
                  <Button
                    ml="4em"
                    size="xs"
                    colorScheme="red"
                    onClick={() => console.log("Eliminando")}
                  >
                    Quitar
                  </Button>
                </CardBody>
              </Card>
            </Stack>
          </div>
        );
      })}
      ;
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text py="2" color="white">
            Subtotal
          </Text>
        </Box>
        <Spacer />
        <Box p="2">
          <Text py="2" color="white">
            {format(
              importe.toLocaleString("es-Es", {
                style: "currency",
                currency: "mxn",
              })
            )}
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
            {format(
              envio.toLocaleString("es-Es", {
                style: "currency",
                currency: "mxn",
              })
            )}
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
            {format(
              iva.toLocaleString("es-Es", {
                style: "currency",
                currency: "mxn",
              })
            )}
          </Text>
        </Box>
      </Flex>
      <Divider />
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text py="2" fontSize="3xl" color="white">
            Total
          </Text>
        </Box>
        <Spacer />
        <Box p="2">
          <Text py="2" fontSize="3xl" color="white">
            {format(
              (importe + envio + iva).toLocaleString("es-Es", {
                style: "currency",
                currency: "mxn",
              })
            )}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ViewBuys;
