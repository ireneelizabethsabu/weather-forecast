import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DailyCard from './DailyCard';
import './Daily.css';

const Daily = ({ weather }) => {
    return (
        weather && (
            <Container fluid className="px-4">
                <span className="font_l">DAILY</span>
                <Row>
                {weather.daily.map(day => 
                    <DailyCard key={day.dt} day={day}/>
                )}
                </Row>
            </Container>)
    );
}

export default Daily;

