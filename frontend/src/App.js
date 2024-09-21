import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import WomensDashboard from "./pages/womens/womens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/womens" element={<WomensDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
