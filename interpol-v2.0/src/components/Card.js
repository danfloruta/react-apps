import React from "react";
import "./Card.css";
import profilePic from "../test-photos/profilePic.jpg";
import { Link } from "react-router-dom";

const Card = ({ fullName, birthdate, nationalities, photo, color, self }) => {
  // const nat = nationalities[0]?.toLowerCase();

  return (
    <div className="cards">
      <div className="card-header">
        <div style={{ backgroundColor: color }} className="card-color"></div>
        <img className="card-photo" src={photo || profilePic} alt="" />
      </div>
      <div className="card-body">
        <h5 className="name">Full Name: {fullName} </h5>
        <div className="card-body-details">
          <p className="date-of-birth">Date of birth: {birthdate}</p>
          <p className="age">
            Age: {new Date().getFullYear() - birthdate.slice(0, 4)}
          </p>
          <p className="nationalities">Nationalities: {nationalities}</p>
        </div>
        <div className="card-footer">
          <Link
            to="/details"
            state={{
              self,
            }}
            className="btn btn-secondary"
          >
            View more info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
