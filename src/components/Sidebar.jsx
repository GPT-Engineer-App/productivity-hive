import { Box, VStack, Text, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBell, FaListAlt, FaTools, FaUser, FaBook, FaChartLine, FaTasks, FaLightbulb, FaComments } from "react-icons/fa";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box as="nav" w={isCollapsed ? "60px" : "250px"} p="4" bg="gray.800" color="white" position="fixed" h="100vh" left="0" transition="width 0.3s">
      <IconButton icon={isCollapsed ? <FaBars /> : <FaTimes />} onClick={toggleSidebar} colorScheme="teal" variant="outline" aria-label="Toggle Sidebar" mb={4} />
      <VStack align="start" spacing="4">
        <Link to="/" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            Dashboard
          </Text>
        </Link>
        <Link to="/reminders" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            Reminders
          </Text>
        </Link>
        <Link to="/modes" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            Modes
          </Text>
        </Link>
        <Link to="/support-tools" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaTools /> Support Tools
          </Text>
        </Link>
        <Link to="/work-assistant" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaTasks /> Work Assistant
          </Text>
        </Link>
        <Link to="/learning-assistant" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaBook /> Learning Assistant
          </Text>
        </Link>
        <Link to="/recommendations" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaLightbulb /> Recommendations
          </Text>
        </Link>
        <Link to="/blog" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaComments /> Blog
          </Text>
        </Link>
        <Link to="/personal-development" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaUser /> Personal Development
          </Text>
        </Link>
        <Link to="/performance-metrics" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaChartLine /> Performance
          </Text>
        </Link>
        <Link to="/task-management" _hover={{ color: "teal.300" }}>
          <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
            <FaTasks /> Task Management
          </Text>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
