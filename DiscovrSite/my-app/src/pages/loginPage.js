import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar";
import LoginForm from "../components/profilePage/loginForm";
import jquery, { data } from "jquery"
import PostLogin from "./postLogin";

const LoginPage = ({ match }) => {

  const [currentCTAID, setCurrentCTAID] = useState(null);

return(
    <div className = "flex w-screen">
        <SideBar selected={"profile"}></SideBar>
      <div className = "w-screen">
      <LoginForm></LoginForm>
    </div>
    </div>
)


}
export default LoginPage;