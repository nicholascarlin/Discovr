import React from "react";

const ContentCard = ({ groupName }) => {
  return (
    <div className="overflow-scroll mx-auto">
      <div className="w-96 h-80 bg-gray-200 mb-20 overflow-scroll shadow-2xl ml-10 border-2 border-gray-400 rounded-lg">
        {groupName}
      </div>
    </div>
  );
};
export default ContentCard;
