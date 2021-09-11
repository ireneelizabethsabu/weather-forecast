import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { progressbar } from "./progressBar";
import SunDetails from "./SunDetails";
import MoonDetails from "./MoonDetails";
import { getuvIndex, getDirection } from "../../helpers";

const DayDetail = ({ daydetails, timezone, unit }) => {
  return (
    daydetails && (
      <div>
        <div className="font_l my-3">Day Details</div>
        <Row className="mx-0" lg={4} md={3} xs={2} sm={2}>
          <SunDetails
            sunrise={daydetails.sunrise}
            sunset={daydetails.sunset}
            timezone={timezone}
          />
          <MoonDetails
            rise={daydetails.moonrise}
            set={daydetails.moonset}
            timezone={timezone}
            phase={daydetails.moon_phase}
          />
          <Col className="pl-0">
            <div className="border-detail"></div>
            <Row>
              <Col>
                <div className="font_s py-2">Humidity</div>
                <div style={{ width: 100, height: 100 }} className="mb-3">
                  <CircularProgressbar
                    styles={progressbar}
                    value={daydetails.humidity}
                    text={`${daydetails.humidity}%`}
                    strokeWidth="6" 
                  />
                </div>
              </Col>
              <Col>
                <div className="font_s py-2">UV INDEX</div>
                <div style={{ width: 100, height: 100 }} className="mb-3">
                  <CircularProgressbarWithChildren
                    styles={progressbar}
                    value={daydetails.uvi}
                    strokeWidth="6"
                    maxValue="10"
                  >
                    <div style={{ marginTop: -5 }} className="text-center">
                      {daydetails.uvi} <br /> {getuvIndex(daydetails.uvi)}
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="font_s py-2">Precipitation</div>
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    styles={progressbar}
                    value={daydetails.pop * 100}
                    text={`${daydetails.pop * 100}%`}
                    strokeWidth="6"
                  />
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col className="pl-0">
            <div className="border-detail"></div>

            <Col>
              <div className="font_s py-2">Pressure</div>
              <div className="text-center font_m">
                {daydetails.pressure} hPa
              </div>
            </Col>
            <Col>
              <div className="font_s py-2">Wind Speed</div>
              <div className="text-center font_m">
                {daydetails.wind_speed} {unit}{" "}
              </div>
              <div className="text-center font_m">
                <span
                  className="mx-1"
                  style={{
                    transform: `rotate(${daydetails.wind_deg}deg)`,
                    display: "inline-block",
                  }}
                >
                  ↑
                </span>
                {getDirection(daydetails.wind_deg)}
              </div>
            </Col>
            <Col>
              <div className="font_s py-2">Feels Like</div>
              <div className="text-center font_m">
                {daydetails.feels_like.day}&deg;
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    )
  );
};

export default DayDetail;
