import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkPersonAction } from "../store/check-actions";
import "./CheckComponent.css";

const CheckComponent = () => {
  const [forename, setForename] = useState("");
  const [name, setName] = useState("");
  const [nationalities, setNationalities] = useState("");
  const [ageMax, setAgeMax] = useState(100);
  const [ageMin, setAgeMin] = useState(0);
  const [sexId, setSexId] = useState("");
  const dispatch = useDispatch();

  const checkSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      checkPersonAction({
        forename,
        name,
        nationalities,
        ageMax,
        ageMin,
        sexId,
      })
    );
    console.log(forename, name, nationalities, ageMin, ageMax, sexId);
  };

  return (
    <div className="check-tool-container ">
      <div className="check-tool-header">
        <h3>Check Tool</h3>
      </div>
      <div className="check-tool-body">
        <form onSubmit={checkSubmitHandler}>
          <div className="firstName detail">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={forename}
              onChange={(e) => setForename(e.target.value)}
            />
          </div>

          <div className="lastName detail">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="nationalities detail">
            <label htmlFor="nationalities">Nationality:</label>
            <input
              type="text"
              name="nationalities"
              id="nationalities"
              placeholder="Example input: RO"
              value={nationalities}
              onChange={(e) => setNationalities(e.target.value)}
            />
          </div>
          <div className="age detail">
            <div className="age-min">
              <label htmlFor="ageMin">Min Age: {ageMin}</label>
              <input
                type="range"
                name="ageMin"
                id="ageMin"
                value={ageMin}
                onChange={(e) => setAgeMin(e.target.value)}
              />
            </div>
            <div className="age-max">
              <label htmlFor="ageMax">Max Age: {ageMax}</label>
              <input
                type="range"
                name="ageMax"
                id="ageMax"
                value={ageMax}
                onChange={(e) => setAgeMax(e.target.value)}
              />
            </div>
          </div>
          <div className="sex detail">
            <label htmlFor="">Sex:</label>
            <div className="sex-fe-ma">
              <div className="female">
                <input
                  type="radio"
                  name="female"
                  id="female"
                  value={sexId}
                  onChange={(e) => setSexId("F")}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="male">
                <input
                  type="radio"
                  name="male"
                  id="male"
                  value={sexId}
                  onChange={(e) => setSexId("M")}
                />
                <label htmlFor="male">Male</label>
              </div>
            </div>
          </div>
          <div className="buttons-check-component detail">
            <div className="btn btn-warning">Reset</div>
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckComponent;
