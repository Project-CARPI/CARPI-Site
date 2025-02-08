import React, { useState } from "react";
import Tag from "./Tag";
import AddButton from "./AddButton";
import { motion } from "framer-motion";

interface CourseType {
  id: number;
  name: string;
  department: string;
  code: string;
  description: string;
  attributesList: string[];
  semestersOffered: string[];
  courseCount: number;
}

interface CourseProps {
  course: CourseType;
}

const Course: React.FC<CourseProps> = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseCount, setCourseCount] = useState(0);
  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const addCourse = () => {
    setCourseCount((count) => count + 1);
  };
  return (
    <>
      <div
        className={`relative bg-[#F5CECE] border-2 border-black w-11/12 rounded-xl p-4 m-auto mt-4 
          font-['Helvetica']`}
        onClick={toggleOpen}
      >
        <div
          className={`absolute right-[-10px] top-[-10px] rounded-full bg-[#78A1BB] w-8 h-8 flex justify-center items-center text-white`}
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
          <div className={``}>
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
