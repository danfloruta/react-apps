import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteDataFromApi, getDataFromApi } from "../store/table-actions";

const Table = () => {
  const items = useSelector((state) => state.table.items);
  const dispatch = useDispatch();
  // console.log(items);

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  const deleteItemFromServer = (id) => {
    dispatch(deleteDataFromApi(id));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="header">
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            return (
              <tr key={i} className="body">
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <div className="buttons">
                    <Link
                      to="/update"
                      className="btn btn-primary m-1"
                      state={{
                        id: item.id,
                      }}
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteItemFromServer(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
