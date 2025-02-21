import React from "react";
import { IoClose } from "react-icons/io5";

interface ChosenTagProp {
  name: string;
  onRemove: ( name: string ) => void;
}

const ChosenTag: React.FC<ChosenTagProp> = ({ name, onRemove }) => {
  return (
    <>
      <div className={`rounded-2xl text-white px-3 py-1 text-sm mr-1 mb-1 font-thin bg-darkblue inline`} >
        {name}
        <IoClose className="inline ml-1" onClick={() => onRemove(name)}/>
      </div>
    </>
  );
};

export default ChosenTag;