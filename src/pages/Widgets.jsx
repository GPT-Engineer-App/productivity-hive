import { Box, Checkbox, Heading, VStack, Button, HStack } from "@chakra-ui/react";
import { FaCloudSun, FaNewspaper, FaCalendarAlt, FaTasks, FaBell, FaListAlt, FaRobot } from "react-icons/fa";
import { useState } from "react";

const Widgets = () => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleCheckboxChange = (widget) => {
    setSelectedWidgets((prev) => (prev.includes(widget) ? prev.filter((w) => w !== widget) : [...prev, widget]));
  };

  const widgets = ["Weather", "News", "Calendar", "Tasks", "Reminders", "Modes", "Chatbot", "Task Management"];

  return (
    <Box p={4}>
      <Heading mb={4}>Choose Your Widgets</Heading>
      <VStack align="start">
        {widgets.map((widget) => (
          <Checkbox key={widget} isChecked={selectedWidgets.includes(widget)} onChange={() => handleCheckboxChange(widget)}>
            {widget}
          </Checkbox>
        ))}
      </VStack>
      <HStack spacing={4} mt={4}>
        <Button leftIcon={<FaCloudSun />} colorScheme="teal" variant="solid">
          Weather
        </Button>
        <Button leftIcon={<FaNewspaper />} colorScheme="teal" variant="solid">
          News
        </Button>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid">
          Calendar
        </Button>
        <Button leftIcon={<FaTasks />} colorScheme="teal" variant="solid" onClick={() => handleCheckboxChange("Tasks")}>
          Tasks
        </Button>
        <Button leftIcon={<FaBell />} colorScheme="teal" variant="solid" onClick={() => handleCheckboxChange("Reminders")}>
          Reminders
        </Button>
        <Button leftIcon={<FaListAlt />} colorScheme="teal" variant="solid" onClick={() => handleCheckboxChange("Modes")}>
          Modes
        </Button>
        <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid" onClick={() => handleCheckboxChange("Chatbot")}>
          Chatbot
        </Button>
        <Button leftIcon={<FaTasks />} colorScheme="teal" variant="solid" onClick={() => handleCheckboxChange("Task Management")}>
          Task Management
        </Button>
      </HStack>
    </Box>
  );
};

export default Widgets;
