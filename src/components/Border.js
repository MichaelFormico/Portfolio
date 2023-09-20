import React from "react";
import backgroundPortfolio from "./images/backgroundPortfolio.gif";
import "./Border.css";

const Border = ({ children }) => {
  return (
    <div className="fixed inset-6 border-4 border-teal overflow-hidden h-9/10">
      <div id="backgroundgif">{children}</div>
    </div>
  );
};

export default Border;
