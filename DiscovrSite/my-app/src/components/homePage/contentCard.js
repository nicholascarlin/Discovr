import React from "react";
import sampleImage from "./sampleimage.jpeg";


const ContentCard = ({ groupName }) => {
  let ranNum = Math.random()
  let height= ""
  let marginBottom = ""
  let gap = ""



  if(ranNum >= 0 && ranNum <= .4){
      height = "80"
      marginBottom = " mb-2"
  } else if(ranNum >= .41 && ranNum <= .75){
      height = "96"
      marginBottom = "mb-4"
  } else if(ranNum >= .76 && ranNum <= 1){
    height = "72"
    marginBottom = "mb-12"
  } else {
    height = "96"
  }



  
  console.log(height)
  let imgSize = "w-5/6 h-"+height+" bg-white "+ marginBottom+" shadow-inner border-2 border-gray-400 rounded-lg mx-auto border-opacity-50"
  return (
    <div className="overflow-scroll text-center w-full">
      <div className={imgSize}>
        <img src ={sampleImage} className = "w-screen h-1/4 rounded-lg"></img>
        {groupName}
      </div>
    </div>
  );
};
export default ContentCard;
