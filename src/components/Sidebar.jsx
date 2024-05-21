import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBell, FaListAlt, FaTools, FaUser, FaBook, FaChartLine, FaTasks, FaLightbulb, FaComments } from "react-icons/fa";

function Sidebar() {
  return (
    <Box as="nav" w="250px" p="4" bg="gray.800" color="white" position="fixed" h="100vh">
      <VStack align="start" spacing="4">
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold">
            Dashboard
          </Text>
        </Link>
        <Link to="/reminders">
          <Text fontSize="xl" fontWeight="bold">
            Reminders
          </Text>
        </Link>
        <Link to="/modes">
          <Text fontSize="xl" fontWeight="bold">
            Modes
          </Text>
        </Link>
        <Link to="/support-tools">
          <Text fontSize="xl" fontWeight="bold">
            <FaTools /> Support Tools
          </Text>
        </Link>
        <Link to="/work-assistant">
          <Text fontSize="xl" fontWeight="bold">
            <FaTasks /> Work Assistant
          </Text>
        </Link>
        <Link to="/learning-assistant">
          <Text fontSize="xl" fontWeight="bold">
            <FaBook /> Learning Assistant
          </Text>
        </Link>
        <Link to="/recommendations">
          <Text fontSize="xl" fontWeight="bold">
            <FaLightbulb /> Recommendations
          </Text>
        </Link>
        <Link to="/blog">
          <Text fontSize="xl" fontWeight="bold">
            <FaComments /> Blog
          </Text>
        </Link>
        <Link to="/personal-development">
          <Text fontSize="xl" fontWeight="bold">
            <FaUser /> Personal Development
          </Text>
        </Link>
        <Link to="/performance-metrics">
          <Text fontSize="xl" fontWeight="bold">
            <FaChartLine /> Performance
          </Text>
        </Link>
        <Link to="/task-management">
          <Text fontSize="xl" fontWeight="bold">
            <FaTasks /> Task Management
          </Text>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
