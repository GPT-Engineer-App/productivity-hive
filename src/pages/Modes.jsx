import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

function Modes() {
  return (
    <Box p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal">
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
