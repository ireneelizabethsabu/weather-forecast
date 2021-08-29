import React from 'react';
import { Col } from 'react-bootstrap'; 
import {ReactComponent as Moonrise} from '../../assets/moonrise.svg';
import {ReactComponent as Moonset} from '../../assets/moonset.svg';
import {getHours,getMinutes,getmoonPhase} from '../../helpers/index';

const MoonDetails = ({rise,set,phase,timezone}) => {
    return(
        <Col className="pl-0 mb-3">
            <div className="font_s border-detail py-2">Moonrise</div>
            <Moonrise/>
            <span className="ml-3 font_m">{getHours(rise,timezone)} : {getMinutes(rise,timezone)}</span>
            <div className="font_s py-2">Moonset</div>
            <Moonset/>
            <span className="ml-3 font_m">{getHours(set,timezone)} : {getMinutes(set,timezone)}</span>
            <div className="font_s py-2">Moon Phase</div>
            <span>{getmoonPhase(phase)}</span>
        </Col>
    )
}

export default MoonDetails;