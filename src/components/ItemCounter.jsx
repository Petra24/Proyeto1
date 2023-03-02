import React, { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Center,
  Container,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/CartContex";
import { NavLink } from "react-router-dom";

const ItemCounter = ({ stock, id, cost, head, img, resume }) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onMin = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + counter };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: counter, cost, head, img, resume }];
      }
    });
  };
  const resStock = stock - counter;
  return (
    <>
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
            <ButtonGroup size="sm" isAttached variant="outline">
              {counter < 1 ? (
                <IconButton icon={<MinusIcon />} isDisabled />
              ) : (
                <IconButton icon={<MinusIcon />} onClick={onMin} />
              )}
              <Center w="50px" h="30px">
                <Text as="b">{counter}</Text>
              </Center>
              {counter < stock ? (
                <IconButton icon={<AddIcon />} onClick={onAdd} />
              ) : (
                <IconButton icon={<AddIcon />} isDisabled />
              )}
            </ButtonGroup>
          </Center>
        </Container>
        <Button
          as={NavLink}
          to={`/buys`}
          flex="1"
          variant="solid"
          colorScheme="blue"
          onClick={() => addToCart()}
        >
          Comprar
        </Button>
        <Button
          as={NavLink}
          to={`/productos`}
          flex="1"
          variant="ghost"
          colorScheme="blue"
          onClick={() => addToCart()}
        >
          Agregar a carrito
        </Button>
      </CardFooter>
    </>
  );
};

export default ItemCounter;
