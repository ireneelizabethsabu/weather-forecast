import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import "./Today.css";

const Today = ({ weather, unit, setUnit }) => {
  
  return (
    weather && (
      <Jumbotron>
        <Row className="temp justify-content-center">
          <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="weather"/>
          <span>{weather.current.temp}</span>
          <div className="unit mx-2">
            <span className={`${unit === 'metric' ? 'selected' : ''} active-unit px-2`} onClick={() => setUnit("metric")}>C</span>
            <br />
            <span className={`${unit === 'imperial' ? 'selected' : ''} active-unit px-2`} onClick={() => setUnit("imperial")}>F</span>
          </div>
        </Row>
      </Jumbotron>
    )
  );
};

export default Today;
