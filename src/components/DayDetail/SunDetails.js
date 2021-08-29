import React from 'react';
import { Col } from 'react-bootstrap'; 
import {ReactComponent as Sunrise} from '../../assets/sunrise.svg';
import {ReactComponent as Sunset} from '../../assets/sunset.svg';
import {getHours,getMinutes} from '../../helpers/index';

const SunDetails = ({sunrise,sunset,timezone}) => {
    return(
        <Col className="pl-0 mb-3" >
            <div className="font_s border-detail py-2">SUNRISE</div>
            <Sunrise/>
            <span className="ml-3 font_m">{getHours(sunrise,timezone)} : {getMinutes(sunrise,timezone)}</span>
            <div className="font_s py-2">SUNSET</div>
            <Sunset/>
            <span className="ml-3 font_m">{getHours(sunset,timezone)} : {getMinutes(sunset,timezone)}</span>
        </Col>
    )
}

export default SunDetails;