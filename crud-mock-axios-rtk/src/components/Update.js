import React from "react";
import "./Create.css";

import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/table-slice";
import { replaceDataFromApi } from "../store/table-actions";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const items = useSelector((state) => state.table.items);
  const location = useLocation();
  const id = location.state.id;
  // console.log(location.state.id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const replaceDataHandler = (e) => {
    e.preventDefault();
    dispatch(
      replaceDataFromApi({
        id,
        email,
        address,
        name,
        age,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="title">
        <h1>Update</h1>
      </div>
      <form onSubmit={replaceDataHandler}>
        <div className="name detail">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="age detail">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="email detail">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="address detail">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="submit">
          <button
            style={{ color: "white" }}
            className="btn btn-info m-1 button"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Update;
