import React from "react";

const SideBar = ({selected})=> {
   

    let homeStyle = "py-2 mt-12  ml-1 text-center hover:bg-gray-200 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400"
    let profileStyle = "py-2 mt-2 ml-1 text-center hover:bg-gray-200 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400"
    let groupStyle = "py-2 mt-2 ml-1 text-center hover:bg-gray-200 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400"
   
    switch(selected) {
        case "home":
            homeStyle = "py-2 mt-12 text-center hover:bg-gray-20 0 border-l-4 ml-1 border-yellow-400 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400 "
            break;
        case "profile":
            profileStyle = "py-2 mt-2 text-center hover:bg-gray-20 0 border-l-4 ml-1 border-yellow-400 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400 "
            break;
            case "group":
            groupStyle = "py-2 mt-2 text-center hover:bg-gray-20 0 border-l-4 ml-1 border-yellow-400 cursor-pointer hover:bg-gray-200 border-l-4 hover:border-yellow-400 "
            break;
        default:
            let doNothing = ""
            break;
        }


return (

<div className="text-center bg-gray-750 h-screen w-1/6 max-w-sm border-r-2 border-gray-200 border-opacity-10">

            <div className = "mt-8">
            <span className="text-center pt-8 text-blue-600 text-4xl font-bold">
            Discovr
          </span>
            </div>

          <p id = "home" className={homeStyle}
          
          onClick={(e) => {
              e.preventDefault();
              console.log("login page");
              window.location.href = "/";
            }}>
            Home
            
          </p>
          <p id = "groups" className={groupStyle}>
            Groups
          </p>
          <p id = "profile"
            className={profileStyle}
            onClick={(e) => {
              e.preventDefault();
              console.log("login page");
              window.location.href = "/login";
            }}
          >
            Profile
          </p>
        </div>
)

      
        }
export default SideBar;