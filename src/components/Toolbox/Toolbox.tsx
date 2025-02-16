import React, { useState } from "react";
import ToolboxButton from "./ToolboxButton";
import NavButton from "./NavButton";
import ToolboxCourse from "./ToolboxCourse";

import { IoIosArrowDown } from "react-icons/io";

interface ToolboxProps {
  courses: { [key: string]: number };
}

const Toolbox: React.FC<ToolboxProps> = ({ courses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleToolbox = () => {
    setIsOpen((open) => !open);
  };

  const toolboxSum = () => {
    let sum = 0;
    Object.values(courses).forEach((value) => (sum += value));
    return sum;
  };
  return (
    <>
      <div className={`fixed bottom-0 w-screen`}>
        <ToolboxButton
          isOpen={isOpen}
          toggleToolbox={toggleToolbox}
          count={toolboxSum()}
        />
        <div className={`flex justify-center`}>
          <div
            className={`${isOpen ? "" : "hidden"} bg-[#283044] h-36 w-screen rounded-t-xl`}
          >
            <div className={`close-toolbox`}>
              <button
                className={`flex items-center text-[#F5CECE] font-semibold mt-2 mx-5 text-xl p-1`}
                onClick={toggleToolbox}
              >
                TOOLBOX
                <IoIosArrowDown className={`mx-2`} />
              </button>
            </div>
            <div
              className={`courses h-13 flex items-center px-2 w-screen overflow-x-auto whitespace-nowrap scrollbar-hide`}
            >
              {Object.entries(courses).map(([key, value]) => (
                <ToolboxCourse key={key} name={key} count={value} />
              ))}
            </div>
          </div>
          <NavButton />
        </div>
      </div>
    </>
  );
};

export default Toolbox;
