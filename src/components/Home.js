import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import Today from "./Today/Today";
import Daily from './Daily/Daily';
import Hourly from "./Hourly/Hourly";
import { getWeather } from "../api/Api";
import Footer from "./Footer/Footer";

const Home = () => {
  const [coor, setCoor] = useState({
    lat: 51.509865,
    lon: -0.118092,
  });
  const [units, setUnits] = useState({
    unit: "metric",
    speed: "m/s"
  });
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({
    city: 'London',
    country: 'United Kingdom',
    statecode: 'ENG'
  })

  useEffect(() => {
    (async () => {
      try {
        const response = await getWeather(coor.lat,coor.lon,units.unit)
        setWeather(response.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [coor,units]);

  return (
    <div>
      <Search setCoor={setCoor} setLocation={setLocation}/>
      {weather && (<> 
        <Today location={location} current={weather.current} units={units} setUnits={setUnits}/>
        <Hourly hourly={weather.hourly} timezone={weather.timezone} unit={units.speed}/>
        <Daily daily={weather.daily} timezone={weather.timezone} unit={units.speed}/>
      </>)}
      <Footer/>
    </div>
  );
};

export default Home;
