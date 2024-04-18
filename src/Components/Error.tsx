import { Flex, Icon, Img, Text } from "@chakra-ui/react";
import React from "react";
import { XCircleFill } from "react-bootstrap-icons";

export const Error = () => {
  return (
    <Flex
      height="80px"
      alignItems={"center"}
      gap={4}
      bg="#fee9e9"
      p={4}
      borderRadius="md"
      width="auto"
      display="inline-flex"
      border="2px solid #ff6e6e"
    >
      <XCircleFill color="red" height="30px" width="30px" />
      <Text fontSize="medium" fontWeight={"bold"} color="#ff0a0a">
        Something happened unexpectedly
      </Text>
    </Flex>
  );
};
