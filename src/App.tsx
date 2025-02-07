import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Planner from "./pages/Planner";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Catalog />}></Route>
            <Route path="/planner" element={<Planner />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
