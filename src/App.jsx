import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Reminders from "./pages/Reminders.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Widgets from "./pages/Widgets.jsx";
import Modes from "./pages/Modes.jsx";
import PersonalDevelopment from "./pages/PersonalDevelopment.jsx";
import PerformanceMetrics from "./pages/PerformanceMetrics.jsx";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <Box display="flex">
        {isAuthenticated && <Sidebar />}
        <Box flex="1" ml={{ base: isAuthenticated ? "60px" : "0", md: isAuthenticated ? "250px" : "0" }} transition="margin-left 0.3s" overflowY="auto" maxH="100vh">
          <Routes>
            <Route exact path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/dashboard" element={isAuthenticated ? <Index /> : <Navigate to="/" />} />
            <Route path="/reminders" element={isAuthenticated ? <Reminders /> : <Navigate to="/" />} />
            <Route path="/modes" element={isAuthenticated ? <Modes /> : <Navigate to="/" />} />
            <Route path="/personal-development" element={isAuthenticated ? <PersonalDevelopment /> : <Navigate to="/" />} />
            <Route path="/performance-metrics" element={isAuthenticated ? <PerformanceMetrics /> : <Navigate to="/" />} />
            <Route path="/chatbot" element={isAuthenticated ? <Chatbot /> : <Navigate to="/" />} />
            <Route path="/widgets" element={isAuthenticated ? <Widgets /> : <Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
