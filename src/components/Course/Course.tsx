import React, { useState } from "react";
import Tag from "./Tag";
import AddButton from "./AddButton";
import { motion } from "framer-motion";
import { CourseType } from "../../types/interfaces/Course.interface";

interface CourseProps {
  course: CourseType;
  toolboxCourses: { [key: string]: number };
  setToolboxCourses: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

const Course: React.FC<CourseProps> = ({
  course,
  toolboxCourses,
  setToolboxCourses,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id !== "add-button") setIsOpen((open) => !open);
  };

  const courseDisplay = `${course.department + course.code} ${course.name}`;
  const addCourse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setToolboxCourses((prevCourses) => ({
      ...prevCourses,
      [courseDisplay]: (prevCourses[courseDisplay] || 0) + 1,
    }));
  };

  const courseCount = toolboxCourses[courseDisplay];
  return (
    <>
      <div
        className={`relative bg-[#F5CECE] border-2 border-black w-11/12 rounded-xl p-4 m-auto mt-4 
          `}
        onClick={toggleOpen}
      >
        <div
          className={`${
            courseCount === undefined ? "hidden" : ""
          } absolute right-[-10px] top-[-10px] rounded-full bg-[#78A1BB] w-8 h-8 flex justify-center items-center text-white`}
        >
          <p>{courseCount}</p>
        </div>
        <div className={`flex items-center justify-between`}>
          <div className={`w-11/12`}>
            <p className={`text-xl`}>
              {course.department}
              {course.code} {course.name}
            </p>
            <div className={`flex flex-wrap mt-1`}>
              <Tag name={course.department} color={"4D5E87"} />
              {course.attributesList.map((attr) => {
                return <Tag name={attr} color={"4D5E87"} />;
              })}
              {course.semestersOffered.map((semester) => {
                return <Tag name={semester} color={"4D5E87"} />;
              })}
            </div>
          </div>
          <div id="add-button" className={``}>
            <AddButton addCourse={addCourse} />
          </div>
        </div>
        <div className={`${isOpen ? "" : "hidden"} mt-2`}>
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={isOpen ? { height: "auto", opacity: 1 } : {}}
            className={`text-sm`}
            transition={{ duration: 0.05 }}
          >
            {course.description}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Course;
