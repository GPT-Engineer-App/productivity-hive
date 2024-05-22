import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Reminders from "./pages/Reminders.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Modes from "./pages/Modes.jsx";
import PersonalDevelopment from "./pages/PersonalDevelopment.jsx";
import PerformanceMetrics from "./pages/PerformanceMetrics.jsx";

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box flex="1" ml={{ base: "60px", md: "250px" }} transition="margin-left 0.3s" overflowY="auto" maxH="100vh">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/modes" element={<Modes />} />
            <Route path="/personal-development" element={<PersonalDevelopment />} />
            <Route path="/performance-metrics" element={<PerformanceMetrics />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
