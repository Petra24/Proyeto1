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
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const [pcto, setPcto] = useState([]);
  const format = (val) => `$` + val;

  useEffect(() => {
    const db = getFirestore();

    const productosRef = doc(db, "productos", `${id}`);

    getDoc(productosRef).then((snapshot) => {
      if (snapshot.exists()) {
        setPcto(snapshot.data());
      } else {
        console.log("No existe");
      }
    });
  }, []);

  const filtro = productos.filter((data) => data.id === id);
  return (
    <>
      {filtro.map((d) => {
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
                  <ItemCounter
                    stock={d.stock}
                    id={d.id}
                    cost={d.cost}
                    head={d.head}
                    img={d.img}
                    resume={d.resume}
                  />
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
