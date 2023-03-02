import React, { useState, useContext } from "react";
import {
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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContex";

const Form = () => {
  const [cart, setCart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const ordersCollection = collection(db, "orden");
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
    onSubmit: (buyer, setSubmitting) => {
      const order = {
        buyer,
        items: [
          {
            id: "",
            nombre: "",
            color: "",
            tamaño: "",
            precio: "",
          },
        ],
        total: "",
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

  const handleDateExpiry = (event, setFieldValue) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 4);
    const cleadedValue = value.replace(/(\d{2})(\d{2})/, "$1/$2");
    setFieldValue("expirationDate", cleadedValue);
  };

  return (
    <>
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
              type="text"
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
              <FormLabel htmlFor="fecha">Fecha de expiracion (MM/YY)</FormLabel>
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
            <FormControl isInvalid={!!formik.errors.cvv && formik.touched.cvv}>
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
            isInvalid={!!formik.errors.domicilio && formik.touched.domicilio}
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
            <FormControl isInvalid={!!formik.errors.cp && formik.touched.cp}>
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
    </>
  );
};

export default Form;
