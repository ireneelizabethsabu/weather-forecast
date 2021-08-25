import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DailyCard from "./DailyCard";
import "./Daily.css";
import DayDetail from "../DayDetail/DayDetail";

const Daily = ({ daily,timezone,unit}) => {
  const [daydetails, setDaydetails] = useState(daily[0]);
  
  return (
    daily && (
      <Container fluid className="my-3 px-4">
        <span className="font_l">DAILY</span>
        <Row>
          {daily.map((day) => (
            <DailyCard key={day.dt} day={day} daydetails={daydetails} setDaydetails={setDaydetails} />
          ))}
        </Row>
        <DayDetail daydetails={daydetails} timezone={timezone} unit={unit}/>
      </Container>
    )
  );
};

export default Daily;
