import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";
 
// ReactDOM.render(
//   <Main/>, 
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Main />
  </React.StrictMode>
);