import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import MapComponent from "../components/MapComponent/MapComponent";
import EarthQuake from "../components/EarthQuake";

const Home = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [magnitude, setMagnitude] = useState("all");
  const [timeframe, setTimeFrame] = useState("hour");

  const fetchData = (url) => {
    try {
      axios.get(url).then((res) => {
        console.log(res.data.features);
        setEarthquakes(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${timeframe}.geojson`
    );
  }, [magnitude, timeframe]);
  return (
    <div className="homeContainer">
      <div className="buttons">
        <div className="btns-timeframe">
          <button className="button" onClick={() => setTimeFrame("hour")}>
            Past Hour
          </button>
          <button className="button" onClick={() => setTimeFrame("day")}>
            Past Day
          </button>
          <button className="button" onClick={() => setTimeFrame("week")}>
            Past Week
          </button>
          <button className="button" onClick={() => setTimeFrame("month")}>
            Past Month
          </button>
        </div>
        <div className="btns-magnitude">
          <select
            className="button"
            onChange={(e) => setMagnitude(e.target.value)}
            name="magnitude"
            id="magnitude"
          >
            <option value="all">All</option>
            <option value="1.0">1.0+</option>
            <option value="2.5">2.5+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>
      </div>
      <div className="home">
        <MapComponent earthquakes={earthquakes} />
        <div className="quakesContainer">
          {earthquakes?.features?.map((quake, i) => (
            <EarthQuake
              key={i}
              mag={quake?.properties?.mag}
              title={quake?.properties?.title}
              place={quake?.properties?.place}
              time={quake?.properties?.time}
              status={quake?.properties?.status}
              tsunami={quake?.properties?.tsunami}
              detail={quake?.properties?.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
