import React, { useState, useEffect } from "react";
import axios from "axios";
import MapComponent from "../components/MapComponent/MapComponent";
import { useLocation, useNavigate } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { state } = useLocation();
  const [earthquake, setEarthquake] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [tsunami, setTsunami] = useState("");
  const [mag, setMag] = useState("");
  const navigate = useNavigate();

  const fetchEQ = (url) => {
    axios.get(url).then((res) => {
      setTitle(res?.data?.properties?.title);
      setPlace(res?.data?.properties?.place);
      setTime(res?.data?.properties?.time);
      setStatus(res?.data?.properties?.status);
      setTsunami(res?.data?.properties?.tsunami);
      setMag(res?.data?.properties?.mag);
      setEarthquake(res.data);
      console.log(res);
    });
  };
  console.log(state.detail);

  useEffect(() => {
    try {
      fetchEQ(state.detail);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const applyColor = () => {
    if (mag <= 2.5) {
      return "green";
    }
    if (mag >= 2.5 && mag < 4.5) {
      return "rgb(173, 173, 21)";
    }
    if (mag >= 4.5) {
      return "red";
    }
  };

  return (
    <>
      <button className="btn btn-warning button" onClick={() => navigate("/")}>
        Back Home
      </button>
      <div className="containmentBoth">
        <div className="detailsContainer">
          <div className="detail">
            <h4>Title:</h4>
            <p>{title}</p>
          </div>
          <div className="detail">
            <h4>Place:</h4>
            <p>{place}</p>
          </div>
          <div className="detail">
            <h4>Time:</h4>
            <p>{Date(time)}</p>
          </div>
          <div className="detail">
            <h4>Status:</h4>
            <p>{status}</p>
          </div>
          <div className="detail">
            <h4>Tsunami:</h4>
            <p>{tsunami}</p>
          </div>
        </div>
        <div className="mag-map">
          <div style={{ background: applyColor() }} className="mag detail">
            <h4>Magnitude:</h4>
            <p>{mag}</p>
          </div>
          <div className="map">
            <MapComponent earthquakes={earthquake} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
