import React from "react";
import sampleImage from "./sampleimage.jpeg";

const ContentCard = ({ groupName }) => {
  return (
    <div className="overflow-scroll text-center w-full">
      <div className="w-2/3 h-96 bg-white mb-20 shadow-2xl border-2 border-gray-400 rounded-lg mx-auto border-opacity-50">
        <img src ={sampleImage} className = "w-screen h-1/2 rounded-lg"></img>
        {groupName}
      </div>
    </div>
  );
};
export default ContentCard;
