import React from "react";
import { MdDragIndicator, MdOutlineMoreHoriz } from "react-icons/md";
import { CourseType } from "../../types/interfaces/Course.interface";

interface PlannerCourseProps {
  course: CourseType;
}

const PlannerCourse: React.FC<PlannerCourseProps> = ({ course }) => {

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <div
        className={`bg-[#283044] w-3/4 h-18 rounded-lg text-[#F5CECE] flex items-center`}
      >
        <div className={`flex justify-between w-11/12 m-auto text-2xl`}>
          <div className={`flex items-center`}>
            <MdDragIndicator />
            <div className={`text-sm ml-1`}>
              <b>
                {course.dept}
                {course.code_num}
              </b>
              <p>{toTitleCase(course.title)}</p>
            </div>
          </div>
          <div className={`flex items-center`}>
            <div
              className={`rounded-full bg-[#F5CECE] text-[#283044] w-5 h-5 flex items-center justify-center text-sm mr-1 font-medium`}
            >
              <p>{course.credit_max}</p>
            </div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlannerCourse;
