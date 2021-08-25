import React, { useState } from "react";
import { Col } from "react-bootstrap";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const DailyCard = ({ day, daydetails, setDaydetails }) => {
  var date = new Date(day.dt * 1000);
  return (
    <Col
      className={`text-center day-card m-2 p-2 ${daydetails === day ? "selected" : ""}`}
      onClick={() => {
        setDaydetails(day);
      }}
    >
      <div className="font_s">
        {weekDays[date.getDay()]} {date.getDate()}
      </div>
      <img
        className="carousel-img"
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="weather"
      />
      <div>
        <span className="font_s pr-2">{day.temp.max}&deg;</span>
        <span className="font_xs">{day.temp.min}&deg;</span>
      </div>
      <div>{day.weather[0].description}</div>
    </Col>
  );
};

export default DailyCard;
