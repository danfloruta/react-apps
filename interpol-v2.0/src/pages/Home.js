import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromApi, getDataSwitchApi } from "../store/list-actions";
import { Link } from "react-router-dom";

const Home = () => {
  const list = useSelector((state) => state.list.list);
  const totalWanted = useSelector((state) => state.list.totalWanted);
  const [color, setColor] = useState("");
  console.log(list);

  // pages:
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(40);
  const totalPages = Math.ceil(totalWanted / resultsPerPage);

  let pagination = [];
  let i = 1;

  while (i <= totalPages) {
    if (i <= 1 || i >= totalPages - 2 || (i >= page - 1 && i <= page + 1)) {
      pagination.push(<a>{i}</a>);
      i++;
    } else {
      pagination.push(<div>...</div>);
      i = i < page ? page - 1 : totalPages - 2;
    }
  }
  // end of pages

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromApi(page));
    // console.log(list);
    if (color) {
      dispatch(getDataSwitchApi(color, page));
    }
  }, [dispatch, page, color]);

  const switchColorHandler = (color) => {
    dispatch(getDataSwitchApi(color, page));
    setResultsPerPage(20);
    setColor(color);
  };

  const allListHandler = () => {
    setColor("");
    dispatch(getDataFromApi(page));
  };

  return (
    <div className="home">
      <div className="choose-n-total">
        <div className="select-list">
          <button
            onClick={() => switchColorHandler("red")}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => switchColorHandler("yellow")}
            className="btn btn-warning"
          >
            Yellow
          </button>
          <button onClick={() => allListHandler()} className="btn btn-info">
            All
          </button>
        </div>
        <h4>Total: {totalWanted}</h4>
      </div>
      <div className="list-map">
        {list[0]?.map((item, i) => (
          <Card
            key={i}
            // color={color}
            color={
              item?._links?.thumbnail?.href?.includes("red") ? "red" : "yellow"
            }
            fullName={`${item.forename} ${item.name}`}
            birthdate={item.date_of_birth}
            nationalities={item.nationalities}
            photo={item._links.thumbnail?.href}
            self={item?._links?.self?.href}
          />
        ))}
      </div>
      <div className="pagination-div">
        <button
          className="btn btn-warning"
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Previous
        </button>
        {pagination.map((page, i) => (
          <h5 key={i} onClick={() => setPage(i + 1)}>
            {page}
          </h5>
        ))}
        <button
          className="btn btn-warning"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
