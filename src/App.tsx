import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Planner from "./pages/Planner";
import Toolbox from "./components/Toolbox/Toolbox";

function App() {
  const [toolboxCourses, setToolboxCourses] = useState({});
  return (
    <>
      <div className="font-['Helvetica'] bg-carpipink min-h-screen">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Catalog
                  toolboxCourses={toolboxCourses}
                  setToolboxCourses={setToolboxCourses}
                />
              }
            ></Route>
            <Route path="/planner" element={<Planner />}></Route>
          </Routes>
          <Toolbox courses={toolboxCourses} />
        </Router>
      </div>
    </>
  );
}

export default App;
