import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        WorldEarthQuakes by Dan Floruta Copyright &copy; 2022
      </div>
      <div className="info">
        DATA Source: The USGS Earthquake Hazards Program of the U.S. Geological
        Survey (USGS), part of the National Earthquake Hazards Reduction Program
        (NEHRP) led by the National Institute of Standards and Technology(NIST)
      </div>
    </footer>
  );
};

export default Footer;
