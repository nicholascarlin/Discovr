import React from "react";

const LoginForm = ({}) => {
  
  
  
    return (
    <div id="login">
      <div id="login-container" className="text-center mt-48">
        <p id="login-header"></p>
        <p id="carlton-grenet" className="text-center">Discovr</p>
        <input type="text" placeholder="Username" id="username" className="text-center w-96 border-2 border-black-200"></input>
        <br></br>
        <input type="password" placeholder="Password" id="password" className="text-center w-96 border-2 border-black-200 mt-4"></input>
        <br></br>
        <button
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
  );
};
export default LoginForm;
