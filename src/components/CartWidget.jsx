import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const CartWidget = () => {
  const [counter] = useContext(CounterContext);
  return (
    <>
      <FaShoppingCart style={{ fontSize: "35px" }} />
      <Badge borderRadius="5" pos="absolute" right="3" top="12">
        {counter}
      </Badge>
    </>
  );
};

export default CartWidget;
