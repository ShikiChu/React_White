import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
// import "./index.css";
import "./style/index.css"; // changed by miku abe 20231002
 
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