import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDataFromApi } from "../store/reports-actions";
import { reportsActions } from "../store/reports-slice";
import "./ReportCard.css";

const ReportCard = ({
  item,
  firstName,
  lastName,
  dateOfBirth,
  nationality,
  imgUrl,
  color,
  sex,
}) => {
  const id = item.id;
  const reports = useSelector((state) => state.reports.reports);
  const dispatch = useDispatch();

  const deleteCardHandler = (id) => {
    dispatch(reportsActions.deleteReport(id));
    dispatch(deleteDataFromApi(id));
  };

  const openUpdateHandler = () => {
    dispatch(reportsActions.changeReportsUpdateModal());
    dispatch(reportsActions.getId(id));
  };

  console.log(id, reports);

  return (
    <div className="report-card">
      <div className="card-header">
        <div
          style={{ backgroundColor: `${color === "red" ? "red" : "yellow"}` }}
          className="color"
        ></div>
        <img className="report-img" src={imgUrl} alt="" />
      </div>
      <div className="report-card-body">
        <h3>
          Full Name: {firstName} {lastName}
        </h3>
        <p className="report-card-detail">Date of birth: {dateOfBirth}</p>
        <p className="report-card-detail">Sex: {sex}</p>
        <p className="report-card-detail">Nationalities: {nationality}</p>
      </div>
      <div className="report-card-footer">
        <Link
          onClick={() => openUpdateHandler()}
          className="btn btn-secondary"
          state={{ newId: id }}
        >
          Edit Info
        </Link>
        <button
          onClick={() => deleteCardHandler(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
