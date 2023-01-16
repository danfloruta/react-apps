import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getDataSelf } from "../store/list-actions";
import "./Details.css";

const Details = () => {
  const { self } = useLocation().state;
  const details = useSelector((state) => state.list.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(self);

  useEffect(() => {
    dispatch(getDataSelf(self));
  }, []);

  console.log(details);
  console.log(self.includes("yellow"));

  return (
    <div className="container">
      <button
        className={`btn btn-${self.includes("red") ? "danger" : "warning"}`}
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="title-container m-3">
        <h3
          className={`btn btn-${self.includes("red") ? "danger" : "warning"}`}
        >
          {self.includes("red") ? "RED Notice" : "Yellow Notice"}{" "}
          {details.forename} {details.name}
        </h3>
      </div>
      <div className="details-n-photo">
        <div className="details-detail">
          <h5 className="detail">Eye Color: {details.eyeColor || "null"}</h5>
          <h5 className="detail">Weight: {details.weight || "null"}</h5>
          <h5 className="detail">Height: {details.height || "null"}</h5>
          <h5 className="detail">
            Date of birth: {details.birthdate || "null"}
          </h5>
          <h5 className="detail">
            Country of birth: {details.country || "null"}
          </h5>
          <h5 className="detail">Sex: {details.sex || "null"}</h5>
          <h5 className="detail">
            Place of birth: {details.placeOfBirth || "null"}
          </h5>
          <h5 className="detail">
            Nationalities: {details.nationalities || "null"}
          </h5>
        </div>
        <div className="photo">
          <img src={details.images || "no photo"} alt="" />
        </div>
      </div>
      <div className="arrest-warrants">
        <button
          className={`btn btn-${self.includes("red") ? "danger" : "warning"}`}
        >
          Arrest Warrants:
        </button>
        <div
          className="charges-container"
          style={{
            border: `2px solid ${self.includes("red") ? "red" : "yellow"}`,
          }}
        >
          <h5 className="issue-country">
            Issuing Country: {details.issuingCountry || "null"}
          </h5>
          <div className="charges">
            <h3 style={{ color: `${self.includes("red") ? "red" : "yellow"}` }}>
              Charged with:
            </h3>
            <p>{details.charge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
