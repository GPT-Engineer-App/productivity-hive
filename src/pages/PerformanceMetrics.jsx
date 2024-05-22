import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function PerformanceMetrics() {
  return (
    <Box p={5} overflowY="auto" maxH="100vh">
      <Heading tabIndex="0" aria-label="Performance Metrics">
        Performance Metrics
      </Heading>
      <Text>Interactive Dashboard, Task Management Tool, and other performance metrics will be displayed here.</Text>
    </Box>
  );
}

export default PerformanceMetrics;
