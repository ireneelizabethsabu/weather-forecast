import React from 'react'
import { useWeatherDetails } from '../../context';

const Today = () => {
    const {weather,setCoor} = useWeatherDetails();
    console.log(weather);
    return(
        <div>hii{weather.lat}</div>
    );
}

export default Today;