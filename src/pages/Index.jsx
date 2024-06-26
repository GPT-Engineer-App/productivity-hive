import { Container, VStack, HStack, Box, Text, Heading, IconButton, Image, Progress, SimpleGrid, Divider, Input, InputGroup, InputLeftElement, Button, useBreakpointValue, Select } from "@chakra-ui/react";
import { FaChartLine, FaTasks, FaUser, FaBell, FaCog, FaSearch, FaWater, FaRunning, FaEye, FaWind, FaVolumeUp, FaLightbulb, FaBrain, FaComments, FaClock, FaListAlt, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} overflowY="auto" maxH="100vh" overflowX="hidden">
      <VStack spacing={6} align="stretch" w="100%">
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center">
          <HStack spacing={4} w="full" justifyContent="space-between">
            <Heading as="h1" size="lg">
              <Image src="path/to/company-logo.png" alt="Company Logo" boxSize="40px" />
            </Heading>
            <InputGroup w="40%" mx="auto">
              <InputLeftElement pointerEvents="none" children={<FaSearch />} />
              <Input type="text" placeholder="Search..." />
            </InputGroup>
            <HStack spacing={4}>
              <IconButton aria-label="Notifications" icon={<FaBell />} tabIndex="0" />
              <IconButton aria-label="Settings" icon={<FaCog />} tabIndex="0" />
              <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjMxODc0M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" tabIndex="0" aria-label="User Profile" />
            </HStack>
          </HStack>
        </HStack>
        {}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {/* Productivity Stats */}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Productivity
              </Heading>
              <FaChartLine />
            </HStack>
            <Text mt={2}>Overall Productivity</Text>
            <Progress value={80} size="lg" colorScheme="green" mt={2} />
          </Box>

          {/* Tasks */}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Tasks
              </Heading>
              <FaTasks />
            </HStack>
            <Text mt={2}>Completed Tasks</Text>
            <Progress value={60} size="lg" colorScheme="blue" mt={2} />
          </Box>

          {/* Personal Development */}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Personal Development
              </Heading>
              <FaUser />
            </HStack>
            <Text mt={2}>Training Progress</Text>
            <Progress value={50} size="lg" colorScheme="purple" mt={2} />
          </Box>
          {}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Reminders
              </Heading>
              <FaBell />
            </HStack>
            <Text mt={2}>Upcoming Reminders</Text>
            <Progress value={70} size="lg" colorScheme="yellow" mt={2} />
          </Box>

          {}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Modes
              </Heading>
              <FaListAlt />
            </HStack>
            <Text mt={2}>Select Mode:</Text>
            <Select placeholder="Select mode" mt={2} colorScheme="teal">
              <option value="calm" style={{ backgroundColor: "#B2F5EA" }}>
                Calm
              </option>
              <option value="focused" style={{ backgroundColor: "#81E6D9" }}>
                Focused
              </option>
              <option value="competitive" style={{ backgroundColor: "#4FD1C5" }}>
                Competitive
              </option>
              <option value="wise" style={{ backgroundColor: "#38B2AC" }}>
                Wise
              </option>
            </Select>
          </Box>

          {}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Recommendations
              </Heading>
              <FaLightbulb />
            </HStack>
            <Text mt={2}>New Recommendations</Text>
            <Progress value={50} size="lg" colorScheme="orange" mt={2} />
          </Box>

          {}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Chatbot
              </Heading>
              <FaRobot />
            </HStack>
            <Text mt={2}>Chatbot Interactions</Text>
            <Progress value={40} size="lg" colorScheme="purple" mt={2} />
          </Box>

          {}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                Task Management
              </Heading>
              <FaTasks />
            </HStack>
            <Text mt={2}>Tasks Completed</Text>
            <Progress value={75} size="lg" colorScheme="blue" mt={2} />
          </Box>
        </SimpleGrid>

        <Divider />

        {/* Detailed Stats */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">
              Weekly Overview
            </Heading>
            <Text mt={2}>Detailed stats and insights for the week.</Text>
            {/* Add more detailed stats here */}
          </Box>

          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">
              Monthly Overview
            </Heading>
            <Text mt={2}>Detailed stats and insights for the month.</Text>
            {/* Add more detailed stats here */}
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
