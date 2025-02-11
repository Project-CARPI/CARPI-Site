import React from "react";
import PlannerCourse from "../components/PlannerComponents/PlannerCourse";

function Planner() {
  const exampleCourse = {
    id: 1,
    name: "Principles of Software",
    department: "CSCI",
    code: "2600",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    attributesList: ["Commuication Intensive", "HASS"],
    semestersOffered: ["Fall", "Spring"],
  };
  return (
    <>
      <PlannerCourse course={exampleCourse} />
    </>
  );
}

export default Planner;
