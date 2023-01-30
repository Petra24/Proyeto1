import React from "react";
import { IconButton, Box, Image, Flex, Spacer, Badge } from "@chakra-ui/react";
import { AddIcon, StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Counter= ({foto}) => {
  const [sumar, setSumar] = useState(0);

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
      {/* <Flex minWidth="max-content" alignItems="center">
        <Box>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={foto}
            alt="Dan Abramov"
          />
        </Box>
        <Spacer />
        <Box><h1>Sofa para Sala</h1></Box>
      </Flex>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<AddIcon />}
        disabled={sumar === 0}
        onClick={() => setSumar(sumar - 1)}
      ></IconButton>
      <Box borderRadius="md" bg="tomato" color="white" px={4} h={8}>
        {sumar}
      </Box>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<AddIcon />}
        disabled={sumar === 0}
        onClick={() => setSumar(sumar + 1)}
      ></IconButton> */}
      {/* <IconButton onClick={() => setSumar(0)}>Reset</IconButton> */}
    </>
  );
}

export default Counter;
