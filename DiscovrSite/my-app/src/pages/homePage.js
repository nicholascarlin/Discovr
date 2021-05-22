import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import sideBar from "../components/homePage/sideBar";
const homePage = ({ match }) => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-750 h-screen">
        <div className="col-span-2 h-full border-r-2  overflow-hidden">
          <p className="text-center pt-8">Discovr</p>
          <p className="py-2 mt-16 text-center hover:bg-gray-200 border-l-4 hover:border-yellow-400 cursor-pointer">
            Home
          </p>
          <p className="py-2 mt-2 text-center hover:bg-gray-200 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400">
            Groups
          </p>
          <p
            className="py-2 mt-2 text-center hover:bg-gray-200 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400"
            onClick={(e) => {
              e.preventDefault();
              console.log("login page");
              window.location.href = "/login";
            }}
          >
            Profile
          </p>
        </div>
        <div className="col-start-3 col-end-9 overflow-scroll w-full">
          <div>
            <div className="col-span-8 text-center py-4 ">
              <input
                type="text"
                className="border-2 border-black rounded-xl w-3/4 outline-none text-center"
                placeholder="search"
              ></input>
            </div>
          </div>
          <div className="overflow-scroll">
            <p className="text-xl text-center py-8">Browse</p>
            <div className="w-3/4 border-black rounded-xl mx-auto text-center">
              <button className="border-black border-2 rounded-xl py-2 px-4 hover:bg-blue-200 mr-8">
                Food
              </button>
              <button className="border-black border-2 rounded-xl py-2 px-4 hover:bg-blue-200 mr-8">
                Music
              </button>
              <button className="border-black border-2 rounded-xl py-2 px-4 mr-8 hover:bg-blue-200">
                Drugs
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-10 col-end-12"> Hello Three</div>
      </div>
    </div>
  );
};

export default homePage;
