import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportsActions } from "../store/reports-slice";
import { Close } from "grommet-icons";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { postDataToApi } from "../store/reports-actions";

const Modal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [color, setColor] = useState("");
  const [sex, setSex] = useState("");
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports.reports);
  const navigate = useNavigate();
  const id = reports.length + 1;

  const createReportHandler = (e) => {
    e.preventDefault();
    dispatch(
      reportsActions.createReport({
        id,
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        imgUrl,
        color,
        sex,
      })
    );
    dispatch(
      postDataToApi({
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        imgUrl,
        color,
        sex,
        id,
      })
    );
    dispatch(reportsActions.changeReportsModal());
    navigate("/myreports");

    console.log(reports);
  };

  const closeModalHandler = () => {
    dispatch(reportsActions.changeReportsModal());
  };

  return (
    <div className="modal-reports">
      <form className="form-modal" onSubmit={createReportHandler}>
        <div className="contain-form">
          <div className="reports-header">
            <h4>Create</h4>
            <Close className="close-btn" onClick={closeModalHandler} />
          </div>
          <div className="modal-body">
            <div className=" report-detail reports-firstName">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=" report-detail reports-lastName">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" report-detail reports-dateOfBirth">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="text"
                id="lastName"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className=" report-detail reports-nationality">
              <label htmlFor="nationality">Nationality:</label>
              <input
                type="text"
                id="nationality"
                value={nationality}
                placeholder="Example: Ro"
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="report-detail reports-imgUrl">
              <label htmlFor="imgUrl">Img url:</label>
              <input
                type="text"
                id="imgUrl"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
            <div className="report-detail reports-color">
              <label htmlFor="color">Notice color:</label>
              <input
                type="text"
                id="color"
                value={color}
                placeholder="red/yellow"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="report-detail reports-sex">
              <label htmlFor="sex">Sex:</label>
              <div className="radios-sex">
                <div className="radio-individual">
                  <input
                    type="radio"
                    name="Male"
                    id="male"
                    value={sex}
                    onChange={() => setSex("M")}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-individual">
                  <input
                    type="radio"
                    name="Female"
                    id="female"
                    value={sex}
                    onChange={() => setSex("F")}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <button className="btn btn-secondary" onClick={closeModalHandler}>
              Close
            </button>
            <button className="btn btn-danger" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
