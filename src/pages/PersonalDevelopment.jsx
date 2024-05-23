import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function PersonalDevelopment() {
  return (
    <Box p={5} overflowY="auto" maxH="100vh" overflowX="hidden">
      <Heading tabIndex="0" aria-label="Personal Development Tracking">
        Personal Development Tracking
      </Heading>
      <Text>Visual Progress Trackers and Personalized Recommendations will be displayed here.</Text>
      <Text mt={4}>Kullanıcıların kişisel gelişimlerini takip etmelerine ve geliştirmelerine yardımcı olur. Eğitim materyalleri, kurslar ve ilerleme takip araçları sunar.</Text>
      <Text mt={4}>Personal Development: Kullanıcıların kişisel gelişimlerini takip etmelerine ve geliştirmelerine yardımcı olur. Eğitim materyalleri, kurslar ve ilerleme takip araçları sunar.</Text>
    </Box>
  );
}

export default PersonalDevelopment;
