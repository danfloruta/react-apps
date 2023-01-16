import React from "react";
import { Link } from "react-router-dom";
import "./EarthQuake.css";

const EarthQuake = ({ mag, title, detail }) => {
  const applyColor = () => {
    if (mag <= 2.5) {
      return "green";
    }
    if (mag >= 2.5 && mag < 4.5) {
      return "rgb(173, 173, 21)";
    }
    if (mag >= 4.5) {
      return "red";
    }
  };
  // console.log(detail);

  return (
    <div className="eq-container">
      <div className="mag-title-cont">
        <p className="p-mag" style={{ backgroundColor: applyColor() }}>
          {mag?.toFixed(2)}
        </p>
        <p className="p-title">{title}</p>
      </div>
      <div className="btn-container">
        <Link
          style={{ backgroundColor: applyColor() }}
          className="btn m-1 btn-details"
          to="/details"
          state={{ detail }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EarthQuake;
