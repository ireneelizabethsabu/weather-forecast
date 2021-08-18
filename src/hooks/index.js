import { useState, useEffect } from "react";

export const useWeatherinfo = (lat = "51.509865", lon = "-0.118092") => {
  const [weather, setWeather] = useState({});
  
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
  useEffect(() => {
    fetch(url)
      .then((res) => console.log('3333333333333333'+res)) 
  }, [url]);
  return { weather };
};
