import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ChallengerMode = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Challenger Mode
      </Heading>
      <Text>Welcome to the Challenger Mode! Here you can tackle difficult tasks and push your limits.</Text>
    </Box>
  );
};

export default ChallengerMode;
