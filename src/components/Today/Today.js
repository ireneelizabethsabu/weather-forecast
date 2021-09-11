import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import { getDirection } from "../../helpers";
import "./Today.css";

const Today = (props) => {
    const { current, units, setUnits,location } = props;
    
    return (
        current && (
            <Jumbotron className="pb-5 mb-0">
                <Row className="font_l justify-content-center mb-3">
                    {location.city}, {location.country} <span className="text-uppercase ml-1"> ({location.statecode})</span>
                </Row>
                <Row className="font_xxl justify-content-center">
                    <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="weather" />
                    <span>{current.temp}&deg;</span>
                    <div className="font_l mx-2">
                        <span className={`${units.unit === 'metric' ? 'selected' : ''} active-unit px-2`} onClick={() => setUnits({
                            unit: "metric",
                            speed: "m/s"
                        })}>C</span>
                        <br />
                        <span className={`${units.unit === 'imperial' ? 'selected' : ''} active-unit px-2`} onClick={() => setUnits({
                            unit: "imperial",
                            speed: "miles/h"
                        })}>F</span>
                    </div>
                </Row>
                <Row className="justify-content-center text-capitalize">
                    <span className="font_m">{current.weather[0].description}</span>
                </Row>
                <Row className="justify-content-center pt-1">
                    <span className="px-2 text-center">Feels like <br /> {current.feels_like}&deg;</span>
                    <span className="px-2 text-center">Wind Speed<br /> {current.wind_speed} {units.speed} {getDirection(current.wind_deg)}</span>
                    <span className="px-2 text-center">Visibility <br /> {current.visibility} m</span>
                    <span className="px-2 text-center">Pressure <br /> {current.pressure} hPa</span>
                </Row>
            </Jumbotron>
        )
    );
};

export default Today;
