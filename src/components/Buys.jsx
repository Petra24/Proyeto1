import {
  Card,
  CardBody,
  SimpleGrid,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  FormErrorMessage,
  VStack,
  Select,
  Heading,
  Flex,
  Box,
  Image,
  Spacer,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContex";
import { useContext, useState } from "react";

const Buys = () => {
  const [cart, setCart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const ordersCollection = collection(db, "orden");
  //formulario
  const formatCardNumber = (cardNumber) => {
    // amex format 4 6 5 digitos
    return cardNumber.replace(/ /g, "").match(/\b(\d{4})(\d{6})(\d{5})\b/)
      ? (cardNumber = cardNumber
          .replace(/\W/gi, "")
          .replace(/\b(\d{4})(\d{6})(\d{5})\b/, "$1 $2 $3")
          .trim())
      : // visa, master format
        (cardNumber = cardNumber
          .replace(/\W/gi, "")
          .replace(/(.{4})/g, "$1 ")
          .trim());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      tarjeta: "",
      fecha: "",
      cvv: "",
      domicilio: "",
      ciudad: "",
      estado: "",
      cp: "",
    },
    validate: (valores) => {
      let errores = {};
      if (!valores.email) {
        errores.email = "Ingrese correo";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email)) {
        errores.email = "No es un coreo válido";
      }

      if (!valores.tarjeta) {
        errores.tarjeta = "Ingrese un número de tarjeta";
      }

      if (!valores.fecha) {
        errores.fecha = "Ingrese una fecha de expiración";
      }

      if (!valores.cvv) {
        errores.cvv = "Ingrese un cvv";
      } else if (!/^[0-9]*$/.test(valores.cvv)) {
        errores.cvv = "No se permiten letras";
      }

      if (!valores.domicilio) {
        errores.domicilio = "Ingrese un domicilio";
      }

      if (!valores.ciudad) {
        errores.ciudad = "Ingrese una ciudad";
      }

      if (!valores.estado) {
        errores.estado = "Ingrese un estado";
      }

      if (!valores.cp) {
        errores.cp = "Ingrese un codigo postal";
      }

      return errores;
    },
    onSubmit: (buyer, cart, setSubmitting) => {
      const order = {
        buyer,
        items: [
          { ...cart },
          (importe = importe),
          (iva = iva),
          (envio = envio),
          (cantTotal = importe + iva + envio),
        ],
      };
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      setSubmitting(false);
    },
  });

  const handleCreditCardNumberChange = (event, setFieldValue) => {
    const value = event.target.value;
    let formattedValue = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (formattedValue.length > 0) {
      formattedValue = formattedValue
        .match(new RegExp(".{1,4}", "g"))
        .join(" ");
    }
    setFieldValue("creditCardNumber", formattedValue);
  };

  /* const handleDateExpiry = (event, setFieldValue) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 4);
    const cleadedValue = value.replace(/(\d{2})(\d{2})/, "$1/$2");
    setFieldValue("expirationDate", cleadedValue);
  }; */

  //productos
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

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(40%, 1fr))"
        m="50px"
      >
        <Card>
          <CardBody>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <Text fontSize="3xl">Información de contacto</Text> <Divider />
                <FormControl
                  isInvalid={!!formik.errors.email && formik.touched.email}
                >
                  <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                  <Input
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Jhon_Done@mail.com"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <Text fontSize="3xl">Detalles de pago</Text> <Divider />
                <FormControl
                  isInvalid={!!formik.errors.tarjeta && formik.touched.tarjeta}
                >
                  <FormLabel htmlFor="tarjeta">Numero de Tarjeta</FormLabel>
                  <Input
                    as={Input}
                    id="tarjeta"
                    name="tarjeta"
                    type="number"
                    variant="filled"
                    placeholder="1111-1111-1111-1111"
                    maxLength="19"
                    value={
                      !formik.values.tarjeta
                        ? ""
                        : formatCardNumber(String(formik.values.tarjeta))
                    }
                    onChange={handleCreditCardNumberChange}
                  />
                  <FormErrorMessage>{formik.errors.tarjeta}</FormErrorMessage>
                </FormControl>
                <Stack direction="row">
                  <FormControl
                    isInvalid={!!formik.errors.fecha && formik.touched.fecha}
                  >
                    <FormLabel htmlFor="fecha">
                      Fecha de expiracion (MM/YY)
                    </FormLabel>
                    <Input
                      as={Input}
                      id="fecha"
                      name="fecha"
                      type="text"
                      variant="filled"
                      placeholder="11/27"
                      width="18rem"
                      maxLength={5}
                      value={formik.values.fecha}
                      onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.fecha}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!formik.errors.cvv && formik.touched.cvv}
                  >
                    <FormLabel htmlFor="cvv">CVV</FormLabel>
                    <Input
                      as={Input}
                      id="cvv"
                      name="cvv"
                      type="password"
                      variant="filled"
                      placeholder="111"
                      width="18rem"
                      maxLength={3}
                      onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <Divider />
                <Text fontSize="3xl">Dirección de entrega</Text>
                <FormControl
                  isInvalid={
                    !!formik.errors.domicilio && formik.touched.domicilio
                  }
                >
                  <FormLabel htmlFor="domicilio">Domicilio</FormLabel>
                  <Input
                    as={Input}
                    id="domicilio"
                    name="domicilio"
                    type="text"
                    variant="filled"
                    placeholder="Domicilio Conocido"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.domicilio}</FormErrorMessage>
                </FormControl>
                <Stack direction="row">
                  <FormControl
                    isInvalid={!!formik.errors.ciudad && formik.touched.ciudad}
                  >
                    <FormLabel htmlFor="ciudad">Ciudad</FormLabel>
                    <Input
                      as={Select}
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      variant="filled"
                      placeholder="Seleccione Ciudad"
                      width="11.88rem"
                      onChange={formik.handleChange}
                    >
                      <option value="Pekín">Pekín</option>
                      <option value="Bogotá">Bogotá</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                    </Input>
                    <FormErrorMessage>{formik.errors.ciudad}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!formik.errors.estado && formik.touched.estado}
                  >
                    <FormLabel htmlFor="estado">Estado</FormLabel>
                    <Input
                      as={Select}
                      id="estado"
                      name="estado"
                      type="text"
                      variant="filled"
                      placeholder="Seleccione Estado"
                      width="11.88rem"
                      onChange={formik.handleChange}
                    >
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="México">México</option>
                    </Input>
                    <FormErrorMessage>{formik.errors.estado}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!formik.errors.cp && formik.touched.cp}
                  >
                    <FormLabel htmlFor="cp">C.P.</FormLabel>
                    <Input
                      as={Select}
                      id="cp"
                      name="cp"
                      type="text"
                      variant="filled"
                      placeholder="Seleccione C.P."
                      width="11.88rem"
                      onChange={formik.handleChange}
                    >
                      <option value="123">123</option>
                      <option value="456">456</option>
                      <option value="789">789</option>
                    </Input>
                    <FormErrorMessage>{formik.errors.cp}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <Button
                  type="submit"
                  colorScheme="teal"
                  disabled={formik.isSubmitting}
                >
                  Pagar
                </Button>
              </VStack>
            </form>
          </CardBody>
        </Card>
        <Card bg="#3e4757">
          <CardBody>
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
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      bg="transparent"
                    >
                      <CardBody>
                        <Text
                          m={5}
                          fontSize="1.1em"
                          color="white"
                          align="center"
                        >
                          {format(
                            (item.cost * item.quantity).toLocaleString(
                              "es-Es",
                              {
                                style: "currency",
                                currency: "mxn",
                              }
                            )
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
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Buys;
