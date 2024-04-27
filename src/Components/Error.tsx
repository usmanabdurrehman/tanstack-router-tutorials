import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorComponentProps, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { XCircleFill } from "react-bootstrap-icons";

export const Error = ({ reset }: ErrorComponentProps) => {
  const router = useRouter();

  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <Box>
      <Button
        onClick={() => {
          reset();
          router.invalidate();
        }}
        size="sm"
        fontSize="small"
        display={"block"}
      >
        Try again?
      </Button>

      <Flex
        height="80px"
        alignItems={"center"}
        gap={4}
        bg="#fee9e9"
        p={4}
        mt={4}
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
    </Box>
  );
};
