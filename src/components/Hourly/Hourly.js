import React from "react";
import { Container } from "react-bootstrap";
import { getHours } from "../../helpers/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hrresponsive } from "../../helpers/carousel";
import { ReactComponent as Drop } from "../../assets/drop.svg";

const Hourly = ({ hourly, timezone, unit }) => {
  return (
    <Container fluid className="my-3 px-3">
      <span className="font_l">HOURLY</span>
      <Carousel responsive={hrresponsive} className="mt-3 border-detail" centerMode={true} removeArrowOnDeviceType={'smallScreen'}>
        {hourly.map((hour) => (
          <div key={hour.dt}>
            <img
              className="carousel-img"
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt="weather"
            />
            <div className="font_m">{Math.round(hour.temp * 10) / 10}&deg;</div>
            <div className="font_xs" style={{height: "45px"}}>{hour.weather[0].description}</div>
            <div>
              <Drop /> {hour.pop * 100}%
            </div>
            <div className="border-detail-bottom" style={{height: "50px"}}>
              <span className="mx-1" style={{transform: `rotate(${hour.wind_deg}deg)`,
            display: 'inline-block'}}>↑</span>{hour.wind_speed} {unit}
            </div>
            <b>{getHours(hour.dt, timezone)}:00</b>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Hourly;
