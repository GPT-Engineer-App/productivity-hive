import { Box, VStack, Text, IconButton, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBell, FaListAlt, FaTools, FaUser, FaBook, FaChartLine, FaTasks, FaLightbulb, FaComments, FaRobot, FaPen, FaWind, FaBrain, FaVolumeUp, FaClock, FaEye, FaMusic } from "react-icons/fa";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    document.body.style.marginLeft = isCollapsed ? "60px" : "250px";
  }, [isCollapsed]);

  return (
    <Box as="nav" w={isCollapsed ? "60px" : "250px"} p="4" bg="gray.800" color="white" position="fixed" h="100vh" left="0" transition="width 0.3s" overflowY="auto">
      <IconButton icon={isCollapsed ? <FaBars /> : <FaTimes />} onClick={toggleSidebar} colorScheme="teal" variant="outline" aria-label="Toggle Sidebar" mb={4} tabIndex="0" />
      <VStack align="start" spacing="4">
        <Link to="/" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Dashboard">
          <HStack>
            <FaTachometerAlt />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Dashboard
            </Text>
          </HStack>
        </Link>
        <Link to="/reminders" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Reminders">
          <HStack>
            <FaBell />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Reminders
            </Text>
          </HStack>
        </Link>
        <Link to="/modes" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Modes">
          <HStack>
            <FaListAlt />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Modes
            </Text>
          </HStack>
        </Link>
        <Link to="/pomodoro-timer" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Pomodoro Timer">
          <HStack>
            <FaClock />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Pomodoro Timer
            </Text>
          </HStack>
        </Link>
        <Link to="/distraction-blocker" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Distraction Blocker">
          <HStack>
            <FaEye />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Distraction Blocker
            </Text>
          </HStack>
        </Link>
        <Link to="/task-prioritization" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Task Prioritization">
          <HStack>
            <FaListAlt />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Task Prioritization
            </Text>
          </HStack>
        </Link>
        <Link to="/focus-music" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Focus Music">
          <HStack>
            <FaMusic />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Focus Music
            </Text>
          </HStack>
        </Link>
        <Link to="/support-tools" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Support Tools">
          <HStack>
            <FaTools />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Support Tools
            </Text>
          </HStack>
        </Link>
        <Link to="/work-assistant" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Work Assistant">
          <HStack>
            <FaTasks />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Work Assistant
            </Text>
          </HStack>
        </Link>
        <Link to="/learning-assistant" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Learning Assistant">
          <HStack>
            <FaBook />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Learning Assistant
            </Text>
          </HStack>
        </Link>
        <Link to="/recommendations" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Recommendations">
          <HStack>
            <FaLightbulb />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Recommendations
            </Text>
          </HStack>
        </Link>
        <Link to="/blog" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Blog">
          <HStack>
            <FaComments />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Blog
            </Text>
          </HStack>
        </Link>
        <Link to="/challenger-mode" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Challenger Mode">
          <HStack>
            <FaTasks />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Challenger Mode
            </Text>
          </HStack>
        </Link>
        <Link to="/chatbot" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Chatbot">
          <HStack>
            <FaRobot />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Chatbot
            </Text>
          </HStack>
        </Link>
        <Link to="/personal-development" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Personal Development">
          <HStack>
            <FaUser />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Personal Development
            </Text>
          </HStack>
        </Link>
        <Link to="/performance-metrics" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Performance Metrics">
          <HStack>
            <FaChartLine />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Performance
            </Text>
          </HStack>
        </Link>
        <Link to="/task-management" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Task Management">
          <HStack>
            <FaTasks />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Task Management
            </Text>
          </HStack>
        </Link>
        <Link to="/breathing-exercises" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Breathing Exercises">
          <HStack>
            <FaWind />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Breathing Exercises
            </Text>
          </HStack>
        </Link>
        <Link to="/meditation-sessions" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Meditation Sessions">
          <HStack>
            <FaBrain />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Meditation Sessions
            </Text>
          </HStack>
        </Link>
        <Link to="/soothing-music" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Soothing Music">
          <HStack>
            <FaVolumeUp />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Soothing Music
            </Text>
          </HStack>
        </Link>
        <Link to="/motivational-quotes" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Motivational Quotes">
          <HStack>
            <FaLightbulb />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Motivational Quotes
            </Text>
          </HStack>
        </Link>
        <Link to="/stress-relief-tips" _hover={{ color: "teal.300" }} tabIndex="0" aria-label="Stress Relief Tips">
          <HStack>
            <FaLightbulb />
            <Text fontSize="xl" fontWeight="bold" display={isCollapsed ? "none" : "block"}>
              Stress Relief Tips
            </Text>
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
