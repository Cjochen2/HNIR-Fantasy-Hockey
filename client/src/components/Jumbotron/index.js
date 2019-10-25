import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
      <img src={require("../../pages/Draft/images/hnir1.png")} className="image1" alt="logo" />
      {children}
      <img src={require("../../pages/Draft/images/hnir1.png")} className="image2" alt="logo" />
    </div>
  );
}

export default Jumbotron;
