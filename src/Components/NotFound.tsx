import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { EmojiGrimace } from "react-bootstrap-icons";

export const NotFound = () => {
  return (
    <Flex
      height="80px"
      alignItems={"center"}
      gap={4}
      bg="#ffffcd"
      p={4}
      borderRadius="md"
      width="auto"
      display="inline-flex"
      border="2px solid #ffcf77"
    >
      <EmojiGrimace color="#ff7300" height="30px" width="30px" />
      <Text fontSize="medium" fontWeight={"bold"} color="#ff7300">
        Resource Not Found
      </Text>
    </Flex>
  );
};
