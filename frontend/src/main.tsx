import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import fetchAPI from "./components/departmentsFetch/fetchAPI.tsx";
//import App from "./App.tsx";
import MultiSelector from "./components/MultiSelect/Multiselect.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

axios
  .get("http://carpi.cs.rpi.edu:8000/api/v1/course/filter/values/departments")
  .catch((error) => console.error("Error fetching data:", error));

<MultiSelector
items={["type", "scale", "participants", "range", "tags"]}
selectedItems={selectedItems}
setSelectedItems={handleSelectorChange}
/>