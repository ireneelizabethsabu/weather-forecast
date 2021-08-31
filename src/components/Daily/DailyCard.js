import React from "react";
import { Col } from "react-bootstrap";
import moment from 'moment-timezone';
import './Daily.css'

const DailyCard = ({ day, daydetails, setDaydetails }) => {
  var date = moment(day.dt * 1000);
  return (
    <Col
      className={`text-center day-card my-1 p-2 ${daydetails === day ? "selected" : ""}`}
      onClick={() => {
        setDaydetails(day);
      }}
    >
      <div className="font_s">
        {date.format('ddd')} {date.date()}
      </div>
      <img
        className="carousel-img"
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="weather"
      />
      <div>
        <span className="font_s pr-2">{Math.round(day.temp.max * 10) / 10}&deg;</span>
        <span className="font_xs">{Math.round(day.temp.min * 10) / 10}&deg;</span>
      </div>
      <div className="text-capitalize">{day.weather[0].description}</div>
    </Col>
  );
};

export default DailyCard;
