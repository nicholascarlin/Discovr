import React, { useState, useEffect } from "react";
import SideBar from "../components/homePage/sideBar";


const homePage = ({ match }) => {
return(
    <div className = "flex w-screen">
        <SideBar selected={"profile"}></SideBar>
    <div className = "w-screen">
        <p>Login</p>
        <input className = "border-2 border-black rounded-xl outline-none"></input>
        <br></br>
        <input className = "border-2 border-black rounded-xl outline-none"></input>
        <button>Submit</button>
        </div>

    </div>
)


}
export default homePage;