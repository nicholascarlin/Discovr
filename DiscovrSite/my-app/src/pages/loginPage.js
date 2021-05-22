import React, { useState, useEffect } from "react";


const homePage = ({ match }) => {
return(
    <div>
        <p>Login</p>
        <input className = "border-2 border-black rounded-xl outline-none"></input>
        <br></br>
        <input className = "border-2 border-black rounded-xl outline-none"></input>
        <button>Submit</button>
    </div>
)


}
export default homePage;