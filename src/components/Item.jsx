import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, head, img, stock }) => {
  return (
    <>
      <Card
        m={2}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        maxW="400px"
        maxH="200px"
        key={id}
      >
        <Image objectFit="cover" w="200px" h="200px" src={img} alt={head} />

        <Stack>
          <CardBody>
            <Heading size="md">{head}</Heading>

            <Text as="i" fontSize="md" color="red" py="2">
              Stock: {stock}
            </Text>
          </CardBody>

          <CardFooter>
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="blue">
                Detalles
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Item;
