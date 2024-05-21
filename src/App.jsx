import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Reminders from "./pages/Reminders.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Modes from "./pages/Modes.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/modes" element={<Modes />} />
      </Routes>
    </Router>
  );
}

export default App;
