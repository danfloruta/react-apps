import React from "react";
import "./CheckTool.css";
import CheckComponent from "../components/CheckComponent";
import CheckContainer from "../components/CheckContainer";

const CheckTool = () => {
  return (
    <div className="container check-tool">
      <div className="check-grid">
        <CheckComponent />
        <CheckContainer />
      </div>
    </div>
  );
};

export default CheckTool;
