import React from "react";
import { MdDragIndicator, MdOutlineMoreHoriz } from "react-icons/md";
import { CourseType } from "../../types/interfaces/Course.interface";

interface PlannerCourseProps {
  course: CourseType;
}

const PlannerCourse: React.FC<PlannerCourseProps> = ({ course }) => {
  return (
    <>
      <div
        className={`bg-[#283044] w-3/4 h-18 rounded-lg text-[#F5CECE] flex items-center`}
      >
        <div className={`flex justify-between w-11/12 m-auto text-3xl`}>
          <div className={`flex items-center`}>
            <MdDragIndicator />
            <div className={`text-base ml-1`}>
              <b>
                {course.department}
                {course.code}
              </b>
              <p>{course.name}</p>
            </div>
          </div>
          <div className={`flex items-center `}>
            <div>
              <p></p>
            </div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlannerCourse;
