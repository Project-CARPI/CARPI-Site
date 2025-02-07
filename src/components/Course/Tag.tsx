import React from "react";

interface TagProp {
  name: string;
  color: string;
}
const Tag: React.FC<TagProp> = ({ name, color }) => {
  return (
    <>
      <div className={`bg-[#${color}] rounded-2xl text-white px-4 py-1`}>
        {name}
      </div>
    </>
  );
};

export default Tag;
