import React from "react";

interface TagProp {
  name: string;
  color: string;
}
const Tag: React.FC<TagProp> = ({ name, color }) => {
  return (
    <>
      <div
        className={`rounded-2xl text-white px-3 py-1 text-xs mr-1 mb-1 font-thin`}
        style={{ backgroundColor: `#${color}` }}
      >
        {name}
      </div>
    </>
  );
};

export default Tag;
