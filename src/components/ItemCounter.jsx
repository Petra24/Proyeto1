import React from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCounter = ({stock}) => {
  const [value, setValue] = useState(0);

  const onAdd = () => {
    setValue(value + 1);
  };

  const onMin = () => {
    setValue(value - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {value < 1 ? (
          <IconButton icon={<MinusIcon />} isDisabled />
        ) : (
          <IconButton icon={<MinusIcon />} onClick={onMin} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{value}</Text>
        </Center>
        {value < stock ? (
          <IconButton icon={<AddIcon />} onClick={onAdd} />
        ) : (
          <IconButton icon={<AddIcon />} isDisabled />
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCounter;
