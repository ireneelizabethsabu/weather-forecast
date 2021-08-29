import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import Today from "./Today/Today";
import Daily from './Daily/Daily';
import axios from "axios";
import Hourly from "./Hourly/Hourly";

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
    weather && (<> 
      <Search setCoor={setCoor}/>
      <Today current={weather.current} units={units} setUnits={setUnits}/>
      <Hourly hourly={weather.hourly} timezone={weather.timezone} unit={units.speed}/>
      <Daily daily={weather.daily} timezone={weather.timezone} unit={units.speed}/>
    </>)
  );
};

export default Home;
