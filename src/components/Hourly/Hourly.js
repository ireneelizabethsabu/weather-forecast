import React, { useState } from "react";
import { Container,Badge,Col } from "react-bootstrap";
import { getHours } from "../../helpers/index";
import "react-multi-carousel/lib/styles.css";
import Summary from "./Summary";
import Detail from "./Detail";

const Hourly = ({ hourly, timezone, unit }) => {
  const [btn, setBtn] = useState("details");
  return (
    <Container fluid className="my-4 px-5">
      <Col className="px-0 d-flex justify-content-between">
        <span className="font_l">HOURLY</span>
        <span>
        <Badge variant="dark" className="mr-3" onClick={() => setBtn("details")}>Details</Badge>
        <Badge variant="dark" onClick={() => setBtn("summary")}>Summary</Badge>
        </span>
      </Col>
      {btn === "details" ? 
        <Detail hourly={hourly} timezone={timezone} unit={unit}/>
       : 
        <Summary
          time={hourly.slice(0, 25).map((hr) => getHours(hr.dt, timezone) + ":00")}
          temp={hourly.slice(0, 25).map((hr) => hr.temp)}
        />
      }
    </Container>
  );
};

export default Hourly;
