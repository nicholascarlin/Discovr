import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-s3ta1m8l.us.auth0.com"
    clientId="qxGlHDNaNC7XZ09PKu2hHcf1t7XEJZpk"
    redirectUri={"/"}
  >


    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
