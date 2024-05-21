import { Box, VStack, Text } from "@chakra-ui/react";
import { FaTachometerAlt, FaBell, FaListAlt, FaTools, FaUser, FaBook, FaChartLine, FaTasks } from "react-icons/fa";

function Sidebar() {
  return (
    <Box as="nav" w="250px" p="4" bg="gray.800" color="white" position="fixed" h="100vh">
      <VStack align="start" spacing="4">
        <Text fontSize="xl" fontWeight="bold">
          Dashboard
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Reminders
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Modes
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Support Tools
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Work Assistant
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Learning Assistant
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Recommendations
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Blog
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Personal Development
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Performance
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Task Management
        </Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
