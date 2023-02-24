import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import Form from "./Form";
import ViewBuys from "./ViewBuys";

const Buys = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(40%, 1fr))"
        m="50px"
      >
        <Card>
          <CardBody>
            <Form />
          </CardBody>
        </Card>
        <Card bg="#3e4757">
          <CardBody>
            <ViewBuys />
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Buys;
