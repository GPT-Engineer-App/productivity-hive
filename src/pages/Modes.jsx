import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Select } from "@chakra-ui/react";
import { useState } from "react";

function Modes() {
  const [selectedMode, setSelectedMode] = useState("");

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const getBackgroundColor = (mode) => {
    switch (mode) {
      case "calm":
        return "blue.100";
      case "focused":
        return "green.100";
      case "competitive":
        return "red.100";
      case "wise":
        return "purple.100";
      default:
        return "white";
    }
  };

  return (
    <Box p={4} overflowY="auto" maxH="100vh" overflowX="hidden" bg={getBackgroundColor(selectedMode)}>
      <Select placeholder="Select mode" mt={2} colorScheme="teal" onChange={handleModeChange}>
        <option value="calm" style={{ backgroundColor: "blue.100" }}>
          Calm
        </option>
        <option value="focused" style={{ backgroundColor: "green.100" }}>
          Focused
        </option>
        <option value="competitive" style={{ backgroundColor: "red.100" }}>
          Competitive
        </option>
        <option value="wise" style={{ backgroundColor: "purple.100" }}>
          Wise
        </option>
      </Select>
      <Tabs variant="soft-rounded" colorScheme="teal" mt={4}>
        <TabList>
          <Tab tabIndex="0" aria-label="Calm Mode">
            Calm
          </Tab>
          <Tab tabIndex="0" aria-label="Focused Mode">
            Focused
          </Tab>
          <Tab tabIndex="0" aria-label="Competitive Mode">
            Competitive
          </Tab>
          <Tab tabIndex="0" aria-label="Wise Mode">
            Wise
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Guided Meditations and Achievements-based Reminders</p>
          </TabPanel>
          <TabPanel>
            <p>Tips and Focus Exercises</p>
          </TabPanel>
          <TabPanel>
            <p>Stress Management and Energy Control tools</p>
          </TabPanel>
          <TabPanel>
            <p>Mind and Emotion Management tools</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Modes;
