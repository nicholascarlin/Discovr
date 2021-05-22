import React, { useState, useEffect } from "react";

import sideBar from "../components/homePage/sideBar";
const homePage = ({ match }) => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-orange-200">
        <div className="col-span-2 text-center py-4 text-xl">Discovr</div>
        <div className="col-span-8 text-center py-4 ">
          <input
            type="text"
            className="border-2 border-black rounded-xl w-1/3 outline-none text-center"
            placeholder="search"
          ></input>
        </div>

        <div className="col-span-2"></div>
        <div className="col-span-2 h-full border-r-2">
          <p className="py-8 text-center hover:bg-gray-200 cursor-pointer ">
            Home
          </p>
          <p className="py-8 text-center hover:bg-gray-200 cursor-pointer">
            Groups
          </p>
          <p className="py-8 text-center hover:bg-gray-200 cursor-pointer">
            Profile
          </p>
        </div>
        <div className="col-span-4 overflow-scroll">Hello Two</div>
        <div className="col-start-10 col-end-12"> Hello Three</div>
      </div>
    </div>
  );
};

export default homePage;
