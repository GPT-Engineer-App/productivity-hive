import { Box, Checkbox, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Widgets = () => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleCheckboxChange = (widget) => {
    setSelectedWidgets((prev) => (prev.includes(widget) ? prev.filter((w) => w !== widget) : [...prev, widget]));
  };

  const widgets = ["Weather", "News", "Calendar", "Tasks"];

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
    </Box>
  );
};

export default Widgets;
