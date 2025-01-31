import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Planner from "./pages/Planner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Catalog />,
    },
    {
      path: "/planner",
      element: <Planner />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
