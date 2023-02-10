import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <FaShoppingCart style={{ fontSize: "35px" }} />
      <Badge borderRadius="5" pos="absolute" right="3" top="12">8</Badge>
    </>
  );
};

export default CartWidget;
