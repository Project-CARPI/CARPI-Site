import React, { useState, useEffect, useRef } from "react";
import { MdDragIndicator, MdOutlineMoreHoriz } from "react-icons/md";
import { CourseType } from "../../types/interfaces/Course.interface";

interface PlannerCourseProps {
  course: CourseType;
}

const PlannerCourse: React.FC<PlannerCourseProps> = ({ course }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const togglePopup = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenPopup((prev) => !prev);
  };

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

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className={`bg-[#283044] w-3/4 h-18 rounded-lg text-[#F5CECE] flex items-center relative`}>
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
          <MdOutlineMoreHoriz
            onClick={togglePopup}
            className="cursor-pointer"
          />
        </div>
      </div>
      

      {/* Popup Menu */}
      {openPopup && (
        <div
          ref={componentRef}
          className="absolute bg-[#F5CECE] rounded-xl border border-slate-500 text-[#283044] text-xs p-2 right-0 top-8 shadow-lg"
        >
          <div className="flex flex-col items-start space-y-1">
            <button className="hover:bg-gray-300 p-1 w-full text-left">
              Duplicate
            </button>
            <button className="hover:bg-gray-300 p-1 w-full text-left">
              Move to next sem
            </button>
            <hr className="w-full border-gray-400" />
            <button className="hover:bg-gray-300 p-1 w-full text-left">
              Back to toolbox
            </button>
            <button className="hover:bg-red-300 p-1 w-full text-left">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerCourse;