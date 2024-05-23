import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Reminders from "./pages/Reminders.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Sidebar from "./components/Sidebar.jsx";
import PomodoroTimer from "./pages/PomodoroTimer.jsx";
import DistractionBlocker from "./pages/DistractionBlocker.jsx";
import TaskPrioritization from "./pages/TaskPrioritization.jsx";
import FocusMusic from "./pages/FocusMusic.jsx";
import Modes from "./pages/Modes.jsx";
import PersonalDevelopment from "./pages/PersonalDevelopment.jsx";
import PerformanceMetrics from "./pages/PerformanceMetrics.jsx";
import ChallengerMode from "./pages/ChallengerMode.jsx";
import AssessmentTests from "./pages/AssessmentTests.jsx";
import MotivationalQuotes from "./pages/MotivationalQuotes.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import BreathingExercises from "./pages/BreathingExercises.jsx";
import MeditationSessions from "./pages/MeditationSessions.jsx";
import SoothingMusic from "./pages/SoothingMusic.jsx";
import StressReliefTips from "./pages/StressReliefTips.jsx";

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
            <Route path="/assessment-tests" element={<AssessmentTests />} />
            <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
            <Route path="/distraction-blocker" element={<DistractionBlocker />} />
            <Route path="/task-prioritization" element={<TaskPrioritization />} />
            <Route path="/focus-music" element={<FocusMusic />} />
            <Route path="/challenger-mode" element={<ChallengerMode />} />
            <Route path="/motivational-quotes" element={<MotivationalQuotes />} />
            <Route path="/task-management" element={<TaskManagement />} />
            <Route path="/breathing-exercises" element={<BreathingExercises />} />
            <Route path="/meditation-sessions" element={<MeditationSessions />} />
            <Route path="/soothing-music" element={<SoothingMusic />} />
            <Route path="/stress-relief-tips" element={<StressReliefTips />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
