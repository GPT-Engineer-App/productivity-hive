import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react";

function Reminders() {
  return (
    <Box p={4} overflowY="auto" maxH="100vh" overflowX="hidden">
      <Heading as="h2" size="lg" mb={4}>
        Reminders
      </Heading>
      <Box mb={6}>
        <Text mb={4}>Bu bölümde, kullanıcıya yaklaşan hatırlatmalarını görüntüler. Kullanıcıların önemli etkinlikler ve görevler için zamanında bildirim almasını sağlar.</Text>
        <Heading as="h3" size="md" mb={2}>
          Upcoming Reminders
        </Heading>
        <List spacing={3}>
          {}
          <ListItem>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text>Reminder 1</Text>
              <Box>
                <Button size="sm" colorScheme="green" mr={2} tabIndex="0" aria-label="Mark as Done">
                  Done
                </Button>
                <Button size="sm" colorScheme="yellow" tabIndex="0" aria-label="Snooze">
                  Snooze
                </Button>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box mb={6}>
        <Heading as="h3" size="md" mb={2} color="red.500">
          Overdue Reminders
        </Heading>
        <List spacing={3}>
          {}
          <ListItem>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text>Overdue Reminder 1</Text>
              <Box>
                <Button size="sm" colorScheme="green" mr={2} tabIndex="0" aria-label="Mark as Done">
                  Done
                </Button>
                <Button size="sm" colorScheme="yellow" tabIndex="0" aria-label="Snooze">
                  Snooze
                </Button>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Button colorScheme="blue" size="lg" tabIndex="0" aria-label="Add New Reminder">
        Add New Reminder
      </Button>
    </Box>
  );
}

export default Reminders;
