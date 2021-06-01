import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ContentCard from "../components/homePage/contentCard";
import SideBar from "../components/sideBar";
import LoginButton from "../components/LoginButton"
import PostLogin from "./postLogin";

const HomePage = ({ match }) => {
  let sampleData = {
    groups: ["one", "two", "three", "four", 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  };

    const {
      data: Userdata,
      error: userError
    } = PostLogin("jo", "j");
  
    console.log("here two")
  
    console.log("UserDATA IS "+Userdata)




  return (
      <div>
    <div className = "flex">
        
        <SideBar selected = {"home"}></SideBar>


  
         
      <div className="grid grid-cols-10 bg-gray-750 h-screen w-screen">
        
        <div className="col-span-8 col-start-1 col-end-9 text-center mt-10 pb-10">
          <input
            type="text"
            className="mx-auto h-10 rounded-3xl font-serif w-3/4 outline-none text-center placeholder-black placeholder-opacity-60"
            placeholder="Search For Anything"
          ></input>
         <LoginButton></LoginButton>
        </div>
        <div className="col-span-2 col-start-9 col-end-10"></div>

       
        <div className="col-start-1 col-end-9 col-span-8 w-full overflow-scroll  ">
            <p className="text-xl text-left py-8 ml-8 font-sans text-4xl">Browse</p>
            <div className="w-3/4 border-black pb-8 ml-8 font-sans text-left border-b-2 border-gray-400">
              <button className="groupsButton hover:groupsButton">
                Food 
              </button>
              <button className="groupsButton hover:groupsButton">
                Music
              </button>
              <button className="groupsButton hover:groupsButton">
                Drugs 
              </button>
            </div>
            <div className = "grid gap-y-0 grid-cols-3  mt-8 overflow-scroll mx-auto" >
            {sampleData.groups.map((item) => {
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

export default HomePage;
