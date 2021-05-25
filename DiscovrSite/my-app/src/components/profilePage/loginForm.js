import React from "react";

const LoginForm = ({}) => {
    let isLoggedIn = true;

  
  
    return isLoggedIn ? (
    <div id="login">
      <div id="login-container" className="text-center mt-24">
        <p id="login-header"></p>
        <p id="carlton-grenet" className="text-center text-4xl text-blue-600 mb-12 font-bold">Discovr</p>
        <input type="text" placeholder="Username" id="username" className="focus:outline-none rounded-lg text-center w-96 h-10 border-2 border-black-200 "></input>
        <br></br>
        <input type="password" placeholder="Password" id="password" className="focus:outline-none rounded-lg text-center h-10 w-96 border-2 border-black-200 mt-8"></input>
        <br></br>
        <button className = "mt-12  w-1/4 rounded-lg duration-200 h-12 hover:bg-blue-400 hover:bg-opacity-20"
          id="login-submit"
          onClick={() => {
            let data = {
              username: document.getElementById("username").value,
              password: document.getElementById("password").value,
            };

            fetch("http://localhost:8000/submitLogin", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then(
                (response) => {
                  console.log(response);
                  window.location.href("/");
                },
                (error) => {
                  console.log(error);
                }
              );
          }}
        >
          Login
        </button>
      </div>
    </div>
  ) : (
    <div>Welcome Back</div>
  )
};
export default LoginForm;
