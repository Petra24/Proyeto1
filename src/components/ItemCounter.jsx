import React from "react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const ItemCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
      {/* <IconButton onClick={() => setSumar(0)}>Reset</IconButton> */}
    </>
  );
};

export default ItemCounter;
