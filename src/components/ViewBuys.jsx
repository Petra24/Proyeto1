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
} from "@chakra-ui/react";

const ViewBuys = () => {
  const format = (val) => `$` + val;
  return (
    <>
      <Text color="white">Importe:</Text>
      <Text fontSize="3xl" color="white">
        {format(1500)}
      </Text>
      <Card direction={{ base: "column", sm: "row" }} bg="transparent">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md" color="white">
              Nombre Producto
            </Heading>
            <Flex minWidth="max-content" alignItems="center" gap="120">
              <Box p="2">
                <Text py="2" color="white">
                  color y tamaño
                </Text>
              </Box>
              <Spacer />
              <Box p="2">
                <Text py="2" color="white">
                  {format(500)}
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text py="2" color="white">
            Subtotal
          </Text>
        </Box>
        <Spacer />
        <Box p="2">
          <Text py="2" color="white">
            {format(500)}
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
            {format(500)}
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
            {format(500)}
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
            {format(500)}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ViewBuys;
