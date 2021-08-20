import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import { WeatherProvider } from '../context';
import Search from './Search/Search';
import Today from './Today/Today';

export default class Home extends Component {
    render(){
        return(
            <WeatherProvider>
                <Search/>
                <Row>
                    <Col><Today/></Col>
                </Row>
            </WeatherProvider>
        );
    }
}