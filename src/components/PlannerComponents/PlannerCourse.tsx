import React, { useState, useEffect, useRef } from "react";
import { MdDragIndicator, MdOutlineMoreHoriz } from "react-icons/md";
import { CourseType } from "../../types/interfaces/Course.interface";

interface PlannerCourseProps {
  course: CourseType;
}

const PlannerCourse: React.FC<PlannerCourseProps> = ({ course }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(true);
  const togglePopup = () => {
    setOpenPopup((open) => !open);
  };

  const componentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      componentRef.current &&
      event.target instanceof Node &&
      !componentRef.current.contains(event.target)
    ) {
      setOpenPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-[#283044] w-3/4 h-18 rounded-lg text-[#F5CECE] flex items-center relative`}
      >
        <div className={`flex justify-between w-11/12 m-auto text-2xl`}>
          <div className={`flex items-center`}>
            <MdDragIndicator />
            <div className={`text-sm ml-1`}>
              <b>
                {course.department}
                {course.code}
              </b>
              <p>{course.name}</p>
            </div>
          </div>
          <div className={`flex items-center`}>
            <div
              className={`rounded-full bg-[#F5CECE] text-[#283044] w-5 h-5 flex items-center justify-center text-sm mr-1 font-medium`}
            >
              <p>{course.credits}</p>
            </div>
            <MdOutlineMoreHoriz onClick={togglePopup} />
          </div>
        </div>
        <div
          className={`${openPopup ? "hidden" : ""} absolute h-fit w-fit bg-[#F5CECE] rounded-xl border-1 border-slate-500 text-[#283044] text-xs -right-4 -bottom-20 *:*:px-1 p-1 *:*:py-1 *:pr-6`}
          ref={componentRef}
        >
          <div className={`h-1/2 relative flex flex-col items-start pb-1 `}>
            <button>Duplicate</button>
            <button>Move to next sem</button>
          </div>
          <hr />
          <div className={`h-1/2 relative flex flex-col items-start pt-1`}>
            <button>Back to toolbox</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlannerCourse;
