import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Image,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

const ItemList = ({ data }) => {
  const { category } = useParams;
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [value, setValue] = useState(0);

    return (
      <>
      {data.map((dat) => dat.id)}
        {/* <SimpleGrid
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        >
          {dato.map((item) => {
            return (
              <Card
                m={3}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                maxW="400px"
                key={item.id}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "90%", sm: "200px" }}
                  src={item.img}
                  alt="Comedor de Madera"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{item.head}</Heading>

                    <Text as="i" fontSize="md" color="red" py="2">
                      Stock: {item.stock}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <NavLink
                      to={{
                        pathname: `/ItemDetailContainer/${item.id}`,
                        state: { img: item.img },
                      }}
                    >
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={onToggle}
                      >
                        Detalles
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid> */}
      </>
    );
  }

export default ItemList;
