import React from "react";
import "./CheckCard.css";
import profilePic from "../test-photos/profilePic.jpg";
import { Link } from "react-router-dom";

const CheckCard = ({
  forename,
  name,
  dateOfBirth,
  nationality,
  photo,
  self,
}) => {
  return (
    <div className="check-card">
      <div className="card-header">
        <img
          className="report-img check-card-img"
          src={photo || profilePic}
          alt=""
        />
      </div>
      <div className="report-card-body">
        <h3>
          Full Name: {forename} {name}
        </h3>
        <p className="report-card-detail">Date of birth: {dateOfBirth}</p>
        <p className="report-card-detail">
          Age: {new Date().getFullYear() - dateOfBirth?.slice(0, 4)}
        </p>
        <p className="report-card-detail">Nationalities: {nationality}</p>
        <div className="report-card-footer">
          <Link
            to="/details"
            state={{ self }}
            className={`btn btn-${self.includes("red") ? "danger" : "warning"}`}
          >
            View more info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckCard;
