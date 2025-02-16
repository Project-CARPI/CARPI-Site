import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavButton = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Link
        className={`bg-[#283044] text-[#F5CECE] border-[#F5CECE] border-1 px-[35vw] rounded-t-2xl py-1 absolute bottom-0`}
        to={`${path == "/" ? "/planner" : "/"}`}
      >
        {path == "/" ? "Go to Planner" : "Go to Courses"}
      </Link>
    </>
  );
};

export default NavButton;
