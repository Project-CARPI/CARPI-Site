import React from "react";
import Tag from "./Tag";
import AddButton from "./AddButton";
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
  return (
    <>
      <div className={`bg-[#F5CECE] border-2 border-black w-11/12 rounded-xl`}>
        <div className={`w-4/5`}>
          <p>
            {course.department}
            {course.code} {course.name}
          </p>
          <div className={`flex flex-wrap`}>
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
    </>
  );
};

export default Course;
