import React, { useContext, useEffect, useState } from "react";
import { Text, ButtonGroup, IconButton, Center } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CounterContext } from "../context/CounterContex";
import { useParams } from "react-router-dom";

const ItemCounter = ({ stock }) => {
  const { id } = useParams();
  const [counter, setCounter] = useContext(CounterContext);
  //const [value, setValue] = useState(1);

  useEffect(() => {
    //console.log(counter);
  });

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onMin = () => {
    setCounter(counter - 1);
  };

  return (
    <>
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
    </>
  );
};

export default ItemCounter;
