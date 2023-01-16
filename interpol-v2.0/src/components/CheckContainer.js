import React from "react";
import { useSelector } from "react-redux";
import CheckCard from "./CheckCard";
import "./CheckContainer.css";

const CheckContainer = () => {
  const check = useSelector((state) => state.check.check);
  // console.log(check);

  return (
    <div className="check-container">
      <div className="check-container-header">
        <h3>Results: {check?.length || 0}</h3>
      </div>
      <div className="check-container-body">
        {check?.map((item, i) => (
          <CheckCard
            key={i}
            forename={item?.forename}
            name={item?.name}
            dateOfBirth={item?.date_of_birth}
            photo={item?._links?.thumbnail?.href}
            nationality={item?.nationalities}
            self={item?._links?.self?.href}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckContainer;
