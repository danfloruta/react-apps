import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReportCard from "../components/ReportCard";
import { getDataFromApi } from "../store/reports-actions";

import "./MyReports.css";

const MyReports = () => {
  const reports = useSelector((state) => state.reports.reports);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  return (
    <div className="container my-reports">
      <div className="my-reports-title">
        <h3 className="btn btn-danger">My Reports:</h3>
      </div>

      <div className="my-reports-reports">
        {reports.map((item, i) => (
          <ReportCard
            key={i}
            item={item}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            dateOfBirth={item.dateOfBirth}
            nationality={item.nationality}
            imgUrl={item.imgUrl}
            color={item.color}
            sex={item.sex}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReports;
