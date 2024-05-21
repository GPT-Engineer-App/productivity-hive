import { Container, VStack, HStack, Box, Text, Heading, IconButton, Image, Progress, SimpleGrid, Divider, Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { FaChartLine, FaTasks, FaUser, FaBell, FaCog, FaSearch, FaWater, FaRunning, FaEye, FaWind, FaVolumeUp, FaLightbulb, FaBrain, FaComments, FaClock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Business Dashboard
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Notifications" icon={<FaBell />} />
            <IconButton aria-label="Settings" icon={<FaCog />} />
            <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjMxODc0M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
          </HStack>
        </HStack>

        {/* Main Content */}
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
