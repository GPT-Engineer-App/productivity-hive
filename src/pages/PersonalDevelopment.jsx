import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function PersonalDevelopment() {
  return (
    <Box p={5} overflowY="auto" maxH="100vh">
      <Heading tabIndex="0" aria-label="Personal Development Tracking">
        Personal Development Tracking
      </Heading>
      <Text>Visual Progress Trackers and Personalized Recommendations will be displayed here.</Text>
    </Box>
  );
}

export default PersonalDevelopment;
