import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Search from "./Search/Search";
import Today from "./Today/Today";
import axios from "axios";

const Home = () => {
  const [coor, setCoor] = useState({
    lat: "51.509865",
    lon: "-0.118092",
  });
  const [units, setUnits] = useState({
    unit: "metric",
    speed: "m/s"
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_WEATHER_URL,{
          params: {
            lat: coor.lat,
            lon: coor.lon,
            units: units.unit,
            appid: process.env.REACT_APP_APIKEY
          }
        });
        setWeather(response.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [coor,units]);

  return (
    <>
      <Search />
      <Row>
        <Col>
          <Today weather={weather} units={units} setUnits={setUnits}/>
        </Col>
      </Row>
    </>
  );
};

export default Home;
