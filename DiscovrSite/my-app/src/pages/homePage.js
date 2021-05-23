import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ContentCard from "../components/homePage/contentCard";
import SideBar from "../components/homePage/sideBar";
import sideBar from "../components/homePage/sideBar";
const homePage = ({ match }) => {
  let sampleData = {
    groups: ["one", "two", "three", "four", 'five', 'six', 'seven', 'eight'],
  };
  return (
      <div>
    <div className = "flex">
        
        <SideBar selected = {"home"}></SideBar>


  
         
      <div className="grid grid-cols-10 bg-gray-750 h-screen w-screen">
        
        <div className="col-span-8 col-start-1 col-end-9 text-center mt-10 ">
          <input
            type="text"
            className="mx-auto border-2 border-gray-300 rounded-lg w-3/4 outline-none text-center"
            placeholder="search"
          ></input>
         
        </div>
        <div className="col-span-2 col-start-9 col-end-10"></div>

       
        <div className="col-start-1 col-end-9 col-span-8 w-full overflow-scroll">
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
            <div className = "grid grid-cols-1 mt-8 overflow-scroll " >
            {sampleData.groups.map((item) => {
              console.log("here");
              return <ContentCard groupName={item}></ContentCard>;
            })}
            </div>
            
          </div>
          <div className="col-start-9 col-end-10"> Hello Three</div>
        </div>
        </div>
      </div>
  
  );
};

export default homePage;
