import React from "react";
import { IoAdd } from "react-icons/io5";
const AddButton = () => {
  return (
    <>
      <button className={`border-2 border-black rounded-full p-1 text-4xl`}>
        <IoAdd />
      </button>
    </>
  );
};

export default AddButton;
