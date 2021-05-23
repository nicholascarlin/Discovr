import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar";
import LoginForm from "../components/profilePage/loginForm";
import jquery, { data } from "jquery"

const homePage = ({ match }) => {
return(
    <div className = "flex w-screen">
        <SideBar selected={"profile"}></SideBar>
      <div className = "w-screen">
      <LoginForm></LoginForm>
    </div>
    </div>
)


}
export default homePage;