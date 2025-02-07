import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Planner from "./pages/Planner";
import DepartmentFilters from "./components/Department-Filters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/filters" element={<DepartmentFilters />} />
      </Routes>
    </Router>
  );
}

export default App;