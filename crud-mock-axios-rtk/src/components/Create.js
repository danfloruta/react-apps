import React, { useState } from "react";
import "./Create.css";

import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/table-slice";
import { postDataToApi } from "../store/table-actions";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const items = useSelector((state) => state.table.items);
  const dispatch = useDispatch();
  const addItemToApiHandler = (e) => {
    e.preventDefault();
    dispatch(
      postDataToApi({
        id: items.length,
        name: name,
        age: age,
        email: email,
        address: address,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="title">
        <h1>Create</h1>
      </div>
      <form onSubmit={addItemToApiHandler}>
        <div className="name detail">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="age detail">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="email detail">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="address detail">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="submit">
          <button
            style={{ color: "white" }}
            className="btn btn-info m-1 button"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
