import React, { useState } from "react";
import Course from "../components/Course/Course";
import SearchBar from "../components/SearchBar/SeachBar";

interface CatalogProps {
  toolboxCourses: { [key: string]: number };
  setToolboxCourses: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}

const Catalog: React.FC<CatalogProps> = ({ toolboxCourses, setToolboxCourses }) => {
  const [searchResults, updateSearchResults] = useState([]);

  return (
    <>
      <img src="/carpi-black.png" alt="Carpi Logo" className="w-1/4 m-auto mt-5"/>
      <SearchBar updateSearchResults={updateSearchResults}/>
      <div className="flex flex-wrap justify-center pb-38">
        {searchResults?.map((course: any, index: number) => (
          <Course key={index} course={course} toolboxCourses={toolboxCourses} setToolboxCourses={setToolboxCourses} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
