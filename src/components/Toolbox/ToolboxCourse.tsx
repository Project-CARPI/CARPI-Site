import React from "react";

interface ToolboxCourseProps {
  name: string;
  count: number;
}

const ToolboxCourse: React.FC<ToolboxCourseProps> = ({ name, count }) => {
  return (
    <>
      <div
        className={`bg-[#D9D9D9] w-fit px-3 rounded-lg py-1 relative mx-2 whitespace-nowrap overflow-visible`}
      >
        <div
          className={`${
            count === 1 ? "hidden" : ""
          } absolute -top-2 -right-2  rounded-full bg-[#78A1BB] w-6 h-6 flex justify-center items-center text-white text-sm`}
        >
          <p>{count}</p>
        </div>
        {name}
      </div>
    </>
  );
};

export default ToolboxCourse;
