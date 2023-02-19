import {
  Button,
  Card,
  CardBody,
  Divider,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Image,
  Center,
  Container,
} from "@chakra-ui/react";
import ItemCounter from "./ItemCounter";
import { useParams, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const ItemDetail = ({ productos }) => {
  const [counter] = useContext(CounterContext);
  const { id } = useParams();
  const format = (val) => `$` + val;

  const filtro = productos.filter((data) => data.id === id);
  return (
    <>
      {filtro.map((d) => {
        const resStock = d.stock - counter;
        return (
          <div key={id}>
            <Center ml={60} mr={60} mt={35}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "400px" }}
                  src={d.img}
                  alt={d.heder}
                />
                <Stack>
                  <CardBody>
                    <Heading size="lg">{d.head}</Heading>
                    <Text py="2" textAlign={["justify"]}>
                      {d.desc}
                    </Text>
                    <Text color="blue.600" fontSize="3rem" align="center">
                      {format(d.cost)}
                    </Text>
                  </CardBody>
                  <Divider />
                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "136px",
                      },
                    }}
                  >
                    <Container>
                      <Center>
                        <Text color="red.600" fontSize="md" m={5}>
                          Stock: {resStock}
                        </Text>
                        <ItemCounter stock={d.stock} />
                      </Center>
                    </Container>
                    <Button
                      as={NavLink}
                      to={`/buys`}
                      flex="1"
                      variant="solid"
                      colorScheme="blue"
                    >
                      Comprar
                    </Button>
                    <Button
                      as={NavLink}
                      to={`/`}
                      flex="1"
                      variant="ghost"
                      colorScheme="blue"
                    >
                      Agregar a carrito
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Center>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
