import React, { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import DailyCard from "./DailyCard";
import "./Daily.css";
import DayDetail from "../DayDetail/DayDetail";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {dailyresponsive} from '../../helpers/carousel';

const Daily = ({ daily,timezone,unit}) => {
  const [daydetails, setDaydetails] = useState(daily[0]);
  useEffect(() => {
    setDaydetails(daily[0])
  }, [daily])

  return (
    daily && (
      <Container  fluid className="my-3 px-5">
        <span className="font_l">DAILY</span>
        <Carousel responsive={dailyresponsive} removeArrowOnDeviceType={['smallScreen','superSmallScreen']}>
          {daily.map((day) => (
            <DailyCard key={day.dt} day={day} daydetails={daydetails} setDaydetails={setDaydetails} />
          ))}
        </Carousel>
        <DayDetail daydetails={daydetails} timezone={timezone} unit={unit}/>
      </Container>
    )
  );
};

export default Daily;
