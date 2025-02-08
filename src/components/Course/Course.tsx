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
  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div
        className={`bg-[#F5CECE] border-2 border-black w-11/12 rounded-xl p-4 m-auto mt-2 
          font-['Helvetica']`}
        onClick={toggleOpen}
      >
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
            <AddButton />
          </div>
        </div>
        <div className={`${isOpen ? "" : "hidden"} mt-2`}>
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className={`text-sm`}
            transition={{ duration: 0.05 }}
            key={isOpen}
          >
            {course.description}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Course;
