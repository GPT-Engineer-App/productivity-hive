import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function PerformanceMetrics() {
  return (
    <Box p={5} overflowY="auto" maxH="100vh" overflowX="hidden">
      <Heading tabIndex="0" aria-label="Performance Metrics">
        Performance Metrics
      </Heading>
      <Text>Interactive Dashboard, Task Management Tool, and other performance metrics will be displayed here.</Text>
      <Text mt={4}>Kullanıcının performansını ölçen ve analiz eden araçlar içerir. Verimlilik, tamamlanan görevler ve diğer performans metrikleri hakkında geri bildirim sağlar.</Text>
      <Text mt={4}>Performance: Kullanıcının performansını ölçen ve analiz eden araçlar içerir. Verimlilik, tamamlanan görevler ve diğer performans metrikleri hakkında geri bildirim sağlar.</Text>
    </Box>
  );
}

export default PerformanceMetrics;
