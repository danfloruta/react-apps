import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <h5>&copy; PopcornTime Copyright 2022</h5>
      <div className="icons">
        <SocialIcon url="https://facebook.com/danfloruta" target="_blank" />
        <SocialIcon url="https://twitter.com/" target="_blank" />
      </div>
    </footer>
  );
};

export default Footer;
