import React from "react";
import { PiToolbox } from "react-icons/pi";

interface ToolboxButtonProps {
  toggleToolbox: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  count: number;
}
const ToolboxButton: React.FC<ToolboxButtonProps> = ({
  toggleToolbox,
  isOpen,
  count,
}) => {
  return (
    <>
      <button
        className={`${isOpen ? "hidden" : ""} bg-[#283044] rounded-full text-[#F5CECE] text-5xl p-4
        border-[#F5CECE] border-1 m-2 absolute bottom-10 right-0`}
        onClick={toggleToolbox}
      >
        <div
          className={`${
            count === 0 ? "hidden" : ""
          } absolute -top-1 -right-2  rounded-full bg-[#78A1BB] w-8 h-8 flex justify-center items-center text-white text-lg`}
        >
          <p>{count}</p>
        </div>
        <PiToolbox />
      </button>
    </>
  );
};

export default ToolboxButton;
