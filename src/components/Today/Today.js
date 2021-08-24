import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import "./Today.css";

const Today = ({ weather, units, setUnits }) => {

    return (
        weather && (
            <Jumbotron className="py-4">
                <Row className="font_xxl justify-content-center">
                    <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="weather" />
                    <span>{weather.current.temp}&deg;</span>
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
                <Row className="justify-content-center">
                    <span className="font_m">{weather.current.weather[0].description}</span>
                </Row>
                <Row className="justify-content-center pt-1">
                    <span className="px-2 text-center">Feels like <br /> {weather.current.feels_like}&deg;</span>
                    <span className="px-2 text-center">Wind <br /> {weather.current.wind_speed} {units.speed}</span>
                    <span className="px-2 text-center">Visibility <br /> {weather.current.visibility} m</span>
                    <span className="px-2 text-center">Pressure <br /> {weather.current.pressure} hPa</span>
                </Row>
            </Jumbotron>
        )
    );
};

export default Today;
