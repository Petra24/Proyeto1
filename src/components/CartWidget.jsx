import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <>
      <NavLink to={"/buys"}>
        <FaShoppingCart style={{ fontSize: "35px" }} />
        <Badge borderRadius="5" pos="absolute" right="3" top="12">
          {quantity}
        </Badge>
      </NavLink>
    </>
  );
};

export default CartWidget;
