import React from "react";
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
import { Formik, Field } from "formik";

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          tarjeta: "",
          fecha: "",
          cvv: "",
          domicilio: "",
          ciudad: "",
          estado: "",
          cp: "",
        }}
        validate={(valores) => {
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
          } else if (
            !/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/.test(valores.fecha)
          ) {
            const añoActual = new Date().getFullYear();
            const [mes, año] = valores.fecha.split("/");
            if (mes < 1 || mes > 12 || año < añoActual || año > 50) {
              errores.fecha = "No es mes ó año correcto";
            }
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
        }}
        onSubmit={(actions) => {
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({
          values,
          setValues,
          errors,
          touched,
          handleSubmit,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <Text fontSize="3xl">Información de contacto</Text> <Divider />
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  placeholder="Jhon_Done@mail.com"
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <Text fontSize="3xl">Detalles de pago</Text> <Divider />
              <FormControl isInvalid={!!errors.tarjeta && touched.tarjeta}>
                <FormLabel htmlFor="tarjeta">Numero de Tarjeta</FormLabel>
                <Field
                  as={Input}
                  id="tarjeta"
                  name="tarjeta"
                  type="number"
                  variant="filled"
                  placeholder="1111-1111-1111-1111"
                  maxLength="19"
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.tarjeta}</FormErrorMessage>
              </FormControl>
              <Stack direction="row">
                <FormControl isInvalid={!!errors.fecha && touched.fecha}>
                  <FormLabel htmlFor="fecha">
                    Fecha de expiracion (MM/YY)
                  </FormLabel>
                  <Field
                    as={Input}
                    id="fecha"
                    name="fecha"
                    type="dateTime"
                    variant="filled"
                    placeholder="11/27"
                    width="18rem"
                    maxLength={5}
                    onChange={handleChange}
                  />
                  <FormErrorMessage>{errors.fecha}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.cvv && touched.cvv}>
                  <FormLabel htmlFor="cvv">CVV</FormLabel>
                  <Field
                    as={Input}
                    id="cvv"
                    name="cvv"
                    type="password"
                    variant="filled"
                    placeholder="111"
                    width="18rem"
                    maxLength={3}
                    onChange={handleChange}
                  />
                  <FormErrorMessage>{errors.cvv}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Divider />
              <Text fontSize="3xl">Dirección de entrega</Text>
              <FormControl isInvalid={!!errors.domicilio && touched.domicilio}>
                <FormLabel htmlFor="domicilio">Domicilio</FormLabel>
                <Field
                  as={Input}
                  id="domicilio"
                  name="domicilio"
                  type="text"
                  variant="filled"
                  placeholder="Domicilio Conocido"
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.domicilio}</FormErrorMessage>
              </FormControl>
              <Stack direction="row">
                <FormControl isInvalid={!!errors.ciudad && touched.ciudad}>
                  <FormLabel htmlFor="ciudad">Ciudad</FormLabel>
                  <Field
                    as={Select}
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    variant="filled"
                    placeholder="Seleccione Ciudad"
                    width="11.88rem"
                    onChange={(e) => {
                      const ciudadValor = e.target.value;
                      const estadoValor = getEstado(ciudadValor);
                      const cpValor = getCp(estadoValor);
                      setValues({
                        ciudad: ciudadValor,
                        estado: estadoValor,
                        cp: cpValor,
                      });
                    }}
                  >
                    <option value="Pekín">Pekín</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                  </Field>
                  <FormErrorMessage>{errors.ciudad}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.estado && touched.estado}>
                  <FormLabel htmlFor="estado">Estado</FormLabel>
                  <Field
                    as={Select}
                    id="estado"
                    name="estado"
                    type="text"
                    variant="filled"
                    placeholder="Seleccione Estado"
                    width="11.88rem"
                  >
                    {getEstados(values.ciudad).map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </Field>
                  <FormErrorMessage>{errors.estado}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.cp && touched.cp}>
                  <FormLabel htmlFor="cp">C.P.</FormLabel>
                  <Field
                    as={Select}
                    id="cp"
                    name="cp"
                    type="text"
                    variant="filled"
                    placeholder="Seleccione C.P."
                    width="11.88rem"
                  >
                    {getCps(values.estado).map((cp) => (
                      <option key={cp} value={cp}>
                        {cp}
                      </option>
                    ))}
                  </Field>
                  <FormErrorMessage>{errors.cp}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Button
                type="submit"
                colorScheme="teal"
                isLoading={values.isSubmitting}
              >
                Pagar
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </>
  );
};

function getEstado(ciudad) {
  switch (ciudad) {
    case "Pekín":
      return "China";
    case "Bogotá":
      return "Colombia";
    case "Ciudad de México":
      return "México";
    default:
      return "";
  }
}

function getCp(estado) {
  switch (estado) {
    case "China":
      return "123";
    case "Colombia":
      return "345";
    case "México":
      return "678";
    default:
      return "";
  }
}

function getEstados(ciudad) {
  switch (ciudad) {
    case "Pekín":
      return ["China", "Japón"];
    case "Bogotá":
      return ["Colombia", "Guaimas"];
    case "Ciudad de México":
      return ["México", "Neza"];
    default:
      return [];
  }
}

function getCps(estado) {
  switch (estado) {
    case "China":
      return ["123", "91011"];
    case "Colombia":
      return ["345", "121314"];
    case "México":
      return ["678", "151617"];
    default:
      return [];
  }
}

export default Form;
