import React from 'react'
import Carousel from "react-multi-carousel";
import { hrresponsive } from "../../helpers/carousel";
import { ReactComponent as Drop } from "../../assets/drop.svg";
import { getHours } from "../../helpers/index";

const Detail = ({hourly,timezone,unit}) => {
    return (
        <Carousel responsive={hrresponsive} className="mt-3 mx-2 border-detail" centerMode={true} removeArrowOnDeviceType={'smallScreen'}>
        {hourly.slice(0,25).map((hour) => (
          <div key={hour.dt}>
            <img
              className="carousel-img"
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt="weather"
            />
            <div className="font_m">{Math.round(hour.temp * 10) / 10}&deg;</div>
            <div className="font_xs" style={{height: "45px",letterSpacing: '0.5px'}}>{hour.weather[0].description}</div>
            <div>
              <Drop /> {Math.round(hour.pop * 1000)/ 10}%
            </div>
            <div className="border-detail-bottom" style={{height: "50px"}}>
              <span className="mx-1" style={{transform: `rotate(${hour.wind_deg}deg)`,
            display: 'inline-block'}}>↑</span>{hour.wind_speed} {unit}
            </div>
            <b>{getHours(hour.dt, timezone)}:00</b>
          </div>
        ))}
      </Carousel>
    )
}

export default Detail;